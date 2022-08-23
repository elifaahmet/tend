import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';

import ArticleH3 from '../../components/elements/article-h3';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import UL from '../../components/elements/article-ul';
import Group from '../../components/elements/article-group';
import Img from '../../components/elements/article-img';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const heroImageUrl = usePrefixedWithBasePath(hero.image);
  const treatYoSelfImageUrl = usePrefixedWithBasePath('/images/treat-yo-self.jpg');

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
        <TwoColDivided
          tldr="Not only can it be expensive: drinking can also rack up associated expenses like eating out, transportation, and increased healthcare costs. The good news is there are many ways to reduce your alcohol and alcohol-related spending: and reclaim significant savings. Cheers to THAT.">
            <P>There’s nothing quite like enjoying a bottle of red after a stressful day.</P>
            <P>Or buying a cold six-pack to start the weekend. Or going out for a round with your buddies.</P>
            <P>A few dollars spent here and there on alcohol may not seem like a big deal. But have you ever stopped to consider what you’re spending on drinking every week, month… over the entire year?</P>
            <P>The cost of drinking regularly can be expensive. But if you were to stop buying wine, beer and liquor—or at the very least, cut back on spending—you could reap some major savings.</P>
        </TwoColDivided>

        <FullWidth>

          <ArticleH3>How much do we spend on alcohol every year?</ArticleH3>
          <P>The Bureau of Labor Statistics estimates that Americans spend about <A href="https://www.thebalanceeveryday.com/what-lifetime-of-drinking-costs-4142309#:~:text=According%20to%20the%20Bureau%20of,over%20a%2040%2Dyear%20period.">1% of their gross annual income on alcohol</A>. Meanwhile, the <A href="https://www.thestreet.com/personal-finance/average-income-in-us-14852178">median income for a full-time worker in 2019</A> was about $49,000. Doing the math, 1% of that income would be $490 each year, $4,900 in 10 years, and almost $10,000 gone over two decades.</P>

          <P>Of course, how much you spend on alcohol varies depending on several factors. One variable is location: according to a <A href="https://247wallst.com/special-report/2019/09/11/how-much-people-spend-on-alcohol-in-22-major-american-cities/#:~:text=Depending%20on%20the%20city%2C%20the,to%20as%20much%20as%20%241%2C218">24/7 Wall Street</A> survey of 22 major metropolis cities, the spending range was $512 per person to as much as $1,218 a year.</P>

          <P>Another factor, of course, is just how much alcohol you consume.</P>

          <P>But one important thing people often forget is all the incidental costs that go along with drinking</P>

          <P>Meanwhile, don’t forget other much more serious financial burdens associated with drinking. <A href="https://www.uspm.com/impact-of-alcohol-on-health/">Excessive alcohol use can lead to health risks</A> that result in you paying more for healthcare. And if you’re caught drinking and driving, you’ll have to pay DUI fines, court fees, car repairs—and almost definitely higher life and car insurance premiums.</P>


          <ArticleH3>Raise a glass to these cost-cutting tips</ArticleH3>
          <P>Abstaining from alcohol is one way to completely and dramatically eliminate the costs of drinking—monetary and otherwise.</P>

          <P>That said, you don’t need to always abstain from alcohol to save money.</P>

          <P>You may wish to reduce your intake here and there. But there are many other ways to also bring down costs:</P>

          <UL>
            <li><b>Enjoy Happy Hour:</b> Check out which restaurants and bars near you offer a happy-hour discount on drinks and apps.</li>
            <li><b>Buy drinks by the bottle or pitcher:</b> If you’re going to be drinking more than one drink, rather than order by the glass, get a bottle of wine or pitcher of beer—you’ll get more value for your money (and if you share with friends, they will benefit too).</li>
            <li><b>Order the house wine:</b> It’s not fancy but it’s generally less expensive than all other wine options. No one will know in your pictures.</li>
            <li><b>Give your business to BYOB restaurants:</b> Restaurants charge major markups on wine, so enjoy significant savings by bringing your own bottle and simply paying the corkage fee.</li>
            <li><b>Drink at home:</b> Have a night of drinks in with friends to save on all those usual incidental night-on-the-town costs.</li>
            <li><b>Buy in bulk:</b> If you like to drink regularly or there is a specific type of alcohol you like, shop around at wholesalers, discount retailers and warehouse clubs.</li>
            <li><b>Take advantage of duty-free:</b> Enjoy your drinks without paying tax.</li>
            <li><b>Try a “dry” week or month:</b> Every once in a while, consider giving your body a break from alcohol. Your wallet will also love it.</li>
            <li><b>Ask for a mocktail menu:</b> Ordering a “mocktail” is a good (and cheaper) way to get that fancy cocktail feeling without the fancy cocktail price tag.</li>

          </UL>

          <ArticleH3>Now, what to do with your savings? </ArticleH3>
          <P>Let’s say you’ve integrated some of the above tips into your life. What should you do with all the money you’re now saving?</P>

          <P>Here are just a few ideas:</P>

          <UL>
            <li><b>Pay off debt:</b> The sooner you pay off your loans and/or credit cards, the less you will have to pay in interest.</li>
            <li><b>Invest in hobbies or activities:</b> Maybe there’s something you’ve always wanted to do but never had the discretionary funds to take up golfing, skiing or learning a new skill--now’s your chance.</li>
            <li><b>Save for a home:</b> Dreaming of buying a house? Start putting those saved dollars toward a down payment.</li>
            <li><b>Take a trip:</b> Some travel agents will let you make monthly payments at incredibly low interest rates. Put the money you save on alcohol </li>directly towards a dream vacation.
            <li><b>Treat yourself:</b> Do a weekend spa getaway. Treat yourself to a monthly massage. Start shopping for a new wardrobe. Indulge in self-care.</li>
          </UL>

          <Group>
            <Img src={treatYoSelfImageUrl} imgWidth={['100%', '100%', '35%']} float="right" />
            <ArticleH3>Mindfulness is key</ArticleH3>
            <P>Whether you decide to abstain entirely or reduce your spend, the true key to alcohol savings is being mindful. </P>
            <P>Keep track of all the costs, incidental costs and trade-offs associated with alcohol, and create and stick to a budget that includes drinking as an expense.</P>
            <P>Over time, you will start seeing less money going out of your bank account--and more opportunities you can afford.</P>
          </Group>

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
            label: "#PERSONALFINANCE",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "Sip, save, repeat - don’t let the bar tab be a buzzkill.",
        body: "Drinking alcohol can be fun--but also quite expensive. Whether you abstain or simply choose to reduce your intake, here are a few ways to cut costs and save money.",
        image: "/images/bubbly.jpeg"
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

