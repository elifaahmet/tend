import React from 'react';
import {Layout} from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';


import ArticleH3 from '../../components/elements/article-h3';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import UL from '../../components/elements/article-ul';
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
          tldr="Many dating experts say never to ask about money on a first date. But even if you do ask, the dollar figure won’t tell you whether you’re financially compatible with this new person, or if you may have money problems in the future as a couple. Luckily, there are ways to subtly gauge whether your financial behaviors and attitudes align--even as early on as a first date.">
          <P>
            There are some things you should just never say on a first date.
          </P>

          <P>
            Like “You looked better in your photos.” Or “Where do you see this relationship going?”
          </P>

          <P>
            And then, there is the one question many dating experts refer to as the biggest conversation faux-pas ever:
          </P>

          <P bold>
            “How much money do you make?”
          </P>

          <P bold>
            Let’s start off by saying that this is (mostly) a fair question.
          </P>

          <P>
          The desire to know someone’s financial situation is understandable. Money problems are almost always cited as the number one relationship breaker-upper for couples. Better to nip that potential red flag in the bud ASAP, right?
          </P>

          <P>
            Some people think it’s perfectly fine to ask and talk about money on a first date.
          </P>

          <P>
            In fact, <A href="https://www.fool.com/investing/2019/04/15/is-money-now-a-first-date-topic.aspx">35% of millennials are actually okay with discussing salary</A>, credit score, and student loan or credit card debt on a first meet.
          </P>
        </TwoColDivided>
        <FullWidth>
          <P>But here’s the thing:</P>

          <UL>
            <li>The stat above represents only about one-third of millennials. Meaning a lot of folks agree with dating experts: you shouldn’t ask about money on a first date (in some people’s minds, that would be the equivalent to asking, “what meds are you on, and how strong are we talking?”)</li>
            <li>Dollar figures won’t necessarily paint the full picture. After all, someone who makes less than $35K a year might be in a career with future high earning potential. And someone who earns $100K+ a year could be in massive amounts of debt.</li>
          </UL>

          <P>So unless you’re going to ask a lot of follow-up questions, there’s really no reason to jump into this taboo topic on the first date.</P>

          <P bold>Forget numbers: it’s all about financial compatibility</P>

          <P>Still want some money-related answers from your potential romantic partner?</P>

          <P>Look for signs of “financial compatibility.” Trust us, it’s sexier than it sounds. (Okay, maybe not. But it’s still really, really important to have in a relationship.)</P>

          <P>Financial compatibility doesn’t mean you have to make the same amount of money. It’s about sharing like-minded values and beliefs about money, and applying similar decision-making to your finances.</P>

          <P>After all:</P>

          <UL>
            <li>If you’re frugal when it comes to shopping, you may not be financially compatible with someone who makes a lot of impulse purchases.</li>
            <li>If you have debt and don’t regularly make monthly repayments, this might drive someone crazy if they’re the type of person who always pays their bills on time.</li>
            <li>If you refuse to flush the toilet (to save on water bills) until you’ve made several trips to the bathroom, you may not be compatible with someone who…well, actually flushes every time.</li>
          </UL>

          <P>Yes, these may seem like little things on a first or second meet. But a <A href="https://www.fool.com/the-ascent/banks/articles/5-money-issues-that-could-ruin-your-relationship/">lack of financial compatibility can lead to a whole slew of problems</A> down the road.</P>

          <P>So here’s the deal: we can’t in good conscience recommend bringing up the subject directly, especially early-on. But there are some sneaky workarounds to establish baseline financial compatibility. Because who wants to fall in love, only to find out a year later that your future spouse owes tens of thousands to the IRS?</P>

          <P>So here’s what you can do now to avoid heartache due to money misalignment in the future:</P>

          <P>5 stealth money questions to ask a potential partner early on</P>

          <P>The first rule for talking about money on the first date is, don’t talk about money on the first date. Well, not overtly anyway.</P>

          <P>Instead, be subtle in how you steer the conversation.</P>

          <P>Here are a few information-gathering questions to ask your date, without making your actual intentions too obvious:</P>

          <UL>
            <li><b>What do you do for a living?</b> You can learn a lot about a person’s earning potential based on their chosen career path—and even determine if they’re being realistic about their financial future. If your date responds with: “I’m just going to have a bunch of kids and then create a YouTube family empire;” or, “I’m counting on my screenplay to be my meal ticket … once I finally finish it”—maybe that doesn’t align with your future, and a second date isn’t in the cards.</li>
            <li><b>Where do you see yourself in 5-10 years?</b> Maybe buying a house and raising kids in the burbs? Or living a kid-free life in a high-rise downtown? Do they plan to buy an investment property and rent it out? Answers like these will give you an idea of their not-so-distant financial priorities, and help you figure out if they align with yours.</li>
            <li><b>Where did you grow up? What was it like?</b> Where did they live? What did their parents do? Were they frugal, or did they spoil their kids? Did they grow up in a small apartment, in a mansion, or somewhere inbetween? How did they celebrate holidays? <A color="darkGray" href="https://www.psychologytoday.com/us/blog/financial-life-focus/201606/how-your-childhood-affects-your-money-today">Upbringing can have a huge impact on our money habits</A>, so a first date is a good opportunity to get some historical context. Just remember, though, there are plenty of people who were raised one way, and grew up to be completely different!</li>
            <li><b>What do you like to do in your free time?</b> Are they a collector who will pay top-dollar? Do they like to go to garage sales and resell what they find? Do they have expensive hobbies and memberships, or do free community events and coupon-clipping get them hot and bothered? How often do they like to go out, and to do what? Asked correctly, these questions can provide you with financial insights early on.</li>
            <li><b>Where do you like to shop?</b> Instead of asking how much they budget for things, find out their store preferences. Do they only buy clothing at high-end places or thrift shops?
            <br />You can also learn a lot about their values by asking this question. For example, maybe they only go to boutique (instead of big-box) grocery stores because they prefer to support small businesses in their community.</li>
          </UL>

          <P>Remember, that this conversation is a two-way street. Don’t ask a potential partner a question you’re not willing to answer yourself.</P>

          <P>Instead, wait until you feel the time is right.</P>

          <ArticleH3>Getting financially naked with a new partner.</ArticleH3>

          <P>So when is the right time to ask “How much money do you make?”, and put all your proverbial cards on the table?</P>

          <P>Getting financially “naked” is about starting to have those really tough, often uncomfortable money conversations.</P>

          <P>These are the talks where you both disclose all the good and not-so-good numbers. Your income. Your net worth. Your credit score. Your debts. Your struggles. And any plans or concerns you both have about money—as well as expectations of the other person in terms of support.</P>

          <P>You don’t need to divulge everything super-early on in a relationship. But you do need to do it if your relationship evolves to the point of moving in together. After all, how can you build a life together without knowing one another’s financial situations?</P>

          <P>But we’re getting ahead of ourselves.</P>

          <ArticleH3>Take baby steps before going full-frontal.</ArticleH3>

          <P>If there’s anything to learn from this post, it’s that talking about money in a new relationship is a process.</P>

          <P>Rather than rushing to know all the things, take smaller steps as you patiently chip away at the overarching topic of money--while using as much tact as possible.</P>

          <P>So time and phrase your questions appropriately. Be considerate. And respect the other person’s comfort level, especially on that first meet.</P>

          <P>And never forget this: when it comes to detecting financial compatibility, the first date is just the beginning. It might not seem like a very significant step. But it’s the first and best place to set the foundation for more in-depth conversations into the future.</P>

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
        title: "“Let’s talk about checks, baby”",
        body: "On which number date is it ok to start talking about money? We’re breaking down this taboo topic including tips from dating experts on when (and how) to get financially naked in a new relationship.",
        image: "/images/dinner-table.jpg"
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
