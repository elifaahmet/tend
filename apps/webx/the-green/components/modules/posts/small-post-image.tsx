import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Image } from '@tend/ui';

const GridAspectImage = styled.div`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 105%;
  }
  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0px;
    right: 0px;

    &:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: 105%;
    }
  }

  @media (min-width: 1440px) {
    &:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: 100%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0px;
      right: 0px;

      &:before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 0;
        padding-bottom: 100%;
      }
    }
  }
`;

interface Props {
  href: string;
  src: string;
}

export const SmallPostImage = (props: Props) => {
  const { href, src } = props;
  return (
    <GridAspectImage>
      <Link href={href}>
        <Image
          src={src}
          resizeMode="fill"
          />
      </Link>
    </GridAspectImage>
  )
}

SmallPostImage.defaultProps = {
  href: '/'
}

export default SmallPostImage;
