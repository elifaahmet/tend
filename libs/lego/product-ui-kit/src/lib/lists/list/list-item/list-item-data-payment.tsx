/** @format */
import styled from '@emotion/styled';
import React from 'react';

import {
  B1,
  B2,
  ITransaction,
  ListItemProps,
  formatNumberToMoneyString,
} from '@tend/lego/product-ui-kit';

import { themeStylesToCssString } from '../../../typography/helpers';
import {
  ListItemDataSectionEndPayment,
  ListItemDataSectionStart,
} from './list-item.styled';

export interface ListItemDataPaymentProps
  extends Omit<ListItemProps, 'onDelete'> {
  data: ITransaction;
  onDelete?: () => void;
}

const StyledListItemAmount = styled.label`
  color: ${(props) => props.theme.color['neutral-off-white']};
  /**
  * @tech-debt
  *
  * Add this as L1 along with new entry-amount typography
  */
  ${(props) => themeStylesToCssString(props.theme, 'list-item-amount')};
`;

export function ListItemDataPayment(props: ListItemDataPaymentProps) {
  const {
    amount,
    createdDate,
    // currency,
    description,
    friendlyDescription,
    nickname,
    note,
    requestDate,
    transactionDate,
  } = props.data;
  const date = transactionDate || requestDate || createdDate;

  return (
    <>
      <ListItemDataSectionStart>
        <B1 bold color="neutral-off-white">
          {nickname || friendlyDescription}
        </B1>
        <B2 color="neutral-off-white">
          {`${date}  ${note || description?.note || ''}`.trim()}
        </B2>
      </ListItemDataSectionStart>
      <ListItemDataSectionEndPayment>
        <StyledListItemAmount>
          {formatNumberToMoneyString(amount)}
        </StyledListItemAmount>
        <B2>USD</B2>
      </ListItemDataSectionEndPayment>
    </>
  );
}

export default ListItemDataPayment;
