/** @format */

import React from 'react';
import Link from 'next/link';
import { space } from 'styled-system';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import {
  Image,
  Layout,
  HeadlineRule,
  Paragraph,
  CTALink,
  Theme,
} from '@tend/ui';
import ComingSoon from './coming-soon';
import Grid from '../layout/grid';

interface Perk {
  map(arg0: (perk: Perk, i: string) => JSX.Element): React.ReactNode;
  image: string;
  cta: {
    label: string;
    url: string;
  };
  headline: string;
  ruleColor: string;
  body: string;
  comingSoon: boolean;
  comingSoonInner: boolean;
}

interface PerksGridProps {
  bg: string;
  namespace: string;
  paddingBottom?: string | Array<string>;
  paddingTop?: string | Array<string>;
}

const GridLayout = styled(Grid)<PerksGridProps>`
  ${space}
  grid-template-columns: repeat(1, [col-start] 6fr);
  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-template-columns: repeat(4, [col-start] 3fr);
  }
`;

const PerkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:last-child {
    margin-block-end: 0;
  }
  & > * {
    margin-block-end: 2.2rem;
  }

  justify-self: center;
  width: 60%;
  @media (min-width: ${Theme.breakpoints[2]}) {
    width: 100%;
    p {
      min-height: 5.5rem;
    }
  }
`;

export const PerksGrid = (props: PerksGridProps) => {
  const { t } = useTranslation(props.namespace);

  const perks: Perk = t('perks-grid.perks', {
    returnObjects: true,
  });

  return (
    <Layout bg={props.bg}>
      <GridLayout {...props}>
        {perks.map((perk, i) => (
          <PerkContainer key={i}>
            {perk.image && (
              <Image src={perk.image} imgWidth="8rem" imgHeight="10rem" />
            )}
            <HeadlineRule
              variant="h5Small"
              color="black"
              ruleColor={perk.ruleColor}
            >
              {perk.headline}
            </HeadlineRule>
            <Paragraph marginBottom="1.5rem" variant="b3" color="black">
              {perk.comingSoon ? <ComingSoon /> : null}
              {perk.comingSoonInner ? (
                <div dangerouslySetInnerHTML={{ __html: perk.body }}></div>
              ) : (
                perk.body
              )}
            </Paragraph>
            <Link href={perk.cta.url}>
              <CTALink
                variant="normal"
                textTransform="uppercase"
                href={perk.cta.url}
                color="black"
              >
                {perk.cta.label}
              </CTALink>
            </Link>
          </PerkContainer>
        ))}
      </GridLayout>
    </Layout>
  );
};

export default PerksGrid;
