/** @format */

import React, { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import RightNav from './RightNav';

interface BurgerProps {
  open: boolean;
}

const Div = styled.div`
  align-self: flex-end;
`;

const StyledBurgerDiv = styled.div`
  align-self: flex-end;
  &:focus {
    outline: none;
  }
  &:focus > div {
    outline: 1px auto -webkit-focus-ring-color;
  }
`;
const StyledBurger = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  padding: 0;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  overflow: display;
  outline: none;
  &:focus: {
    outline: none;
  }

  div {
    width: 1.75rem;
    height: 0.25rem;
    background-color: black;
    transform-origin: 1.2%;
    transition: all 0.3s linear;
    overflow: display;

    &:nth-child(1) {
      transform: ${(props: BurgerProps) =>
        props.open ? 'translateY(-0.02rem) rotate(44deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${(props: BurgerProps) =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props: BurgerProps) => (props.open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${(props: BurgerProps) =>
        props.open ? 'translateY(0.02rem) rotate(-46deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, _setOpen] = useState(false);
  const openStateRef = React.useRef(open);
  const setOpen = (data) => {
    openStateRef.current = data;
    _setOpen(data);
  };

  const handleMenuState = () => {
    setOpen(!open);
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
      setOpen(!open);
    }
  };

  const ref = useRef(null);

  const handleTab = (e) => {
    const focusableEls = ref.current.querySelectorAll(
      'a:not([tabindex="-1"]), button:not([tabindex="-1"]), input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    if (openStateRef.current) {
      if (e.key === 'Tab' || e.keyCode === 9) {
        if (e.shiftKey) {
          /* shift + tab */ if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
    } else if (e.key === 'Tab' || e.keyCode === 9) {
      if (document.activeElement === firstFocusableEl) {
        firstFocusableEl.blur();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (open) {
      Router.events.on('routeChangeStart', handleMenuState);
    }
    ref.current.addEventListener('keydown', handleTab);
    return () => {
      if (ref && ref.current)
        ref.current.removeEventListener('keydown', handleTab);
    };
  }, []);

  return (
    <Div ref={ref}>
      <StyledBurgerDiv
        role="button"
        tabIndex={0}
        onClick={() => handleMenuState()}
        onKeyDown={handleKeyDown}
      >
        <StyledBurger tabIndex={-1} open={open}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledBurgerDiv>
      <RightNav open={open} />
    </Div>
  );
};
export default Burger;
