'use client';

import { useState, useEffect, useRef } from 'react';
import { X, GraduationCap, CheckCircle2, Loader2 } from 'lucide-react';
import styles from './LeadCaptureModal.module.css';

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Show after 8 seconds on first visit in session
  useEffect(() => {
    if (sessionStorage.getItem('lead-modal-dismissed')) return;
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('lead-modal-dismissed', '1');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, subject: 'Lead Capture Modal Enquiry' }),
      });
      if (res.ok) {
        setSubmitted(true);
        sessionStorage.setItem('lead-modal-dismissed', '1');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-modal="true"
      aria-label="Free consultation offer"
      onCancel={handleClose}
    >
      <div className={styles.backdrop} onClick={handleClose} aria-hidden="true" />
      <div className={styles.panel}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.success}>
            <CheckCircle2 size={48} className={styles.successIcon} />
            <h2 className={styles.successTitle}>Thank you!</h2>
            <p>We&apos;ll be in touch within 24 hours to schedule your free session.</p>
            <button className="btn btn--primary" onClick={handleClose}>
              Continue Exploring
            </button>
          </div>
        ) : (
          <>
            <div className={styles.iconBadge}>
              <GraduationCap size={28} aria-hidden="true" />
            </div>
            <h2 className={styles.title}>Get Your Free Consultation</h2>
            <p className={styles.subtitle}>
              Talk to a Prerna Global expert about your study abroad plans — completely free, no obligation.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Your full name"
                required
                autoComplete="name"
                aria-label="Full name"
              />
              <input
                className="form-input"
                type="tel"
                name="phone"
                placeholder="WhatsApp / phone number"
                required
                autoComplete="tel"
                aria-label="Phone number"
              />
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
              />

              {error && <p className={styles.error} role="alert">{error}</p>}

              <button
                type="submit"
                className="btn btn--primary"
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {loading ? (
                  <><Loader2 size={18} className={styles.spinner} aria-hidden="true" /> Sending…</>
                ) : (
                  'Book Free Session'
                )}
              </button>
            </form>

            <ul className={styles.benefits}>
              {['No cost, no obligation', 'Expert counsellors', 'Personalized guidance'].map((b) => (
                <li key={b}>
                  <CheckCircle2 size={14} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </dialog>
  );
}
