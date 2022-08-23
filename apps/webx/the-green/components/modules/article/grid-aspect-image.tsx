import React from 'react';
import styled from 'styled-components';
import { Image } from '@tend/ui';

const GridAspectImage = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  position: relative;
  top: 0.04rem;

  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 75%;
  }

  img {
    position: absolute;
    left: 0;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: auto;
  }


  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    top: 0;
  }

  @media (min-width: 1440px) {
    img {
      position: absolute;
    }
      &:before {
        padding-bottom: 100%;
      }
      img {
        top: -2rem;
        right: 0px;
        bottom: 0px;
        left: 0;
        width: auto;
        height: 100%;

        &:before {
          padding-bottom: 100%;
        }
      }
    }
  }
`;

interface Props {
  src: string;
}

export const PostImage = (props: Props) => {
  const { src } = props;
  return (
    <GridAspectImage>
      <Image
        src={src}
        resizeMode="fill"
        />
    </GridAspectImage>
  )
}

PostImage.defaultProps = {
  direction: 'vertical'
}

export default PostImage;
