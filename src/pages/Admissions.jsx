import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList, FileCheck, IndianRupee, CheckCircle2,
  ChevronRight, Info, Download,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import EnquiryForm from '@/components/EnquiryForm.jsx';
import Button from '@/components/ui/Button.jsx';
import { getFeeStructure } from '@/services/downloadsService.js';

const STEPS = [
  {
    step: '01', title: 'Submit Enquiry', icon: ClipboardList,
    body: 'Fill out the Admission Enquiry Form online or visit the Admission Office. Our team will contact you within 2 working days.',
  },
  {
    step: '02', title: 'Registration & Form', icon: FileCheck,
    body: 'Complete the registration form (available online and at the office), pay the non-refundable registration fee of ₹1,500.',
  },
  {
    step: '03', title: 'Assessment / Interaction', icon: ClipboardList,
    body: 'Students applying for Class I and above undergo a short, age-appropriate interaction. No formal written test for Nursery–UKG.',
  },
  {
    step: '04', title: 'Document Verification', icon: CheckCircle2,
    body: 'Submit all required original documents (and photocopies) at the Admission Office for verification.',
  },
  {
    step: '05', title: 'Admission Confirmation', icon: CheckCircle2,
    body: 'Upon successful verification and fee payment, admission is confirmed and a welcome kit is issued to the student.',
  },
];

const DOCUMENTS = [
  'Birth Certificate (original + photocopy)',
  'Previous school Transfer Certificate (if applicable)',
  'Previous academic year Report Card / Mark Sheet',
  'Aadhar Card of student (photocopy)',
  'Aadhar Card of parent/guardian (photocopy)',
  'Passport-size photographs (6 copies)',
  'Medical fitness certificate from a registered doctor',
  'Caste Certificate (if applicable, for fee concession)',
  'Address proof (latest utility bill or Aadhaar)',
];

function formatCurrency(val) {
  return `₹${Number(val).toLocaleString('en-IN')}`;
}

export default function Admissions() {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    getFeeStructure().then(setFees);
  }, []);

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join our community of learners. Admissions for Academic Year 2025–26 are open. We welcome students from Nursery to Class XI."
        breadcrumbs={[{ label: 'Admissions', to: '/admissions' }]}
        seoDescription="Admission process, required documents, fee structure, and enquiry form for Sajj Global School 2025–26."
      />

      {/* ── Overview ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeading
                label="Admissions 2025–26"
                title="Begin Your Child's Journey Here"
                subtitle="We believe every child is uniquely gifted. Our admission process is designed to be simple, fair, and focused on understanding each child as an individual — not just through test scores."
              />
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold">Applications Close: 31st January 2025</p>
                  <p className="mt-0.5">Contact the Admission Office for seat availability in specific classes.</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4 flex-wrap">
                <Button to="#enquiry" variant="gradient" size="md">Apply Now</Button>
                <Button href="#" variant="outline" size="md">
                  <Download size={16} /> Download Brochure
                </Button>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Classes Open', val: 'Nursery – XI' },
                { title: 'Affiliation', val: 'CBSE' },
                { title: 'Academic Year', val: 'Apr 2025' },
                { title: 'Application Fee', val: '₹1,500' },
              ].map(({ title, val }) => (
                <Card key={title} className="text-center">
                  <p className="font-display font-bold text-2xl text-navy-700">{val}</p>
                  <p className="text-sm text-brand-muted mt-1">{title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Admission Procedure ── */}
      <section id="procedure" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How to Apply" title="Admission Procedure" centered />
          <div className="mt-10 flex flex-col gap-0">
            {STEPS.map(({ step, title, icon: Icon, body }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 relative"
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-brand-border" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-display font-bold z-10">
                  {step}
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={16} className="text-navy-700" />
                    <h3 className="font-display font-bold text-navy-900">{title}</h3>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents ── */}
      <section id="documents" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Checklist" title="Required Documents" centered />
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {DOCUMENTS.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-brand-border">
                <CheckCircle2 size={18} className="text-navy-700 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-brand-muted leading-relaxed">{doc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-muted mt-4 text-center">* Original documents must be presented at the time of admission for verification.</p>
        </div>
      </section>

      {/* ── Fee Information ── */}
      <section id="fees" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Fee Structure" title="Fee Information 2024–25" centered subtitle={fees ? `Last updated: ${fees.lastUpdated}. ${fees.note}` : ''} />
          {fees && (
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-card">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="text-left px-5 py-4 font-display font-semibold rounded-tl-2xl">Class Group</th>
                    <th className="text-right px-5 py-4 font-display font-semibold">Annual Tuition</th>
                    <th className="text-right px-5 py-4 font-display font-semibold">Admission Fee</th>
                    <th className="text-right px-5 py-4 font-display font-semibold">Annual Charges</th>
                    <th className="text-right px-5 py-4 font-display font-semibold rounded-tr-2xl">Transport (monthly)</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.categories.map((cat, i) => (
                    <tr key={cat.id} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-light'}>
                      <td className="px-5 py-4 font-semibold text-navy-900">{cat.label}</td>
                      <td className="px-5 py-4 text-right text-brand-muted">{formatCurrency(cat.annualFee)}</td>
                      <td className="px-5 py-4 text-right text-brand-muted">{formatCurrency(cat.admissionFee)}</td>
                      <td className="px-5 py-4 text-right text-brand-muted">{formatCurrency(cat.annualCharges)}</td>
                      <td className="px-5 py-4 text-right text-brand-muted">{formatCurrency(cat.transportMonthly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {fees && (
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-display font-bold text-navy-900 mb-4">Payment Schedule</h3>
                <div className="flex flex-col gap-2">
                  {fees.paymentSchedule.map((p) => (
                    <div key={p.term} className="flex items-center justify-between text-sm">
                      <span className="text-brand-muted">{p.term}</span>
                      <span className="font-semibold text-navy-700">{p.percentage}%</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card>
                <h3 className="font-display font-bold text-navy-900 mb-4">Discounts & Concessions</h3>
                <div className="flex flex-col gap-2">
                  {fees.discounts.map((d) => (
                    <div key={d.type} className="flex items-start justify-between gap-4 text-sm">
                      <span className="text-brand-muted flex-1">{d.type}</span>
                      <span className="font-semibold text-navy-700 text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section id="enquiry" className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Get in Touch" title="Admission Enquiry Form" centered />
          <div className="mt-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
