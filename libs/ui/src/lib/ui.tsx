import React from 'react';

import styled from 'styled-components';

const StyledUi = styled.div`
  color: pink;
`;

export const Ui = () => {
  return (
    <StyledUi>
      <h1>Welcome to ui!</h1>
    </StyledUi>
  );
};

export default Ui;
