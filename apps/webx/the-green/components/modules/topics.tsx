import React from 'react';
import Link from 'next/link';
import {CTAButtonLink, CTALink, Paragraph} from '@tend/ui';
import styled from 'styled-components';
import Grid from '../layout/grid';
import {useTranslation} from "@tend/webx/utils/next-i18next";

export interface TopicsProps {
  data?: {
    id: string;
    slug: string;
    title: string;
    visible: boolean;
  }[];
  hideTopLine?: boolean;
}


const Layout = styled(Grid)`
  grid-template-columns: repeat(1, [col-start] 1fr);

  @media (min-width: 1440px) {
    grid-template-columns: repeat(2, [col-start] 1fr);
  }
`;

const TopicsLinks = styled(CTALink)`
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;


export const Topics = (props: TopicsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Paragraph
        marginTop="1rem"
        marginBottom="1rem"
        color="offWhite"
        textTransform={'uppercase'}>
        {t('Topics')}
      </Paragraph>

      <Layout>
        {props.data && (
          props.data.slice(0, 8).map((topic, index) => (
            (topic.visible && (
            <Link key={index} href={`/message-board/t/${topic.slug}/${topic.id}`}>
              <TopicsLinks
                fontSize="20"
                color="white"
                textTransform={'uppercase'}
                variant="large"
              >
                {topic.title}
              </TopicsLinks>
            </Link>
              ))
          ))
        )}
      </Layout>
    </>
  );
};

export default Topics;
