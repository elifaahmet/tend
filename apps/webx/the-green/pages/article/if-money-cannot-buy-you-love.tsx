import React from 'react';
import {Layout} from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';


import ArticleH4 from '../../components/elements/article-h4';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import UL from '../../components/elements/article-ul';
import OL from '../../components/elements/article-ol';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Article = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const imageUrl = usePrefixedWithBasePath(hero.image);

  return (
    <Page title={hero.title} description={hero.body} image={hero.image} host={host} fb_app_id={fb_app_id}>
      <Layout bg="defaultGreen">
        <Hero
          categories={meta.categories}
          member={meta.member}
          title={hero.title}
          body={hero.body}
          img={imageUrl}
          host={host}
        />
      </Layout>

      <Layout bg="offWhite">
        <TwoColDivided
          tldr="Just like everything else, dating has changed over the last 100 years - imagine explaining “swiping right” twenty years ago! But no matter the decade, going out on dates still makes a dent in your wallet. As dating continues to evolve through the pandemic, we see a silver lining: getting to spend quality time with your honey, while spending less money.">
          <P>
            Hot take: money <i>can</i> buy you love.
          </P>

          <P>
            And when you’re dating, love can feel expensive.
          </P>

          <P>
          It doesn’t matter if you’re dating someone new or you have a regular date night out with your spouse of many years. At the end of the evening, the bill will always come—and those costs can really add up.
          </P>

          <P>
            Here are some interesting historical facts about the cost of dating—from 100 years ago, to just a couple of years ago, to today.
          </P>

          <ArticleH4>
            The cost of dating 100 years ago
          </ArticleH4>

          <P>
            Before 1920, dating was all about courtship. You only dated to get married. And you always needed an escort. When the Roaring Twenties came along, dating was as much about having fun as it was finding a partner.
          </P>

          <P>
            Back then, date night was pretty affordable. <A href="https://www.countryliving.com/life/g33398396/what-things-cost-100-years-ago/?slide=8">Two movie tickets</A> cost 30 cents, or $4 by today’s standards. Dinner for two at a diner would add up to around 70 cents, or <A href="https://www.usinflationcalculator.com/">$9 today</A>.
          </P>

          <P>
            Not everything was cheaper though: in 1920, <A href="https://inflationdata.com/articles/inflation-adjusted-prices/inflation-adjusted-gasoline-prices/">gas was 30 cents per gallon</A>, which with inflation is just under $4 today. In general, that’s more than most of the country is paying today.
          </P>
        </TwoColDivided>
        <FullWidth>
          <ArticleH4>The cost of dating in 2018-19: all about location</ArticleH4>

          <P>In the years leading up to COVID, the national average for a “typical” date in the US was about <A href="https://www.usatoday.com/story/money/personalfinance/budget-and-spending/2018/08/10/average-cost-of-date-in-each-state/37292105/">$102</A>. That included dinner for two, one bottle of wine, and two movie tickets. Add in a 5-mile taxi or Uber ride, and the cost rose to about <A href="https://www.elitesingles.com/mag/relationship-advice/date-night-cost">$117</A>.</P>

          <P>But ultimately, <A href="https://www.usatoday.com/story/money/2019/08/09/can-you-buy-love-average-cost-of-a-date-each-state/39931021/">the cost of a night out depended on your state:</A></P>

          <UL>
            <li>Date night in South Dakota was listed at just over $38. After that, the least expensive states were North Dakota, Nebraska and Iowa.</li>
            <li>But if you lived in New York (particularly NYC) during this time, one date could cost you upwards of $300. The three next most expensive states for dating were New Jersey, Connecticut, and California.</li>
          </UL>

          <ArticleH4>COVID makes dating a bit more affordable—for now</ArticleH4>

          <P>Fast forward to late 2020. Now, in the middle of a pandemic, there are fewer options for a night out with your bae, and far more safety concerns.</P>

          <P>As a result, more people are meeting virtually or hosting date at home (and saving a lot of money in the process):</P>

          <UL>
            <li>For a virtual date over video chat, all you need to pay for is your data plan—which you likely already have covered.</li>
            <li>For a quiet night in, you can save even more money by making dinner yourself and buying a bottle of wine at the store. Throw on your streaming service of choice (a monthly subscription costs roughly the same as one movie ticket), and you’re set.</li>
          </UL>

          <ArticleH4>Finding love online = less money spent dating</ArticleH4>

          <P>We can’t be sure what’s to come in the dating realm. Once COVID is no longer frontpage news, will people return to dating like they did in 2018-19? Or stay in more? And how will this affect everyone’s wallets?</P>

          <P>Regardless, here’s something to mull over: <A href="https://time.com/9562/online-dating-saves-money/">you can save major dating dollars if you meet someone online versus in “real life.”</A></P>

          <P>From meeting online to the first date to walking down the aisle, the average timespan is 18.5 months. But if you meet someone outside the digital world (like at work or through friends), that average time is about 42 months.</P>

          <P>Let’s do a bit of math. Using the lower-end pre-pandemic average mentioned above for a typical US date (dinner, wine, and a movie) of $102:</P>

          <UL>
            <li>If you meet someone online and go out once a week for 18.5 months, you’ll spend about $7,500 in total.</li>
            <li>If you meet someone outside the digital world and go out once a week at $102 for 42 months, you and your love would spend more than $17,000.</li>
          </UL>

          <ArticleH4>Date within your means</ArticleH4>

          <P>No matter the era, love comes at a cost. But you don’t need a lot of money to spend quality time with someone.</P>

          <P>It is absolutely possible to date within your means:</P>

          <OL bold>
            <li><b>Set a monthly budget for dates.</b> This will help guide your planning and ensure you’re always financially prepared.</li>

            <li><b>Don’t view “more expensive dates” as “better dates.”</b> A fancy night out is great, but dating is really about being with one another--so focus on that when figuring out what to do together.</li>

            <li><b>Research less expensive and free options.</b> Balance out the occasional expensive night out with lower-cost activities, like going hiking, taking a short road trip, or having a picnic.</li>

            <li><b>Bring cash only.</b> It’s easier to overspend when you have your credit card handy. Paying with cash will help you be more aware of--and stay within--your budget.</li>

          </OL>

          <P>Have some money-saving dating tips? Want to share your COVID love story? Or just shoot your shot at love? Hit us up in the comments below:</P>

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
  const slug = '/love-and-money';
  const id = 22;

  const categoryTopicsPromise = getCategoryTopics({ slug, id, username }, locale);
  const categoriesPromise = getCategoriesList(locale);
  const [topics, categoriesList] = await Promise.all([categoryTopicsPromise, categoriesPromise]);

  return {
    props: {
      meta: {
        categories: [
          {
            label: "#LOVEANDMONEY",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "If money can’t buy you love, why does dating cost so much?",
        body: "Dating has definitely changed over the past century. But it still makes an impact on your wallet. Check out this comparison of the cost of dating then vs now.",
        image: "/images/if-money-can-not-buy-you-love.jpeg"
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

export default Article;
