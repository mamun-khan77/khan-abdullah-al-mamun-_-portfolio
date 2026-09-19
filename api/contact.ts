import type { VercelRequest, VercelResponse } from '@vercel/node';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = (request.body || {}) as ContactPayload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return response.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    return response.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return response.status(500).json({ error: 'Email service is not configured yet.' });
  }

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email.trim(),
      subject: subject?.trim() || `New portfolio message from ${name.trim()}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject?.trim() || 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br />')}</p>
      `,
    }),
  });

  if (!emailResponse.ok) {
    return response.status(502).json({ error: 'Resend could not deliver the message.' });
  }

  return response.status(200).json({ ok: true });
}