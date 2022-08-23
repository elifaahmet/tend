/** @format */

import axios from 'axios';

import { ITERABLE_API_BASE_URL, ITERABLE_API_KEY } from '../constants/env-vars';

const iterableClient = axios.create({
  baseURL: ITERABLE_API_BASE_URL,
  headers: {
    Api_Key: ITERABLE_API_KEY,
  },
});

export interface SubscribeListParams {
  email: string;
  locale: string;
  listId: number;
}

/**
 * Subscribe an email address to a list on Iterable.
 */
export function subscribeToList({
  email,
  locale = 'en-us',
  listId,
}: SubscribeListParams) {
  return iterableClient.post('lists/subscribe', {
    listId,
    subscribers: [
      {
        email,
        dataFields: {
          locale,
        },
      },
    ],
  });
}
