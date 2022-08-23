import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { color } from 'styled-system';
import { H3, Paragraph, Image, CTAButtonLink } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import {useTranslation} from "@tend/webx/utils/next-i18next";

interface StyleProps {
  backgroundColor: string[];
}

const StyledArountTheCorner = styled.div<StyleProps>`
  ${color};
  padding: 1.43rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);

`;

const StyledH3 = styled(H3)`
  font-size: 2.25rem;
  line-height: 1.10;
  margin-block-end: 2.25rem;

  @media (min-width: 1440px) {
      font-size: 2.25rem;
      line-height: 1.10;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  grid-row: 1;
  @media (min-width: 685px) {
    grid-row: 1 / span 2;
  }
`;

const CopyContainer = styled.div`
  grid-column: 1 ;
  grid-row: 1;
`;

const CtaContainer = styled.div`
  grid-row: 2;
  grid-column: 1 / span 2;
  @media (min-width: 685px) {
    grid-column: 1;
  }
`;

const StyledCTAButtonLink = styled(CTAButtonLink)`
  margin-block-start: 1.5rem;
  text-align: center;
`

const AroundTheCorner = () => {
  const { t } = useTranslation('around-the-corner');
  const imageUrl = usePrefixedWithBasePath('/images/grow.svg');

  return (
    <StyledArountTheCorner backgroundColor={['green.1']}>
      <CopyContainer>
        <StyledH3
          textTransform={'uppercase'}
          color="white"
        >
          { t('headline.firstLine') }<br />{ t('headline.secondLine') }
        </StyledH3>
        <Paragraph
          fontSize="1.125rem"
          color="white"
          >
          { t('body') }
        </Paragraph>
        </CopyContainer>
        <ImageContainer>
        <Image
          imgHeight={['80%']}
          imgWidth={['80%']}
          src={imageUrl}
          />
      </ImageContainer>
      <CtaContainer>
        <Link href='/product-roadmap'>
          <StyledCTAButtonLink
            textTransform="uppercase"
            overColor="false"
            bg="offWhite"
            borderColor="offWhite"
            hoverBg="black"
            hoverColor="white"
            >
            {t('common:Learn More')}
          </StyledCTAButtonLink>
        </Link>
        </CtaContainer>
    </StyledArountTheCorner>
  )
}


export default AroundTheCorner;

