/** @format */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';
import styled from 'styled-components';
import { color } from 'styled-system';
import { H6, CTAButtonLink } from '@tend/ui';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

import SmallComment from './replies/small-comment';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

interface StyleProps {
  backgroundColor: string[];
}
//TODO make use of new color tokens but might not be ready just yet since green is not using theme
const StyledLatestComments = styled.div<StyleProps>`
  ${color};
  padding: 1.2rem;
  width: 100%;

  a {
    color: black;
  }
  a:hover {
    color: white;
  }
`;

const StyledCTAButtonLink = styled(CTAButtonLink)`
  width: auto;
  text-align: center;
`;

const LatestComments = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [replies, setReplies] = useState({
    latest_posts: [
      {
        raw: '',
        created_at: new Date().toISOString(),
        reply_count: 0,
        username: 'SGreen',
      },
    ],
  });
  const [, setError] = useState(false);
  const getLateCommentsUrl = usePrefixedWithBasePath(
    `/api/discourse/get-latest-posts?locale=${locale}`
  );

  useEffect(() => {
    const getLatestComments = () => {
      fetch(getLateCommentsUrl)
        .then((res) => res.json())
        .then((res) => setReplies(res))
        .catch((err) => setError(true));
    };

    getLatestComments();
  }, [getLateCommentsUrl]);

  return (
    <StyledLatestComments backgroundColor={['green.1']}>
      <H6 color="neonGreen">{t('Latest Comments')}</H6>

      {replies?.latest_posts?.slice(0, 2)?.map((comment, i) => {
        return (
          <SmallComment
            key={i}
            raw={sanitizeHtml(comment.raw, {
              allowedTags: ['b', 'i', 'strong', 'a'],
              allowedAttributes: {
                a: ['href'],
              },
            })}
            created_at={comment.created_at}
            reply_count={comment.reply_count}
            username={comment.username}
            t={t}
          />
        );
      })}

      <Link href="/message-board">
        <StyledCTAButtonLink
          textTransform="uppercase"
          overColor="false"
          bg="offWhite"
          borderColor="offWhite"
          hoverBg="black"
          hoverColor="white"
        >
          {t('Follow Discussion')}
        </StyledCTAButtonLink>
      </Link>
    </StyledLatestComments>
  );
};

export default LatestComments;
