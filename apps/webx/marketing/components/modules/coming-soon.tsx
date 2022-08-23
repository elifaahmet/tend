import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledComingSoon = styled.div`
  display: inline;
  font-weight: bold;
  font-family: Pilat;
`;

const languages = {
  'en-US': '(Coming soon) ',
  'es-US': '(Muy pronto) ',
  'es-MX': '(Próximamente) ',
};
  
  
export const ComingSoon = () => {

  const { locale } = useRouter();

  return (
   <StyledComingSoon>
       {languages[locale]}
   </StyledComingSoon>
  );
};
  
export default ComingSoon;
