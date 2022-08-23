/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { CTAButtonLink } from '@tend/ui';

interface JoinNowCTAProps {
  url?: string;
}

export const JoinNowCTA = (props: JoinNowCTAProps) => {
  const { t } = useTranslation('common');

  return (
    <Link href="/join-now">
      <CTAButtonLink
        textTransform="uppercase"
        size="medium"
        overColor="false"
        hoverBg="black"
        hoverColor="white"
      >
        {t('cta.join-now')}
      </CTAButtonLink>
    </Link>
  );
};

export default JoinNowCTA;
