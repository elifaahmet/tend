/**@format */

import React from 'react';
import { Input, SVGIcon } from '@tend/shared/design/ui-kit';
import { Spacer } from '@tend/lego/product-ui-kit';
import { FilterButton } from './all-activity-view.styled';

export interface AllActivityViewSearchInputFilterButton {
  searchOnChange: React.ChangeEventHandler<HTMLInputElement>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AllActivityViewSearchInputFilterButton: React.FC<AllActivityViewSearchInputFilterButton> = (
  props
) => {
  const inputProps = {
    type: 'text',
    name: 'search-transaction',
    placeholder: 'Search',
    error: false,
    variant: 'boxed' as const,
    onChange: props.searchOnChange,
  };

  const filterButtonProps = {
    onClick: () => props.setShowFilter(true),
  };

  return (
    <Spacer top={16} style={{ display: 'flex' }}>
      <div style={{ width: 'calc(100% - 62px)' }}>
        <Input {...inputProps} />
      </div>
      <Spacer top={2}>
        <FilterButton {...filterButtonProps}>
          <SVGIcon iconName="filter" boxSize={22} color="neutral-white" />
        </FilterButton>
      </Spacer>
    </Spacer>
  );
};

export default AllActivityViewSearchInputFilterButton;
