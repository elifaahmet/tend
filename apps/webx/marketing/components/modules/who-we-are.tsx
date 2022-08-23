/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import Carousel, { Item } from 'react-grid-carousel';

import { Image, Layout, H6, H3, Icon } from '@tend/ui';
import Space from '../layout/space';

interface Person {
  map(arg: (person: Person, i: string) => JSX.Element): React.ReactNode;
  image: string;
  name: string;
  role: string;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const CircledImage = styled(Image)`
  border-radius: 50%;
`;

export interface WhoWeAreProps {
  bg: string;
  color: string;
}

const StyledBtn = styled.div<{
  type: string;
}>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size: 20px;
  opacity: 0.6;
  cursor: pointer;
  top: calc(100% + 4rem);
  z-index: 10;
  transition: all 0.25s;
  transform: ${({ type }) =>
    `translateY(-50%) ${type === 'left' ? 'rotate(180deg)' : ''}`};
  left: ${({ type }) => (type === 'left' ? '40%' : 'initial')};
  right: ${({ type }) => (type === 'right' ? '40%' : 'initial')};
  -webkit-tap-highlight-color: transparent;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const WhoWeAre = (props: WhoWeAreProps) => {
  const { t } = useTranslation('about');

  const people: Person = t('who-we-are.people', {
    returnObjects: true,
  });

  const greenArrowLeft = (
    <StyledBtn type="left">
      <Icon
        svgWidth="2rem"
        svgHeight="2rem"
        iconName="ArrowRight"
        color="neonGreen.0"
      />
    </StyledBtn>
  );

  const greenArrowRight = (
    <StyledBtn type="right">
      <Icon
        svgWidth="2rem"
        svgHeight="2rem"
        iconName="ArrowRight"
        color="neonGreen.0"
      />
    </StyledBtn>
  );

  return (
    <Layout bg={props.bg}>
      <Space marginTop="5rem" marginBottom="7rem">
        <Space marginBottom="3rem">
          <H3 color={props.color}>{t('who-we-are.headline')}</H3>
        </Space>
        <Carousel
          cols={4}
          gap={60}
          rows={2}
          arrowLeft={greenArrowLeft}
          arrowRight={greenArrowRight}
          responsiveLayout={[
            {
              breakpoint: 1024,
              gap: 10,
              cols: 2,
              rows: 1,
            },
            {
              breakpoint: 768,
              gap: 10,
              cols: 1,
              rows: 1,
            },
          ]}
          mobileBreakpoint={1}
        >
          {people.map((person, i) => {
            return (
              <Item key={i}>
                <Div>
                  <Space marginBottom="3rem">
                    <CircledImage
                      src={person.image}
                      imgWidth={'10rem'}
                      imgHeight={'10rem'}
                    />
                  </Space>
                  <H6 color={props.color}>{person.name}</H6>
                  <H6 color={props.color}>{person.role}</H6>
                </Div>
              </Item>
            );
          })}
        </Carousel>
      </Space>
    </Layout>
  );
};

export default WhoWeAre;
