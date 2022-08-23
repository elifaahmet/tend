import React from 'react';
import { TLayout } from './tlayout';
import H3 from '../typography/headlines/h3/h3';
import Paragraph from '../typography/paragraph/paragraph';
import Image from '../image/image';

export default {
  component: TLayout,
  title: 'Layout/TLayout',
};

export const primary = () => {

  const getH2 = () => {
    return <H3>Let's make bank.</H3>
  };
  const getB2 = () => {
    return (
      <Paragraph variant="b2">
        Boost employee job satisfaction with one-of-a-kind, members-only rewards. Boost employee job satisfaction with one-of-a-kind, members-only rewards. Boost employee job satisfaction with one-of-a-kind, members-only rewards.
      </Paragraph>
    );
  };

  const getImage = (k) => {
    return (
      <div style={{ display: 'flex', marginTop: '100px', width: '100%'}}>
        <Image src={`https://picsum.photos/100/100?key=${k}`} imgWidth='100%' resizeMode="contain" />
      </div>
    );
  }

  const getImageOverflowed = (k) => {
    return (
      <div style={{ display: 'flex', marginTop: '100px', width: '40%', position: 'relative', bottom: '-40px', zIndex: 1}}>
        <Image src={`https://picsum.photos/100/100?key=${k}`} imgWidth='100%' resizeMode="contain" />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', marginTop: '100px', flexDirection: 'column', gridRowGap: '100px'}}>
      <TLayout
        upperChild={getImage(13)}
        leftChild={getH2()}
        rightChild={getB2()}
        variant="center"
        bg="orange.0"
        whenShrink="left"
      />
      <TLayout
        upperChild={getImageOverflowed(17)}
        leftChild={getH2()}
        rightChild={getB2()}
        leftLineColor="magenta.0"
        rightLineColor="orange.0"
        verticalLineColor="green.0"
        variant="center"
        bg="neutral.3"
      />
    </div>
  );
};
