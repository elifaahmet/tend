import { keyframes } from 'styled-components';
import { Breakpoint, CarouselProps } from './carousel';
import { SwipeDirection } from './slidable';

type SlideCountParams = {
  slideCount: number;
  slidesToShow: number;
  infinite?: boolean;
  center?: boolean;
};

type SliderStyleProps = {
  sliderWidth: number;
  slideCount: number;
  slidesToShow?: number;
  center?: boolean;
  centerPadding?: number;
  infinite?: boolean;
};

export const debounce = (func, wait = 100) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

export const getPreSlideCount = ({ slideCount, slidesToShow, infinite, center }: SlideCountParams) => {
  if (!infinite) {
    return 0;
  }

  return (slideCount < slidesToShow ? slidesToShow : slideCount) + (center ? 1 : 0);
};

export const getPostSlideCount = ({ slideCount, slidesToShow, infinite }: SlideCountParams) => {
  if (!infinite) {
    return 0;
  }
  return slideCount + slidesToShow + 1;
};

export const getTotalSlideCount = ({ slideCount, slidesToShow, infinite, center }: SlideCountParams) => {
  if (slideCount === 1) {
    return 1;
  }

  return (
    getPreSlideCount({
      slideCount,
      slidesToShow,
      infinite,
      center,
    }) +
    getPostSlideCount({
      slideCount,
      slidesToShow,
      infinite,
    }) +
    slideCount
  );
};

export const getIndexForAction = (current: number, target: number, childrenCount: number) => {
  let previousActive = current;
  let active = target;
  let infiniteActive = target;

  if (infiniteActive < 0) {
    infiniteActive += childrenCount;

    if (previousActive < 0) {
      previousActive = current += childrenCount;
      active = infiniteActive;
    }
  } else if (infiniteActive > childrenCount - 1) {
    infiniteActive -= childrenCount;

    if (previousActive > childrenCount - 1) {
      previousActive = current -= childrenCount;
      active = infiniteActive;
    }
  }

  return {
    previousActive,
    active,
    infiniteActive,
  };
};

export const canGoPrevious = (active: number, infinite?: boolean) => {
  if (infinite || active > 0) {
    return true;
  }

  return false;
};

export const canGoNext = (active: number, items: number, slidesToShow: number, infinite?: boolean) => {
  if (infinite || active < items - slidesToShow) {
    return true;
  }

  return false;
};


export const getSwipeDirection = (movementX: number) => {
  if (movementX < 0) {
    return SwipeDirection.Left;
  }

  return SwipeDirection.Right;
};

export const isValidSwipe = (movement: number, trigger: number) => trigger < Math.abs(movement);

export const isIndexFocused = (index: number, active: number) => index === active;

export const getSliderStyles = ({
  slideCount,
  slidesToShow = 1,
  center,
  centerPadding = 0,
  infinite,
  sliderWidth,
}: SliderStyleProps) => {
  let slideWidth;
  let slideOffset;
  let slidesToOffset = 0;
  let trackWidth;
  let centerPaddingAdj;

  const totalSlideCount = getTotalSlideCount({
    slideCount,
    slidesToShow,
    infinite,
    center,
  });

  if (sliderWidth) {
    centerPaddingAdj = center ? centerPadding * 2 : 0;

    slideWidth = Math.ceil((sliderWidth - centerPaddingAdj) / slidesToShow);

    if (infinite) {
      slidesToOffset = -getPreSlideCount({
        slideCount,
        slidesToShow,
        infinite,
        center,
      });

      if (slidesToShow >= slideCount) {
        slidesToOffset += 1 + slidesToShow - slideCount;
      }

      if (center) {
        slidesToOffset += Math.floor(slidesToShow / 2);
      }
    } else if (center) {
      slidesToOffset = Math.floor(slidesToShow / 2);

      if (slidesToShow !== 1) {
        const currentSlideFit = sliderWidth / slideWidth;
        const newSlidesToShow = currentSlideFit + slidesToOffset;
        slideWidth = Math.ceil((sliderWidth - centerPaddingAdj) / newSlidesToShow);
      }
    }

    slideOffset = slidesToOffset * slideWidth;
    trackWidth = totalSlideCount * slideWidth;
  }

  return {
    slideOffset,
    trackWidth,
    centerPadding,
    slideWidth: slideWidth || 0,
  };
};

const getTransform = (percentage: string, xValue: number) => `
    ${percentage}% {
        transform: translate3d(${xValue}px, 0px, 0px);
    }`;

export const getSlideAnimation = (
  previousActive: number,
  active: number,
  infiniteActive: number,
  slideWidth?: number,
  slideOffset?: number
) => {
  let start = 0;
  let end = 0;

  if (slideWidth && (slideOffset || slideOffset === 0)) {
    const slideDelta = -1 * slideWidth;
    start = previousActive * slideDelta + slideOffset;
    end = active * slideDelta + slideOffset;

    if (infiniteActive !== active) {
      end = infiniteActive * slideDelta + slideOffset;
      start = infiniteActive > previousActive ? end + slideDelta : end - slideDelta;
    }
  }

  const startTransform = getTransform('0', start);
  const endTransform = getTransform('100', end);

  const animation = `
        ${startTransform}
        ${endTransform}
    `;
  return keyframes`${animation}`;
};
