/** @format */

import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  color: ${(props) => props.theme.color['primary-magenta']};
`;

const LegoMarketingUiKit: React.FC = () => (
  <StyledDiv>
    <h1>Welcome to lego-marketing-ui-kit!</h1>
  </StyledDiv>
);

export default LegoMarketingUiKit;
