import React from 'react';

import styled from 'styled-components';

export interface TypographyProps {
  children?: React.ReactElement;
}

const StyledTypography = styled.div`
  background: pink;
`;

export const Typography = (props: TypographyProps) => {
  return (
    <StyledTypography>
      {props.children}
    </StyledTypography>
  );
};

export default Typography;
