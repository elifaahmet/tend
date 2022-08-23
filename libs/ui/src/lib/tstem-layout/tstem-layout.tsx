import React, { useEffect, useState } from 'react';

import { variant, space, layout, color } from 'styled-system'
import styled, { ThemeProps } from 'styled-components';
import { debounce } from '../carousel/helpers';
import Rectangle from '../rectangle/rectangle';
import {Grid, Row} from '../grid/grid';
import Layout from '../layout/layout';
import theme from '../theme';

const rectangleMarginArray = [1.5, 1.5, 2.25, 3];

export interface TStemLayoutProps {
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  partOfTLayout?: boolean;
  variant?: 'center' | 'left' | 'right';
  /* When the variant is center & on mobile or table and the component shrinks on which way should the left and right children stay */
  whenShrink?: 'left' | 'right';
  verticalLineColor?: string | Array<string>;
  lowerBg?: string;
  reverse?: boolean;
  padding?: string | Array<string>;
};

const StyledTStemLayout = styled(Grid)`
  ${space};
  ${color};
  min-width: 100%;
`;

const LowerStyledTStemLayout = styled.div`
  ${space};
  display: flex;
  flex-direction: row;
  width: 100%;
`;

interface StyledChildrenLayoutProps {
  variant: 'center' | 'left' | 'right';
  side: 'left' | 'right';
  whenShrink?: 'left' | 'right';
  paddingTop: string | Array<string>;
  paddingBottom: string | Array<string>;
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
            paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : '0rem',
            paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : '0rem',
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

interface StyledChildrenDivProps {
  variant: 'center' | 'left' | 'right',
  childType: 'left' | 'right',
  side: 'left' | 'right',
  whenShrink?: 'left' | 'right',
  children?: React.ReactNode,
};

const StyledChildrenDiv = styled.div<StyledChildrenDivProps>`
  display: flex;
`;

export const TStemLayout = (props: TStemLayoutProps) => {

  const [isMobile, setIsMobile] = useState(true);

  const handleWindowResize = () => {
    if(window.innerWidth >= parseInt(theme.breakpoints[2].replace('px', ''))) {
      setIsMobile(false);
    } else if(window.innerWidth < parseInt(theme.breakpoints[2].replace('px', ''))) {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const ChildrenDiv = (props: StyledChildrenDivProps) => {
    const variant = isMobile ? props.whenShrink : props.variant;
    if ((isMobile && variant === props.side) || (!isMobile && props.childType === props.side)){
      return (
        <StyledChildrenDiv
          {...props}
        >
            {props.children}
          </StyledChildrenDiv>
      );
    } else return null;
  }

  return (
    <Layout  bg={props.lowerBg}>
      <StyledTStemLayout bg={props.lowerBg}>
        <Row>
          <LowerStyledTStemLayout>
            <StyledChildrenLayout
              paddingTop={props.padding || ['5.5625rem']}
              paddingBottom={props.padding || ['5.5625rem']}
              variant={props.variant}
              side="left"
              whenShrink={props.whenShrink}
              >
              <ChildrenDiv
                childType="left"
                side="left"
                variant={props.variant}
                whenShrink={props.whenShrink}
                >
                {props.reverse && isMobile ? props.rightChild : props.leftChild}
              </ChildrenDiv>

              <ChildrenDiv
                childType="right"
                side="left"
                variant={props.variant}
                whenShrink={props.whenShrink}
                >
                {props.reverse && isMobile ? props.leftChild : props.rightChild}
              </ChildrenDiv>
            </StyledChildrenLayout>

            <Rectangle
              rectangleColor={props.verticalLineColor}
              marginTop={props.partOfTLayout ? rectangleMarginArray.map(rem => `${rem * (-1)}rem`) : '0rem'}
              height={props.partOfTLayout ? rectangleMarginArray.map(rem => `calc(100% + ${rem}rem)`) : '100%'}
              type="vertical"
              />

            <StyledChildrenLayout
              paddingTop={props.padding || ['5.5625rem']}
              paddingBottom={props.padding || ['5.5625rem']}
              variant={props.variant}
              side="right"
              whenShrink={props.whenShrink}
              >
              <ChildrenDiv
                childType="left"
                side="right"
                variant={props.variant}
                whenShrink={props.whenShrink}
                >
                {props.reverse && isMobile ? props.rightChild : props.leftChild}
              </ChildrenDiv>

              <ChildrenDiv
                childType="right"
                side="right"
                variant={props.variant}
                whenShrink={props.whenShrink}
                >
                {props.reverse && isMobile ? props.leftChild : props.rightChild}
              </ChildrenDiv>
            </StyledChildrenLayout>
          </LowerStyledTStemLayout>
        </Row>
      </StyledTStemLayout>
    </Layout>
  );
};

TStemLayout.defaultProps = {
  leftLineColor: 'neutral.4',
  rightLineColor: 'neutral.4',
  verticalLineColor: 'neutral.4',
  variant: 'left',
  upperBg: 'neutral.0',
  lowerBg: 'neutral.0',
  whenShrink: 'right',
};

export default TStemLayout;
