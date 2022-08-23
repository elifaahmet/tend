import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';

import ArticleH2 from '../../components/elements/article-h2';
import ArticleH3 from '../../components/elements/article-h3';
import ArticleH4 from '../../components/elements/article-h4';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import OL from '../../components/elements/article-ol';
import Img from '../../components/elements/article-img';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const heroImageUrl = usePrefixedWithBasePath(hero.image);
  const drumRollImageUrl = usePrefixedWithBasePath('/images/drum-roll.gif');

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
          tldr="It’s possible to have fun while learning the importance of money management. Animal Crossing: New Horizons teaches gamers all about setting financial priorities, researching buy-and-sell options, minimizing risk and maximizing rewards in investing, and flexing your creative entrepreneurial muscle.">
            <P>When Animal Crossing: New Horizons came out at the beginning of the pandemic, it was hailed as “the joyful video game the world needs.”</P>
            <P>And it’s easy to see why. Animal Crossing offers a much-needed escape from reality where players move to a small island full of “animal people,” and slowly build a life for themselves there.</P>
            <P>But there’s more to this game than meets the eye. New Horizons is about being part of a virtual economy. It teaches real-life lessons about managing money: from making mortgage payments to buying furniture, investing, and more.</P>
            <P>In this post, we share five key learnings from this latest iteration of Animal Crossing.</P>
        </TwoColDivided>

        <FullWidth>

          <ArticleH2>But first, a few things you should know</ArticleH2>
          <P>If you’re not familiar with Animal Crossing: New Horizons, here’s a quick explainer:</P>
          <P>When you first get to the island, a besweatered raccoon named Tom Nook greets you. He arranged your travel there. He helped you acquire the island. He also gives you a tent to live in.</P>
          <P>But Nook then demands 5,000 Bells, the game currency, for his efforts.</P>
          <P>Yep. As soon as you arrive in paradise, you’re in debt. So then, it’s about all the hustle so you can pay Nook back.</P>
          <P>Keep in mind: you’re basically in Shangri-la, so “working” to earn money is actually pretty fun. Like digging up fossils and selling them to Nook’s Cranny. Or fishing. Or finding and selling shells. Or literally looking around the whole island for a “money rock.”</P>
          <P>That’s pretty much the overarching theme of New Horizons. You get a loan. You work. You pay it off. Then you get a bigger loan. You work more. And you pay off more debt.</P>
          <P>All while living out your island life dreams.</P>
          <P>Here are a few lessons you can learn along the way.</P>


          <ArticleH3>#1: Home ownership is about prioritization</ArticleH3>
          <P>When you pay off Nook’s initial loan, he says you can buy a house. But that’ll be an additional 98,000 Bells. So you’re back to the daily grind of making as many Bells as you can.</P>
          <P>When you’ve paid off <em>that</em> loan, Nook says you can borrow even more money to upgrade and expand your home. Which you’ll want to do, because how can you pass up having a diner, spa, gym and/or bar in your house?</P>
          <P>While you’re earning Bells, there are plenty of other things to spend money on in the game. You can fly to other islands, get cool outfits for your avatar, and buy things to furnish your home.</P>
          <P>However, to pay off your loan, you need to prioritize what is most important to you. Which means you might have to forego getting that cool gadget in the short-term, so you can settle your debt with Nook.</P>
          <P><b>Real world lesson:</b> Obviously, getting an actual mortgage for a real house is much more stressful. If you don’t stay on top of payments, you could lose your home. While there’s no punishment that parallels in the game, New Horizons essentially forces you to prioritize your needs--like housing--from your wants.</P>

          <ArticleH3>#2: Sometimes, being patient is a lot more profitable</ArticleH3>
          <P>When it comes to finances, good things often come to those who wait. And the same is true in Animal Crossing</P>.
          <P>As an example, let’s say you caught some fish and want to sell them. You have two choices:</P>
          <OL>
            <li>Sell them for instant Bells at Nook’s Cranny, the local store</li>
            <li>Save up your fish to sell to C.J., a beaver who occasionally visits your island</li>.
          </OL>
          <P>The clincher: you never know when C.J. will arrive (although many fans say he tends to visit about once every two weeks.</P>
          <P>If you’re all about instant gratification, selling at Nook’s Cranny might sound more appealing. But if you hold off until C.J. shows up, he’ll pay you 150% more than the guys at Nook’s Cranny.</P>
          <P>Real world lesson: When it comes to your personal finances (in particular investing), the long-game is often more favorable.</P>


          <ArticleH3>#3: Building your network can find you the best deals</ArticleH3>
          <P>Let’s say you’re looking for a neon sign to decorate the diner you added to your home. Or you have an area rug in your second-floor bedroom that you’re tired of and want to sell.</P>

          <P>You can buy and sell things on your island with the in-game animal villagers. But you may not get the best prices.</P>

          <P>Do a quick Google search and you’ll find all kinds of online buy-and-sell marketplaces. Built by fans, these often huge communities help you save and earn more Bells. <A href="https://nookazon.com/">Noozakon</A> is a popular one, but there are also tons of Animal Crossing fan groups on Facebook and other social channels.</P>

          <P>By venturing outside your comfort zone--that is, your island--a bit to participate in these forums, you increase the likelihood of finding real-life gamers willing to give you a better deal or pay more than your island villagers would.</P>

          <P><b>Real world lesson:</b> If you want to make buying and selling easy and convenient, stick with the marketplaces you know and understand. If you want to find deals with potentially higher cost-savings and better paying audiences, expand your horizons. Research. Network. Negotiate. The extra effort will often pay off.</P>

          <ArticleH3>#4: Earning money through investing is never a sure thing</ArticleH3>
          <P>On Sundays, you can buy turnips from Daisey Mae, the local turnip dealer. The buy price is usually about 90 to 110 Bells. You can then resell the turnips to Nook’s Cranny; each day of the week, they will post what they are willing to pay for your product.</P>
          <Img src={drumRollImageUrl} float="right" />
          <P>This turnip market is also called the “stalk market.” Sure, turnip investing is a lot less complex than the real stock market. But the same concept applies: buy at the lowest price possible, and sell at the highest price you can. And just like with real stocks, Nook’s Cranny prices will fluctuate regularly.</P>
          <P>The challenge? Your turnips are going to rot. So you only have a few days before you risk losing money on your investment.</P>
          <P>If you want to ensure you’re getting the best price, go to the buy-and-sell marketplaces mentioned above. Some gamers will share publicly when their own island’s local store is offering top turnip dollar. You can even entice those gamers with a small “commission” in exchange for inviting you to their island so you can sell your wares.</P>
          <P><b>Real world lesson:</b> Investing has great potential to make fast money—but it can also come at great risk, especially when you’re dealing with a short decision-making timeframe. To minimize risk and maximize reward, do your research before making any hasty decisions</P>

          <ArticleH3>#5: There are many, many ways out there to earn money</ArticleH3>
          <P>New Horizons offers multiple ways to earn Bells (money). Like selling the “hot item” of the day. Or putting your Bells in a savings account to earn interest. Or catching bugs.</P>
          <P>Meanwhile, the game has also inspired people to create their own jobs.</P>
          <P>As an example, gamers like to create their own patterns and designs for virtual clothing items—but doing so can be technically difficult because of the need to work with pixel art. This has opened up an opportunity for creative folks to take custom design commissions from other gamers in exchange for Bells and even real-world money.</P>
          <P><b>Real world lesson:</b> Tired of earning money the same way every day? Find things you are skilled at and enjoy doing that also pay. Think creatively, beyond the usual types of jobs you could be doing. Flex that entrepreneurial muscle by identifying a market need that hasn’t been met yet! The green is out there - tend to it!</P>

          <ArticleH4>Don’t just survive: <em>thrive</em></ArticleH4>
          <P>New Horizons isn’t just about paying down your mortgage and earning a living.</P>
          <P>The game also provides a lot of cool activities. Like taking a stroll down the beach. Shooting down presents from the sky. And shaking trees (sometimes furniture will fall out of them–or spiders).</P>
          <P>And as you spend more time in the game, you may begin realizing that having a fancy mansion isn’t as important as you thought.</P>
          <P>Likewise, in real life, working and making money are important things—but they aren’t everything. Make time to occasionally shift your focus from your financial obligations to fun. After all, what’s the point in surviving if you’re not also living and thriving?</P>

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
        title: "Tricky, Tricky! 5 Money Lessons Learned by Playing Animal Crossing",
        body: "Animal Crossing: New Horizons isn’t just a charming and whimsical escape from everyday life - this wildly popular game also has a few financial-lesson tricks up its sleeve. Keep scrolling to find out what they are.",
        image: "/images/animal-crossing.jpeg"
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

