import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({ name, email, message }: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) throw new Error("Missing environment variable: CONTACT_TO_EMAIL");

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return { ok: true as const };
}
