/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { TCarousel, TCarouselElement } from '@tend/ui';

interface TElement {
  map(arg0: (el: TElement) => TCarouselElement): TCarouselElement[];
  image: string;
  headline: string;
  body: string;
  cta?: {
    url: string;
    label: string;
  };
}

export const CarouselT = () => {
  const { t } = useTranslation('tend-at-work');
  const tElements: TElement = t('carousel-t.tElements', {
    returnObjects: true,
  });

  const elements = tElements.map((el: TElement) => ({
    title: el.headline,
    body: el.body,
    imageUrl: el.image,
    cta: {
      label: el.cta.label,
      href: el.cta.url,
    },
  }));

  return (
    <TCarousel
      elements={elements}
      upperBg="defaultGreen"
      lowerBg="defaultGreen"
      color="white"
      leftLineColor="defaultRed"
      rightLineColor="defaultMagenta"
      verticalLineColor="defaultOrange"
    />
  );
};

export default CarouselT;
