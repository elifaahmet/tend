/** @format */

import React from 'react';
import styled from '@emotion/styled';

import { ColorName } from '@tend/shared/design/tokens';
import { Anchor, AnchorProps } from '@tend/shared/design/ui-kit';

export interface LanguageSwitcherProps {
  languages: Array<string>;
  onLanguageSelect: (language: string) => void;
  selected: string;
  color: ColorName;
}

interface StyledAnchorProps extends AnchorProps {
  selected: boolean;
}

const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  &:hover {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
    opacity: 1;
  }
  &:active {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
    opacity: 1;
  }
  &:focus {
    text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
    text-decoration: underline;
    opacity: 1;
  }
  opacity: ${(props: StyledAnchorProps) => (props.selected ? 1 : 0.3)};
`;

const StyledLanguageSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-inline-end: 0.8rem;
  }
  & :last-child {
    margin-inline-end: 0rem;
  }
`;

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  return (
    <StyledLanguageSwitcher>
      {props.languages.map((language: string) => (
        <StyledAnchor
          uppercase
          underline
          key={language}
          onClick={() => {
            props.onLanguageSelect(language);
          }}
          selected={props.selected === language}
          color={props.color}
        >
          {language}
        </StyledAnchor>
      ))}
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
