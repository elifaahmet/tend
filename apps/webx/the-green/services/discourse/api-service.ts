import getConfig from 'next/config';
import { get } from '../../utils/api';
import { Category } from './api-types';

export const getCategories = async (): Promise<Category[]> => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;
  const response = await get<{ category_list: { categories: Category[] } }>(`${basePath}/api/categories`);
  return response.isSuccess ? response.result.category_list.categories : [];
};
