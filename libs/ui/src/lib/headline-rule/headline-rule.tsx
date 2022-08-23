import React from 'react';

import styled from 'styled-components';

import H1 from '../typography/headlines/h1/h1';
import H2 from '../typography/headlines/h2/h2';
import H3 from '../typography/headlines/h3/h3';
import H4 from '../typography/headlines/h4/h4';
import H5 from '../typography/headlines/h5/h5';
import H6 from '../typography/headlines/h6/h6';
import Rule from '../rule/rule';

export interface HeadlineRuleProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h5Small';
  ruleColor?: string;
  color?: string;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';
  children: React.ReactNode;
}

const StyledRule = styled(Rule)`
  margin-top: 0.75rem;
`;

const StyledHeadlineRule = styled.div``;

const rulesMap = {
  h1: 12,
  h2: 12,
  h3: 12,
  h4: 8,
  h5: 4,
  h5Small: 8,
  h6: 2,
};

const renderHeadline = (props) => {
  if (props.variant === 'h1') {
    return <H1 color={props.color}>{props.children}</H1>;
  }
  if (props.variant === 'h2') {
    return <H2 color={props.color}>{props.children}</H2>;
  }
  if (props.variant === 'h3') {
    return <H3 color={props.color}>{props.children}</H3>;
  }
  if (props.variant === 'h4') {
    return <H4 color={props.color}>{props.children}</H4>;
  }
  if (props.variant === 'h5') {
    return (
      <H5 color={props.color} textTransform={props.textTransform}>
        {props.children}
      </H5>
    );
  }
  if (props.variant === 'h5Small') {
    return (
      <H5 variant="h5Small" color={props.color} textTransform={props.textTransform}>
        {props.children}
      </H5>
    );
  }
  if (props.variant === 'h6') {
    return <H6 color={props.color}>{props.children}</H6>;
  }
};

export const HeadlineRule = (props: HeadlineRuleProps) => {
  return (
    <StyledHeadlineRule>
      {renderHeadline(props)}
      <StyledRule ruleColor={props.ruleColor} size={rulesMap[props.variant]} />
    </StyledHeadlineRule>
  );
};

HeadlineRule.defaultProps = {
  color: 'neutral.4',
  ruleColor: 'neutral.4',
};

export default HeadlineRule;
