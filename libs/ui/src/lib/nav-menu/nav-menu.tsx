import React from 'react';
import styled from 'styled-components';

import Link from 'next/link'
import Anchor from '../anchor/anchor';
import Label from '../typography/label/label';

const StyledLabel = styled(Label)`
  cursor: pointer;
  text-transform: uppercase;
`
export interface NavMenuProps {
  label: string,
  color: string,
  href: string,
  prefetch?: boolean,
  onClick?: () => void,
};

export const NavMenu = (props: NavMenuProps) => {
  return (
    <li>
      <Link href={props.href} prefetch={props.prefetch} passHref>
        <Anchor
          hoverColor={props.color}
          onClick={props.onClick}
          fontSize="1em"
        >
          <StyledLabel
            variant="b3"
            color={props.color}
          >
            { props.label }
          </StyledLabel>
        </Anchor>
      </Link>
    </li>
  );
};

NavMenu.defaultProps = {
  prefetch: true,
};

export default NavMenu;
