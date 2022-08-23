import React from 'react';
import { Layout } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import Hero from '../../components/modules/article/hero';
import FullWidth from '../../components/modules/article/full-width';
import styled from 'styled-components';

import P from '../../components/elements/article-p';
import UL from '../../components/elements/article-ul';
import Page from '../../components/app/page';
import withSession from '../../hooks/with-session';
import { getCategoryTopics, getCategoriesList } from '../../api/discourse';
import RelatedPosts from '../../components/modules/related-posts';

const ImageSize = styled.div`
* > img {
  max-height: 100%;
  max-width: 100%;
}
`;

export const Main = (props) => {
  const { meta, hero, relatedPosts, host, fb_app_id } = props;
  const heroImageUrl = usePrefixedWithBasePath(hero.image);

  return (
    <Page title={hero.title} description={hero.body} image={hero.image} host={host} fb_app_id={fb_app_id}>
      <Layout bg="defaultGreen">
        <ImageSize>
          <Hero
            categories={meta.categories}
            member={meta.member}
            title={hero.title}
            body={hero.body}
            img={heroImageUrl}
            host={host}
          />
        </ImageSize>
      </Layout>

      <Layout bg="offWhite">


        <FullWidth>
          <P>Hegestratos's idea was foolproof, or at least what passed for foolproof in 300 B.C. Greece. Rather than deliver his scheduled shipment of corn from Syracuse to Athens, the conniving sea merchant came up with a craftier idea. He would take out a large insurance policy, purchase none of the corn and scuttle his ship. Then, claiming to have lost it in a storm, he would be reimbursed fully — without having paid for any expensive cargo.</P>
          <P>Aspiring Greek ship insurance scammers take note: The plan proceeded smoothly until it came time to, well, implement it. Crew members aboard his ship got wind of his scheme and proceeded to chase him overboard. He promptly drowned.</P>
          <P>If the tale of a little botched insurance fraud sounds unremarkable, that's precisely because of Hegestratos. His is the first recorded con job in Western history; he paved the way. Among historians of grift, today's booming scam industry — gotten phished lately? — all began off the coast of Greece more than 20 centuries ago.</P>
          <P>Hegestratos might have been undone by his own ingenuity, but the con lived on. Last year, the Federal Trade Commission received more than 2.1 million fraud reports from consumers, who lost more than $3.3 billion cumulatively — up 83 percent from 2019. Over a third of those losses were attributed to imposter scams. Perhaps just as striking: Thirty-four percent of those who filed a fraud report last year lost money, compared to 23 percent in 2019. The scammers, it seems, are getting better.</P>
          <P>Part of the problem is the sheer breadth of the scam universe. If they don't get you with a <a href="https://www.nerdwallet.com/article/finance/scam-alert-pet-scams">puppy scam</a>, they'll reel you in with <a href="https://www.consumer.ftc.gov/articles/real-estate-and-investment-scams">a real estate scam</a>. If not <a href="https://www.megamillions.com/lottery-scams">a lottery scam</a> then <a href="https://www.consumer.ftc.gov/features/how-donate-wisely-and-avoid-charity-scams">a charity scam</a>, or perhaps <a href="https://www.consumer.ftc.gov/articles/what-you-need-know-about-romance-scams">a romance scam</a>, or <a href="https://www.forbes.com/sites/jayadkisson/2018/11/20/the-great-cryptocurrency-scam/?sh=7897f7c9359f">a cryptocurrency scam</a>. <a href="https://www.cbsnews.com/news/covid-vaccination-cards-fake-scammers-fraud/">Vaccination card scams</a> are the latest exciting opportunity to kiss a week's paycheck goodbye.</P>
          <P>Americans have been hustling, swindling, bamboozling and shaking one another down since forever, but it was in the 19th century that the con truly took hold. The nation's fondness for PT Barnum-style entrepreneurialism — one part showmanship, two parts hoodwink — seemed to create the perfect environment for scammers to hone their shtick. Among the most creative operations to emerge then were these two, as reported by <a href="https://www.npr.org/sections/npr-history-dept/2015/02/12/385310877/how-scams-worked-in-the-1800s">NPR</a>:</P>
          <UL>
            <li><b>Disappearing Act.</b> Two women, often assisted by a man, were notorious for pulling off a clever ploy, as reported in the Cincinnati Enquirer of July 9, 1881. The three would show up in a town. The man would rent rooms for the ladies at a boarding house. The two women would then go on a lavish shopping spree at a chosen store, and select "a quantity of goods, invariably laces or such light valuable materials as could easily be disposed of." The women would instruct the merchant to send the goods around to the boarding house so they could try them on. When the store representative arrived, one of the ladies would be in the parlor to say that she was taking all of the merchandise to show her sister and husband. "The swindlers would disappear from the house with the booty," the paper reported, "leaving the messenger patiently waiting for his cash."</li>
            <li><b>Man of the Cloth:</b> One day in May of 1888, the New Castle, Pa., Daily City News reported, a man who introduced himself as Father McCarthy of Montreal showed up at St. Aloysius Catholic Church in Washington, D.C. McCarthy presented appropriate documentation to the head priest, E.A. McGurk Jr. "Father McGurk, very much please with the suave visitor, graciously tendered him the hospitalities of the parochial residence," the reporter noted. On a Monday, McCarthy visited a jewelry store on Pennsylvania Avenue. He said he was looking for a gift for a cardinal, and he picked out some choice diamonds to be brought over to McGurk's residence. When the jeweler arrived, McCarthy met him at the door, dressed as a priest. He took the diamonds into another room — ostensibly to show them to other holy men — and he slipped out a back way. Never to be seen again.</li>
          </UL>
          <P>A century and change later, the heart of the swindle is unchanged: It can't happen to me.  Nobody thinks they're capable of getting fooled. But it's that very confidence that confidence men — it's mostly men — utilize in their ploys. Whether it's $5 in a Times Square shell game or millions invested in a supposedly revolutionary <a href="https://en.wikipedia.org/wiki/Theranos">blood test company</a>, marks share a conviction that they're about to make some easy money.</P>
          <P>This past April saw the death of the most legendary con artist of our time. At his peak, Bernie Madoff operated the biggest Ponzi scheme in history. The financier's claims of investment wizardry attracted a staggering $17.5 billion from starry-eyed investors — investors who eventually learned that not a dime of their money was ever going into the stock market. “Charles Ponzi is now a footnote,” one defense lawyer remarked after his downfall. “They’re now Madoff schemes.”</P>

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
        title: "The Long Con",
        body: "Fraudsters, swindlers, hustlers and other scam artists have been separating us from our money since forever. It's not getting better.",
        image: "/images/the-long-con.jpg"
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

