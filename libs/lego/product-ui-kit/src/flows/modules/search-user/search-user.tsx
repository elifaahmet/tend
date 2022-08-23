/**@format */
import React from 'react';
import { Link } from 'react-router-dom';

import { B1, ListContainer, Spacer } from '@tend/lego/product-ui-kit';
import { Input } from '@tend/shared/design/ui-kit';

import { getUserListItem } from '../../../lib/lists/list/list-item/helpers';
import { IUser } from '../../types';
import { OptionInternationTransferText } from '../../views/core-app/p2p-cross-border-transfer/send-money/initiate-transfer/components/initiate-transfer.styled';
import {
  SearchUserContainer,
  SearchUserFieldWrapper,
} from './search-user.styled';

export interface SearchUserProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchResults?: Array<{ data: IUser }>;
  bankText: string;
}

export const SearchUser: React.FC<SearchUserProps> = (props) => {
  const inputProps = {
    type: 'text',
    name: 'search-user',
    placeholder: 'TendID, email, or mobile',
    error: false,
    variant: 'boxed' as const,
    label: 'send money to',
    onChange: props.onChange,
  };

  const { searchResults, bankText } = props;

  return (
    <SearchUserContainer className="module-search-user">
      <SearchUserFieldWrapper>
        <Input {...inputProps} />
      </SearchUserFieldWrapper>
      <Spacer bottom={20}>
        <OptionInternationTransferText>
          <B1>{bankText}</B1>
        </OptionInternationTransferText>
      </Spacer>
      {searchResults && !!searchResults.length && (
        <ListContainer isListScrollable={true}>
          {searchResults.map((user) => (
            <Link
              to={`/initiate-transfer/${user.data.tendId}`}
              state={user.data}
              key={user.data.tendId}
            >
              {getUserListItem({ ...user })}
            </Link>
          ))}
        </ListContainer>
      )}
    </SearchUserContainer>
  );
};

export default SearchUser;
