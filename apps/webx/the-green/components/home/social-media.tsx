import React from 'react';
import styled from 'styled-components';
import TweetCard from '../modules/tweet-card';
import { useTranslation } from "@tend/webx/utils/next-i18next";

const GridLayout = styled.div`
  margin-bottom: 2.25rem;
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: auto 1fr;
  grid-column-gap: 2.8125rem;
  grid-row-gap: 2.25rem;
  grid-template-areas:
    "SMT SMT SMT SMT SMT SMT"
    "CP CP CP CP CP CP";

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "SMT SMT SMT SMT SMT SMT CP CP CP CP CP CP";
    }
`;

const SingleCard = styled.div`
  &[data-area|="social-media-twitter"]   { grid-area: SMT; }
  &[data-area|="community-poll"] { grid-area: CP; }
`;



const EmbedContent = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 1440px) {
    padding-top: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;

const SpotifyEmbed = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
`;


const SocialMedia = () => {

  const { t } = useTranslation();
  return (
    <GridLayout>
      <SingleCard data-area="social-media-twitter">
        <TweetCard />
      </SingleCard>
      <SingleCard data-area="community-poll">
        <EmbedContent>
          <SpotifyEmbed
            title="spotify"
            src={t('spotify.href')}
            allow="encrypted-media" />
        </EmbedContent>
      </SingleCard>
    </GridLayout>
  );
};

export default SocialMedia;
