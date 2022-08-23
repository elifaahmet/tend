import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import TwoColDivided from '../../components/modules/article/two-col-divided';
import FullWidth from '../../components/modules/article/full-width';

import ArticleH3 from '../../components/elements/article-h3';
import P from '../../components/elements/article-p';
import A from '../../components/elements/article-a';
import Img from '../../components/elements/article-img';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const imLeavingYouImageUrl = usePrefixedWithBasePath('/images/im-leaving-you.png');
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
          tldr="A lot of people complain about banks, and for good reason. They often make accessing your money harder than it should be. They don’t reward your loyalty. Plus, you have to deal with surprise fees, low interest rates, less-than-par customer service, and bad tech, among other things. Here are just six reasons it might be time to switch banks.">
            <P>“Banking” and “fun” are not often used in the same sentence. For many people, banking is the complete opposite of fun.</P>
            <P>If one of those people is you, then take a moment to think about this: is banking inherently “not fun,” or is your bank just somehow missing the mark?</P>
            <P>Even though practically everyone complains about their bank, not many people actually make an effort to switch. In fact, <A href="https://www.forbes.com/sites/ronshevlin/2019/05/01/why-are-fewer-consumers-switching-banks-because-checking-accounts-have-become-paycheck-motels/?sh=1b96512b2aa9">only 4% of consumers changed primary banks in 2018.</A></P>
            <P>So, why don’t you start looking elsewhere? Here are just six (of many) signs that it’s time to sever ties with your bank.</P>
        </TwoColDivided>

        <FullWidth>


          <ArticleH3>1: You keep being hit by “surprise” banking fees</ArticleH3>
          <Img src={imLeavingYouImageUrl} imgWidth="50%" float="right" />
          <P>How often are we warned about hidden banking fees? The average American pays <A href="https://www.slideshare.net/ChimeBank/bank-fee-finder-april-2017-report/1">$329 in bank fees every year</A>, with most of it due to overdraft protection. But a lot of people aren’t aware of other <A href="https://www.fool.com/investing/2018/04/19/you-may-be-paying-more-in-bank-fees-than-you-reali.aspx">“hidden” fees that lurk in the fine print</A>: fees for things like returned mail, or even to redeem rewards points.</P>

          <P><b>Tip:</b> Read the contract very carefully before you sign onto a product or service. If there are fees that raise a red flag for you, look for a bank that is more transparent and open about the fees they charge. Hopefully, they will also charge less, and for fewer things.</P>

          <ArticleH3>2: Savings interest rates are super low</ArticleH3>
          <P>It’s not easy to earn interest on money in your savings account. <A href="https://www.investopedia.com/personal-finance/banks-pay-highest-interest-rates-savings-accounts/">The “best” annual interest rate in November 2020 was only 1%</A>. But that’s still a lot higher than the national average of 0.05%. Meanwhile, some accounts require a minimum amount of money in your account to even begin earning interest.</P>

          <P><b>Tip:</b> Look to online banks for higher interest rates. Without the need to pay for overhead or operating costs, online banks are more likely to offer higher interest rates on savings products without having to maintain a minimum account balance.</P>

          <ArticleH3>3: Bad customer service</ArticleH3>
          <P>Despite all the ways we can communicate with retail banks today, customer satisfaction is not rising as quickly as you might think. This <A href="https://www.jdpower.com/business/press-releases/2019-us-retail-banking-satisfaction-study">2019</A> survey shows satisfaction going up in terms of products and fees; but it’s going down where customer service on the telephone, online chat, email and social media are concerned.</P>

          <P>Why? Customers don't feel their problems are a priority to their banking partner. Without proper and swift responses to issues, customers are left feeling like they don’t matter.</P>

          <P><b>Tip:</b> Before signing with a new bank, do some online research. Don’t just look at online reviews, either. An afternoon of social media “stalking” can turn up some pretty surprising stuff. Pay careful attention to how (or if) a bank responds to their customer complaints. This can provide great insight into their customer service. You should also ask friends and family which banks they trust, and why.</P>


          <ArticleH3>4: Always trying to sell you something</ArticleH3>
          <P>Since we have online banking, apps and ATMs to help us manage and access our money, bank branch and call center employees are focusing less on service and more on selling. That’s not necessarily a bad thing: for example, if you get a mortgage through your bank, you may also be encouraged to buy mortgage insurance. That makes sense.</P>
          <P>But if bank employees are under high pressure to meet sales goals, they may try to sell you things you absolutely do not need. Just look to the <A href="https://www.moneyunder30.com/wells-fargo-fraud">Wells Fargo scandal</A>, where cross-selling to customers became almost predatory.</P>
          <P><b>Tip:</b> Don’t commit to any products or services without aiming to understand why you “need” them. And if the person selling it to you can’t explain it clearly, don’t put your money into it.</P>

          <ArticleH3>5: Outdated technology</ArticleH3>
          <P>Today’s mobile tools and apps can be fantastic for managing finances. But some banks would prefer to cheap out on systems that don’t evolve with the times. Worse yet, they refuse to meet customers’ banking needs by updating their systems every couple of years.</P>
          <P><b>Tip:</b> You want access to banking technology that not only works well, but also integrates with popular third-party tools like <A href="https://www.mint.com/">Mint</A>, <A href="https://www.tillerhq.com/">Tiller Money</A>, and others. If your bank’s tech is causing headaches, it’s time to look elsewhere.</P>


          <ArticleH3>6: They’re not doing anything to improve your financial literacy</ArticleH3>
          <P>When you are financially literate, that means you have the knowledge and skills needed to make smarter, more responsible money decisions.</P>
          <P>Banks that care about their customers’ <A href="https://www.forbes.com/sites/johnwasik/2019/10/11/why-you-need-financial-wellness/?sh=3c4729bd55d6">financial wellness</A> should make an effort to publish and share quality content about investments, retirement, budgeting, and saving for large purchases. They should also have resources and tools available for you to use—like calculators, videos, checklists, and spending reports.</P>
          <P><b>Tip:</b> A lack of educational content may not seem like a big deal at face value, but it says a lot about how banks view their customers. Look for a bank that provides relevant and reliable information in a variety of formats to help you improve your financial situation.</P>

          <ArticleH3>Ready to make a change?</ArticleH3>
          <P>The bank you choose to partner with is a personal decision, and one that only you can make. But if your current bank isn’t putting your needs and concerns first, then it’s time to consider a switch.</P>

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
        title: "Should you dump your bank? 6 telltale signs it may be time for a new financial relationship.",
        body: "A lot of people complain about banks, and for good reason. They often make accessing your money harder than it should be. They don’t reward your loyalty. Plus, you have to deal with surprise fees, low interest rates, less-than-par customer service, and bad tech, among other things. Here are just six reasons it might be time to switch banks.",
        image: "/images/break-up-with-your-bank.jpeg"
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

