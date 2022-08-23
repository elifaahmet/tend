/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Layout, Rule, Paragraph } from '@tend/ui';

const DescContainer = styled.div`
  padding-top: 2rem;
  text-align: center;
  width: 100%;
  @media (min-width: 836px) {
    margin-left: 25%;
    width: 50%;
  }
`;

const LinkContainer = styled.div`
  padding-top: 2rem;
  text-align: left;
  width: 100%;
  font-size: 60%;

  @media (min-width: 836px) {
    font-size: 80%;
  }
`;

export const Desc = () => {
  const { t } = useTranslation('invitacion');

  return (
    <Layout rowOverlay={true} bg="offWhite">
      <DescContainer>
        <Paragraph marginTop="-2rem" marginBottom="-2rem" variant="b3">
          <div
            dangerouslySetInnerHTML={{ __html: t('value-props.disclaimer') }}
          ></div>
        </Paragraph>
      </DescContainer>

      <LinkContainer>
        <Paragraph marginTop="1rem" marginBottom="-2rem">
          <div
            dangerouslySetInnerHTML={{ __html: t('value-props.click-here') }}
          ></div>
        </Paragraph>
      </LinkContainer>
    </Layout>
  );
};

export default Desc;
