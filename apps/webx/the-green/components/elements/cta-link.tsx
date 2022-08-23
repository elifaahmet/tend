import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { color, typography } from 'styled-system';
import { CTALink as BaseCTALink } from '@tend/ui';
import { useTranslation } from "@tend/webx/utils/next-i18next";

interface Props {
  href: string;
  color?: string;
  value?: string;
}

const StyledCTALink = styled(BaseCTALink)`
  ${color}
  ${typography}
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

export const CTALink  = (props: Props) => {
  const { t } = useTranslation();
  const { color, href, value } = props;
  return (
    <Link href={href}>
      <StyledCTALink color={color}>
        {value || t('Read More')}
      </StyledCTALink>
    </Link>
   )
}

CTALink.defaultProps = {
  color: 'white',
}

export default CTALink;
