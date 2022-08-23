/** @format */

import React from 'react';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H3, Image, Paragraph } from '@tend/ui';

const OverflowImage = styled.div<{
  top?: Array<string>;
}>`
  ${position};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const StyledDiv = styled.div<{
  paddingBottom?: Array<string> | string;
}>`
  ${space};
  display: flex;
  flex-direction: column;
`;

const getUpperChild = () => {
  return (
    <OverflowImage
      top={['-5rem', '-5rem', '-5rem', '-5rem']}
      style={{
        marginBottom: '-5rem',
      }}
    >
      <Image
        src="/tend-shares/module-four.jpeg"
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = () => {
  return (
    <StyledDiv paddingBottom="2rem">
      <H3 textTransform="uppercase" fontWeight="normal" color="black">
        Sometimes, more really is more
      </H3>
    </StyledDiv>
  );
};

const getRightChild = () => {
  return (
    <StyledDiv paddingBottom="8rem">
      <Paragraph variant="b2" color="black">
        They say it takes money to make money, but with Tend, all it takes is
        friends. We’ll drop a bonus in your account every time one of your
        referrals join Tend*. Refer one friend, get $9.95. Refer twelve friends,
        get $50. Refer 24 friends, get $100. Then sit back and enjoy your
        spoils.
      </Paragraph>
    </StyledDiv>
  );
};

export const ModuleFour = () => {
  return (
    <TLayout
      xs={4}
      sm={8}
      md={8}
      lg={12}
      leftLineColor="black"
      rightLineColor="black"
      verticalLineColor="black"
      upperChild={getUpperChild()}
      leftChild={getLeftChild()}
      rightChild={getRightChild()}
      variant="center"
      upperBg="defaultYellow"
      lowerBg="defaultYellow"
      whenShrink="right"
    />
  );
};

export default ModuleFour;
