import React from 'react';
import { HeadlineBody } from './headline-body';

export default {
  component: HeadlineBody,
  title: 'Basic Components/HeadlineBody',
};

export const primary = () => {

  return (
    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gridRowGap: 20 }}>
      <HeadlineBody variant="base" title="Base Title" color="magenta.0">
        This is base body of base headlinebody. This is base body of base headlinebody. This is base body of base headlinebody.
      </HeadlineBody>
      <HeadlineBody variant="small" title="Small Title">
        This is small body of small headlinebody. This is small body of small headlinebody. This is small body of small headlinebody.
      </HeadlineBody>
      <HeadlineBody variant="medium" title="Medium Title">
        This is medium body of medium headlinebody. This is medium body of medium headlinebody. This is medium body of medium headlinebody.
      </HeadlineBody>
      <HeadlineBody variant="large" title="Large Title">
        This is small body of large headlinebody. This is large body of large headlinebody. This is large body of large headlinebody.
      </HeadlineBody>
      <HeadlineBody variant="xl" title="XLarge Title">
        This is xlarge body of xlarge headlinebody. This is xlarge body of xlarge headlinebody. This is xlarge body of xlarge headlinebody.
      </HeadlineBody>
      <HeadlineBody variant="xxl" title="XXLarge">
        This is xxlarge body of xxlarge headlinebody. This is xxlarge body of xxlarge headlinebody. This is xxlarge body of xxlarge headlinebody.
      </HeadlineBody>
    </div>
  );
};
