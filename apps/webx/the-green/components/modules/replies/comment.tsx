import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import useAuth from '../../../hooks/use-auth';

import { Paragraph, Icon } from '@tend/ui';
import Avatar from '../user/avatar';
import { useTranslation } from '@tend/webx/utils/next-i18next';

interface IComment {
  auth: boolean;
  avatar_template: string;
  user: string;
  created_at: string;
  cooked: string;
  includeMeta?: boolean;
  reply_count?: number;
  toggleReplies: MouseEventHandler<HTMLSpanElement>;
  toggleReplyField: MouseEventHandler<HTMLSpanElement>;
}

const Container = styled.article`
  display: grid;
  grid-template-columns: 3.125rem 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;

  margin-block-start: 1rem;
  margin-block-end: 2.5rem;
`;

const Header = styled.header`
  grid-row: 1;
  grid-column: 2;

  margin-block-end: 0.8rem;

  p {
    line-height: 0.55rem;
  }
`;

const Content = styled.div`
  grid-row: 2;
  grid-column: 2;
  p {
    margin-block-start: 0;
    color: ${p => p.theme.colors.white}
  }
`;

const Footer = styled.footer`
  grid-row: 3;
  grid-column: 2;

  span.clickable {
    cursor: pointer;
  }
`;

const Message = styled(Icon)`
  display: inline;
`;

const SpanContainer = styled.div`
  display: inline;
  a u {
    cursor: pointer;
  }
`;

const ProfileImage = styled.div`
  grid-row: 1 / span 2;
`

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
    document.getElementById("sign-in-button-header").click(); 
};

const formatDate = date =>
  format(
    new Date(date),
    'PP',
    {
      locale: enUS
    }
  );

export const Comment = (props: IComment) => {
  const {
    auth,
    avatar_template,
    cooked,
    created_at,
    includeMeta,
    reply_count,
    toggleReplies,
    toggleReplyField,
    user,
  } = props;

  const currentUser = useAuth().user;
  const { t } = useTranslation();
  return (
    <Container>

      <ProfileImage>
        <Avatar
          path={avatar_template}
          size="50"
          user={user} />
      </ProfileImage>

      <Header>
        <Paragraph color="white" bold>{ user } | {formatDate(created_at)}</Paragraph>
      </Header>

      <Content dangerouslySetInnerHTML={{ __html: cooked }}></Content>

      {includeMeta &&
        <Footer>
          <Paragraph color="white">
            {reply_count > 0 &&
              <>
                <span className="clickable" onClick={toggleReplies}><Message fontSize="1em" iconName="ChatEmpty" color="white" />&nbsp;{reply_count} {reply_count > 1 ? `Replies` : `Reply`}</span>&nbsp;|&nbsp;
              </>
            }
            {auth ?
              <span className="clickable" onClick={toggleReplyField}>Reply</span>
            :
            <SpanContainer>
              <span>
              {!currentUser.isLoggedIn ?
             <a onClick={scrollToTop}>
              <u>
                {t('Sign in or up')}
              </u> {t('to')} &nbsp;
            </a> : null}
            {t('Join the conversation')}
              </span>
            </SpanContainer>
            }
          </Paragraph>
        </Footer>
      }
    </Container>
  )
}

Comment.defaultProps = {
  created_at: new Date().toISOString(),
  includeMeta: false,
}

export default Comment;
