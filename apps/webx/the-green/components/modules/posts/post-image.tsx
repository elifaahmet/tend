import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Image } from '@tend/ui';

interface StyleProps {
  direction: string;
}

const GridAspectImage = styled.div<StyleProps>`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 100%;
  }
  img {
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    position: absolute;
    left: 0%;
    bottom: 0px;
    right: 0px;
    height: 100%;

    &:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: 80%;
    }
  }


  @media (min-width: 1440px) {
    img {
      position: absolute;
    }
    ${props => props.direction === 'vertical' ? `
      &:before {
        padding-bottom: 100%;
      }
      img {
        top: 0;
        right: 0px;
        bottom: 0px;
        left: -50%;
        width: auto;
        height: 100%;

        &:before {
          padding-bottom: 100%;
        }
      }
    ` : `
      &:before {
        padding-bottom: 142%;
      }
      img {
        top: 0;
        right: 0px;
        bottom: 0px;
        left: -25%;

        &:before {
          padding-bottom: 142%;
        }
      }
    `}
  }
`;

interface Props {
  direction?: 'vertical' | 'horizontal';
  href: string;
  src: string;
}

export const PostImage = (props: Props) => {
  const { direction, href, src } = props;
  return (
    <GridAspectImage direction={direction}>
      <Link href={href}>
        <a>
          <Image
            src={src}
            resizeMode="fill"
            />
        </a>
      </Link>
    </GridAspectImage>
  )
}

PostImage.defaultProps = {
  direction: 'vertical'
}

export default PostImage;
