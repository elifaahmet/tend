import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from './slider';
import Arrow, { ArrowType } from './arrow';
import { SwipeDirection } from './slidable';
import { canGoNext, canGoPrevious, getIndexForAction } from './helpers';
import theme from '../theme';
import { Row, Col } from '../grid/grid';

export type CarouselProps = {
  slidesToShow?: number;
  center?: boolean;
  centerPadding?: number;
  infinite?: boolean;
  showArrows?: boolean;
  slidable?: boolean;
  scaleOnFocus?: number;
};

export type Breakpoint = {
  size: number;
  settings: CarouselProps;
};

const getCarouselBreakpoints = (count: number): Breakpoint[] => {
  const breakpoints = theme.breakpoints;

  const carouselBreakpoints: Breakpoint[] = [
    {
      size: parseInt(breakpoints[0].replace('px', '')),
      settings: {
        slidable: true,
        center: true,
        infinite: false,
        slidesToShow: 1,
        showArrows: true,
        //centerPadding: 30,
      },
    },
    {
      size: parseInt(breakpoints[1].replace('px', '')),
      settings: {
        slidable: true,
        center: false,
        infinite: false,
        slidesToShow: 2,
        showArrows: true,
      },
    }
  ];
  if (count === 3) {
    carouselBreakpoints.push(
      {
        size: parseInt(breakpoints[2].replace('px', '')),
        settings: {
          slidable: false,
          center: false,
          infinite: false,
          slidesToShow: 3,
          showArrows: false,
          centerPadding: 30,
        },
      },
    );
  } else if (count === 4) {
    carouselBreakpoints.push(
      {
        size: parseInt(breakpoints[2].replace('px', '')),
        settings: {
          slidable: false,
          center: false,
          infinite: false,
          slidesToShow: 4,
          showArrows: false,
        },
      },
    )
  }
  return carouselBreakpoints;
};

const matchBreakpoint = (size: number, settings: CarouselProps, childrenCount: number, breakpoints?: Breakpoint[]): CarouselProps => {
  if (breakpoints && breakpoints.length > 0) {
    const sortedBreakpoints = breakpoints
    .sort((breakpointA, breakpointB) => breakpointB.size - breakpointA.size);
    const breakpoint = sortedBreakpoints.find((findBreakpoint) => findBreakpoint.size <= size );
    return breakpoint?.settings || sortedBreakpoints[sortedBreakpoints.length - 1].settings;
  }

  return settings;
};

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Carousel: React.FC<CarouselProps> = ({
  showArrows = true,
  slidable = true,
  slidesToShow = 1,
  centerPadding = 0,
  scaleOnFocus = 1,
  center,
  infinite,
  children,
}) => {

  const childrenCount = React.Children.count(children);
  let count = 4;
    if(childrenCount < 4) count = 3;
  const breakpoints = getCarouselBreakpoints(count);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const carouselSettings = {
    center,
    infinite,
    slidesToShow,
    showArrows,
    slidable,
    centerPadding,
    scaleOnFocus,
  };
  const [activeSettings, setActiveSettings] = useState<CarouselProps>(breakpoints[0].settings);
  const [{ previousActive, active, infiniteActive }, setActive] = useState({
    previousActive: 0,
    active: 0,
    infiniteActive: 0,
  });

  const onWindowResize = (windowWidth: number) => {
    setActiveSettings(matchBreakpoint(windowWidth, carouselSettings, childrenCount, breakpoints ));
    setActive({
      previousActive: 0,
      active: 0,
      infiniteActive: 0,
    });
  }

  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Slider
          previousActive={previousActive}
          active={active}
          infiniteActive={infiniteActive}
          onWindowResize={onWindowResize}
          onSwipe={(direction: SwipeDirection) => {
            let newActive = active;

            if (
              direction === SwipeDirection.Left &&
              canGoNext(active, childrenCount, activeSettings.slidesToShow || slidesToShow, activeSettings.infinite)
            ) {
              newActive = active + 1;
            } else if (direction === SwipeDirection.Right && canGoPrevious(active, activeSettings.infinite)) {
              newActive = active - 1;
            }

            setActive(getIndexForAction(active, newActive, childrenCount));
          }}
          {...activeSettings}
        >
          {children}
        </Slider>
      </SliderWrapper>
      {activeSettings.showArrows && (
        <Row paddingTop="2rem" justify="flex-start">
          <Col>
            <Arrow
              type={ArrowType.previous}
              onClick={() => setActive(getIndexForAction(active, active - 1, childrenCount))}
              disabled={!canGoPrevious(active, activeSettings.infinite)}
            />
          </Col>
          <Col>
            <Arrow
              type={ArrowType.next}
              onClick={() => setActive(getIndexForAction(active, active + 1, childrenCount))}
              disabled={
                !canGoNext(active, childrenCount, activeSettings.slidesToShow || slidesToShow, activeSettings.infinite)
              }
            />
          </Col>
        </Row>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
