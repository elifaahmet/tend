import React from 'react';

import { Layout } from '@tend/ui';

import TitleBoard from '../../../components/topic/title-board';
import Body from '../../../components/topic/body';
import RepliesContainer from '../../../components/modules/replies/replies-container';
import Page from '../../../components/app/page';

import {getSingleTopic} from "../../../api/discourse";


export const SingleTopic = ({ topic }) => {
  const { title, id, posts_count, post_stream: { posts } } = topic;

  const description = posts[0] && posts[0].cooked.length <= 140
    ? posts[0].cooked.replace(/<\/?[^>]+(>|$)/g, "")
    : posts[0].cooked.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 140);

  return (
    <Page title={`Message Board - ${title}`} description={description}>
      <Layout bg="defaultGreen">
        <TitleBoard title={title} />
        <Body content={posts[0]} />
        <RepliesContainer
          postCount={posts_count}
          title={title}
          id={id} />
      </Layout>
    </Page>
  )
}

export default SingleTopic;

export async function getServerSideProps(context) {
  const { params: { slug = [] }, locale } = context;
  const [topic, topic_id] = slug;

  const post = await getSingleTopic(topic, topic_id, locale);

  return {
    props: {
      topic: post
    }
  }
}
