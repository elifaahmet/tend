import React from 'react';

export const Replies = ({ component: Component, replies, onSuccess }) => {
  return (
    <>
      {replies.slice(1).map(reply => {
        return (
          <Component key={reply.id} {...reply} onSuccess={onSuccess} replies={replies} />
        )
      })}
    </>
  );
}

export default Replies;
