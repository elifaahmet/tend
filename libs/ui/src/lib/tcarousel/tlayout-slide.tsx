import React from 'react';

import { variant, space, layout } from 'styled-system'
import styled, { ThemeProps } from 'styled-components';

import Slider from '../carousel/slider';
import { SwipeDirection } from '../carousel/slidable';
import { canGoNext, canGoPrevious, getIndexForAction } from '../carousel/helpers';

import { TCarouselElement } from './tcarousel';
import Rectangle from '../rectangle/rectangle';
import { Row } from '../grid/grid';
import Layout from '../layout/layout';

const rectangleMarginArray = [1.5, 1.5, 2.25, 3];

export interface TLayoutSlideProps {
  upperChild?: (element: TCarouselElement, index: number) => React.ReactNode;
  leftChild?: (element: TCarouselElement, index: number) => React.ReactNode;
  rightChild?: (element: TCarouselElement, index: number) => React.ReactNode;
  innerMarginBottom?: Array<string>,
  variant?: 'center' | 'left' | 'right';
  /* When the variant is center & on mobile or table and the component shrinks on which way should the left and right children stay */
  whenShrink?: 'left' | 'right';
  leftLineColor?: string;
  rightLineColor?: string;
  verticalLineColor?: string;
  lowerBg?: string;
  upperBg?: string;
  elements: TCarouselElement[];
  previousActive: number;
  active: number;
  infiniteActive: number;
  setActive: (state: ActiveState) => void;
};

interface ActiveState { previousActive: number; active: number; infiniteActive: number; }

const activeSettings = {
  slidable: true,
  center: true,
  infinite: false,
  slidesToShow: 1,
  centerPadding: 0,
};


const LowerStyledTLayoutSlide = styled.div`
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
  innerMarginBottom?: Array<string>;
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
          paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`)  : 0,
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
            // paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            // paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
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
  variant: 'center' | 'left' | 'right';
  childType: 'left' | 'right';
  side: 'left' | 'right';
  whenShrink?: 'left' | 'right';
  children?: React.ReactNode;
};

const StyledChildrenDiv = styled.div<StyledChildrenDivProps>`
  display: ${(props: StyledChildrenDivProps) => {
      const variant = props.variant === 'center' ? props.whenShrink : props.variant;
      if(variant === props.side) {
        return 'flex';
      } else return 'none';
    }
  };
  @media (min-width: ${(props: StyledChildrenDivProps & ThemeProps<{ breakpoints: Array<string> }>) => (props.theme.breakpoints[2])}) {
    display: ${(props: StyledChildrenDivProps) => {
        if(props.childType === props.side) {
          return 'flex';
        } else return 'none';
      }
    }
  }
`;

const ChildrenDiv = (props: StyledChildrenDivProps) => {
  return (
    <StyledChildrenDiv
      {...props}
    >
      {props.children}
    </StyledChildrenDiv>
  )
}

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


export const TLayoutSlide = (props: TLayoutSlideProps) => {
  const childrenCount = props.elements.length;
  return (
    <Layout bg={props.lowerBg}>
      <Row paddingBottom="0rem">
        { props.upperChild &&
          <Wrapper>
            <SliderWrapper style={{ marginTop: '-1.75rem', marginBottom: '-3rem'}}>
              <Slider
                centerPadding={30}
                center
                previousActive={props.previousActive}
                active={props.active}
                infiniteActive={props.infiniteActive}
                onWindowResize={() => { return; }}
                onSwipe={(direction: SwipeDirection) => {
                  let newActive = props.active;

                  if (
                    direction === SwipeDirection.Left &&
                    canGoNext(props.active, childrenCount, activeSettings.slidesToShow, activeSettings.infinite)
                  ) {
                    newActive = props.active + 1;
                  } else if (direction === SwipeDirection.Right && canGoPrevious(props.active, activeSettings.infinite)) {
                    newActive = props.active - 1;
                  }

                  props.setActive(getIndexForAction(props.active, newActive, childrenCount));
                }}
                {...activeSettings}
              >
              { props.elements.map((el: TCarouselElement, index) =>
                  (props.upperChild(el, index)))}
              </Slider>
            </SliderWrapper>
          </Wrapper>
        }
        </Row>
        <Row paddingBottom="0rem">
          <LowerStyledTLayoutSlide>
            <StyledChildrenLayout
              variant={props.variant}
              side="left"
              whenShrink={props.whenShrink}
              >
              <Rectangle
                type="left"
                rectangleColor={props.leftLineColor}
                marginBottom={props.innerMarginBottom}
                marginTop={props.innerMarginBottom}
                />
            </StyledChildrenLayout>
            <StyledChildrenLayout
              variant={props.variant}
              side="right"
              whenShrink={props.whenShrink}
              >
              <Rectangle
                type="right"
                rectangleColor={props.rightLineColor}
                marginBottom={props.innerMarginBottom}
                marginTop={props.innerMarginBottom}
                />
            </StyledChildrenLayout>
          </LowerStyledTLayoutSlide>
        </Row>
        <Row paddingBottom="0rem">
          <LowerStyledTLayoutSlide>
            <StyledChildrenLayout
              variant={props.variant}
              side="left"
              whenShrink={props.whenShrink}
              >

                <ChildrenDiv
                  key={1}
                  childType="left"
                  side="left"
                  variant={props.variant}
                  whenShrink={props.whenShrink}
                />
                <ChildrenDiv
                  key={2}
                  childType="right"
                  side="left"
                  variant={props.variant}
                  whenShrink={props.whenShrink}
                  />
              </StyledChildrenLayout>
              <Rectangle
                rectangleColor={props.verticalLineColor}
                type="vertical"
                marginTop={props.innerMarginBottom ? '0rem' : rectangleMarginArray.map(rem => `${rem * (-1)}rem` )}
                height={props.innerMarginBottom ? props.innerMarginBottom.map(rem => `calc(100% + ${rem})` ) : rectangleMarginArray.map(rem => `calc(100% + ${rem}rem)`)}
              />
              <StyledChildrenLayout
                variant={props.variant}
                side="right"
                whenShrink={props.whenShrink}
                >
                <ChildrenDiv
                  key={3}
                  childType="left"
                  side="right"
                  variant={props.variant}
                  whenShrink={props.whenShrink}
                  />
                <ChildrenDiv
                  key={4}
                  childType="right"
                  side="right"
                  variant={props.variant}
                  whenShrink={props.whenShrink}
                  >
                    <Wrapper>
                    <SliderWrapper style={{ marginTop: '-1.75rem'}}>
                      <Slider
                        centerPadding={30}
                        center
                        previousActive={props.infiniteActive}
                        active={props.active}
                        infiniteActive={props.infiniteActive}
                        onWindowResize={() => { return; }}
                        onSwipe={(direction: SwipeDirection) => {
                          let newActive = props.active;

                          if (
                            direction === SwipeDirection.Left &&
                            canGoNext(props.active, childrenCount, activeSettings.slidesToShow, activeSettings.infinite)
                          ) {
                            newActive = props.active + 1;
                          } else if (direction === SwipeDirection.Right && canGoPrevious(props.active, activeSettings.infinite)) {
                            newActive = props.active - 1;
                          }

                            props.setActive(getIndexForAction(props.active, newActive, childrenCount));
                          }}
                          {...activeSettings}
                        >
                          { props.elements.map((el: TCarouselElement, index) =>
                          (
                            (props.rightChild && props.rightChild(el, index))
                          ))}
                      </Slider>
                    </SliderWrapper>
                    </Wrapper>
                </ChildrenDiv>
            </StyledChildrenLayout>
          </LowerStyledTLayoutSlide>
        </Row>
    </Layout>
  );
};

TLayoutSlide.defaultProps = {
  leftLineColor: 'neutral.4',
  rightLineColor: 'neutral.4',
  verticalLineColor: 'neutral.4',
  variant: 'left',
  upperBg: 'neutral.0',
  lowerBg: 'neutral.0',
  whenShrink: 'right',
};

export default TLayoutSlide;
