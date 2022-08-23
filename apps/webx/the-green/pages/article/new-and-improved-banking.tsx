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
          <P>In honor of National Hispanic Heritage Month, I think it’s important to shed light on our troubled banking system. In fact, this light needs to be shed, regardless of what month it is! The banking system has traditionally focused their efforts and resources on where the money is – in white, affluent communities.</P>

          <P>Not only does this leave marginalized communities without equal resources, but it keeps the knowledge barrier in those communities low. Without equal access to opportunities, people can’t have the knowledge they need to make the best financial decisions for their situation.</P>

          <P>Unfortunately, this happened to me in college…and I know it’s happened to plenty of other people of color. Like most, I wasn’t taught financial literacy in grade school. That meant I needed to learn from my parents or from my own experiences. My parents both came from low-income households, so they were never taught money – and therefore couldn’t teach much about it.</P>

          <P>When I set foot on my college campus freshman year, I was taken aback by how many credit card companies set up booths to sign up new customers. While I do believe everyone needs to start building credit as early as they can, they must understand what that means…and that information was not available. What was available was the beauty of “available credit”.</P>

          <P>At the time, I only saw how “available credit” could help me have more money to spend. I signed up for a new credit card and within months it was maxed out. I didn’t have a job, because I was in school full-time, so interest accrued at a rapid pace. It took me years to pay off that card, and it taught me a valuable lesson – put yourself in a position to learn. We can’t expect others to do it for us, especially if you’re a person of color.</P>

          <P>So, how do you put yourself in a position to learn financial literacy? Here are some things that helped me!</P>

          <ArticleH3>#1 Consumer personal finance content</ArticleH3>
          <P>When I was in college, Instagram wasn’t even a thing! Nowadays, it’s so easy to fill your feed or timeline with content that serves, especially from a personal finance perspective. Follow people, brands and companies who are providing valuable information.</P>

          <P>You can also read books, blogs and articles to learn more about finance and how to improve your financial situation. This is what I did in the years after college. I personally loved The 21-Day Financial Fast by Michelle Singletary. Audiobooks are a great option too! The point is to start consuming more knowledge related to money and finance, so you can make better decisions.</P>

          <ArticleH3>#2 Set goals for your life and money</ArticleH3>
          <P>I’ve been setting goals for years and it’s been a game-changer in the success I’ve seen in my own life and finances. When you set goals, you have something to work for. You have the motivation to grind through the long days, because reaching your goal is worth it.</P>

          <P>Think about where you want to be in your financial situation. What does the end result look like? Now, ask yourself what you can do to get there. Set goals around the items that can help you reach that end result. You can do this in any area of life!</P>

          <ArticleH3>#3 Become familiar with the resources available to you</ArticleH3>

          <P>Most of us have resources available to us that we don’t even know about! Make sure you know all the benefits that come with being an employee at the current job you work for. You can also look around the community. Are there any educational resources for people of color or those in low-income households? Even a free class can make all the difference!</P>

          <P>Lastly, take advantage of any resources offered to you by your bank. Banking and financial institutions are slowly recognizing the need for financial literacy and offer a variety of resources to help their customers learn more and save more. Get out there and ask questions! Figure out what your options are and use the ones that will help you get to that end goal.</P>

          <P>We are making our way to a new and improved banking system that puts emphasis on education, allowing everyone equal access to information that can help them build wealth. But, until we get there, people of color must take matters into their own hands, like I did, and start expanding their own financial education. The tips above will definitely help to get you started!</P>

          <P> - <b>By Raya Reaves, Founder of City Girl Savings</b></P>
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
  const slug = '/hispanic-heritage';
  const id = 21;

  const categoryTopicsPromise = getCategoryTopics({ slug, id, username }, locale);
  const categoriesPromise = getCategoriesList(locale);
  const [topics, categoriesList] = await Promise.all([categoryTopicsPromise, categoriesPromise]);

  return {
    props: {
      meta: {
        categories: [
          {
            label: "#MEXICANHERITAGE",
            slug,
            id,
          },
        ],
        member: false
      },
      hero: {
        title: "Making Our Way to a New and Improved Banking System.",
        body: "Raya Reaves is the Founder and Finance Coach of City Girl Savings, LLC. Raya launched City Girl Savings in 2015 as a resource for women from all walks of life to learn about personal finance and money management. Raya teaches people how to create and stick to realistic budget plans to reach their financial goals. Raya resides in Austin, Texas with her boyfriend and two Yorkie dogs.",
        image: "/images/banking-reyes.png"
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

