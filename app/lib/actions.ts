"use server";

import { z } from "zod";
import { Resend } from "resend";

const ContactFormSchema = z.object({
  sender: z.string().email("This is not a valid email."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

const SendEmail = ContactFormSchema;

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    sender?: string[];
    message?: string[];
  };
  message?: string | null;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: State, formData: FormData) {
  const validatedFields = SendEmail.safeParse({
    sender: formData.get("sender"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Send Email.",
    };
  }

  const { sender, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [`${process.env.RECIPIENT_EMAIL}`],
      subject: "Message from personal portfolio",
      reply_to: sender,
      text: message,
    });
    if (data.error) {
      throw new Error(data.error.message);
    }
  } catch (error) {
    return {
      message: "Internal Error. Failed to Send Email.",
    };
  }

  return {
    message: "Email sent successfully.",
  };
}
