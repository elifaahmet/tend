import React from 'react';
import styled from 'styled-components';

import Contact from '../modules/contact';
import InstagramCard from "../modules/instagram-card";


const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6. [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  grid-template-areas:
    "SMI SMI SMI SMI SMI SMI"
    "CF CF CF CF CF CF"
    ;

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "SMI SMI SMI SMI SMI SMI SMI SMI CF CF CF CF";
  }
`;


const CommunityFeedback = styled.div`
  grid-area: CF;
`;

const InstagramBlock = styled.div`
  grid-area: SMI;
`;

const CommunityContact = () => {

  return (
    <GridLayout>
      <CommunityFeedback>
        <Contact />
      </CommunityFeedback>
      <InstagramBlock>
        <InstagramCard post={'https://www.instagram.com/p/CIo1ignjgY-/'} />
      </InstagramBlock>
    </GridLayout>
  );
};

export default CommunityContact;
