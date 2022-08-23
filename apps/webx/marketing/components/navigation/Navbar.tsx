/** @format */

import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Burger />
    </StyledNavbar>
  );
};

export default Navbar;
