import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import Button from './ui/Button.jsx';

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-brand-text">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputCls = 'w-full px-4 py-3 rounded-xl border border-brand-border text-brand-text text-sm placeholder-brand-muted/60 focus:outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-700/10 transition-all';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-12 px-6 bg-white rounded-2xl shadow-card">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
          <CheckCircle size={32} />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-brand-text">Message Sent!</h3>
          <p className="text-brand-muted mt-2 text-sm leading-relaxed">
            Thank you for reaching out. We'll respond to your message within 1–2 business days.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 bg-white rounded-2xl shadow-card p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your Name *" error={errors.name}>
          <input className={inputCls} name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
        </Field>
        <Field label="Email Address *" error={errors.email}>
          <input className={inputCls} name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input className={inputCls} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" />
        </Field>
        <Field label="Subject *" error={errors.subject}>
          <input className={inputCls} name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" />
        </Field>
      </div>
      <Field label="Message *" error={errors.message}>
        <textarea
          className={`${inputCls} resize-none`}
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here…"
        />
      </Field>
      <Button type="submit" variant="gradient" size="md" disabled={loading} className="self-start">
        <Send size={16} />
        {loading ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
