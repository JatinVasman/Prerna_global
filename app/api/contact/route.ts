import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Contact form API Route
// Supports Resend (preferred) and Nodemailer SMTP as fallback
// Set RESEND_API_KEY in .env.local to enable email delivery
// If no email provider is configured, we log and return 200
// so the user experience still works in dev/staging
// ============================================================

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function validate(data: ContactPayload): string | null {
  if (!data.name?.trim()) return 'Name is required.';
  if (!data.phone?.trim()) return 'Phone number is required.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Please enter a valid email address.';
  }
  return null;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 422 });
  }

  const { name, email, phone, subject } = body;
  const messageContent = body.message?.trim() || 'Quick consultation enquiry submitted via website.';

  const defaultRecipients = [
    'pw@prernaglobalservices.com',
    'mw@prernaglobalservices.com',
    'prernaglobalservices@gmail.com',
  ];

  const toEmailsEnv = process.env.CONTACT_FORM_TO_EMAIL;
  const toEmails = toEmailsEnv
    ? toEmailsEnv.split(',').map((e) => e.trim()).filter(Boolean)
    : defaultRecipients;

  const ccEmailsEnv = process.env.CONTACT_FORM_CC_EMAILS;
  const ccEmails = ccEmailsEnv
    ? ccEmailsEnv.split(',').map((e) => e.trim()).filter(Boolean)
    : [];

  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL ?? 'Prerna Global Services <noreply@prernaglobalservices.com>';
  const resendKey = process.env.RESEND_API_KEY;

  const emailSubject = `[Prerna Global] New Enquiry${subject ? `: ${subject}` : ''}`;
  const emailHtml = `
    <h2>New Form Submission</h2>
    <table cellpadding="8" cellspacing="0" style="font-family:sans-serif;font-size:15px;">
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email?.trim() || '(not provided)'}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Subject:</strong></td><td>${subject ?? '(not selected)'}</td></tr>
      <tr><td><strong>Message:</strong></td><td style="white-space:pre-wrap;max-width:500px;">${messageContent}</td></tr>
    </table>
  `;

  if (resendKey) {
    try {
      const emailPayload: Record<string, unknown> = {
        from: fromEmail,
        to: toEmails,
        subject: emailSubject,
        html: emailHtml,
      };

      if (ccEmails.length > 0) {
        emailPayload.cc = ccEmails;
      }

      if (email && email.trim()) {
        emailPayload.reply_to = email.trim();
      }

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendRes.ok) {
        const err = await resendRes.text();
        console.error('Resend error:', err);
        return NextResponse.json(
          { success: false, message: 'Failed to send email. Please try again or contact us directly.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
      console.error('Email send error:', err);
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please try WhatsApp or call us directly.' },
        { status: 500 }
      );
    }
  }

  // Development fallback: log to console
  console.log('[Contact Form] Email sending not configured. Payload:');
  console.log({ name, email, phone, subject, message: messageContent, to: toEmails, cc: ccEmails });

  return NextResponse.json({
    success: true,
    message: 'Message received. (Email delivery not configured — set RESEND_API_KEY in .env.local)',
  });
}
