import React from 'react';
import {useGetBasePath} from '../../hooks/usePrefixedWithBasePath';
import TierHero from '../../components/modules/article/tier-hero';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import {getCategoryTopics, getCategoriesList} from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';
import TwoColumnBody from "../../components/modules/article/two-column-body";
import BoldMessage from "../../components/modules/article/bold-message";
import {bundleMDX} from 'mdx-bundler';
import {getMDXComponent} from 'mdx-bundler/client';
import fs from "fs";
import path from 'path';
import {componentOverrides} from "../../utils/mdx-components";



export const Article = (props) => {
  const {meta, host, fb_app_id, sectionsAndComponents} = props;
  const basePath = useGetBasePath();

  const components = React.useMemo(() => sectionsAndComponents.map(section => {

    const sectionWithParsedComponents = {};

    Object.keys(section).forEach(key => {
      sectionWithParsedComponents[key] = key === 'data' ? section[key] : (section[key] ? getMDXComponent(section[key]) : () => <span />);
    });

    return sectionWithParsedComponents;
  }), [sectionsAndComponents]);

  const heroData = components.filter(({component, data, ...rest}, i) => data.section_type === "hero")[0].data;
  return (
    <Page title={meta.pageTitle || heroData.title} description={meta.pageDescription || heroData.description} image={meta.image || `/images/${heroData.hero_image}`} host={host} fb_app_id={fb_app_id}>


      {components.map(({component, data, ...rest}, i) => {
        const Component = component;
        const previousComponentData = i > 0 ? components[i - 1].data : {};
        let children;
        switch (data.section_type) {
          case 'hero':
            children = (
              <TierHero
                categories={meta.categories}
                member={meta.member}
                title={data.title}
                body={data.description}
                author={data.author}
                img={basePath + `/images/${data.hero_image}`}
                readDuration={data.read_duration}
                imageCredit={data.hero_image_credit}
                host={host}
              />
            )
            break;


          case 'two_column_body':

            if (rest.right_upper_text && rest.right_upper_text) {
              // eslint-disable-next-line
              const LeftContent = rest.left_text;
              // eslint-disable-next-line
              const RightContent = rest.right_upper_text;
              children = (<TwoColumnBody
                firstColumnContent={<LeftContent components={componentOverrides}/>}
                rightUpperContent={<RightContent components={componentOverrides}/>}
                quoteText={data.quote_text}
                separatorLineColor={data.separator_line_color}
                layoutBgColor={data.layout_bg_color}
                rightColumnExtraPadding={previousComponentData.push_size_to_next_components_right_column_content}
                leftColumnExtraPadding={previousComponentData.push_size_to_next_components_left_column_content}
              />)
            } else {
              children = (<TwoColumnBody
                firstColumnContent={<Component components={componentOverrides}/>}
                quoteText={data.quote_text}
                TLDRText={data.tldr_text}
                TLDRBgColor={data.tldr_bg_color}
                separatorLineColor={data.separator_line_color}
                layoutBgColor={data.layout_bg_color}
                rightColumnExtraPadding={previousComponentData.push_size_to_next_components_right_column_content}
                leftColumnExtraPadding={previousComponentData.push_size_to_next_components_left_column_content}
              />)
            }

            break;


          case 'bold_message':
            children = (<BoldMessage messageText={data.bold_message_text} messageAuthor={data.bold_message_author}
                                     bg={data.background_color} imageSrc={data.image_src ? basePath + `/images/${data.image_src}` : undefined} imageCredit={data.image_credit} />)
            break;


          case 'related_posts':
            children = (<RelatedPosts categories={data.categories} topics={data.topics}
                                      postCategory={meta.categories[0]}/>)
            break;


          default:
            children = undefined
        }

        return (<div key={data.section_type + i}>
          {children}
        </div>)
      })}


    </Page>
  )
}

export const getServerSideProps = withSession(async function ({req, locale, params}) {
  const user = req.session.get('user');
  const username = user?.username || 'system';

  const allCategories = await getCategoriesList(locale);

  let postCategories = [];

  // Markdown and metadata read
  const cwd = process.cwd();
  const basePath = cwd.endsWith('tend') ? 'apps/webx/the-green' : '';
  const articlePath = path.join(cwd, basePath, `data/articles/${locale}/${params.slug}`);

  let metadata;
  try {
    metadata = JSON.parse(fs.readFileSync(articlePath + '/metadata.json', 'utf8'));
  } catch (e) {
    metadata = undefined;
  }


  if (!metadata) {
    return {
      props: {
        host: req.headers.host,
      },
      notFound: true
    }
  }

  const sections = metadata.sections;

  const sectionsAndComponents = [];

  for (let i = 0; i < sections.length; i++) {
    const {section, hasContent, bodyParts} = sections[i];
    if (Array.isArray(bodyParts)) {
      const sectionAndComponent = {};
      for (let j = 0; j < bodyParts.length; j++) {
        const bodyPart = bodyParts[j];
        const bundledMX = await bundleMDX({
          file: `${articlePath}/${bodyPart}-${i + 1}.mdx`,
          cwd: articlePath,
        });
        if (j === 0) {
          sectionAndComponent['data'] = bundledMX.frontmatter
        }
        sectionAndComponent[bodyPart] = bundledMX.code;
      }

      sectionsAndComponents.push(sectionAndComponent);

    } else {

      const bundledMX = await bundleMDX({
        file: `${articlePath}/${section}-${i + 1}.mdx`,
        cwd: articlePath,
      });

      const sectionData = bundledMX.frontmatter;


      if (section === 'hero') {
        postCategories = sectionData.categories.map(cat => {
          const category = allCategories.find(c => c.name === '#' + cat.replace(/ /g, ''));
          if (category) {
            category.label = cat;
          }
          return category;
        }).filter(e => !!e).map(c => ({id: c.id, slug: '/' + c.slug, label: c.label}));
      }

      sectionsAndComponents.push({
        component: hasContent ? bundledMX.code : '',
        data: sectionData
      })
    }
  }

  for(const sectionAndComponent of sectionsAndComponents) {
    if (sectionAndComponent.data.section_type === 'related_posts') {
      sectionAndComponent.data.topics = await getCategoryTopics({
        slug: postCategories[0].slug,
        id: postCategories[0].id,
        username
      }, locale);
      sectionAndComponent.data.categories = allCategories;
    }
  }

  return {
    props: {
      meta: {
        categories: postCategories,
        member: false,
        pageTitle: metadata.page_metadata.page_title,
        pageDescription: metadata.page_metadata.page_description,
        image: metadata.page_metadata.page_image ? `/images/${metadata.page_metadata.page_image}` : ''
      },
      host: req.headers.host,
      fb_app_id: process.env.FB_APP_ID,
      sectionsAndComponents
    }
  }
});


export default Article;

