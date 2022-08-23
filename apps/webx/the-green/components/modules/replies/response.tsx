import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { Rule } from '@tend/ui';
import Reply from './reply';
import Comment from './comment';

import useAuth from '../../../hooks/use-auth';

interface IStyleProps {
  height: string;
}

const Children = styled.div<IStyleProps>`
  overflow: hidden;
  transition: 0.75s max-height ease-in;
  max-height: ${p => p.height};
  margin-inline-start: 4.125rem;
`;

const MessageThread = styled.div`
  border-left: 2px solid ${p => p.theme.colors.white};
  padding-inline-start: 0.75rem;
`;

const ReplyBlock = styled.div<IStyleProps>`
  overflow: hidden;
  transition: 0.75s max-height ease-in;
  max-height: ${p => p.height};
`;

export const Response = props => {

  const { user } = useAuth();

  const {
    avatar_template,
    cooked,
    created_at,
    name,
    onSuccess,
    post_number,
    replies,
    reply_count,
    topic_id,
    username,
  } = props;


  const [activeReplyField, setActiveReplyField] = useState("");
  const [replyFieldHeight, setReplyFieldHeight] = useState("0px");
  const replyField = useRef(null);

  const [ activeReplyThread, setActiveReplyThread ] = useState("");
  const [ replyThreadHeight, setReplyThreadHeight ] = useState("0px");
  const replyThread = useRef(null);

  function toggleReplyField() {
    setActiveReplyField(activeReplyField === "" ? "active" : "");
    setReplyFieldHeight(
      activeReplyField === "active" ? "0px" : `${replyField.current.scrollHeight}px`
    );
  }

  function toggleReplyThread() {
    setActiveReplyThread(activeReplyThread === "" ? "active" : "");
    setReplyThreadHeight(
      activeReplyThread === "active" ? "0px" : `${replyThread.current.scrollHeight}px`
    );
  }

  return (
    <>
      <Rule size={2} ruleColor="white" />

      <div key={post_number}>

        <Comment
          auth={user.isLoggedIn}
          avatar_template={avatar_template}
          cooked={cooked}
          created_at={created_at}
          includeMeta
          reply_count={reply_count}
          toggleReplies={toggleReplyThread}
          toggleReplyField={toggleReplyField}
          user={username}
          />

        {user.isLoggedIn &&
          <ReplyBlock
            ref={replyField}
            height={replyFieldHeight}>

            <Reply
              inResponseTo={username}
              topicID={topic_id}
              postNumber={post_number}
              onSuccess={onSuccess} />
          </ReplyBlock>
        }

          {reply_count > 0 &&
            <Children
              ref={replyThread}
              height={replyThreadHeight}>
              <MessageThread>
                  {replies.filter(re => re.reply_to_post_number === post_number).map(thread => {
                    return (
                      <Comment
                        auth={user.isLoggedIn}
                        avatar_template={thread.avatar_template}
                        cooked={thread.cooked}
                        created_at={thread.created_at}
                        toggleReplies={toggleReplyThread}
                        toggleReplyField={toggleReplyField}
                        user={thread.username}
                        />
                    )
                  })}
              </MessageThread>

            </Children>
          }

      </div>
    </>
  )
}

Response.defaultProps = {
  date: new Date(),
  replies: [],
}

export default Response;
