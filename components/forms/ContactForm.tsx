'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send, RotateCcw } from 'lucide-react';
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
        <CheckCircle2 size={52} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
        <p className={styles.successDesc}>
          Thank you for reaching out to Prerna Global Services. One of our senior counsellors
          will review your profile and get back to you within 24 hours.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => setStatus('idle')}
        >
          <RotateCcw size={16} aria-hidden="true" />
          <span>Send Another Message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>
            Full Name *
          </label>
          <input
            id="contact-name"
            className={styles.input}
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            Email Address *
          </label>
          <input
            id="contact-email"
            className={styles.input}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="e.g. rahul@gmail.com"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-phone" className={styles.label}>
            Phone / WhatsApp *
          </label>
          <input
            id="contact-phone"
            className={styles.input}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="e.g. +91 98765 43210"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-subject" className={styles.label}>
            Interested Service / Country
          </label>
          <select id="contact-subject" name="subject" className={styles.select}>
            <option value="">Select a topic…</option>
            <option value="IELTS Coaching">IELTS Coaching</option>
            <option value="University Admission">University Admission</option>
            <option value="Visa Support">Visa Support</option>
            <option value="Study in UK">Study in UK</option>
            <option value="Study in USA">Study in USA</option>
            <option value="Study in Canada">Study in Canada</option>
            <option value="Study in Australia">Study in Australia</option>
            <option value="Study in Germany">Study in Germany</option>
            <option value="Study in Ireland">Study in Ireland</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Other">Other Enquiry</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Your Message / Career Goals *
        </label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          name="message"
          required
          placeholder="Tell us about your educational background, preferred study destination, degree level (Bachelors/Masters), and any specific questions you have…"
          rows={5}
        />
      </div>

      {status === 'error' && (
        <p className={styles.error} role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className={styles.spinner} aria-hidden="true" />
            <span>Sending Message…</span>
          </>
        ) : (
          <>
            <span>Send Free Consultation Request</span>
            <Send size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <p className={styles.disclaimer}>
        <span>🔒 Confidential & Protected. Your details will never be shared.</span>
      </p>
    </form>
  );
}
