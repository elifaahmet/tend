/** @format */

import React from 'react';
import { L1, L2 } from '@tend/lego/product-ui-kit';
import { ListWrapper } from './list-container.styled';

export interface ListContainerProps {
  title?: string;
  actionLabel?: string;
  actionLabelAlt?: string;
  onActionClick?: () => void;
  isBeingEdited?: boolean;
  isListScrollable?: boolean;
}

export const ListContainer: React.FC<ListContainerProps> = (props) => {
  const {
    title,
    actionLabel,
    actionLabelAlt,
    isBeingEdited,
    isListScrollable,
    onActionClick,
  } = props;

  return (
    <ListWrapper
      isHeaderHidden={!(title || actionLabel)}
      isListScrollable={isListScrollable}
    >
      <div className="header">
        <div className="title">
          <L1>{title}</L1>
        </div>
        <div className="action-wrapper">
          <button onClick={onActionClick}>
            <L2 color={'primary-yellow'} bold={true}>
              {!isBeingEdited ? actionLabel : actionLabelAlt}
            </L2>
          </button>
        </div>
      </div>

      <div className="items">{props.children}</div>
    </ListWrapper>
  );
};
