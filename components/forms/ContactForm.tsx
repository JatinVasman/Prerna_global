'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <CheckCircle2 size={48} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p>
          Thank you for reaching out. One of our counsellors will get back to you
          within 24 hours.
        </p>
        <button
          className="btn btn--ghost btn--sm"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className="form-field">
          <label htmlFor="contact-name" className="form-label">Full Name *</label>
          <input
            id="contact-name"
            className="form-input"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email" className="form-label">Email Address *</label>
          <input
            id="contact-email"
            className="form-input"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className="form-field">
          <label htmlFor="contact-phone" className="form-label">Phone / WhatsApp *</label>
          <input
            id="contact-phone"
            className="form-input"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+91 XXXXXXXXXX"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-subject" className="form-label">Subject</label>
          <select id="contact-subject" name="subject" className="form-select">
            <option value="">Select a topic…</option>
            <option value="IELTS Coaching">IELTS Coaching</option>
            <option value="University Admission">University Admission</option>
            <option value="Visa Support">Visa Support</option>
            <option value="Study in UK">Study in UK</option>
            <option value="Study in USA">Study in USA</option>
            <option value="Study in Canada">Study in Canada</option>
            <option value="Study in Australia">Study in Australia</option>
            <option value="Study in Germany">Study in Germany</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message" className="form-label">Message *</label>
        <textarea
          id="contact-message"
          className="form-textarea"
          name="message"
          required
          placeholder="Tell us about your study abroad goals, current academic background, and any specific questions you have…"
          rows={5}
        />
      </div>

      {status === 'error' && (
        <p className={styles.error} role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg"
        disabled={status === 'loading'}
        style={{ width: '100%', justifyContent: 'center' }}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <><Loader2 size={18} className={styles.spinner} aria-hidden="true" /> Sending…</>
        ) : (
          <><Send size={18} aria-hidden="true" /> Send Message</>
        )}
      </button>

      <p className={styles.disclaimer}>
        By submitting this form, you agree to be contacted by Prerna Global Services
        regarding your enquiry.
      </p>
    </form>
  );
}
