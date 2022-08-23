import React from 'react';

import styled from 'styled-components';
import { border, variant, color } from 'styled-system';

export interface RuleProps {
  ruleColor?: string;
  size: number;
  type?: 'horizontal' | 'vertical';
}

const StyledRule = styled.hr<
  RuleProps & {
    borderTopColor: string;
  }
>`
  ${color};
  ${border};
  margin-block-start: 0;
  margin-block-end: 0;
  width: 100%;
  height: inherit;
  ${(props) => props.type === 'vertical' && `transform: rotate(90deg);`}
  ${variant({
  prop: 'size',
  variants: {
    2: {
      borderTopWidth: '0.125rem',
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    },
    4: {
      borderTopWidth: '0.25rem',
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    },
    8: {
      borderTopWidth: '0.5rem',
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    },
    12: {
      borderTopWidth: '0.75rem',
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    },
    16: {
      borderTopWidth: ['0.5rem', '0.5rem', '0.75rem', '1rem'],
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    },
    24: {
      borderTopWidth: '1.5rem',
      borderTopStyle: 'solid',
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0
    }
  }
})};
`;

export const Rule = (props: RuleProps) => {
  return <StyledRule borderTopColor={props.ruleColor} {...props} />;
};

Rule.defaultProps = {
  ruleColor: 'neutral.4',
  type: 'horizontal',
};

export default Rule;

