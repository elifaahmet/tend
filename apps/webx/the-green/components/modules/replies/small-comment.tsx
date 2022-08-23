/** @format */

import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

import { Icon, Paragraph, Rule } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';

export interface ISmallResponse {
  raw: string;
  created_at: string;
  reply_count: number;
  username: string;
  t: (string) => string;
}

const Container = styled.article`
  margin-block-start: 0.75rem;
`;

const Header = styled.header`
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

const Content = styled.div`
  p {
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    word-break: break-word;
  }
`;

const Footer = styled.footer`
  margin-bottom: 2rem;
  font-size: 0.625rem;
  letter-spacing: 1px;
`;

const Message = styled(Icon)`
  display: inline;
`;

const formatDate = (date) =>
  format(new Date(date), 'P', {
    locale: enUS,
  });

export const smallComment = (props: ISmallResponse) => {
  const { raw, created_at, reply_count, username, t } = props;

  return (
    <Container>
      <Rule ruleColor="white" size={2} />
      <Header>
        <Paragraph color="white" bold>
          @{username}
        </Paragraph>
      </Header>
      <Content>
        <Paragraph color="white">
          {<div dangerouslySetInnerHTML={{ __html: raw }} />}
        </Paragraph>
      </Content>
      <Footer>
        <Paragraph bold color="white">
          <span>{formatDate(created_at)}</span>&nbsp;|&nbsp;
          <span>
            <Message fontSize="1em" iconName="ChatEmpty" color="white" />
            &nbsp;{reply_count}{' '}
            {reply_count === 1 ? t('Comment') : t('Comments')}
          </span>
        </Paragraph>
      </Footer>
    </Container>
  );
};

smallComment.defaultProps = {
  cooked: '<p>Comment</p>',
  created_at: new Date().toISOString(),
  reply_count: 0,
  username: 'SGreen',
};

export default smallComment;
