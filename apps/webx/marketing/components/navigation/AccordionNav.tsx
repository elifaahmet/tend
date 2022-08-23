/** @format */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import Link from 'next/link';
import { Grid, Paragraph, CTALink, Icon, Theme } from '@tend/ui';
import StyledMenuItem from './StyledMenuItem';

const StyledAccordionNavWrapper = styled.div``;

const StyledAccordionNavContent = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden !important;
  transition: max-height 0.6s ease;
  max-width: 100%;
  max-height: ${(props: StyldAccordionNavContentProps) => props.height};
  ${color}
`;

const StyledAccordionNavTitle = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    height: ${(props: StyledAccordionNavTitleProps) =>
      props.open ? '0.25rem' : '0'};
    width: 1.75rem;
    background-color: black;
    bottom: 0;
    left: 2%;
    transition: 0.5s height ease-in-out;

    @media (min-width: ${Theme.breakpoints[1]}) {
      width: 2.8rem;
      left: 7%;
    }

    @media (min-width: ${Theme.breakpoints[2]}) {
      width: 2.8rem;
      left: 13.5%;
    }
  }

  &:hover p,
  &:focus p {
    text-decoration: underline;
    color: #717171;
  }
`;

const StyledNavGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;

  p,
  i {
    display: inline;
  }
`;
const StyledCaret = styled(Icon)`
  transform: ${(props: StyledCaretProps) =>
    props.open ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transform-origin: center;
  transition: 0.35s transform ease-in-out;
`;
const StyledCTALink = styled(CTALink)`
  &:focus {
    & > i {
      padding-left: 1.5rem;
    }
  }
`;

interface MobileNavProps {
  open: boolean;
  title: string;
  order: number;
  meta: {
    background: string;
    color: string;
  };
  content: {
    title: string;
    slug: string;
  }[];
}

interface StyledCaretProps {
  open: boolean;
  fontSize: Array<string>;
  iconName: string;
}

interface StyldAccordionNavContentProps {
  height: string;
  bg: string;
}

interface StyledAccordionNavTitleProps {
  open: boolean;
}

export const Accordion = (props: MobileNavProps): JSX.Element => {
  const [active, setActiveState] = useState(false);
  const [setHeight, setHeightState] = useState('0px');
  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(!active);
    setHeightState(active ? '0px' : `${content.current.scrollHeight}px`);
  };

  const handleKeyDown = (e) => {
    const keyD = e.key !== undefined ? e.key : e.keyCode;
    if (
      keyD === 'Enter' ||
      keyD === 13 ||
      ['Spacebar', ' '].indexOf(keyD) >= 0 ||
      keyD === 32
    ) {
      e.preventDefault();
      toggleAccordion();
    }
  };

  useEffect(() => {
    if (!props.open) {
      setActiveState(false);
      setHeightState('0px');
    }
  }, [props.open]);

  return (
    <StyledAccordionNavWrapper>
      <StyledAccordionNavTitle
        role="button"
        tabIndex={props.open ? 0 : -1}
        open={active}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
      >
        <StyledMenuItem>
          <StyledNavGrid>
            <Paragraph fontSize={['1.5rem', '2rem', '2.5rem', '2.5rem']}>
              {props.title}
            </Paragraph>
            <StyledCaret
              open={active}
              fontSize={['1.5rem', '2rem', '2.5rem', '2.5rem']}
              iconName="Crumb"
            />
          </StyledNavGrid>
        </StyledMenuItem>
      </StyledAccordionNavTitle>

      <StyledAccordionNavContent
        ref={content}
        height={setHeight}
        bg={props.meta.background}
      >
        {props.content.map((el, i) => {
          return (
            <StyledMenuItem key={i}>
              <Grid>
                <Link href={el.slug}>
                  <StyledCTALink
                    tabIndex={active ? 0 : -1}
                    href={el.slug}
                    fontSize={['1.5rem', '1.5rem', '1.5rem', '1.5rem']}
                    color={`${props.meta.color}`}
                    variant="normal"
                  >
                    {el.title}
                  </StyledCTALink>
                </Link>
              </Grid>
            </StyledMenuItem>
          );
        })}
      </StyledAccordionNavContent>
    </StyledAccordionNavWrapper>
  );
};

export default Accordion;
