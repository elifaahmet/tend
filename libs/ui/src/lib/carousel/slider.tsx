import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CarouselProps } from './carousel';
import Track from './track';
import Slide from './slide';
import Slidable, { SwipeDirection } from './slidable';
import { getPreSlideCount, getSliderStyles, isIndexFocused } from './helpers';

type SliderProps = CarouselProps & {
  previousActive: number;
  active: number;
  infiniteActive: number;
  onSwipe: (direction: SwipeDirection) => void;
};

const Slider = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
`;

const renderSlides = (
  children: React.ReactNode,
  slideCount: number,
  slideWidth = 0,
  slidesToShow: number,
  active: number,
  scaleOnFocus?: number,
  infinite?: boolean,
  center?: boolean
) => {
  const slides: React.ReactNode[] = [];
  const preClones: React.ReactNode[] = [];
  const postClones: React.ReactNode[] = [];

  React.Children.forEach(children, (child, index) => {
    slides.push(
      <Slide
        width={slideWidth}
        key={`slide${index}`}
        focused={isIndexFocused(index, active)}
        scaleOnFocus={scaleOnFocus}
      >
        {child}
      </Slide>
    );

    if (infinite) {
      const preCloneNo = slideCount - index;

      if (
        preCloneNo <=
        getPreSlideCount({
          slideCount,
          slidesToShow,
          infinite,
          center,
        })
      ) {
        preClones.push(
          <Slide width={slideWidth} key={`slide-pre${-preCloneNo}`}>
            {child}
          </Slide>
        );
      }

      const postCloneNo = index + slideCount;

      postClones.push(
        <Slide width={slideWidth} key={`slide-post${postCloneNo}`}>
          {child}
        </Slide>
      );
    }
  });
  return [...preClones, ...slides, ...postClones];
};

const Component: React.FC<SliderProps & { onWindowResize: (widnowWidth: number) => void }> = ({
  children,
  previousActive,
  active,
  infiniteActive,
  slidesToShow = 1,
  center,
  centerPadding,
  infinite,
  onWindowResize,
  slidable,
  scaleOnFocus,
  onSwipe,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideCount = React.Children.count(children);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [styles, setStyles] = useState(
    getSliderStyles({
      slideCount,
      slidesToShow,
      center,
      centerPadding,
      infinite,
      sliderWidth,
    })
  );

  const handleWindowResize = () => {
    if(windowWidth !== window.innerWidth){
      setWindowWidth(window.innerWidth);
      setSliderWidth(sliderRef.current ? Math.ceil(sliderRef.current.offsetWidth) : 0);
    }
  };

  useEffect(() => {
    onWindowResize(windowWidth);
  }, [windowWidth]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    setStyles(
      getSliderStyles({
        slideCount,
        slidesToShow,
        center,
        centerPadding,
        infinite,
        sliderWidth,
      })
    );
  }, [slideCount, slidesToShow, center, centerPadding, infinite, sliderWidth]);

  return (
    <Slider ref={sliderRef}>
      <Slidable slidable={slidable} xMovementTrigger={styles.slideWidth / 2} onSwipe={onSwipe}>
        <Track
          width={styles.trackWidth}
          center={center}
          centerPadding={centerPadding}
          previousActive={previousActive}
          active={active}
          infiniteActive={infiniteActive}
          slideWidth={styles.slideWidth}
          slideOffset={styles.slideOffset}
        >
          {renderSlides(
            children,
            slideCount,
            styles.slideWidth,
            slidesToShow,
            infiniteActive,
            scaleOnFocus,
            infinite,
            center
          )}
        </Track>
      </Slidable>
    </Slider>
  );
};

export default Component;
