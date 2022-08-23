/**@format */
import React, { useState } from 'react';

import {
  ListContainer,
  ListContainerProps,
  ListItemDataPaymentProps,
  ListItemDataUserProps,
} from '@tend/lego/product-ui-kit';

import {
  generateHash,
  getPaymentListItem,
  getUserListItem,
} from './list-item/helpers';

export interface ListProps {
  isActionEdit?: boolean;
  isListScrollable?: boolean;
  listContainerProps: ListContainerProps;
  list: Array<ListItemDataUserProps | ListItemDataPaymentProps>;
  listType: 'user' | 'payment' | 'generic';
}

export const List: React.FC<ListProps> = (props) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [deletedIndices, setDeletedIndices] = useState([]);

  const {
    listContainerProps,
    list,
    listType,
    isActionEdit,
    isListScrollable,
  } = props;

  const onActionClick = isActionEdit
    ? () => setIsBeingEdited(!isBeingEdited)
    : listContainerProps?.onActionClick || (() => null);

  const listProps = {
    ...listContainerProps,
    isListScrollable,
    isBeingEdited,
    onActionClick,
  };

  return (
    <ListContainer {...listProps}>
      {list.map((item) => {
        const hash = generateHash(item);
        const onDelete = () => {
          setDeletedIndices((a) => [...a, hash]);
        };
        const updatedItem = {
          ...item,
          isBeingEdited,
          isDeleted: deletedIndices.includes(hash),
          onDelete,
        };

        switch (listType) {
          case 'user':
            return getUserListItem(updatedItem as ListItemDataUserProps);
          case 'payment':
            return getPaymentListItem(updatedItem as ListItemDataPaymentProps);
          case 'generic':
          default:
            /**TODO: replace once we know what to do*/
            return <div />;
        }
      })}
    </ListContainer>
  );
};
List.defaultProps = {
  isActionEdit: false,
};

export default List;
