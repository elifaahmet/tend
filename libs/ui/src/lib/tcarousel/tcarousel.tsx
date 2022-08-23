import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import Arrow, { ArrowType } from '../carousel/arrow';
import { canGoNext, canGoPrevious, getIndexForAction, debounce } from '../carousel/helpers';

import theme from '../theme';
import H3 from '../typography/headlines/h3/h3';
import Paragraph from '../typography/paragraph/paragraph';
import Image from '../image/image';
import TLayoutSlide from './tlayout-slide';
import CTALink, { CTALinkProps } from '../buttons/ctalink/ctalink';
import Link from 'next/link';


const activeSettings = {
  slidable: true,
  center: true,
  infinite: false,
  slidesToShow: 1,
  centerPadding: 0,
};


export interface TCarouselElement {
  title?: string;
  body?: string;
  imageUrl?: string;
  cta?: CTALinkProps;
}

export interface TCarouselProps {
  elements: TCarouselElement[];
  innerMarginBottom?: Array<string>;
  /* When the variant is center & on mobile or table and the component shrinks on which way should the left and right children stay */
  leftLineColor?: string;
  rightLineColor?: string;
  verticalLineColor?: string;
  lowerBg?: string;
  upperBg?: string;
  color?: string;
};

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  padding-right: 1rem;
  width: 100%;
  height: 100%;
`;

const UpperDiv = styled.div`
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  padding-right: 1rem;
  width: 100%;
  height: 34%;
  align-items: flex-start;
  @media (min-width: ${theme.breakpoints[0]}) {
    > * {
      margin-bottom: 1.5rem;
    }
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2rem;
    }
  }
}

`;

const GridRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

interface TextOverlayProps {
  bg: string;
}

const TextOverlay = styled.div<TextOverlayProps>`
  ${color}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.4rem;
  position: absolute;
  bottom: -4rem;
  right: 15%;
  height: 20rem;
  width: 57%;
  z-index: 2;
`;

const StyledImage = styled(Image)`
  object-position: 0% 0%;
  max-width: 100%;
`;



export const TCarousel: React.FC<TCarouselProps> = (props: TCarouselProps) => {
  const childrenCount = props.elements.length;

  const [{ previousActive, active, infiniteActive }, setActive] = useState({
    previousActive: 0,
    active: 0,
    infiniteActive: 0,
  });
  const [isMobile, setIsMobile] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    if(windowWidth >= parseInt(theme.breakpoints[2].replace('px', ''))) setIsMobile(false);
    else if(windowWidth < parseInt(theme.breakpoints[2].replace('px', ''))) setIsMobile(true);
  }, [windowWidth]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const getChild = (el: TCarouselElement, index) => {
    return (
      <GridColumnDiv style={{ alignItems: 'flex-start' }} key={index}>
        <UpperDiv>
          <H3 color={props.color}>{el.title}</H3>
          <div>
            <Paragraph color={props.color} variant="b2">{el.body}</Paragraph>
          </div>
        </UpperDiv>
        {el.cta &&
          <Link href={el.cta.href}>
            <CTALink color={props.color} variant="large" textTransform="uppercase" href={el.cta.href}>
              {el.cta.label}
            </CTALink>
          </Link>
        }
        <div style={{ paddingBottom: "1rem", paddingTop: "1rem", width: '100%' }}>
          <StyledImage src={el.imageUrl} imgWidth={[`${(windowWidth/386)*17}rem`]} imgHeight={[`${(windowWidth/386)*22.1}rem`]} resizeMode="cover" />
        </div>
        <GridRowDiv style={{ alignContent: 'flex-end', justifyContent: 'flex-end', marginBottom: '4rem' }}>
          <Arrow
            fontSize={["2rem", "2rem", "4rem", "4rem"]}
            color={props.color}
            type={ArrowType.previous}
            onClick={() => setActive(getIndexForAction(active, active - 1, childrenCount))}
            disabled={!canGoPrevious(active, activeSettings.infinite)}
          />
          <Arrow
            fontSize={["2rem", "2rem", "4rem", "4rem"]}
            color={props.color}
            type={ArrowType.next}
            onClick={() => setActive(getIndexForAction(active, active + 1, childrenCount))}
            disabled={
              !canGoNext(active, childrenCount, activeSettings.slidesToShow, activeSettings.infinite)
            }
          />
        </GridRowDiv>
      </GridColumnDiv>
    );
  }

  const getUpperChild = (el: TCarouselElement, index) => {
    return (
      <GridColumnDiv key={index} style={{ zIndex: 1, position: 'relative' }}>
        <Image src={el.imageUrl} imgWidth='100%' resizeMode="cover" />
        <TextOverlay bg="defaultMagenta"><H3>{el.title}</H3></TextOverlay>
      </GridColumnDiv>
    );
  }

  const getRightChild = (el: TCarouselElement, index) => {
    return (
      <GridRowDiv key={index} style={{ justifyContent: "space-around", paddingBottom: "4rem", marginTop: "0rem"}}>
       <GridColumnDiv style={{ width: '70%' }}>
          <div style={{ height: '14rem' }}>
            <Paragraph marginBottom="2rem" color={props.color} variant="b2">{el.body}</Paragraph>
          </div>
          {el.cta &&
            <Link href={el.cta.href}>
              <CTALink color={props.color} variant="large" textTransform="uppercase" href={el.cta.href}>
                {el.cta.label}
              </CTALink>
            </Link>
          }
        </GridColumnDiv>
        <GridRowDiv style={{ width: '30%', justifyContent: "space-around"}}>
          <Arrow
            fontSize="3rem"
            color={props.color}
            type={ArrowType.previous}
            onClick={() => setActive(getIndexForAction(active, active - 1, childrenCount))}
            disabled={!canGoPrevious(active, activeSettings.infinite)}
          />
          <Arrow
            fontSize="3rem"
            color={props.color}
            type={ArrowType.next}
            onClick={() => setActive(getIndexForAction(active, active + 1, childrenCount))}
            disabled={
              !canGoNext(active, childrenCount, activeSettings.slidesToShow, activeSettings.infinite)
            }
          />
        </GridRowDiv>
      </GridRowDiv>
    );
  }

  return (
    isMobile
    ?
      <TLayoutSlide
        elements={props.elements}
        variant="right"
        rightChild={getChild}
        upperBg={props.upperBg}
        lowerBg={props.lowerBg}
        leftLineColor={props.leftLineColor}
        rightLineColor={props.rightLineColor}
        verticalLineColor={props.verticalLineColor}
        active={active}
        previousActive={previousActive}
        infiniteActive={infiniteActive}
        setActive={setActive}
      />
    :
      <TLayoutSlide
        elements={props.elements}
        variant="right"
        upperChild={getUpperChild}
        rightChild={getRightChild}
        upperBg={props.upperBg}
        lowerBg={props.lowerBg}
        leftLineColor={props.leftLineColor}
        rightLineColor={props.upperBg}
        verticalLineColor={props.verticalLineColor}
        active={active}
        previousActive={previousActive}
        infiniteActive={infiniteActive}
        setActive={setActive}
      />
  );
};

export default TCarousel;
