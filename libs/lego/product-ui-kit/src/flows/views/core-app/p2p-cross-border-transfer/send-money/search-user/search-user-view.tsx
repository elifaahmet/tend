/**@format */
import React from 'react';

import {
  B1,
  IMostFrequentlySent,
  IMostRecent,
  IP2PRequest,
  IUser,
  Layout,
  List,
  ListItemDataPaymentProps,
  ListItemDataUserProps,
  ListProps,
  Modal,
  SearchUser,
  SearchUserProps,
  Spacer,
} from '@tend/lego/product-ui-kit';

import { OptionInternationTransferText } from '../initiate-transfer/components/initiate-transfer.styled';

export interface P2PTransferSearchUserViewProps {
  searchUser: SearchUserProps;
  p2pRequest: Array<IP2PRequest>;
  mostFrequentlySent: Array<IMostFrequentlySent>;
  mostRecent: Array<IMostRecent>;
  error?: { flag: boolean; message: string };
  onClickCloseErrorModal: () => void;
  withDeletePayee: (id: string) => (cb: () => void) => () => void;
  withNavigate: (user: IUser) => () => void;
  onShowAllClick?: () => void;
}

export const SearchUserView: React.FC<P2PTransferSearchUserViewProps> = (
  props
) => {
  const {
    searchUser,
    p2pRequest,
    mostFrequentlySent,
    mostRecent,
    withDeletePayee,
    error,
    onClickCloseErrorModal,
    onShowAllClick,
    withNavigate,
  } = props;

  const p2pRequestProps: ListProps = {
    listType: 'payment' as const,
    list: p2pRequest.map(
      (item) => ({ data: item } as ListItemDataPaymentProps)
    ),
    isActionEdit: true,
    listContainerProps: {
      title: 'Waiting For Payment',
      actionLabel: 'Edit',
      actionLabelAlt: 'Done',
    },
  };

  const mostFrequentlySentProps: ListProps = {
    listType: 'user',
    list: mostFrequentlySent.map(
      (item) =>
        ({
          data: item,
          onDelete: withDeletePayee(item.id),
          onClick: withNavigate(item as IUser),
          sendAgain: true,
        } as ListItemDataUserProps)
    ),
    isActionEdit: true,
    listContainerProps: {
      title: 'Send again',
      actionLabel: 'Edit',
      actionLabelAlt: 'Done',
    },
  };

  const mostRecentProps: ListProps = {
    listType: 'payment',
    list: mostRecent.map(
      (item) =>
        ({
          data: item,
        } as ListItemDataPaymentProps)
    ),
    listContainerProps: {
      title: 'Recent Activity',
      actionLabel: 'Show All',
      actionLabelAlt: 'Show All',
      onActionClick: onShowAllClick,
    },
  };

  return (
    <Layout>
      <div id="p2p-transfer-search-user-view">
        <Spacer top={20}>
          <SearchUser {...searchUser} />
        </Spacer>
        {p2pRequest.length > 0 && <List {...p2pRequestProps} />}
        {mostFrequentlySent.length > 0 && (
          <Spacer top={p2pRequest.length > 0 ? 20 : 0}>
            <List {...mostFrequentlySentProps} />
          </Spacer>
        )}
        {mostRecent.length > 0 && (
          <Spacer
            top={
              p2pRequest.length > 0 || mostFrequentlySent.length > 0 ? 20 : 0
            }
          >
            <List {...mostRecentProps} />
          </Spacer>
        )}
      </div>
      <Modal show={error.flag} title={'Error'} onClose={onClickCloseErrorModal}>
        <OptionInternationTransferText>
          <B1>{error.message}</B1>
        </OptionInternationTransferText>
      </Modal>
    </Layout>
  );
};
