import styled from 'styled-components';

interface OLProps {
  bold?: boolean;
}

export const OL = styled.ol<OLProps>`
  margin-block-end: 1.125rem;
  counter-reset:item;
  list-style: none;
  & > li {
    font-size: 1.3125rem;
    margin-block-start: 1.25rem;
    margin-block-end: 1.25rem;
    counter-increment: item;
    & :before {
      font-weight: ${(props: OLProps) => props.bold ? 'bold' : 'normal'};
      content: counter(item) ".";
    }
  }
`

export default OL;
