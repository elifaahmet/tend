import React from 'react';

import { variant, space, layout, color } from 'styled-system'
import styled, { ThemeProps } from 'styled-components';
import Rectangle from '../rectangle/rectangle';
import {Grid, Row } from '../grid/grid';
import Layout from '../layout/layout';

const rectangleMarginArray = [1.5, 1.5, 2.25, 3];
const rectangleBorderWidthArray = ['0.5rem', '0.5rem', '0.75rem', '1rem'];
export interface TCrossbarLayoutProps {
  outerPaddingLeft?: Array<string> | string;
  outerPaddingRight?: Array<string> | string;
  variant?: 'center' | 'left' | 'right';
  /* When the variant is center & on mobile or table and the component shrinks on which way should the left and right children stay */
  whenShrink?: 'left' | 'right';
  leftLineColor?: string;
  rightLineColor?: string;
  verticalLineColor?: string;
  upperBg?: string;
  rightChildFullWidthOnShrink?: boolean;
  leftChildFullWidthOnShrink?: boolean;
  marginBottom?: Array<string>;
};

const StyledTLayout = styled(Grid)`
  ${space};
  ${color};
  min-width: 100%;
`;

const LowerStyledTLayout = styled.div`
  ${space};
  display: flex;
  flex-direction: row;
  width: 100%;
`;

interface StyledChildrenLayoutProps {
  variant: 'center' | 'left' | 'right';
  side: 'left' | 'right';
  whenShrink?: 'left' | 'right';
  children?: React.ReactNode | React.ReactNodeArray;
};

const StyledChildrenLayout = styled.div<StyledChildrenLayoutProps>`
  ${layout};
  ${space};
  display: flex;
  flex-direction: column;
  ${(props: StyledChildrenLayoutProps) =>
    variant({
      variants: {
        center: {
          width: (props.side === 'left' && props.whenShrink !== 'right') || (props.side !== 'left' && props.whenShrink === 'right')
                  ? '85%'
                  : '13%',
          paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
          paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
        },
        left: {
          width: props.side === 'left' ?  '85%' : '13%',
          paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
          paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
        },
        right: {
          width: props.side === 'left' ? '13%' : '85%',
          paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
          paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
        },
      }
    })};
  @media (min-width: ${(props: StyledChildrenLayoutProps & ThemeProps<{ breakpoints: Array<string> }>) => (props.theme.breakpoints[2])}) {
    ${(props: StyledChildrenLayoutProps) =>
      variant({
        variants: {
          center: {
            width: '49%',
            paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
          },
          left: {
            width: props.side === 'left' ?  '77%' : '21%',
          },
          right: {
            width: props.side === 'left' ? '21%' : '77%',
          },
        }
      })};
  }
`;


export const TCrossbarLayout = (props: TCrossbarLayoutProps) => {
  return (
    <Layout bg={props.upperBg}>
      <StyledTLayout bg={props.upperBg}>
        <Row>
          <LowerStyledTLayout>
            <StyledChildrenLayout
              variant={props.variant}
              side="left"
              whenShrink={props.whenShrink}
              >
              <Rectangle
                type="left"
                rectangleColor={props.leftLineColor}
                marginBottom={props.marginBottom}
                />
            </StyledChildrenLayout>
            <Rectangle
              rectangleColor="defaultTransparent"
              height={rectangleBorderWidthArray}
              type="vertical"
            />
            <StyledChildrenLayout
              variant={props.variant}
              side="right"
              whenShrink={props.whenShrink}
              >
              <Rectangle
                type="right"
                rectangleColor={props.rightLineColor}
                marginBottom={props.marginBottom}
                />
            </StyledChildrenLayout>
          </LowerStyledTLayout>
        </Row>
      </StyledTLayout>
    </Layout>
  );
};

TCrossbarLayout.defaultProps = {
  leftLineColor: 'neutral.4',
  rightLineColor: 'neutral.4',
  verticalLineColor: 'neutral.4',
  variant: 'left',
  upperBg: 'neutral.0',
  whenShrink: 'right',
};

export default TCrossbarLayout;
