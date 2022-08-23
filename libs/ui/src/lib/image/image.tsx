import React from 'react';

import { layout, variant } from 'styled-system';
import styled from 'styled-components';
import CacheManager from './imageCacheManager';

export interface ImageProps {
  src: string;
  alt?: string;
  cache?: boolean;
  resizeMode?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  imgWidth?: string | Array<string>;
  imgHeight?: string | Array<string>;
  position?: string;
  variant?: 'normal';
}

const StyledImage = styled.img`
  ${layout}
  object-fit: ${(props: ImageProps) => props.resizeMode};
  ${(props: ImageProps) =>
    variant({
      variants: {
        normal: {
          width: props.imgWidth,
          height: props.imgHeight,
        },
      },
    })}
`;

export const Image = (props: ImageProps) => {
  const { src, alt, cache } = props;
  if (cache) {
    CacheManager.getInstance().add(src);
  }

  return <StyledImage src={src} alt={alt} {...props} />;
};

Image.defaultProps = {
  // imgWidth: '10rem',
  variant: 'normal',
};

export default Image;
