import React from 'react';
import styled from 'styled-components'
import { typography, color } from 'styled-system';
import { H1, H2, Paragraph, Image } from '@tend/ui';
import usePrefixedWithBasePath from '../../../hooks/usePrefixedWithBasePath';

import PullQuote from '../../modules/PullQuote';

const FlexLayout = styled.main`
  display: flex;
  flex-direction: column;
`;

const Headline = styled(H1)`
  ${typography};
  ${color};
  line-height: 110%;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: bold;
  font-family: 'Pilat Condensed';
`;

const SubHeadline = styled(H2)<{fontSize: string[];}>`
  ${typography};
  ${color};
  display: block;
  line-height: 110%;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: 5rem;
  font-weight: bold;
  font-family: 'Pilat Condensed';
  border-top: 5px solid #BDFC4C;
`;

const Signature = styled.div`
  margin-block-start: 6rem;
  margin-block-end: 6rem;
  text-align: center;

  img {
    max-width: 100%;
  }

  @media (min-width: 836px) {
    img {
      max-width: 22rem;
    }
  }
`;

const Article = styled.div`
  margin-block-end: 3.5rem;
`;

const Body = () => {
  const signatureImageUrl = usePrefixedWithBasePath('/images/james-signature.png');

  return (
    <FlexLayout>

      <Article>
        <Headline fontSize={['2.25rem']} color="white">The Landscape</Headline>
        <Paragraph
          variant="b2"
          color="white">
          The financial industry, whose primary purpose is to serve as a middleman between borrowers and savers, has historically built relationships as a top-down advisor and capital provider.
        </Paragraph>
      </Article>

      <Article>
        <PullQuote
          color="white"
          quote="Finance is complicated. We will show you the way.">
            <Paragraph
              variant="b2"
              color="white">
              Today, the traditional dynamic is being compromised by the disconnect between people’s financial health and the drivers of profitability. ~80% of the U.S. lives paycheck-to-paycheck.  This is a global phenomenon.  People’s bank accounts are low – if they have one – and the ability to save and invest is difficult.  The people’s problems are also a problem for conventional banks’ bottom lines.  The result is pushing of products people don’t need (more debt), poking and prodding with fees and interest rates that go unnoticed, and delivery of a weak overall experience relative to other industries.  Or simply nothing at all.  The growing distance between the ivory tower and the people is a symptom of an aging financial system in its late stage. To progress, the basic relationship between banks and individuals must be reengineered.
            </Paragraph>
        </PullQuote>
      </Article>

      <Article>
        <Paragraph
          variant="b2"
          color="white">
          On the other end of the spectrum is the financial technology frontier, where awareness of systemic problems is high, yet optimism for a decentralized and more democratic future is higher.  The scope and pace of innovation is inspiring. Many tools being crafted show early promise for fixing big problems.  We’ve discovered how to remove middlemen from the exchange of value through cryptocurrencies.  We can now deliver outcomes in precise and personalized ways using artificial intelligence.  New technology, legal and regulatory frameworks allow us to connect the world’s best solutions to better solve problems.
        </Paragraph>
      </Article>

      <Article>
        <Paragraph
          variant="b2"
          color="white">
          While the new frontier has a bright horizon, its early dawn includes new risks to manage and user-friendliness to improve.  People are becoming more aware of these new capabilities and their appreciation of the underlying value is growing.  However, adoption remains low as many products built on the legacy system continue to offer familiarity, convenience, and efficiency. That will change as new models deliver real improvement in financial health.
        </Paragraph>
      </Article>

      <Article>
        <SubHeadline fontSize={['2.25rem']} color="white">Our Purpose</SubHeadline>
        <Paragraph
          variant="b2"
          color="white">
          In the middle of it all is Tend, the world’s first neobank powered by the social engine of its members.
        </Paragraph>
      </Article>

      <Article>
        <PullQuote
          color="white"
          ruleColor="defaultMagenta"
          quote="We exist to create financial wellbeing together.">
          <Paragraph
          variant="b2"
          color="white">
          Rather than build another highly centralized concept overdone by traditional banks and big tech, we intend to activate a grassroots network where the individual’s voice is amplified to co-create the future state.  This is where the world is going, and we intend to play a meaningful role.  Our membership model establishes an honest relationship where we thrive by providing an experience people value and contribute toward. We do not cast dictums down to the crowd. We ask questions in pursuit of building a better bridge to the frontier’s possibilities.
          </Paragraph>
        </PullQuote>
      </Article>

      <Article>
        <SubHeadline fontSize={['2.25rem']} color="white">The Green</SubHeadline>

        <Paragraph
          variant="b2"
          color="white">
          Our foundation is The Green, a community forum that centers the purpose of Tend membership.  The Green is simply a home where people can exchange ideas and content about money, talk priorities for building a better financial experience, or just hang out.  Thematic message boards, chat rooms, and (very soon) an interactive product roadmap not only cultivate conversation but ensure members’ voices are heard. Entertaining and educational personal finance content from Tend, and more importantly, fellow members guides the upward journey.  Afterall, there is no better source of advice than a peer who has faced similar problems and overcome them.  The Green is a window into the community, as well as broader public channels where relevant conversations are taking place.  Members will also get personalized content with the ability to act at their convenience.  We’ll even build a community marketplace where folks can bring their own ideas to market or pick up an excellent t-shirt and hat at the people’s shop!  Underlying it all will be our commitment to inspire with new ideas while letting the community’s wishes set the path.
        </Paragraph>
      </Article>

      <Paragraph
        variant="b2"
        color="white">
        We hope The Green will hold us accountable through an interesting and enjoyable discussion, while helping to build a better financial experience, and shining light on a better way forward.
      </Paragraph>

      <Article>
        <Signature>
          <Image src={signatureImageUrl} />
        </Signature>
      </Article>

    </FlexLayout>
  );
};

export default Body;
