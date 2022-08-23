/**@format */
import React, { MouseEventHandler, useState } from 'react';

import {
  Layout,
  ListItemDataPaymentProps,
  SetDateRangeType,
} from '@tend/lego/product-ui-kit';
import { RadioButton } from '@tend/shared/design/ui-kit';

import { AllActivityViewFilters } from './components/all-activity-view-filters';
import { AllActivityViewSearchInputFilterButton } from './components/all-activity-view-search-input-filter-button';
import { AllActivityViewTransactions } from './components/all-activity-view-transactions';

export interface AllActivityViewProps {
  searchOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFiltersApplyClick: (filters: any) => void;
  setDates: SetDateRangeType;
  transactionsThisWeek?: Array<ListItemDataPaymentProps>;
  allOtherTransactions?: Array<ListItemDataPaymentProps>;
}

export const AllActivityView: React.FC<AllActivityViewProps> = (props) => {
  const [showFilters, setShowFilter] = useState(false);
  const [transactionsType, setTransactionsType] = useState('sent');

  const {
    searchOnChange,
    onFiltersApplyClick,
    setDates,
    transactionsThisWeek,
    allOtherTransactions,
  } = props;

  const searchInputFilterButtonProps = {
    searchOnChange,
    setShowFilter,
  };

  const filterProps = {
    onFiltersApplyClick,
    setDates,
    setShowFilter,
  };

  const transactionsProps = {
    transactionsThisWeek,
    allOtherTransactions,
  };

  return (
    <Layout>
      <div id="p2p-transfer-all-activity">
        <RadioButton
          labels={['sent', 'received', 'all activity']}
          radioGroupName="all-activity"
          selectedColor="primary-yellow"
          defaultCheckedIndex={0}
          onChange={(e) => setTransactionsType(e.target.value)}
        />
        {!showFilters ? (
          <AllActivityViewSearchInputFilterButton
            {...searchInputFilterButtonProps}
          />
        ) : (
          <AllActivityViewFilters {...filterProps} />
        )}
        {!showFilters && (transactionsThisWeek || allOtherTransactions) && (
          <AllActivityViewTransactions {...transactionsProps} />
        )}
      </div>
    </Layout>
  );
};
