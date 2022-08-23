/** @format */

import axios from 'axios';

import {
  ZENDESK_BASE_URL,
  ZENDESK_API_KEY,
  ZENDESK_TEND_AT_WORK_RECIPIENT,
} from '../constants/env-vars';

const zendeskClient = axios.create({
  baseURL: ZENDESK_BASE_URL,
});

export interface tendAtWorkTicketParams {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface createZendeskTicketParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function tendAtWorkTicket({
  email,
  name,
  phone,
  company,
  message,
}: tendAtWorkTicketParams) {
  return zendeskClient.post(
    '/requests',
    {
      request: {
        recipient: ZENDESK_TEND_AT_WORK_RECIPIENT,
        subject: 'Tend At Work',
        requester: {
          name: name,
          email: email,
        },
        comment: {
          body: `Name: ${name} \n Company: ${company} \n Phone: ${phone} \n Email: ${email} \n  \n ${message}`,
        },
      },
    },
    {
      auth: {
        username: `${email}/token`,
        password: ZENDESK_API_KEY,
      },
    }
  );
}

export function createZendeskTicket({
  email,
  firstName,
  lastName,
  phone,
  message,
}) {
  return zendeskClient.post(
    '/requests',
    {
      request: {
        subject: 'Tend Support Request',
        requester: {
          name: `${firstName} ${lastName}`,
          email: email,
        },
        comment: {
          body: `Phone number: ${phone} \n \n ${message}`,
        },
      },
    },
    {
      auth: {
        username: `${email}/token`,
        password: ZENDESK_API_KEY,
      },
    }
  );
}
