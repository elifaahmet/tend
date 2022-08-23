import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';

import ArticleH3 from '../../components/elements/article-h3';
import P from '../../components/elements/article-p';
import Group from '../../components/elements/article-group';
import Img from '../../components/elements/article-img';
import Page from '../../components/app/page';
import RelatedPosts from '../../components/modules/related-posts';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import withSession from '../../hooks/with-session';

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const redFlagsImageUrl = usePrefixedWithBasePath('/images/red-flags.png');
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
        <TwoColDivided
          tldr="Living together with your loved one can be the best thing ever. But if you’re not on the same page about spending and saving money, you could be headed for financial troubles in the long run. Do they spend money like there’s no tomorrow? Are they selfish with their money? Before signing a lease or mortgage, ask yourself if your beau is showing any of these red flags.">
          <P>You and your significant other are officially “a couple.”</P>
          <P>Things are going great. Everyone calls you two “goals”. And you’re compatible in so many ways.</P>
          <P>But are you on the same page about money?</P>
          <P>Financial compatibility might not sound like a big deal. But it really is. After all, money fights are a major cause of divorce. And when many couples don’t share the same attitudes, values, and behaviors around money—it’s easy to see why that is.</P>
          <P>We’re not talking about little pet peeves here and there, like feeling embarrassed when your partner pulls out a coupon on every date. That’s nothing compared to having a partner who spends like there’s no tomorrow, or who is overly stingy with their money.</P>
          <P>This article is about things your loved one might be doing that could ultimately affect your financial wellbeing now, and in the future.</P>
          <P>So before you talk about moving in together or buying a house, check to see if your partner shows any of these 9 financial red flags.</P>
        </TwoColDivided>

        <FullWidth>

          <Group>
            <Img src={redFlagsImageUrl} imgWidth={['100%', '100%', '35%']} float="right" />
            <ArticleH3>#1: They live rich, but don’t make a lot of money</ArticleH3>
            <P>They don’t make that much money. But they live like Jay-Z (or at least try to). They’re impulsive: no matter the cost, they always need the Next Big Thing. And while it’s fun driving around in their Mercedes, don’t you ever wonder how they’re paying for it?</P>
          </Group>

          <ArticleH3>#2: They only pay back the minimum on their credit card</ArticleH3>
          <P>They have several credit cards that keep racking up monthly interest, with no plans to pay down debt. According to them, having bad credit won’t affect their ability to borrow money in the future, “because other people with credit card debt are doing just fine.”</P>

          <ArticleH3>#3: They don’t pay their bills on time</ArticleH3>
          <P>When you visit their home, you see overdue bills in their mail pile. They also regularly get (and ignore) calls from unknown numbers, leaving you wondering if it’s a collection agency on the other end. And they scoff at your concern that their water might be shut off, “I can just shower at the gym.”</P>

          <ArticleH3>#4: They demand expensive gifts</ArticleH3>
          <P>It doesn’t matter how much or how little you make. When occasions come along, your partner expects expensive gifts. And they’re great at making you feel guilty at the suggestion of a lower-priced option. Yes, they’d prefer you go into debt than not get their feet into the latest Yeezys.</P>

          <ArticleH3>#5: They never pay you (or anyone else) back</ArticleH3>
          <P>They forgot their wallet. Or their paycheck is in the mail. They’ll pay you back. But then they conveniently forget to follow up. So you have to remind them, only to be gaslit with statements like, “I think I already paid that back last week,” and, “It’s not like you’re homeless.”</P>

          <ArticleH3>#6: They volunteer your money without asking</ArticleH3>
          <P>They make commitments “as a couple” to events that you will clearly have to pay for. Like setting up an expensive night out with friends. Or buying subscriptions you’ll never use. Or they get you to call an Uber and then tell the driver you’re picking up other people along the way.</P>

          <ArticleH3>#7: They make you feel like a financial burden</ArticleH3>
          <P>They remind you constantly of exactly how much money they spend on you. Despite being in a seemingly loving relationship, they make it seem like driving you around or taking you on dates are enormous favors. They make you feel like you’re selfish and undeserving of the things they pay for.</P>

          <ArticleH3>#8: They brag about having more money than you</ArticleH3>
          <P>They believe they’re better than you, simply because they bring in a higher income. They lord it over you when they can afford things and you can’t. And they expect you to treat them like a hero when they use their money on you, even for the little things.</P>

          <ArticleH3>See some red flags? Talk it out</ArticleH3>
          <P>Certainly, financial compatibility is not the most exciting part of any relationship, but without it, you’re going to have problems—especially in the long run.</P>
          <P>Financial issues can cause major rifts in relationships. So it's important to watch out for red flags like the ones above—and talk about them ASAP. Especially if these are things that bother you or make you uncomfortable.</P>
          <P>And who knows: maybe your partner will be open to change.</P>
          <P>The great news is that the less you have to worry about money, the more time you have to spend focusing on your honey.</P>
          <P>Tend-ers, what are some other red flags you’ve faced, and how did you overcome them? Drop your tips in the comments below.</P>

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
        title: "Harmless Pet Peeves or Serious Red Flags? Bad Money Habits to Watch Out for in New Partners.",
        body: "Are you and your significant other meant to last? These 8 financial red flags could be a sign of problems to come.",
        image: "/images/date-night.jpg"
      },
      relatedPosts: {
        topics,
        categories: categoriesList,
        image: "/images/date-night.jpg",
      },
      host: req.headers.host
    }
  }
});

export default Main;
