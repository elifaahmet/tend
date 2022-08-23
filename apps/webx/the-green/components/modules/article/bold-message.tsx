import React from 'react';
import styled from 'styled-components';
import { Layout } from '@tend/ui';

interface props {
  bg?: string;
  messageText: string;
  messageAuthor?: string;
  imageSrc?: string;
  imageCredit?: string;
}

interface MessageWrapperProps {
  isThereImage?: boolean;
}

const BoldMessageWrapper = styled.div<MessageWrapperProps>`
  padding-block-start: 2rem;
  padding-block-end: ${props => props.isThereImage ? '0' : '0.8rem'};
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-block: 4rem;
  }
`;

const BoldMessageText = styled.p`
  margin: 0;
  font-family: Pilat Condensed;
  font-weight: 700;
  font-size: 5.063rem;
  line-height: 4.303rem;
  text-transform: uppercase;
  padding-inline: 0.5rem;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 11.25rem;
    line-height: 9.788rem;
    padding-inline: 0rem;
  }
`;

const BoldMessageAuthor = styled.p`
  font-family: Pilat Condensed;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 0.788rem;
  text-transform: uppercase;
  padding-inline: 0.5rem;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-inline: 0rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: flex;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    position: absolute;
    left: calc(50% - 0.4rem);

    z-index: 2;
    width: 50%;
    max-width: 40rem;

    img {
      height: auto;
      object-fit: cover;
    }
  }
`;

const ImageCreditText = styled.div`
  position: absolute;
  width: 45%;
  left: 4%;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    left: 50%;
  }
`;

export const BoldMessage = ({bg, messageText, messageAuthor, imageSrc, imageCredit}: props) => {
  return (
    <Layout bg={bg} fullWidthOnMobile={true}>
      <BoldMessageWrapper isThereImage={!!imageSrc}>
        <BoldMessageText>{messageText}</BoldMessageText>
        {messageAuthor && <BoldMessageAuthor>— {messageAuthor}</BoldMessageAuthor>}
        {imageSrc && <ImageWrapper>
          <img src={imageSrc} alt=""/>
          {imageCredit && <ImageCreditText><span>↑</span><br /><span>{imageCredit}</span></ImageCreditText>}
        </ImageWrapper> }
      </BoldMessageWrapper>
    </Layout>
  )
}

export default BoldMessage;
