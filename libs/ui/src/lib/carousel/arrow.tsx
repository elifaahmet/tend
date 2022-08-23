import React from 'react';
import styled from 'styled-components';

import Icon from '../icon/icon';

export enum ArrowType {
  previous = 'previous',
  next = 'next',
}

type ArrowProps = {
  type: ArrowType;
  disabled?: boolean;
  onClick: () => void;
  color?: string;
  fontSize? : string | Array<string>;
};

const Arrow = styled.button<Partial<ArrowProps>>`
  border-width: 0;
  outline: 0;
  display: flex;
  background-color: transparent;
  padding: 1rem;
  cursor: pointer;
`;

const Component: React.FC<ArrowProps> = ({ fontSize = "1.8rem", color = "neutral.4", type, onClick, disabled }) =>
  type === ArrowType.previous ? (
    <Arrow disabled={disabled} onClick={onClick} data-testid="arrow-previous">
      <Icon iconName="ArrowLeft" svgWidth={fontSize} svgHeight={fontSize} color={disabled ? "neutral.3" : color} />
    </Arrow>
  ) : (
    <Arrow disabled={disabled} onClick={onClick} data-testid="arrow-next">
      <Icon iconName="ArrowRight" svgWidth={fontSize} svgHeight={fontSize} color={disabled ? "neutral.3" : color} />
    </Arrow>
  );

export default Component;
