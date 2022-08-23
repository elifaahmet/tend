import React from 'react';
import { Paragraph } from '@tend/ui';

import CategoryList from '../modules/category-list';
import { useTranslation } from '@tend/webx/utils/next-i18next';

export interface CategoriesProps {
  data: {
    id: string;
    slug: string;
    name: string;
    read_restricted: boolean;
  }[];
  hideTopLine?: boolean;
  current?: any;
}


const Categories = (props: CategoriesProps) => {
  const { data, current } = props;
  const { t } = useTranslation();
  return (
    <>
      <Paragraph
          marginTop="1rem"
          marginBottom="1rem"
          color="offWhite"
          textTransform='uppercase'>
          {t('Categories')}
      </Paragraph>

     <CategoryList sm={1} md={2} lg={3} data={data} current={current.category} />
    </>
  );
};

export default Categories;
