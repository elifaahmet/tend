import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Paragraph, CTAButtonLink, Rule } from '@tend/ui';
import Topics from '../modules/topics';
import {useTranslation} from "@tend/webx/utils/next-i18next";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6. [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-template-rows: minmax(15rem, max-content);
  grid-template-areas:
      "HL HL HL HL HL HL"
      "T  T  T  T  T  T";

  padding-bottom: 2.8125rem;

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-row-gap: 3rem;
    grid-template-areas:
      "HL HL HL HL T T T T T T T T";
  }
`;

const CTA = styled.div`
  grid-area: HL;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const TopicsLayout = styled.div`
  grid-area: T;
`;

const StyledCTAButtonLink = styled(CTAButtonLink)`
  width: auto;
  text-align: center;
`

const MessageBoard = ({ topics }) => {
  const { t } = useTranslation();
  return (
    <>
    <Rule size={12} ruleColor="yellow.0" />
    <GridLayout>
      <CTA>
        <Paragraph bold fontSize="3.375rem" color="white" textTransform={'uppercase'}>
          { t('Message Board') }
        </Paragraph>
        <Link href='/message-board'>
          <StyledCTAButtonLink
            textTransform="uppercase"
            overColor="false"
            bg="yellow.0"
            borderColor="yellow.0"
            hoverBg="white"
            hoverColor="black"
            >
            { t('Visit Message Board') }
          </StyledCTAButtonLink>
        </Link>
      </CTA>
      <TopicsLayout>
        <Topics data={topics} />
      </TopicsLayout>
    </GridLayout>
    <Rule size={12} ruleColor="magenta.0" />
    </>
  );
};

export default MessageBoard;
