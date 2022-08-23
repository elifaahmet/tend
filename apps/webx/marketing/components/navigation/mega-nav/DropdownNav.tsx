/** @format */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { color, variant } from 'styled-system';
import Link from 'next/link';
import {
  Paragraph,
  CTALink,
  Theme,
  Layout,
  CTALinkProps,
  Anchor,
} from '@tend/ui';
import StyledMenuItem from './StyledMenuItem';
import Space from '../../layout/space';

const StyledDropdownNavWrapper = styled.div<StyledDropdownNavWrapperProps>`
  &:focus {
    outline: none;
  }
  &:focus p,
  &:focus-within p {
    text-decoration: underline;
    color: ${Theme.colors.darkGray};
  }
  & .dropDownSubMenu {
    padding-top: 0;
    padding-bottom: 0;
  }

  & .layoutDiv {
    height: 0;
  }

  &:focus .dropDownSubMenu,
  &:focus-within .dropDownSubMenu {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &:focus .layoutDiv,
  &:focus-within .layoutDiv {
    height: ${(props: StyledDropdownNavWrapperProps) =>
      props.numberOfElements > 4
        ? '11rem'
        : props.numberOfElements > 0
        ? '7.5rem'
        : 0};
  }

  &:focus .dropdownNavTitle,
  &:focus-within .dropdownNavTitle {
    &::before {
      height: ${(props: StyledDropdownNavWrapperProps) =>
        props.numberOfElements > 0 ? '0.25rem' : 0};
    }
  }
`;

const StyledDropdownNavContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 1rem;
  align-items: center;
`;

const StyledLayoutDiv = styled.div<StyledLayoutDivProps>`
  position: absolute;
  width: 100vw;
  left: 0;
  right: 0;
  z-index: 10000;
  display: block;
  overflow: hidden;
  transition: 0.3s height linear;
  ${color};
`;

const StyledDropdownNavTitle = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    height: 0;
    width: calc(100% - 2rem);
    background-color: ${Theme.colors.black};
    bottom: 0;
    left: 1rem;
    margin-bottom: -2rem;
    transition: 0.3s height linear;
  }

  &:focus p {
    @media (min-width: ${Theme.breakpoints[2]}) {
      text-decoration: underline;
      color: ${Theme.colors.black};
    }
  }
`;

const StyledTitle = styled(Paragraph)`
  display: block;
  white-space: nowrap;
  color: ${Theme.colors.black};
  &:focus {
    text-decoration: underline;
    color: ${Theme.colors.darkGray};
    outline: none;
  }
`;

const MenuAnchor = styled(Anchor)`
  text-transform: uppercase;
  display: block;
  white-space: nowrap;
  color: black;
  &:visited {
    color: ${Theme.colors.black};
  }
  &:focus {
    text-decoration: underline;
    color: ${Theme.colors.darkGray};
    outline: none;
  }
`;

const StyledSubMenuLink = styled(CTALink)<CTALinkProps>`
  ${(props: CTALinkProps) =>
    variant({
      variants: {
        normal: {
          fontWeight: 'normal',
          fontSize: '1.25rem',
          '&:focus': {
            '& :last-child': {
              paddingLeft: '1.5rem',
            },
          },
        },
      },
    })}
`;

interface DropdownNavProps {
  title: string;
  href: string;
  meta: {
    background: string;
    color: string;
  };
  content: {
    title: string;
    slug: string;
  }[];
}

interface StyledLayoutDivProps {
  bg?: string;
  height?: string;
}

interface StyledDropdownNavWrapperProps {
  numberOfElements: number;
}

const MenuItem = styled.div`
  line-height: 1.2;
  padding: 1rem 1rem;
  text-align: left;
`;

export const Dropdown = (props: DropdownNavProps): JSX.Element => {
  const ref = useRef(null);
  const handleMouseOver = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };
  const handleMouseOut = () => {
    if (ref.current) {
      ref.current.blur();
    }
  };
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseover', handleMouseOver, false);
      ref.current.addEventListener('mouseout', handleMouseOut, false);
      return () => {
        if (ref && ref.current) {
          ref.current.removeEventListener('mouseover', handleMouseOver);
          ref.current.removeEventListener('mouseout', handleMouseOut);
        }
      };
    }
  }, []);
  if (props.content.length > 0) {
    return (
      <StyledDropdownNavWrapper
        ref={ref}
        numberOfElements={props.content.length}
        role="button"
        tabIndex={0}
        onMouseDown={(event) => {
          event.preventDefault();
          return;
        }}
      >
        <StyledDropdownNavTitle className="dropdownNavTitle">
          <StyledMenuItem>
            <StyledTitle fontSize="1rem" textTransform="uppercase">
              {props.title}
            </StyledTitle>
          </StyledMenuItem>
        </StyledDropdownNavTitle>
        <StyledLayoutDiv className="layoutDiv">
          <Layout bg="defaultTransparent">
            <Space marginBottom="2rem"></Space>
          </Layout>
          <Layout bg={props.meta?.background || 'defaultTransparent'}>
            <StyledDropdownNavContent
              className="dropDownSubMenu"
              role="navigation"
              aria-label={props.title}
            >
              {props.content.slice(0, props.content.length).map((el, i) => {
                return (
                  <MenuItem key={i}>
                    <Link href={el.slug}>
                      <StyledSubMenuLink
                        tabIndex={0}
                        className="styledSubMenuLink"
                        aria-label={el.slug}
                        href={el.slug}
                        fontSize="1.25rem"
                        textTransform="none"
                        color={`${props.meta.color}`}
                        variant="normal"
                      >
                        {el.title}
                      </StyledSubMenuLink>
                    </Link>
                  </MenuItem>
                );
              })}
            </StyledDropdownNavContent>
          </Layout>
        </StyledLayoutDiv>
      </StyledDropdownNavWrapper>
    );
  } else {
    return (
      <StyledDropdownNavWrapper
        numberOfElements={props.content.length}
        role="button"
        tabIndex={-1}
        onMouseDown={(event) => {
          event.preventDefault();
          return;
        }}
      >
        <StyledDropdownNavTitle className="dropdownNavTitle">
          <StyledMenuItem>
            <Link href={props.href}>
              <MenuAnchor
                ref={ref}
                tabIndex={0}
                href={props.href}
                fontSize="1rem"
                textTransform="uppercase"
                color="neutral.4"
                aria-label={props.href}
                hoverColor="neutral.3"
              >
                {props.title}
              </MenuAnchor>
            </Link>
          </StyledMenuItem>
        </StyledDropdownNavTitle>
        <StyledLayoutDiv className="layoutDiv">
          <Layout bg="defaultTransparent">
            <Space marginBottom="2rem"></Space>
          </Layout>
          <Layout bg={props.meta?.background || 'defaultTransparent'}>
            <StyledDropdownNavContent
              className="dropDownSubMenu"
              role="navigation"
              aria-label={props.title}
            >
              {props.content.slice(0, props.content.length).map((el, i) => {
                return (
                  <MenuItem key={i}>
                    <Link href={el.slug}>
                      <StyledSubMenuLink
                        tabIndex={0}
                        className="styledSubMenuLink"
                        aria-label={el.slug}
                        href={el.slug}
                        fontSize="1.25rem"
                        textTransform="none"
                        color={`${props.meta.color}`}
                        variant="normal"
                      >
                        {el.title}
                      </StyledSubMenuLink>
                    </Link>
                  </MenuItem>
                );
              })}
            </StyledDropdownNavContent>
          </Layout>
        </StyledLayoutDiv>
      </StyledDropdownNavWrapper>
    );
  }
};

export default Dropdown;
