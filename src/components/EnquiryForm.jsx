import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import Button from './ui/Button.jsx';

const CLASSES = [
  'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
  'Class XI (Science)', 'Class XI (Commerce)', 'Class XI (Arts)',
];

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

export default function EnquiryForm({ compact = false }) {
  const [form, setForm] = useState({
    studentName: '', parentName: '', phone: '', email: '', class: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = 'Student name is required';
    if (!form.parentName.trim()) e.parentName = 'Parent name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid 10-digit mobile number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.class) e.class = 'Please select a class';
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
    await new Promise((r) => setTimeout(r, 1000)); // mock delay
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-10 px-6 bg-white rounded-2xl shadow-card">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
          <CheckCircle size={32} />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-brand-text">Thank You!</h3>
          <p className="text-brand-muted mt-2 text-sm leading-relaxed">
            Your enquiry has been received. Our Admissions team will contact you within 2 working days.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setForm({ studentName: '', parentName: '', phone: '', email: '', class: '', message: '' }); }}>
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-4 ${compact ? '' : 'bg-white rounded-2xl shadow-card p-6 sm:p-8'}`}>
      {!compact && (
        <div className="mb-2">
          <h3 className="font-display font-bold text-xl text-brand-text">Admission Enquiry</h3>
          <p className="text-sm text-brand-muted mt-1">Fill in the form and we'll get back to you promptly.</p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <Field label="Student's Full Name *" error={errors.studentName}>
          <input className={inputCls} name="studentName" value={form.studentName} onChange={handleChange} placeholder="e.g. Arjun Mehta" />
        </Field>
        <Field label="Parent / Guardian Name *" error={errors.parentName}>
          <input className={inputCls} name="parentName" value={form.parentName} onChange={handleChange} placeholder="e.g. Rajesh Mehta" />
        </Field>
        <Field label="Contact Number *" error={errors.phone}>
          <input className={inputCls} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input className={inputCls} name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@email.com" />
        </Field>
        <Field label="Class Seeking Admission *" error={errors.class}>
          <select className={inputCls} name="class" value={form.class} onChange={handleChange}>
            <option value="">Select class…</option>
            {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Message (optional)">
        <textarea
          className={`${inputCls} resize-none`}
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Any additional information or questions…"
        />
      </Field>

      <Button type="submit" variant="gradient" size="md" disabled={loading} className="w-full sm:w-auto self-start">
        <Send size={16} />
        {loading ? 'Submitting…' : 'Submit Enquiry'}
      </Button>
    </form>
  );
}
