import type { NextApiRequest, NextApiResponse } from 'next';

import {getDiscourseApiKey, getDiscourseBaseUrl} from "../../../constants/discourse-parameters";

export type Username = string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {

    const username: Username = req.headers["api-username"] as Username;
    const { locale } = req.query;

    try {
      const response = await fetch(`${getDiscourseBaseUrl(locale)}/posts.json`, {
        "method": "POST",
        "headers": {
          "Api-Key": getDiscourseApiKey(locale),
          "Api-Username": username,
          "Content-Type": "application/json; charset=utf-8",
        },
        "body": JSON.stringify(JSON.parse(req.body))
      })

      const data = await response.json();
      return res.status(200).send(data);

    } catch (error) {
      res.status(error.status).json(error);
    }

  } else {
    res.status(400).json({ success: false, errorMessage: 'Only POST requests are allowed' });

  }
}
