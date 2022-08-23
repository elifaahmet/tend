import React from 'react';
import { HeadlineRuleBodyButton } from './headline-rule-body-button';

export default {
  component: HeadlineRuleBodyButton,
  title: 'Complex Components/HeadlineRuleBodyButton',
};

export const primary = () => {

  return (
    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gridRowGap: 20 }}>
      <HeadlineRuleBodyButton
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('small button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
        variant="h5"
        title="Headline Rule"
      >
        This is the example of Headline Rule Body Button.
      </HeadlineRuleBodyButton>
      <HeadlineRuleBodyButton
        variant="h4"
        buttonText="xxl cta"
        color="neutral.4"
        ctaLinkProps={{
          href: "https://example.com",
          color: "magenta.0"
        }}
        title="Headline Rule"
        titleColor="magenta.0"
      >
        This body button is variant h5.
        This is the example of Headline Rule Body CTA link.
      </HeadlineRuleBodyButton>
    </div>
  );
};
