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
          <P>Shaun's Go-Kart raceway doesn't look like much: a small jump, a couple hairpin turns, four vehicles whipping tirelessly around a short track. But the small business brings in a stunning amount of revenue, arguably unprecedented: $84,150 per hour.</P>
          <P>Or at least they seem like dollars. Maybe they're…tokens? Gold nuggets? Shaun's Go-Kart raceway occupies one square pixelated inch in the delightfully imprecise, ever-expanding universe of virtual economies. The raceway is actually a game within a game, one in which children (and stunted adults) learn the business of running a theme park. Build the go-kart operation, rake in some dough, use those to fund the next operation, rinse, repeat. But as with all such games, something else is learned along the way, whether the players know it or not.</P>
          <P>Once upon a time the world of play money was simple. When Monopoly hit the shelves in 1935, players began the game with $1,500, an amount that hasn't changed in over eight decades. (Some $375,000,000,000 in miniature bills now course through the universe — enough to buy the real Atlantic City boardwalk and at least a few hotels.) But as pretend paper money gave way to pretend digital money, things started to shift.</P>
          <P>Artificial scarcity, the rise of cryptocurrency, infusions of real-world dollars: The growing complexity of virtual games has given rise to virtual economic policy. With countless titles competing for players' loyalty, inflation has soared. You can't jump over a digital rock without netting a small fortune. The gulf between rich and poor may be widening in real life, but in gaming land, we can all be Jeff Bezos.</P>
          <P>According to a 2019 study, 73 percent of Americans 2 and older play video games. Research from the Center on Media and Child Health indicates most teens do so for two hours a day or more. Given that vast and impressionable audience, these games represent a powerful and scarcely mapped pedagogical engine. What, exactly, are the young gamers learning?</P>
          <P>&nbsp; &nbsp; &nbsp; &nbsp; Lessons about money are really lessons about values. What is our time worth? What do we desire? Who are we?</P>
          <P>In real life, the point of making money is to pay your bills. The point of making lots of money is to wholly alter your lifestyle: to work less and focus instead on lounging by infinity pools and deciding which Monet to hang in your helicopter hangar. But that's not what happens in contemporary gaming economies. Earning more coins merely allows you to play longer, which is to say earn more coins. More money, more problems.</P>
          <P>It's a funny dynamic for the world's 1.9 billion kids to be absorbing. Or maybe it's perfectly ordinary.</P>

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
            label: "#FUNMONEY",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "Play Money",
        body: "What are pretend economies teaching us?",
        image: "/images/play-money.jpg"
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

