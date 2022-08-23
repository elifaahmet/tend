/** @format */

import React from 'react';
import styled from 'styled-components';

import {
  Theme,
  Layout,
  H3,
  Paragraph,
  Image,
  IconHeadlineBody,
} from '@tend/ui';

import Space from '../layout/space';
import { useTranslation } from '@tend/webx/utils/next-i18next';

interface ValueProps {
  map(arg0: (prop: ValueProps, i: string) => JSX.Element): React.ReactNode;
  headline: string;
  body: string;
}

const GridRowDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridColumnDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  grid-template-areas:
    'I I I I I I'
    'L L L L L L';

  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas: 'I I I I I . . L L L L L';
  }
`;

const Block = styled.div`
  &[data-area|='image'] {
    grid-area: I;
  }
  &[data-area|='list'] {
    grid-area: L;
  }
`;

const OurStory = () => {
  const { t } = useTranslation('about');

  const bodyLines: Array<string> = t('ourStory.body', { returnObjects: true });
  const values: ValueProps = t('ourStory.ourValues.list', {
    returnObjects: true,
  });

  return (
    <Layout bg="offWhite">
      <Space marginTop="3rem" marginBottom="3rem">
        <GridRowDiv>
          <Space marginBottom="3rem">
            <H3 color="black">{t('ourStory.headline')}</H3>
          </Space>
          <Space marginBottom="3rem">
            {bodyLines.map((line: string, index: number) => {
              return (
                <Space key={index} marginBottom="1rem">
                  <Paragraph variant="b3" color="black">
                    {line}
                  </Paragraph>
                </Space>
              );
            })}
          </Space>
          <GridColumnDiv>
            <Block data-area="image">
              <Image src={t('ourStory.image')} imgWidth="100%" />
            </Block>
            <Block data-area="list">
              <GridRowDiv>
                <Space marginBottom={['2rem', '2rem', '3rem', '3rem']}>
                  <H3 color="black">{t('ourStory.ourValues.headline')}</H3>
                </Space>
                {values.map((prop, index) => {
                  return (
                    <IconHeadlineBody
                      key={index}
                      layout="vertical"
                      variant="small"
                      title={prop.headline}
                    >
                      {prop.body}
                    </IconHeadlineBody>
                  );
                })}
              </GridRowDiv>
            </Block>
          </GridColumnDiv>
        </GridRowDiv>
      </Space>
    </Layout>
  );
};

export default OurStory;
