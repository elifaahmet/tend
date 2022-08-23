import React from 'react';
import { SocialMediaLink } from './social-media-link';

export default {
  component: SocialMediaLink,
  title: 'SocialMediaLinks/SocialMediaLink',
};

export const primary = () => {

  return (
    <div style={{ background: "darkGreen", padding: 100}}>
      <SocialMediaLink
        theme="dark"
        name="Facebook"
        href="www.facebook.com"
      />
      <div style={{ background: "darkGreen", padding: 10}}></div>
      <SocialMediaLink
        theme="light"
        name="Instagram"
        href="www.facebook.com"
      />
      <div style={{ background: "darkGreen", padding: 10}}></div>
       <SocialMediaLink
        theme="dark"
        name="Twitter"
        href="www.facebook.com"
      />
    </div>
  );
};
