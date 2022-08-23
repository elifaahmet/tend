/*** @format **/
/*** @tech-debt **/
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledUL = styled.ul`
  padding-left: 25px;

  & {
    li {
      list-style-type: disc;
      font-family: Pilat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 120%;
      color: ${(props) => props.color};
      margin-bottom: 20px;
      padding-right: 4em;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`

export interface ULProps {
  children: ReactNode;
  color?: string;
}
const UL: React.FC<ULProps> = (props) => (
  <StyledUL>{props.children}</StyledUL>
)

UL.defaultProps = {
  color: '#000000'
};

export default UL;
