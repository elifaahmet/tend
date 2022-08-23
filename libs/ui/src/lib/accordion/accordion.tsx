import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { get } from '@styled-system/core';
import { color, system, compose, typography } from 'styled-system';

import theme from '../theme';
import Rule from '../rule/rule';
import Icon from '../icon/icon';

export interface AccordionProps {
  onToggle?: () => void;
  multipleToggle?: boolean;
  children: React.ReactNode;
  titleStyle?: AccordionTitleStyle;
  style?: AccordionStyle;
}

export interface AccordionTitleStyle {
  backgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string | Array<string>;
}

export interface AccordionStyle {
  arrowIcon?: string;
  arrowToggleIcon?: string;
  backgroundColor: string;
  separatorColor: string;
  separatorHeight: number;
}

export interface AccordionItemProps {
  id: string;
  onToggle?: (id: string, content: unknown) => void;
  title: string;
  getHeight?: (id: string, content: { current: { scrollHeight: number } }) => string;
  children: React.ReactNode;
  style?: AccordionStyle;
  getVisible?: (id: string) => boolean;
  getIcon?: (id: string) => React.ReactElement;
  titleStyle?: AccordionTitleStyle;
}

const StyledAccordionItem = styled.div<AccordionItemProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props: AccordionItemProps) => get(theme, `colors.${props.style?.backgroundColor}`)};
  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const AccordionButton = styled.button`
  ${typography}
  ${compose(
    system({
      fontSize: {
        property: 'fontSize',
      },
    }),
    color
  )}
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  .active {
    ${compose(
      system({
        color: {
          property: 'color',
        },
      }),
      color
    )}
  }

  &:hover {
    ${compose(
      system({
        color: {
          property: 'color',
        },
      }),
      color
    )}
  }
`;

const AccordionTitle = styled.p`
  ${typography};
  text-align: left;
  line-height: 120%;
  display: ${(props: { visible: boolean }) => (props.visible ? '' : 'none')};
  font-weight: bold;
`;

const AccordionContent = styled.div<AccordionStyle & { height: string }>`
  overflow: auto;
  transition: max-height 0.6s ease;
  height: ${(props: { height: string }) => props.height};
  background-color: ${(props: { backgroundColor: string }) => get(theme, `colors.${props.backgroundColor}`)};
`;

const AccordionText = styled.div`
  padding: 1rem;
`;

const AccordionIcon = styled.div`
  margin-left: auto;
`;

const StyledAccordion = styled.div<AccordionProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${(props: AccordionProps) => get(theme, `colors.${props.style?.backgroundColor}`)};
  padding-bottom: 1rem;
`;

const Accordion = (props: AccordionProps) => {
  const { children, multipleToggle } = props;
  const [activeTabIds, setActiveTabIds] = useState([]);
  const [activeTabId, setActiveTabId] = useState('-1');

  const onToggle = (id: string, content: unknown) => {
    if (multipleToggle) {
      const newActiveTabIds =
        activeTabIds.indexOf(id) > -1 ? activeTabIds.filter((tabId) => tabId !== id) : [...activeTabIds, id];

      setActiveTabIds(newActiveTabIds);
    } else {
      setActiveTabId(id);
    }
  };

  const getHeight = (id: string, content: { current: { scrollHeight: number } }): string => {
    if (multipleToggle && activeTabIds.indexOf(id) > -1) {
      return `${content.current.scrollHeight}px`;
    } else if (activeTabId === id) {
      return `${content.current.scrollHeight}px`;
    } else {
      return '0px';
    }
  };

  const getVisible = (id: string): boolean => {
    if (multipleToggle && activeTabIds.indexOf(id) > -1) {
      return false;
    } else if (activeTabId === id) {
      return false;
    } else {
      return true;
    }
  };

  const getIcon = (id: string): React.ReactElement => {
    let iconName = '';

    if (multipleToggle && activeTabIds.indexOf(id) > -1) {
      iconName = props.style?.arrowToggleIcon;
    } else if (activeTabId === id) {
      iconName = props.style?.arrowToggleIcon;
    } else {
      iconName = props.style?.arrowIcon ? props.style.arrowIcon : '';
    }

    return <Icon iconName={iconName} />;
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        onToggle,
        getHeight,
        getVisible,
        getIcon,
      });
    }
    return child;
  });

  return (
    <StyledAccordion {...props}>
      {childrenWithProps}
    </StyledAccordion>
    );
};

const AccordionItem = (props: AccordionItemProps) => {
  const { id, onToggle, title, getHeight, getVisible, getIcon, children, style, titleStyle } = props;

  const content = useRef(null);
  return (
    <StyledAccordionItem {...props}>
      <AccordionContent {...style} ref={content} backgroundColor={style.backgroundColor} height={getHeight(id, content)}>
        <AccordionText>
          <AccordionTitle {...titleStyle} visible={true}>{title}</AccordionTitle>
          {children}
        </AccordionText>
      </AccordionContent>
      <AccordionButton {...titleStyle} onClick={() => onToggle(id, content)}>
        <AccordionTitle {...titleStyle} visible={getVisible(id)}>
          {title}
        </AccordionTitle>
        <AccordionIcon>{getIcon(id)}</AccordionIcon>
      </AccordionButton>
      <Rule size={style.separatorHeight} ruleColor={style.separatorColor} />
    </StyledAccordionItem>
  );
};
const defaultProps = {
  style: {
    arrowIcon: 'ArrowDown',
    arrowToggleIcon: 'ArrowUp',
    backgroundColor: 'defaultYellow',
    separatorHeight: 2,
    separatorColor: 'neutral.4',
    separatorHoverColor: 'defaultYellow',
  },
  titleStyle: {
    backgroundColor: 'yellow.0',
    color: 'neutral.4',
    fontFamily: 'Pilat',
    fontSize: ['b2Small', 'b2Medium', 'b2Large'],
  },
};
Accordion.defaultProps = defaultProps;
AccordionItem.defaultProps = defaultProps;

export { Accordion, AccordionItem };
