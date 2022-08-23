/** @format */

import type { NextApiRequest, NextApiResponse } from 'next';

import { createZendeskTicket } from '../../api/zendesk';

type Data = {
  success: boolean;
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, firstName, lastName, phone, message } = req.body;

    try {
      await createZendeskTicket({ email, firstName, lastName, phone, message });
      res.status(200).json({ success: true });
    } catch ({ response }) {
      res.status(response.status).json({ success: false });
    }
  } else {
    res
      .status(400)
      .json({ success: false, errorMessage: 'Only POST requests are allowed' });
  }
}
