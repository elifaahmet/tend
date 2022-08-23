import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';

interface ITitleBoard {
  content: {
    cooked: string
  };
}

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 0;
  margin-block-start: 0;
  margin-block-end: 5rem;
  grid-template-areas:
    "BD BD BD BD BD BD";

    @media (min-width: 1440px) {
      grid-template-columns: repeat(12, [col-start] 1fr);
      grid-template-areas:
        "BD BD BD BD BD BD BD BD BD BD BD BD";
    }
`;

const Block = styled.div`
  &[data-area|="body"]     { grid-area: BD; };
`;

const StyledBody = styled.div`
  color: white;
  font-size: 1.3125rem;

  a {
    color: white;
  }
  img {
    max-width: 100%;
  }
`

const Body = ({content}: ITitleBoard) => {
  return (
    <Layout>
      <Block data-area="body">
        <StyledBody dangerouslySetInnerHTML={{__html: content.cooked}}></StyledBody>
      </Block>
    </Layout>
  );
};

export default Body;
