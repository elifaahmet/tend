import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import FullWidth from '../../components/modules/article/full-width';

import ArticleH3 from '../../components/elements/article-h3';
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

          <ArticleH3>The first thing you notice in the hidden camera footage: The game was openly rigged from the start.</ArticleH3>

          <P>For the participants in this University of California-Berkeley psychology experiment, the task was seemingly straightforward. They would simply play a game of Monopoly for 15 minutes. But before it began, the researchers randomly designated half the participants poor and half of them rich. The poor ones started with half as much money as the rich ones, and instead of rolling two dice with each turn could only roll one. It was entirely apparent to all players that the game was tilted in someone's favor. But knowing this didn't keep things from getting interesting.</P>
          <P>Though it had been entirely arbitrary who started rich and who started poor, patterns started to surface right away. The rich players slapped their pieces down louder when moving around the board. They made little displays of dominance and superiority. They even ate more of the free pretzels that had been left out for the players to snack on.</P>
          <P>Soon the rich players started acting downright rude — "less and less sensitive to the plight of those poor, poor players, and more and more demonstrative of their material success, more likely to showcase how well they're doing," as Paul Piff, one of the researchers, put it in his TEDx talk about the experiment.</P>
          <P>But most significant of all was what came next. After 15 minutes of play, the researchers asked the participants to describe their experience of the game. What they said was striking: Again and again, Piff said, the rich players "talked about what they'd done to buy those different properties and earn their success in the game." Scarcely did they acknowledge the clear advantage they'd started with, or that that advantage had been determined by chance.</P>
          <P>For Piff, the Monopoly experiment only affirmed what he and other researchers had been learning about the impact of money on our psyches.</P>
          <P>"What we've been finding across dozens of studies and thousands of participants across this country is that as a person's levels of wealth increase, their feelings of compassion and empathy go down, and their feelings of entitlement, of deservingness, and their ideology of self-interest increase."</P>
          <P>The implications here are profound. Not only are some of our most important impulses oddly unstable — they reflect a basic misunderstanding of how we attain whatever we attain in life. Seen through the lens of economic achievement, these findings seem to suggest that nearly everything Americans are told about making lots of money is sort of…<i>off</i>.</P>
          <P>“What’s keeping you from being rich?" the financial adviser Suze Orman has written. "In most cases it’s simply a lack of belief. In order to become rich, you must believe you can do it, and you must take the actions necessary to achieve your goal.”</P>
          <P>The influential writer and philosopher Ayn Rand offered a similar take. “Wealth is the product of man’s capacity to think," she wrote. Meanwhile, self-development guru Brian Tracy echoes the sentiment in his teachings: “Today the greatest single source of wealth is between your ears.”</P>
          <P>These are hardly exceptional ideas. Americans start absorbing these lessons from the first time they build a hotel on Boardwalk. It's one of our core philosophies: Any of us can become rich if we simply make the right moves, and have the right ideas.</P>
          <P>But what if this central philosophy of ours commits the same error made by the wealthy players in that rigged game of Monopoly? What if we overstate the significance of our moves and ideas, and undervalue the advantages that people have or don't have? What if our bank accounts reflect not just our work ethic or our ingenuity, but the extent to which the board was tilted in our favor from the outset?</P>
          <P>As Nassim Nicholas Taleb puts it in Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets, “Mild success can be explainable by skills and labor. Wild success is attributable to variance.”</P>
          <P>But of course it's not just the tilt of the board that determines our fates. A small army of psychologists, scholars and statisticians exists to detail the skills and labor most likely to yield financial success. Researchers tirelessly dissect the attributes and behaviors of the highest achievers among us; confidence, strong communication skills, comfort admitting mistaking, a propensity toward bold decision-making and a mindset of abundance frequently top their lists.</P>
          <P>What to make of these findings, in relation to Piff's? Are they but a mirage that merely correlate with success? Do we, in fact, deserve what we get? Do we get simply whatever chance yields?</P>
          <P>These questions aren't academic; they cut right to the American dream itself. In a country that so identifies with bootstrap mobility — that molds its economic policies around that idea, and by extension its political ideologies — suddenly the very existence of bootstraps seems up for debate.</P>
          <P>Maybe it's time for a new and more accurate psychic emblem. Dice, anyone?</P>
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
        title: "Did You Earn Your Money, or Was It Luck?",
        body: "A 15-minute psychology experiment cracks open an idea at the heart of capitalism",
        image: "/images/did-you-earn-your-money.jpg"
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

