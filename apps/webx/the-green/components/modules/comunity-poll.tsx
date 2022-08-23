import  React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { H3, Paragraph } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';

interface StyleProps {
  bg: string[];
}

const Container = styled.div<StyleProps>`
  ${color};
  padding: 1.43rem;
  width: 100%;
  height: 100%;
`;

const StyledH3 = styled(H3)`
  font-size: 2.25rem;
`

export const CommunityPoll = () => {
  const { t } = useTranslation();
  return (
    <Container bg={['orange.0']}>
      <Paragraph
        marginTop="1rem"
        marginBottom="1rem"
        color="black">
        {t('tend-poll.title')}
      </Paragraph>
      <StyledH3>
        {t('tend-poll.sub-title')}
      </StyledH3>
      <H3>
        {t('Coming Soon')}
      </H3>
    </Container>
  )
}


export default CommunityPoll;
