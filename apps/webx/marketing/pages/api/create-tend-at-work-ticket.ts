/** @format */

import type { NextApiRequest, NextApiResponse } from 'next';

import { tendAtWorkTicket } from '../../api/zendesk';

type Data = {
  success: boolean;
  errorMessage?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, phone, company, message } = req.body;

    try {
      await tendAtWorkTicket({ email, name, phone, company, message });
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
