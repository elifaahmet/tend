import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';
import { Rule, Paragraph } from '@tend/ui';

interface IPullQuote {
  children: React.ReactNode;
  quote: string;
  color?: string;
  ruleColor?: string;
}

const Layout = styled(Grid)`
  grid-template-areas:
    "BODY  BODY  BODY  BODY  BODY  BODY"
    "QUOTE QUOTE QUOTE QUOTE QUOTE QUOTE";

  @media (min-width: 836px) {
    grid-template-areas:
      "BODY BODY BODY BODY QUOTE QUOTE";
  }

  @media (min-width: 1440px) {
    grid-template-areas:
      "BODY BODY BODY BODY BODY BODY BODY BODY QUOTE QUOTE QUOTE QUOTE";
  }
`;


const Body = styled.div`
  grid-area: BODY;

`;

const Quote = styled.div`
  grid-area: QUOTE;
  height: 100%;
  margin-block-start: 1.5rem;
  margin-block-end: 1.75rem;

  @media (min-width: 836px) {
    margin-block-start: 0;
  }

  aside {
    display: flex;
    align-items: center;
    min-height: 100%;

    blockquote {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  }
`

export const PullQuote = ({children, quote, color, ruleColor }:IPullQuote) => {
  return (
    <Layout>
      <Body>
        {children}
      </Body>
      <Quote>
        <aside>
          <blockquote>
            <Rule ruleColor={ruleColor} size={8} />
            <Paragraph
              bold
              fontSize={['2.25rem']}
              color={color}>
              {quote}
            </Paragraph>
          </blockquote>
        </aside>
      </Quote>
    </Layout>
  )
}

PullQuote.defaultProps = {
  color: 'black',
  ruleColor: 'defaultYellow'
};

export default PullQuote;
