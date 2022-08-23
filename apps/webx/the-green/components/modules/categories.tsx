import React from 'react';
import { Rule, Paragraph } from '@tend/ui';

import CategoryList from './category-list';
import {useTranslation} from "@tend/webx/utils/next-i18next";
export interface CategoriesProps {
  data?:
    {
      id: string;
      slug: string;
      name: string;
      read_restricted: boolean;
    }[];
  hideTopLine?: boolean;
}


const Categories = (props: CategoriesProps) => {
  const { t } = useTranslation();
  const { data } = props;
  return (
    <>
      <Rule size={12} ruleColor="orange.0" />
      <Paragraph
          marginTop="1rem"
          marginBottom="1rem"
          color="offWhite"
          textTransform={'uppercase'}>
        {t('Categories')}
      </Paragraph>

     <CategoryList sm={1} md={1} lg={2} data={data} />
    </>
  );
};

export default Categories;
