import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import FullWidth from '../../components/modules/article/full-width';

import P from '../../components/elements/article-p';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const heroImageUrl = usePrefixedWithBasePath(hero.image);

  return (
    <Page title={hero.title} description={hero.body} image={hero.image} host={host} fb_app_id={fb_app_id}>
      <Layout bg="defaultGreen">
        <Hero
          categories={meta.categories}
          member={meta.member}
          title={hero.title}
          body={hero.body}
          img={heroImageUrl}
          host={host}
        />
      </Layout>

      <Layout bg="offWhite">
        <FullWidth>
          <P>At 20% underbanked and 10% unbanked all together, the U.S. Hispanic community faces some serious personal finance challenges.</P>

          <P>And those challenges are half of the reason I decided to join Tend.</P>

          <P>The other half?</P>

          <P>The fact that I grew up in Mexico and have felt the effects of these challenges and have faced the steep learning curve that comes with immigrating to a country with an entirely different credit system.</P>

          <P>I began my professional career working in the financial industry in Mexico. Then, about 6 years ago I made the decision to study an MBA in Boston. And I’ve been living in this amazing country ever since.</P>

          <P>After school, I had the opportunity to go to Los Angeles and work with Tu Eres America, a company that provides Financial and Real Estate services to empower the U.S. Hispanic community. And that’s really where I became aware of the scope of challenges and difficulties for Hispanic-Americans to find financial institutions to fit our unique needs. But that experience is also what led me to my current role.</P>

          <P>I believe a mindful focus on intent and impact is required for fintech companies. And that means recognizing the financial challenges and addressing the barriers to accessing financial services faced by minority communities.</P>

          <P>And that’s exactly what we’re doing at Tend. We work hard everyday to help hispanics face unique challenges like preventing them from building a secure financial future through mobile-first financial services in your preferred language, savings tools, simple access to credit, low-cost international transfers, access to financial education…we’re making it easier for underserved communities to save, spend, give, borrow, and take control of their money.</P>

          <P>I’m dedicated to serving the Hispanic community because I’m a proud part of the Hispanic community.</P>

          <P>I always remember my roots as a Mexican immigrant, and I see my success as an opportunity to help others around me have a better financial future.</P>

          <div style={{ height: 64 }}/>
        </FullWidth>
      </Layout>

      <RelatedPosts categories={relatedPosts.categories} topics={relatedPosts.topics} postCategory={meta.categories[0]}/>
    </Page>
  )
}

export const getServerSideProps = withSession(async function ({ req, locale }) {
  const user = req.session.get('user');
  const username = user?.username || 'system';
  const slug = '/hispanic-heritage';
  const id = 24;

  const categoryTopicsPromise = getCategoryTopics({ slug, id, username }, locale);
  const categoriesPromise = getCategoriesList(locale);
  const [topics, categoriesList] = await Promise.all([categoryTopicsPromise, categoriesPromise]);

  return {
    props: {
      meta: {
        categories: [
          {
            label: "#MEXICANHERITAGE",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "Remembering My Roots",
        body: "By Ana Carolina Treviño Tejeda, Head of Hispanic Marketing at Tend.",
        image: "/images/ana.png"
      },
      relatedPosts: {
        topics,
        categories: categoriesList,
      },
      host: req.headers.host,
      fb_app_id: process.env.FB_APP_ID,
    }
  }
});


export default Main;

