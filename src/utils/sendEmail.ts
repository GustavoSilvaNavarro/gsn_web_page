'use server';

import { Resend } from 'resend';
import { myEmail } from './constants';
import { Email } from '@/components/Emails/Email';

const resend = new Resend(process.env.RESEND_EMAIL_KEY);

type EmailPayload = {
  subject: string;
  fromEmail: string;
  message: string;
  name: string;
};

export const sendEmail = async (payload: EmailPayload) => {
  try {
    const { message, name, fromEmail, subject } = payload;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: myEmail,
      replyTo: fromEmail,
      subject: `New message from ${name}: ${subject}`,
      react: Email({ message, name }),
    });

    console.log('Email sent successfully!');
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: 'Failed to send email.' };
  }
};
