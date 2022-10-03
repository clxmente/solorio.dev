// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import * as EmailValidator from "email-validator";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { email, message } = JSON.parse(req.body);
  if (!email || !message) {
    return res.status(400).json({
      success: false,
      error: "Please fill in all fields.",
    });
  }

  if (!EmailValidator.validate(email)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid email address.",
    });
  }

  try {
    await sendgrid.send({
      to: "clxmente.s@gmail.com",
      from: "contact@solorio.dev",
      subject: `message from ${email}`,
      html: `<p>${message}</p><p>Reply to: ${email}</p>`,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: (error.response
        ? error.response.body
        : "Something went wrong.") as string,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Message sent! I'll get back to you soon!",
  });
}
