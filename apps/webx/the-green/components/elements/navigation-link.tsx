import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Theme, Anchor, AnchorProps } from '@tend/ui';

interface Props {
  href: string;
  color?: string;
  value?: string;
  fontSize?: string | Array<string>;
}

const StyledAnchor = styled(Anchor)`
  text-transform: none;
  &:visited {
    color: ${(props: AnchorProps) => Theme.colors[props.color]};
    text-transform: none;
  }
`;

export const NavigationLink  = (props: Props) => {
  const { color, href, value, fontSize } = props;
  return (
    <StyledAnchor color={color} fontSize={fontSize} href={href}>
      {value}
    </StyledAnchor>

   )
}

NavigationLink.defaultProps = {
  color: 'offWhite',
}

export default NavigationLink;

