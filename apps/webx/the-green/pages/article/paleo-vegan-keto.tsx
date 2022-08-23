import React from 'react';
import {Layout} from '@tend/ui';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

import ArticleH4 from '../../components/elements/article-h4';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import UL from '../../components/elements/article-ul';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Article = (props) => {
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
        <TwoColDivided
          tldr="You want to eat healthy. But you also don’t want to spend hundreds of dollars a month on groceries. The good news is you don’t have to. Whether you want to try intermittent fasting, go vegan, or try a plant-based, paleo or keto diet, there are many ways to keep costs low."
        >
          <P>
            Low rise jeans. Lava lamps. Perms.
          </P>

          <P>
            Some things are meant to be fads. Good thing fads don’t last.
          </P>

          <P>
          There are some fads that are just as ridiculous as they sound. Like the Air Diet. This fleeting fad involved people “eating” steam off hot meals in lieu of actual food. Or the Cotton Ball Diet, that had people swallowing juice-soaked cotton balls to stay full and curb those hunger pangs.
          </P>

          <P>
          Thankfully, today’s most popular diet and eating plans are less insane fads and more likely to have longevity beyond the lifespan of a dollar-store battery. Probably because, unlike the above, these plans are geared toward healthy eating and weight loss (versus, you know, starvation and impending death).
          </P>

          <P>
            But of course, there is always an unknown price tag when you change the way you eat.
          </P>

          <P>
          The question is: just what is the price tag for adopting a trendy eating plan into your lifestyle?
          </P>

          <ArticleH4>
          Popular eating plans, then vs. now
          </ArticleH4>

          <P>
          Years ago, going on a diet often meant joining some sort of membership program that included food delivered to your door.
          </P>
        </TwoColDivided>
        <FullWidth>
          <P>A lot of those popular diets were—and still are—really expensive. For example: a meals-and-snacks program like Jenny Craig <A href="https://www.investopedia.com/financial-edge/0211/7-popular-diet-plans-and-what-they-cost.aspx">can cost you about $25 a day</A>. That’s the equivalent to about $750 a month—and $9,000 a year. <i>For just one person.</i></P>

          <P>Today, it’s more common—and much, much cheaper—to take the DIY route. And thankfully, there’s tons of forums and communities online to use as resources. It basically comes down to three things:</P>

          <UL>
            <li>Researching online to find a diet plan that works for you.</li>
            <li>Getting to know instructions on “what to eat” and “what not to eat”.</li>
            <li>Buying your own groceries and making meals based on those guidelines.</li>
          </UL>

          <ArticleH4>Today’s most hyped-about eating plans</ArticleH4>

          <P><b>Vegan</b></P>
          <UL>
            <li>Similar to the vegetarian diet in that a vegan diet avoids eating meat.</li>
            <li>People on this diet also avoid dairy, eggs, or any other products of animal origin.</li>
            <li><b>Good news for your wallet: </b>This 2020 study says <A href="https://vegnews.com/2020/4/ditching-meat-slashes-cost-of-groceries-an-average-of-23-per-week">cutting out meat can save you as much as $23</A> each week on groceries.</li>
          </UL>

          <P><b>Plant-based</b></P>
          <UL>
            <li>Focuses on food that comes from plants like fruits and veggies, legumes (beans, peas, lentils), nuts and seeds.</li>
            <li>You can eat meat, fish or dairy products but you’re supposed to keep them to a minimum and focus more on plant-based foods.</li>
            <li><b>Good news for your wallet: </b>Legumes come cheap and go a long way—in fact, <A href="https://www.popsci.com/story/diy/frugal-bean-recipes/">a bag of beans can last a household an entire week</A>.</li>
          </UL>

          <P><b>Paleo</b></P>
          <UL>
            <li>Put simply, if the cavemen didn’t eat it during the Paleolithic / “Stone Age” era, you shouldn’t either.</li>
            <li>This diet is basically one based on hunters and gatherers—so you focus on meat, fish, poultry, fruits and veggies; and stay away from refined sugar, dairy, legumes and grains.</li>
            <li><b>Good news for your wallet: </b>Hungry for meat? Save a few dollars by trying out less expensive organs like the liver, heart, bone marrow, tongue and/or kidney.</li>
          </UL>

          <P><b>Keto</b></P>
          <UL>
            <li>This is a high-fat, adequate-protein, low-carbohydrate diet where you eat fat at every meal.</li>
            <li>You can eat pretty much any meat but need to avoid most sugary foods (including fruit) and alcohol.</li>
            <li><b>Good news for your wallet: </b>You may end up spending more on meat, but you will likely snack less. That’s because people on keto often feel full.</li>
          </UL>

          <P><b>Intermittent fasting</b></P>
          <UL>
            <li>There are several different ways to do intermittent fasting but put simply, it’s about eating only within a certain window of time each day.</li>
            <li>You can eat basically whatever you want, but obviously, the healthier you eat, the healthier you’ll be.</li>
            <li><b>Good news for your wallet: </b>This one’s simple. You won’t be eating as many meals as usual—which means you won’t need to buy as much food at the grocery store.</li>
          </UL>

          <ArticleH4>Which popular meal plan is the least expensive?</ArticleH4>

          <P>Generally speaking, grocery bills are lower for those who reduce or completely eliminate the amount of meat, fish and animal products they eat. In fact, if you were to eat a healthy plant-based diet versus a meat-eating diet (like keto or paleo), <A href="https://www.medicaldaily.com/vegetarian-diet-can-save-you-around-750-each-year-when-compared-meat-eating-diet-356670">you could save about $750 a year on groceries</A>.</P>

          <P>Of course, you may be unable to turn away from anything bacon-wrapped or that drips in its own juices. If this is the case, there are still several cost-cutting measures you can take.</P>

          <ArticleH4>8 ways to save money, no matter which eating plan you choose</ArticleH4>

          <P><b>1 - Eat less meat, or no meat at all</b></P>
          <P>Meat prices have soared over the last decade. From 2009 to 2019, frankfurters increased by almost 28%, bacon and breakfast sausage went up by 24.5% … and <A href="https://www.usatoday.com/story/money/personalfinance/2019/02/28/average-grocery-store-bill-cost-is-driven-up-most-by-these-items/39094659/">beef and veal shot up by 42.5%</A>. Basically, the less meat you eat, the more you save.</P>

          <P><b>2 - If you MUST have meat, look for sales</b></P>
          <P>Meat prices vary by where you live, where you shop, the type of meat (pasture-raised, organic etc.), and the cut. If tenderloin or ribeye steak are your thing, only buy them when they’re on sale. You can also buy a slow cooker for lower quality and cheaper cuts, which will make the meat less tough and chewy.</P>

          <P><b>3 - Pick whole foods over processed foods</b></P>
          <P>Whole foods prices are generally lower priced than processed foods. So say bye to pricey processed foods—and hello to foods as close to their natural form as possible.</P>

          <P><b>4 - Avoid pre-cut foods</b></P>
          <P>Pre-cut veggies, cheese, salads and meat chunks are super convenient—but they’re also more expensive. Save a few dollars by doing the cutting, shredding and prep work yourself.</P>

          <P><b>5 - Limit diet-specific food purchases</b></P>
          <P>There are tons of fancy (and high-priced) packaged foods advertised as diet-specific,  like keto bars, vegan cheeses and paleo breads. Limit those purchases, or stay away altogether—instead, find recipes to make these types of foods using whole ingredients.</P>

          <P><b>6 - Look for no-name / store brands</b></P>
          <P>Generally speaking, store brand grocery products cost about <A href="https://www.businessinsider.com/when-to-buy-store-brand-food-2014-9#:~:text=One%20reason%20they're%20cheaper,25%25%20less%20than%20national%20brands">25% less than national brands</A>. When there’s a no-name option, go for that one.</P>

          <P><b>7 - Buy seasonal</b></P>
          <P>Build your grocery list and recipes around <A href="https://snaped.fns.usda.gov/seasonal-produce-guide">fruits and veggies that are grown at a certain time of year</A>. They will be the most affordable within that season. For example, cherries are generally cheapest in the summer versus other times of the year.</P>

          <P><b>8 - Shop in bulk</b></P>
          <P>Meat, oil, legumes, you name it: no matter what diet you choose, you can find just about anything in bulk. It can be a bit of an upfront expense, but buying in bulk is cheaper per unit.</P>

          <ArticleH4>Get healthy, get money</ArticleH4>

          <P>Whether you’re an unashamedly ravenous meat eater like Guy (Fieri) or a proud plant devotee like Gwyneth (Paltrow), there’s a diet and/or weight loss plan out there for everyone.</P>

          <P>And you don’t have to break the bank to support your new lifestyle.</P>

          <P>It may take a bit of time before your new grocery shopping habits become the norm. That’s okay. Keep track of your expenses, find cheaper alternatives if possible, and just. Keep. Going. You can do this! And your body will thank you for it.</P>

          <P>How do you save money while eating healthy? Leave your tips in the comments below: </P>

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
        title: "Paleo? Vegan? Keto?",
        body: "Looking for an eating plan that helps you lose weight, not money? Gain #fitnessgoals, not debt? Whether you’re interested in vegan, plant-based, paleo, keto, or intermittent fasting, we have cash-cutting tips for all of them.",
        image: "/images/paleo.jpeg"
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
