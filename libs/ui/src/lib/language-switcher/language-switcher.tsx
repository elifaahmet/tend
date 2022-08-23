import React from 'react';
import styled from 'styled-components';

import { Label, LabelProps } from '../typography/label/label';

export interface LanguageSwitcherProps {
  languages: Array<string>,
  onLanguageSelect: (language: string) => void,
  selected: string,
  color: string,
};

interface StyledLabelProps extends LabelProps{
  selected: boolean;
};

const StyledLabel = styled(Label)<StyledLabelProps>`
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  &:hover {
    opacity: 1.0;
  }
  opacity: ${(props: StyledLabelProps) => props.selected ? 1 : 0.3}
`

const StyledLanguageSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 0.8rem;
  }
  & :last-child {
    margin-right: 0rem;
  }
`;

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {

  return (
    <StyledLanguageSwitcher>
      {props.languages.map((language: string) => (
        <StyledLabel
          key={language}
          variant="b3U"
          onClick={() => { props.onLanguageSelect(language); }}
          selected={props.selected === language}
          color={props.color}
        >
          { language }
        </StyledLabel>
      ))}
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
