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
          <P>We all know the basics about money: It's green, sort of crinkly, comes in handy in the checkout lane. But for something so central to our lives — so fundamental to how we organize society and structure our time and plot our heist movies — it appears we've got some strange blindspots around the stuff. Namely: What does it mean to us?</P>
          <P>In the event your subscription to the Industrial and Labor Relations Review lapsed, it's worth checking out a paper published in 2013 by Jules Pfeffer of the Stanford Graduate School of Business. A professor of organizational behavior, Pfeffer has spent much of his career making sense of the psychological and social phenomena swirling beneath the surface of our work lives. In this paper, <a href="https://www.researchgate.net/publication/281703124_When_Does_Money_Make_Money_More_Important_Survey_and_Experimental_Evidence">When Does Money Make Money More Important?</a>, he describes the results from some eye-opening studies:</P>
          <P>In one, subjects were asked how important it is to possess a lot of money. Those earning a higher hourly rate in their lives reported it to be worth more to them. In another, students were asked to make as many paper airplanes as they could in five minutes. Some received a $10 reward for the quality of their work, others just $1. Those who got $10 reported that money was significantly more important than those who got just $1.</P>
          <P>The value of money isn't constant, in other words. What's more, Pfeffer argues, it behaves unlike any other element in our economy. Typically, the more we have of something, the less we crave it. But with money, getting more only causes us to want it more.</P>
          <P>These studies have direct implications for employers and workers, Pfeffer notes. Agreeing on compensation, for instance, becomes a far more complicated negotiation when you realize any satisfying number will eventually cease to be satisfying. Satisfaction itself would seem to become less stable over time, Pfeffer suggests:</P>
          <P>"To the extent that higher levels of income further focus people on the extrinsic reward of acquiring more money,” he writes, “higher levels of financial well-being can…[leave them] wanting ever more and becoming even more focused on extrinsic rewards.”</P>
          <P>But an even stranger implication of these findings starts bubbling up upon reflection. If getting money leads one simply to wanting more money, money starts seeming less like an instrument of commerce and more like a drug. </P>
          <P>Within a corner of the psychology community, this idea isn't entirely new. "Yes, it’s possible to be addicted to money" <a href="https://guycounseling.com/money-addiction-signs/">declares</a> one counselor and blogger, before going on to list some telltale symptoms, ranging from "your thoughts are consumed with obtaining money" to "self-worth tied to cash." Meanwhile one sober living community in Los Angeles <a href="https://rivierarecovery.com/money-addiction-does-it-exist/">defines money addiction</a> as "an unhealthy dependence on money."</P>
          <P>Putting aside the thorny matter of nearly every single human having an unhealthy dependence on money, this lens onto our money feelings has a particularly interesting resonance right now. At a moment when the richest members of society are getting ever richer — technically speaking, we’ve reached the traveling-to-the-edge-of-space-in-a-<a href="https://hyperallergic.com/663810/phallic-rocket-ship-launched-bezos-memes/">suggestively-shaped-rocket</a> phase — it's worth asking whether our thinking about this breed is all wrong. </P>
          <P>What if the billionaires in our midst aren't to be regarded with envy or disdain, but pity? Extrapolate out from Pfeffer's research and it would seem the richest among us are also the most desperate. Far from gratifying their every desire, achieving extreme wealth arguably only heightens their sense of need. The more money they get, the more important it seems, and onward the cycle continues. Last week’s mega-yacht merely opened a deeper chasm in the heart.</P>
          <P>Attending to the theoretical psychological distress of the planet's most affluent might or might not feel like a top priority. But this much feels clear: It wouldn't hurt to investigate more closely our feelings about the greenbacks in our wallets. Given that we spend most of our lives in pursuit of those pieces of paper, knowing their value to us — their changing value, it turns out — is probably a valuable thing.</P>

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
        title: "Money Changes Everything",
        body: "(Including Your Feelings About Money)",
        image: "/images/money-changes-everything.jpg"
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

