import React from 'react';
import { IconHeadlineBody } from './icon-headline-body';

export default {
  component: IconHeadlineBody,
  title: 'Mixed Text Components/IconHeadlineBody',
};

export const primary = () => {

  return (
    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gridRowGap: 20 }}>
      <p>Its horizontal</p>
      <IconHeadlineBody layout="horizontal" variant="base" title="Base Title" color="magenta.0">
        This is base body of base IconHeadlineBody. This is base body of base IconHeadlineBody. This is base body of base IconHeadlineBody.
      </IconHeadlineBody>
      <p>Its vertical</p>
      <IconHeadlineBody layout="vertical" variant="small" title="Small Title">
        This is small body of small IconHeadlineBody. This is small body of small IconHeadlineBody. This is small body of small IconHeadlineBody.
      </IconHeadlineBody>
      <p>Its vertical</p>
      <IconHeadlineBody layout="vertical" variant="medium" title="Medium Title">
        This is medium body of medium IconHeadlineBody. This is medium body of medium IconHeadlineBody. This is medium body of medium IconHeadlineBody.
      </IconHeadlineBody>
      <p>Its vertical</p>
      <IconHeadlineBody layout="vertical" variant="large" title="Large Title">
        This is small body of large IconHeadlineBody. This is large body of large IconHeadlineBody. This is large body of large IconHeadlineBody.
      </IconHeadlineBody>
      <p>Its horizontal</p>
      <IconHeadlineBody layout="horizontal" variant="xl" title="XLarge Title">
        This is xlarge body of xlarge IconHeadlineBody. This is xlarge body of xlarge IconHeadlineBody. This is xlarge body of xlarge IconHeadlineBody.
      </IconHeadlineBody>
    </div>
  );
};