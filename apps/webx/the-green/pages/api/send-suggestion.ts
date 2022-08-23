import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";
import {
  NODEMAILER_MAIL_HOST,
  NODEMAILER_MAIL_PORT,
  NODEMAILER_MAIL_USER,
  NODEMAILER_MAIL_PASSWORD
} from '../../env';


// **** This needs to change!

const transporter = nodemailer.createTransport({
  host: NODEMAILER_MAIL_HOST,
  port: Number(NODEMAILER_MAIL_PORT),
  auth: {
      user: NODEMAILER_MAIL_USER,
      pass: NODEMAILER_MAIL_PASSWORD
  }
});

const mailer = ({ senderMail, name, text }) => {
  const from = name && senderMail ? `<${senderMail}>` : `${name || senderMail}`
  const message = {
      from,
      to: NODEMAILER_MAIL_USER,
      subject: `Suggestion from ${from}`,
      text,
      replyTo: from,
  }

  return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
          error ? reject(error) : resolve(info)
      )
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    try {
      const { senderMail, name, content } = JSON.parse(req.body);
      if (senderMail === "" || name === "" || content === "") {
          res.status(403).send("");
          return;
      }

      const mailerRes = await mailer({ senderMail, name, text: content });
      res.send(mailerRes);
    } catch ({ response }) {
      res.status(response.status).json(req.body);
    }
  } else {
    res.status(400).json({ success: false, errorMessage: 'Only POST requests are allowed' });
  }
}
