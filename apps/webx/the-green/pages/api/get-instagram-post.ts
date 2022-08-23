import type { NextApiRequest, NextApiResponse } from 'next';
import {
  FB_APP_ID,
  FB_CLIENT_TOKEN,
} from '../../env';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const { post } = req.query;
    try {
      const response = await fetch(`https://graph.facebook.com/instagram_oembed?hidecaption=true&url=${post}&access_token=${FB_APP_ID}|${FB_CLIENT_TOKEN}`, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const data = await response.json();
      res.status(200).send(data);
    } catch ({ response }) {
      res.status(response.status).json(response);
    }
  } else {
    res.status(400).json({ success: false, errorMessage: 'Only GET requests are allowed' });
  }
}
