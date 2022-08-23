import React from 'react';
import styled from 'styled-components';
import { H2, Paragraph, Image } from '@tend/ui';
import Link from 'next/link';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  grid-template-areas:
    "HD HD HD HD  HD  HD"
    "BD BD BD IMG IMG IMG";

  padding: 2.8125rem 0;


  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
    "HD HD HD HD HD HD HD . IMG IMG IMG IMG"
    "BD BD BD BD BD BD BD . IMG IMG IMG IMG";
  }
`;

const HeadlineContainer = styled.div`
  grid-area: HD;
`;

const BodyContainer = styled.div`
  grid-area: BD;
  align-self: start;

  p {
    a {
      color: white;
      &:hover {
        color: #bdfc4b;
      }
    }
  }
`;

const ImageContainer = styled.div`
  grid-area: IMG;
`;

const SubHeadline = styled(H2)`
  &:after {
    content: ':';
  }
  @media (min-width: 1440px) {
    &:after {
      content: '';
    }
  }
`;

const WelcomeBoard = () => {
  const imageUrl = usePrefixedWithBasePath('/images/the-green-people.svg');

  return (
    <GridLayout>
      <HeadlineContainer>
        <H2 color={['neonGreen.0', 'neonGreen.0', 'neonGreen.0', 'white']}>Bienvenido a</H2>
        <SubHeadline color="neonGreen.0">The Green</SubHeadline>
      </HeadlineContainer>
      <BodyContainer>
        <Paragraph color="white" variant="b2">
          The Green es nuestro blog en internet donde el mejor asesoramiento financiero es gratis, hablar de dinero no
          es un tabú y donde no hay estafas. Todavía no estamos disponible en México, pero lanzaremos The Green muy
          pronto. Mientras tanto,{' '}
          <Link href="https://www.instagram.com/tendmoney/">visita nuestras redes sociales</Link> y{' '}
          <Link href="https://tend.money/">nuestra página web aquí</Link>.
        </Paragraph>
      </BodyContainer>
      <ImageContainer>
        <Image imgHeight={['100%']} imgWidth={['100%']} src={imageUrl} />
      </ImageContainer>
    </GridLayout>
  );
};

export default WelcomeBoard;
