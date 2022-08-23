import React from 'react';
import styled from 'styled-components';
import { color, layout } from 'styled-system';

import { H5 } from '@tend/ui';
import { Grid } from '../layout/grid';
import {useTranslation} from "@tend/webx/utils/next-i18next";

interface RoadMapElement {
  map(arg0: (element: RoadMapElement, i: number) => JSX.Element): React.ReactNode;
  title: string;
  bottomLineColor: string;
  rightLineColor: string;
}

interface LineProps {
  backgroundColor: string;
  width?: string;
  height?: string;
}

const VerticalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: 836px) {
    &:after {
      ${color}
      content: '';
      position: absolute;
      display: block;
      right: -2.25rem;
      top: 12.63%;
      width: .75rem;
      height: 74.73%;
    }
  }
`;

const HorizontalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  &:after {
    ${color}
    content: '';
    position: absolute;
    display: block;
    bottom: -0.25rem;
    width: 100%;
    height: .75rem;
  }
  @media (min-width: 836px) {
    &:after {
      ${color}
      ${layout}
      content: '';
      position: absolute;
      display: block;
      bottom: -0.25rem;
    }
  }
`;

const UpperLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  &:before {
    ${color}
    ${layout}
    content: '';
    position: absolute;
    display: block;
    top: 0rem;
  }
  @media (min-width: 836px) {
    &:before {
      width: 0;
      content: '';
    }
  }
`;


const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  &:before {
    content: "";
    height: 0;
    display: inline-block;
    padding-top: calc(100% / (156/95));
    width: 1px;
    position: relative;
  }
`;

const BoxLayout = styled(Grid)`
  grid-row-gap: 1rem;
  grid-template-columns: ${props => `repeat(1, [col-start] 1fr)`};
  margin-bottom: 2.25rem;

  @media (min-width: 836px) {
    grid-template-columns: ${props => `repeat(3, [col-start] 1fr)`};
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${props => `repeat(3, [col-start] 1fr)`};
  }
`;

const WelcomeBoard = () => {
  const { t } = useTranslation();

  const roadMapElements: RoadMapElement = t('product-roadmap.elements', {
    returnObjects: true,
  });

  return (
    <BoxLayout>
      {roadMapElements.map((element: RoadMapElement, index: number) => {
        return (
          <UpperLine key={index} backgroundColor="defaultMagenta" width={index === 0 ? "100%": "0"} height="0.75rem">
            <HorizontalLine
              backgroundColor={element.bottomLineColor}
              width={index > 5 ? "0": "100%"}
              height="0.75rem"
            >
              <VerticalLine backgroundColor={element.rightLineColor}>
                <Div>
                  <H5 variant="h5Small" color="offWhite">{element.title}</H5>
                </Div>
              </VerticalLine>
            </HorizontalLine>
          </UpperLine>
        );
      })}
    </BoxLayout>
  );
};

export default WelcomeBoard;
