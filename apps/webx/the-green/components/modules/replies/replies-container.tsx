import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import getConfig from 'next/config';
import useAuth from '../../../hooks/use-auth';
import { subtract } from '../../../utils/math';

import { Rule, H3, H5 } from '@tend/ui';

import Replies from './replies';
import Response from './response';
import Reply from './reply';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from "next/router";

interface IRepliesContainer {
  id: number;
  postCount: number;
  title: string;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin-block-end: 1rem;
`;

const Title = styled(H3)`
  margin-block-start: 2.5rem;
`;

const SubTitle = styled(H5)`
  display: inline-block;
  white-space: normal;
  margin-block-start: 1rem;
  a u {
    cursor: pointer;
  }
`
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
    document.getElementById("sign-in-button-header").click();
};

export const RepliesContainer = ({ id, title, postCount }: IRepliesContainer) => {

  const [ replies, setReplies ] = useState([]);
  const [ error, setError ] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();
  const { locale } = useRouter();
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;
  const getRepliesByIdPath = `${basePath}/api/discourse/get-replies?id=${id}&locale=${locale}`;
  const getReplyCount = (total) => subtract(total, 1);

  const getRepliesById = useCallback((id, user) =>
    fetch(getRepliesByIdPath, {
      "headers": {
        "Api-Username": user.isLoggedIn ? user.username : "System"
      }
    })
    .then(res => res.json())
    .then(res => setReplies(res.post_stream.posts))
    /* TODO: Error logging */
    .catch(error => setError(true)), [getRepliesByIdPath])

  useEffect(() => {
    if(user) {
      getRepliesById(id, user);
    }
  }, [id, user, getRepliesById]);

  return (
    <Container>
      <Header>

        <Rule ruleColor="defaultRed" size={12} />

        <Title color='white'>{t('Replies')}</Title>

        {getReplyCount(postCount) === 0 ?
          <SubTitle textTransform="none"  color='white'>
            {t('Quiet here')}, &nbsp;
            {!user.isLoggedIn ?
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
             <a onClick={scrollToTop}>
              <u>
                {t('Sign in or up')}
              </u> {t('to')} &nbsp;
            </a> : null}
            {t('start the conversation')}

          </SubTitle> :

          getReplyCount(postCount) === 1 ?
            <SubTitle color='white'>{t('There is')} {getReplyCount(postCount)} {t('Reply')}, &nbsp;
           {!user.isLoggedIn ?
             // eslint-disable-next-line jsx-a11y/anchor-is-valid
             <a onClick={scrollToTop}>
              <u>
                {t('Sign in or up')}
              </u> {t('to')} &nbsp;
            </a> : null}
            {t('Join the conversation')}
            </SubTitle> :
            <SubTitle color='white'>{t('There are')} {getReplyCount(postCount)} {t('Replies')},&nbsp;
           {!user.isLoggedIn ?
             // eslint-disable-next-line jsx-a11y/anchor-is-valid
             <a onClick={scrollToTop}>
              <u>
                {t('Sign in or up')}
              </u> {t('to')} &nbsp;
            </a> : null}
            {t('Join the conversation')}
           </SubTitle>
        }

      </Header>
      {!error ?
        <>
          {user && user.isLoggedIn &&
            <Reply
              inResponseTo={title}
              topicID={id}
              onSuccess={getRepliesById} />
          }

          <Replies
            component={Response}
            onSuccess={getRepliesById}
            replies={replies} />
        </> :
        <H3 color="white">{t('Apology-error')}</H3>
      }
    {}
    </Container>
  )
}

export default RepliesContainer;
