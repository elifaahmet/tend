/** @format */

import React, { AnchorHTMLAttributes } from 'react';
import { Image } from '@tend/shared/design/ui-kit';
import styled from '@emotion/styled';

export interface AppStoreBadgeProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src?: string;
}

const StyledAppStoreBadge = styled.a<AppStoreBadgeProps>`
  cursor: pointer;
`;

export const AppStoreBadge = (props: AppStoreBadgeProps) => {
  return (
    <StyledAppStoreBadge target="_blank" {...props}>
      <Image src={props.src} />
    </StyledAppStoreBadge>
  );
};

export default AppStoreBadge;
