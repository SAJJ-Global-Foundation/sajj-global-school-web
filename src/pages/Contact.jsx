import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Sajj Global School Campus,', 'Sector 12, Education Zone,', 'New Delhi – 110 085'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 11 2345 6789', '+91 98765 43210 (Admissions)'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@sajjglobalschool.edu.in', 'admissions@sajjglobalschool.edu.in'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Fri: 8:00 AM – 4:00 PM', 'Saturday: 8:00 AM – 1:00 PM'],
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out with any questions about admissions, campus life, or the school."
        breadcrumbs={[{ label: 'Contact', to: '/contact' }]}
        seoDescription="Contact Sajj Global School — phone, email, address, and enquiry form."
      />

      {/* ── Contact Grid ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: form */}
            <div>
              <SectionHeading label="Write to Us" title="Send a Message" subtitle="Our team responds within 1–2 business days." />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right: info + map */}
            <div className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
                  <Card key={title} className="border border-brand-border">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-sm mb-2">{title}</h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-brand-muted text-sm leading-relaxed">{line}</p>
                    ))}
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-border">
                <div className="bg-navy-700/5 flex items-center justify-between px-4 py-2 border-b border-brand-border">
                  <span className="text-sm font-medium text-brand-muted">Sajj Global School — Campus Map</span>
                  <MapPin size={14} className="text-navy-700" />
                </div>
                <iframe
                  title="Sajj Global School location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4!2d77.2!3d28.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Sajj Global School location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admissions CTA ── */}
      <section className="bg-brand-light py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-bold text-navy-900 text-2xl">Looking for Admission Information?</p>
          <p className="text-brand-muted mt-2 mb-6">Visit our Admissions page for a step-by-step guide and the online enquiry form.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/admissions" className="gradient-btn px-8 py-3 rounded-xl font-display font-semibold text-white inline-flex items-center gap-2">
              Admissions Page
            </a>
            <a href="tel:+919876543210" className="gradient-btn px-8 py-3 rounded-xl font-display font-semibold text-white inline-flex items-center gap-2" style={{ background: 'var(--navy-700)', backgroundImage: 'none' }}>
              <Phone size={16} /> Call Admissions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
