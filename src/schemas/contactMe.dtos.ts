import z from 'zod/v4';

export const contactFormSchema = z.strictObject({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormSchema = z.infer<typeof contactFormSchema>;
