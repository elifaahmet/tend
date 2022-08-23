import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';

import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import Img from '../../components/elements/article-img';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const MansBestFriend = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const heroImageUrl = usePrefixedWithBasePath(hero.image);
  const girlWithPetImageUrl = usePrefixedWithBasePath('/images/girl-with-pet.jpeg');
  const exerciseCatImageUrl = usePrefixedWithBasePath('/images/exercising-cat.gif');
  const dogAndCatImageUrl = usePrefixedWithBasePath('/images/dog-and-cat.jpg');

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
          tldr="There are many benefits to owning a pet - they can reduce stress and feelings of loneliness, get you outdoors and exercise, and, best of all, they can be lots of fun to have around. They are also a big responsibility, often coming with a big price tag. Here’s a few ways to keep that number low and you and your pet’s happiness levels high.">
            <P>If you are one of the many, many people who own a pet, you know there are tons of benefits to having a little critter to care for and love unconditionally. Well, science agrees. According to the <A href="https://www.cdc.gov/healthypets/health-benefits/index.html">CDC</A>, in addition to all of the increased opportunities to exercise, get outside, and socialize, owning a pet is also proven to lead to decreased blood pressure, cholesterol levels, triglyceride levels, and feelings of loneliness. Even just <A href="https://www.betterhealth.vic.gov.au/health/healthyliving/dog-walking-the-health-benefits#:~:text=Dog%20owners%20enjoy%20numerous%20health,regularly)%2C%20and%20decreased%20stress.">stroking a pet</A> can reduce the physiological indicators of stress, including high blood pressure. But whether your best friend is a dog, cat, bearded dragon, tortoise, or pot-bellied pig, the truth is that pets can be expensive! The good news is there’s plenty of ways to cut back on costs and make sure your money doesn’t decrease, too. Read on for some money saving tips for all you animal owners:</P>
        </TwoColDivided>

        <FullWidth>
          <Img src={girlWithPetImageUrl} imgWidth="95%" float="center"/>

          <P><b>1. Adopt, don’t shop</b></P>
          <P>A pet is a big financial commitment. However, there’s some choices you can make before you even let your new bud into your home that will affect how much you spend down the road. Adopting a pet rather than buying from a breeder is not only much more ethically responsible, but it can also save you lots of money in the long run. Unfortunately, while there are breeders who do raise their animals in a humane and ethical way, many pet shops get their animals from places like puppy mills where disease is rampant because of the emphasis on profit over animal welfare. Unknowingly taking home a sick animal is not only heartbreaking, but can rack up veterinary costs quickly. In addition, when you adopt from a shelter, adoption fees usually include the cost of spay/neuter, first vaccinations, and sometimes even microchips.</P>
          <P><b>2. Buy in bulk</b></P>
          <P>The pet food industry is a huge business, and it continues to grow. Get ready for these numbers… According to Steve King, CEO of the American Pet Products Association (APPA), U.S. sales of pet products and services <A href="https://www.prnewswire.com/news-releases/americans-pet-spending-reaches-record-breaking-high-95-7-billion-301012852.html#:~:text=Pet%20Food%20%26%20Treats%20is%20by,2019%20sales%20of%20%2436.9%20billion.">neared $100 billion</A> for the first time last year - in 2019 spending reached $95.7 billion. Pet food and treats alone reached $36.9 billion in sales. With that said, many people don’t realize the benefits of buying in bulk.</P>
          <P><b>3. Get a move on</b></P>
          <P>Just like humans need to exercise and eat well, animals do, too. Obesity in pets is associated with <A href="https://www.betterhealth.vic.gov.au/health/healthyliving/dog-walking-the-health-benefits#:~:text=Dog%20owners%20enjoy%20numerous%20health,regularly)%2C%20and%20decreased%20stress.">a number of medical complaints</A> including osteoarthritis, cardiovascular disease, liver disease and insulin resistance, which is not only distressing to your animals, but can take a chunk out of your pockets as well.</P>
          <Img src={exerciseCatImageUrl} imgWidth="95%"/>

          <P>Thankfully there’s lots of fun ways to help your pet get exercise, whether that’s playtime or a walk around the block. </P>
          <P>How much exercise does your dog need? </P>
          <P>According to the <A href="https://www.akc.org/expert-advice/health/how-much-exercise-does-dog-need/">AKC</A>, the amount of exercise a dog needs really depends on the breed. Some breeds require lots of physical activity to remain healthy, while other smaller breeds are happy with a quick jog around the backyard. A general rule of thumb is that dogs should get between 30 minutes and 2 hours of exercise every day. Getting enough exercise is a win/win for pets, owners, and wallets. </P>

          <P><b>4. Make your own pet food</b></P>
          <P>With so many different brands of pet foods on the market, the pet store aisles can become overwhelming. And - expensive! Making your animals pet food at home can be an easy way to cut costs at the pet store - and it’s good for them, too. There are lots of recipes and forums online of pet owners recipes for dog food - The Dog Bakery has 20 listed <A href="https://www.thedogbakery.com/blogs/news/top-20-healthy-homemade-dog-food-recipes-your-dog-will-love">here</A>. Your animal will feel better, too - when you make your own pet food, you can more easily control your animal’s health and any allergens, ultimately leading to less veterinary bills.</P>

          <Img src={dogAndCatImageUrl} imgWidth="95%"/>

          <P>There are many benefits to having a pet, physically, mentally, and socially (how many of you are part-time social media managers for your pet?). The last thing you want is a financial burden. With these money saving tips, you’ll have more money for the good things - like their holiday photoshoots! No? Just me?</P>
          <P>Pet owners, drop your money saving tips in the comments below!</P>

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
        title: "How to make man’s best friend your wallet’s buddy, too. ",
        body: "There are many benefits to owning a pet - they can reduce stress and feelings of loneliness, get you outdoors and exercise, and, best of all, they can be lots of fun to have around. They are also a big responsibility, often coming with a big price tag. Here’s a few ways to keep that number low and you and your pet’s happiness levels high.",
        image: "/images/mans-best-friend.jpeg"
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


export default MansBestFriend;
