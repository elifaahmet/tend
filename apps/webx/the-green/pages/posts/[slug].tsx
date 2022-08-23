import { useTranslation } from '@tend/webx/utils/next-i18next';
import React from 'react';

export const Post = () => {
  const {t} = useTranslation();
  return (
    <h1>{t('Post')}</h1>
  )
}

export default Post;
