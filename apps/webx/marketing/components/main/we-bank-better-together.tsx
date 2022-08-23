/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { VerticalRule, Image } from '@tend/shared/design/ui-kit';
import { Layout } from '@tend/ui';
import Grid from '../layout/grid';
import { H3, B3 } from '@tend/lego/marketing-ui-kit';

const GridLayout = styled(Grid)`
  padding-block-start: 2rem;
  grid-template-areas:
    'I I I I I I'
    'I I I I I I'
    'MT MT MT MT MT MT'
    'B B B B B B';
  @media (min-width: ${(props) => props.theme.breakpoint['x-large']}px) {
    padding-block-start: 3.2rem;
    grid-template-areas:
      'I I I I I I I I I I I I'
      'I I I I I I MT MT MT MT MT MT'
      'B B B B B B B B B B B B';
  }
`;

const Block = styled.div`
  &[data-area|='image'] {
    grid-area: I;
  }
  &[data-area|='magenta-text'] {
    grid-area: MT;
  }
  &[data-area|='body'] {
    grid-area: B;
  }
`;

const MagentaText = styled.div`
  background-color: ${(props) => props.theme.color['primary-magenta']};
  text-align: center;
  margin-inline-start: 2.5%;
  position: relative;
  top: -30%;
  padding-block-end: 5%;
  margin-block-end: -5%;
  @media (min-width: ${(props) => props.theme.breakpoint['small']}px) {
    margin-inline-start: 10%;
  }
`;

const Body = styled.div`
  margin-inline-start: 10%;
  display: flex;
  height: 100%;
`;

const WeBankBetterTogether = (props) => {
  const { t } = useTranslation('main');
  const { locale } = useRouter();

  return (
    <Layout bg="defaultYellow">
      <GridLayout>
        <Block data-area="image">
          <Image src={t('we-bank-better-together.image')} resizeMode="fill" />
        </Block>
        <Block data-area="magenta-text">
          <MagentaText>
            <H3>{t('we-bank-better-together.headline')}</H3>
          </MagentaText>
        </Block>
        <Block data-area="body">
          <Body>
            <VerticalRule color="primary-orange" size={12} />
            <B3>{t('we-bank-better-together.body')}</B3>
          </Body>
        </Block>
      </GridLayout>
    </Layout>
  );
};

export default WeBankBetterTogether;
