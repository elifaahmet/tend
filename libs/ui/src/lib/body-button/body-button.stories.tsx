import React from 'react';
import { BodyButton } from './body-button';

export default {
  component: BodyButton,
  title: 'Mixed Text Components/BodyButton',
  argTypes: {
    Usage: {
      description: '',
      table: {
        type: { 
            summary: '', 
            detail: '' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
  }
  
};

export const primary = (args) => {

  return (
    <div style={{ display: 'flex', flexDirection: "column", gridRowGap: 20, width: 312 }}>
      <BodyButton {...args} >
         Weenie dog
      </BodyButton>
       {// doesn't seem like we need to get this complicated for this type of button. Props can be updated for simplicity}
}
        {/* <BodyButton
          variant="medium"
          buttonText="medium button"
          buttonProps={{
            onClick: () => { console.log('small button clicked'); },
          }}
          color='magenta.0'
        >
         This body button is variant medium. This body button is variant medium.
        </BodyButton>
        <BodyButton variant="large" buttonText="large button" buttonProps={{
            onClick: () => { console.log('small button clicked'); }
          }}>
         This body button is variant large. This body button is variant large.
        </BodyButton>
        <BodyButton variant="xl" buttonText="xl button" buttonProps={{
            onClick: () => { console.log('small button clicked'); }
          }}>
         This body button is variant xl. 
        </BodyButton>
        <BodyButton variant="xxl" buttonText="xxl button" buttonProps={{
            onClick: () => { console.log('small button clicked'); }
          }}>
         This body button is variant xxl.
        </BodyButton>
        <BodyButton
          variant="xxl"
          ctaLink
          buttonText="xxl cta"
          color="magenta.0"
          ctaLinkProps={{
            href: "https://example.com",
            color: "magenta.0"
          }}>
         This body button is variant xxl.
        </BodyButton> */}
    </div>
 );
};
