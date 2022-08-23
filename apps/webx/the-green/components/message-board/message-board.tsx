import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';
import { H2, Paragraph, Rule } from '@tend/ui';
import { useTranslation } from "@tend/webx/utils/next-i18next";


const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  margin-block-start: 2.8125rem;
  margin-block-end: 1.5rem;
  grid-template-areas:
    "HL HL HL HL HL HL"
    "BD BD BD BD BD BD"
    "HR HR HR HR HR HR";

    @media (min-width: 1440px) {
      grid-template-columns: repeat(12, [col-start] 1fr);
      grid-template-areas:
        "HL HL HL HL HL HL .  .  .  .  .  ."
        "BD BD BD BD BD BD .  .  .  .  .  .  "
        "HR HR HR HR HR HR HR HR HR HR HR HR";
    }
`;

const Block = styled.div`
  &[data-area|="headline"] {grid-area: HL; };
  &[data-area|="body"]     { grid-area: BD; };
  &[data-area|="hr"]       { grid-area: HR; };
`;

const MessageBoard = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Block data-area="headline">
        <H2 color="white">{t('message-board.title.first-line')}</H2>
        <H2 color="red.0">{t('message-board.title.second-line')}</H2>
      </Block>

      <Block data-area="body">
        <Paragraph fontSize={['1.5rem']} color="white">
          {t('message-board.body')}
        </Paragraph>
      </Block>

      <Block data-area="hr">
        <Rule size={12} ruleColor="red.0" />
      </Block>
    </Layout>
  );
};

export default MessageBoard;
