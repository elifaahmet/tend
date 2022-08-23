/** @format */

import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  font-size: 1.5rem;
  line-height: 1.2;
  padding: 1.5rem 0;
  text-align: left;
  margin: 0 auto;
  width: 96%;

  @media (min-width: 375px) {
    width: 96%;
  }

  @media (min-width: 836px) {
    width: 86%;
  }

  @media (min-width: 1440px) {
    width: 73%;
    padding: 1.5rem 0;
  }
`;

export default StyledMenuItem;
