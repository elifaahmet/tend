import React from 'react';

interface IAvatar {
  path: string;
  size: string;
  user: string;
}

export const Avatar = ({path, size, user}: IAvatar) => {
  const url = path.replace('{size}', size);

  return <img src={url} alt={user} />
};

Avatar.defaultProps = {
  path: 'https://avatars.discourse-cdn.com/v4/letter/p/ce7236/{size}.png'
}

export default Avatar;
