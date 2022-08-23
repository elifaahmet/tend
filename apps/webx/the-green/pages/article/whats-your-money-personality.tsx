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
          <P>Increased heart rate, anxiety and breathlessness? Reader, you just might have chrometophobia, the extreme fear of money. Or perhaps you swing the other way — money addiction. Maybe these extremes seem absurd to you, and your hyper-rational regard for money. Or maybe you feel unsettled unless you're saving, or anxious unless you're spending.</P>
          <P>As many psychologists (and all married people ever) know, feelings about money come in all shapes and sizes, often at high volumes. Spendthrifts baffle investors, investors baffle debtors. We may have a common currency in this country, but how we relate to it varies wildly.</P>
          <P>These differences are hardly trivial. Therapists report that clashing feelings about money routinely top the list of reasons relationships unravel. We squabble over how much to spend, we squabble over how much we need, we squabble over how to resolve these squabbles.</P>
          <P>Unlike other concessions — fine, we'll watch "Grey’s Anatomy" tonight — surrendering to a partner's financial perspective can feel almost inconceivable. The economic lessons we absorb as children are some of the stickiest and most formative of all, and our views on money are among our most primal. They connect to our sense of self-worth, to our system of values, to our very drive for survival.</P>
          <P>Unsurprisingly, our so-called money personalities vary with culture; as with everything else, our financial habits reflect how and where we're raised. The idea of harambee, which translates as "let us all pull together," is central to Kenyan identity — indeed, it's the national motto and bespeaks a commitment to lending a hand to anyone in need. How much we sock away can also reflect deeper cultural values. Luxembourg's household savings rate was 27.4 last year, compared to Japan's 7.1. (The United States fell somewhere in between, at 16.1.)</P>
          <P>When we're raised also affects our financial sensibility. Millennials may not have had the same wealth-building opportunities as previous generations but, according to a 2019 survey, they're far better at talking about money. Indeed, Gen Y'ers are more than three times as likely to talk candidly about their finances with friends as baby boomers are.</P>
          <P>All of these ideologies might be more easily ironed out if the stakes weren't so absurdly high. According to a 2021 CNBC report, the average American is $90,460 in debt. Amortize that number across a decade's worth of financial decisions — cars, college, coffee — and that's an awful lot of chances to bicker. Does it make more sense to lease or own? Throw down for a big vacation or save for a rainy day? Give the kids an allowance or let them earn their spending money? Turn on the A/C or learn to accept a little discomfort? It's a wonder any marriage lasts beyond two mortgage cycles.</P>
          <P>So what to do? Experts say the first step is knowing thyself, and thy financial idiosyncrasies. According to the Japanese finance guru Ken Honda, the species can be broken down into seven distinct money personalities: compulsive savers, compulsive spenders, compulsive moneymakers, saver-splurgers, gamblers, worriers and those indifferent to money. Of course humans are complex, and most of us are a combination of different categories. Nevertheless, understanding your inclinations can be a strong first step in improving the way you relate to money.</P>
          <P>By understanding where we land on that spectrum — by understanding that there is a spectrum — we increase our chances for financial compatibility. Or at least some tolerable eye-rolling next time we insist on saving, or spending, those five dollars we find in our coat pocket.</P>

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
  const slug = '/personal-finance';
  const id = 17;

  const categoryTopicsPromise = getCategoryTopics({ slug, id, username }, locale);
  const categoriesPromise = getCategoriesList(locale);
  const [topics, categoriesList] = await Promise.all([categoryTopicsPromise, categoriesPromise]);

  return {
    props: {
      meta: {
        categories: [
          {
            label: "#MONEYMINDSET",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "What’s your money personality?",
        body: "Dissecting the different (and maddening) ways we all relate to money",
        image: "/images/money-personality.jpg"
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

