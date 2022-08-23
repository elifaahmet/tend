import React, { useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';
import { color, border } from 'styled-system';

/* eslint-disable-next-line */
export interface PopoverProps extends PopoverContentProps {
  trigger: React.ReactNode;
  children: React.ReactElement;
  onHide?: (e) => void;
  onShow?: (e) => void;
  single?: boolean;
  scrollLock?: React.ReactNode;
  bg: string[];
  noPaddingDesktop?: boolean;
  borderBottomColor: string[];
}

export interface PopoverContentProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  extraTopSpace?: number;
}

const StyledPopover = styled.div<PopoverContentProps>`
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1440px) {
    position: relative;
    box-sizing: border-box;
    flex-flow: column nowrap;
  }
`;

const PopoverTrigger = styled.a`
  cursor: pointer;
`;
const StyledPopoverWrapper = styled.div``;

const PopoverContent = styled.div<PopoverContentProps & { isActive: boolean, noPaddingDesktop?: boolean }>`
  width: 100%;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  height: ${(props) => (props.isActive ? '100%' : '0')};
  transform: translateY(3rem);
  top: 0;
  right: 0;
  transition: height 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden !important;
  z-index: 99999;

  @media (min-width: 1440px) {
    ${color}
    box-sizing: border-box;
    height: auto;
    width: auto;
    position: absolute;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease 0ms;
    border-radius: 3px;
    min-width: 7rem;
    flex-flow: column nowrap;
    padding: ${props => props.noPaddingDesktop ? '0' : '5px'};
    top: ${props => (props.extraTopSpace ? props.extraTopSpace : 0) + 22 }px;
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    overflow-y: initial;
    overflow-x: initial !important;

    &:before {
      content: '';
      position: absolute;
      background: transparent none repeat scroll 0 0;
      border: 6px solid transparent;
      transition: all 0.3s ease 0ms;
      ${border}
      top: -20px;
      transform: translateX(-50%) translateY(8px);
      left: 50%;
    }

    ${(props) =>
    props.isActive
      ? css`
            visibility: visible;
            opacity: 1;
            transition-delay: 100ms;
          `
      : css`
            visibility: hidden;
            opacity: 0;
          `}
  }
`;

const PopoverStore = () => {
  let callback = null;

  const hide = () => {
    register(null);
  };

  const register = (cb) => {
    if (callback) {
      callback();
    }

    callback = cb;
  };

  const unregister = (cb) => {
    if (callback === cb) {
      callback = null;
    }
  };

  return {
    hide,
    register,
    unregister,
  };
};
const popoverStore = PopoverStore();

export function PopoverWrapper(props: { children: React.ReactElement }) {
  return <StyledPopoverWrapper {...props}>{props.children}</StyledPopoverWrapper>;
}

export function Popover(props: PopoverProps) {
  const { trigger, children, onHide, onShow, single, scrollLock } = props;
  const [isPopoverShown, setPopoverShown] = useState(false);

  const show = (e) => {
    single && popoverStore.register(hide);
    setPopoverShown(true);

    if (onShow) {
      onShow(e);
    }
  };

  const hide = (e) => {
    setPopoverShown(false);
    if (onHide) {
      onHide(e);
    }
  };

  const toggle = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPopoverShown) {
      hide(e);
      single && popoverStore.unregister(hide);
    } else {
      show(e);
    }
  };



  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isPopoverContent = contentRef.current.contains(event.target)
      const isPopoverTrigger = triggerRef.current.contains(event.target)
      if (contentRef.current && !isPopoverContent && !isPopoverTrigger) {
        setPopoverShown(false);
      }
    }

    const handleClosePopoverWithKey = event => {
      if (isPopoverShown && (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27)) {
        setPopoverShown(false);
      }
    };

    document.addEventListener("keyup", handleClosePopoverWithKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener("keyup", handleClosePopoverWithKey);
    };
  }, [isPopoverShown, triggerRef, contentRef]);

  return (
    <StyledPopover {...props}>
      {isPopoverShown && scrollLock ? scrollLock : null}

      <PopoverTrigger ref={triggerRef} onClick={toggle}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent ref={contentRef} isActive={isPopoverShown} {...props}>
        {children}
      </PopoverContent>
    </StyledPopover>
  );
}

export default Popover;
