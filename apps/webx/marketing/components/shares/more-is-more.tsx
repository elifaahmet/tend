/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { space, position } from 'styled-system';

import { TLayout, H3, Image, Paragraph, Theme, Anchor } from '@tend/ui';
import Link from 'next/link';

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

const Div = styled.div`
  position: relative;
  top: 2rem;
  text-align: right;
`;

const getUpperChild = (t) => {
  return (
    <OverflowImage
      top={['-5rem', '-5rem', '-5rem', '-5rem']}
      style={{
        marginBottom: '-5rem',
      }}
    >
      <Image
        src={t('more-is-more.image')}
        resizeMode="cover"
        imgWidth={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getLeftChild = (t) => {
  return (
    <StyledDiv paddingBottom="2rem">
      <H3 textTransform="uppercase" fontWeight="normal" color="black">
        {t('more-is-more.headline')}
      </H3>
    </StyledDiv>
  );
};

const getRightChild = (t) => {
  return (
    <StyledDiv paddingBottom="8rem">
      <Paragraph variant="b2" color="black">
        {t('more-is-more.body')}
      </Paragraph>
      <Div>
        <Paragraph variant="b2" color="black">
          <Link href="/terms">
            <Anchor color="black" hoverColor="black">
              {t('more-is-more.disclaimer')}
            </Anchor>
          </Link>
        </Paragraph>
      </Div>
    </StyledDiv>
  );
};

export const MoreIsMore = () => {
  const { t } = useTranslation('shares');
  return (
    <TLayout
      leftLineColor="black"
      rightLineColor="black"
      verticalLineColor="black"
      upperChild={getUpperChild(t)}
      leftChild={getLeftChild(t)}
      rightChild={getRightChild(t)}
      variant="center"
      upperBg="defaultYellow"
      lowerBg="defaultYellow"
      whenShrink="right"
    />
  );
};

export default MoreIsMore;
