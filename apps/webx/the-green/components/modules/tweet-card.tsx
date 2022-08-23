import React, { useEffect } from 'react';
import {useTranslation} from "@tend/webx/utils/next-i18next";

interface EmbeddedTweetInnerHTMLType {
  __html: string;
}

export const createMarkup = (): EmbeddedTweetInnerHTMLType => {
  return {
      __html: '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  }
}

const TweetCard: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const embeddedScriptElement = document.createElement("script");
    embeddedScriptElement.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    embeddedScriptElement.setAttribute('charset', 'utf-8');
    embeddedScriptElement.setAttribute('async', 'true');
    document.getElementById('embedded-tweet').appendChild(embeddedScriptElement);
  }, []);

  return (
    <>
      <a
        className="twitter-timeline"
        data-tweet-limit="1"
        data-chrome="nofooter"
        data-theme="dark"
        href={t('twitter-card.href')}>{t('Tweets by tendmoney')}</a>
      <div id="embedded-tweet" dangerouslySetInnerHTML={createMarkup()} />
    </>
  );
};

export default TweetCard;
