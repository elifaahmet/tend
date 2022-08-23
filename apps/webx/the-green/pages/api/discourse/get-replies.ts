import type { NextApiRequest, NextApiResponse } from 'next';

import {getDiscourseApiKey, getDiscourseBaseUrl} from "../../../constants/discourse-parameters";

export type Username = string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const username: Username = req.headers["api-username"] as Username;
    const { locale } = req.query;
    try {
      const response = await fetch(`${getDiscourseBaseUrl(locale)}/t/${req.query.id}/posts.json`, {
        "method": "GET",
        "headers": {
          "Api-Key": getDiscourseApiKey(locale),
          "Api-Username": username,
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      const data = await response.json();

      res.status(200).send(data);

    } catch (response) {
      // res.status(response.status).json(response);
    }
  } else {
    res.status(400).json({ success: false, errorMessage: 'Only GET requests are allowed' });
  }
}
