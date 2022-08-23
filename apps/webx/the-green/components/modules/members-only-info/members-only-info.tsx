import React from 'react';
import { Icon, Popover, PopoverWrapper } from '@tend/ui';
import MembersOnlyInfoContent from './members-only-info-content';
import useBodyScrollLock from '../../../hooks/useBodyScrollLock';

const BodyScrollLock = () => {
  useBodyScrollLock(836);
  return <i />;
};

const MembersOnlyInfo = () => {
  return (
    <PopoverWrapper>
      <Popover
        noPaddingDesktop={true}
        bg={['white']}
        extraTopSpace={12}
        borderBottomColor={['white']}
        scrollLock={<BodyScrollLock />}
        single
        position="bottom"
        trigger={<Icon color="white" iconName="Help" />}
      >
        <MembersOnlyInfoContent />
      </Popover>
    </PopoverWrapper>
  );
};

export default MembersOnlyInfo;
