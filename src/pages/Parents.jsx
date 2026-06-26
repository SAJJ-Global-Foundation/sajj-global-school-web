import { useEffect, useState } from 'react';
import { Download, FileText, Shield, Bell, Users, CalendarDays, FileCheck } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import Button from '@/components/ui/Button.jsx';
import { getDownloads, getDownloadCategories } from '@/services/downloadsService.js';

function fileSizeIcon(cat) {
  const map = { Forms: FileText, Calendars: CalendarDays, Policies: Shield, 'Fee Structure': FileCheck };
  return map[cat] || FileText;
}

export default function Parents() {
  const [downloads, setDownloads] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    getDownloadCategories().then(setCategories);
    getDownloads().then(setDownloads);
  }, []);

  const filtered = activeCategory === 'All' ? downloads : downloads.filter((d) => d.category === activeCategory);

  const grouped = filtered.reduce((acc, d) => {
    (acc[d.category] = acc[d.category] || []).push(d);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        title="Parent Information"
        subtitle="Everything parents need — school policies, calendars, forms, and downloadable resources — in one place."
        breadcrumbs={[{ label: 'Parents', to: '/parents' }]}
        seoDescription="Parent information, school policies, and downloadable resources at Sajj Global School."
      />

      {/* ── Parent Information ── */}
      <section id="info" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="For Parents" title="Parent Information" subtitle="We value parents as our partners in education. Here's how we stay connected." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'Parent-Teacher Meetings', body: 'Quarterly PTMs ensure open, regular communication between teachers and parents on each student\'s progress.' },
              { icon: Bell, title: 'SGS School App', body: 'Download the school app for real-time attendance updates, notice board, fee reminders, and direct teacher messaging.' },
              { icon: CalendarDays, title: 'Parent Orientation', body: 'Annual orientation sessions for new parents and class-specific briefings at the start of each term.' },
              { icon: Shield, title: 'Grievance Redressal', body: 'A transparent, time-bound grievance process. Contact the Welfare Officer or submit concerns through the school portal.' },
              { icon: FileCheck, title: 'Consent & Permissions', body: 'All off-campus activities require signed parent consent. Forms are sent via app and notice circular.' },
              { icon: FileText, title: 'Report Cards', body: 'Digital report cards shared via the school app after each term examination, with teacher remarks.' },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border border-brand-border">
                <div className="w-10 h-10 rounded-xl bg-navy-700/8 text-navy-700 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── School Policies ── */}
      <section id="policies" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Rules & Guidelines" title="School Policies" centered />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Attendance Policy',
                points: [
                  'Minimum 75% attendance required to appear in board examinations.',
                  'Prior leave applications must be submitted for planned absences.',
                  'Medical leave requires a doctor\'s certificate upon return.',
                  'Habitual latecomers will be counselled; parents will be notified.',
                ],
              },
              {
                title: 'Uniform & Dress Code',
                points: [
                  'Full school uniform (including belt and shoes) is mandatory Monday–Friday.',
                  'Sports uniform is worn on PE days and during after-school sports training.',
                  'Hair must be neatly tied (girls); no extreme haircuts or colouring (boys).',
                  'No jewellery except small studs. No nail polish or henna during school hours.',
                ],
              },
              {
                title: 'Mobile Phone Policy',
                points: [
                  'Student mobile phones are strictly prohibited during school hours.',
                  'Confiscated phones will be returned only to parents.',
                  'School reception is available for emergency calls.',
                  'Smart watches that access internet/apps are also prohibited.',
                ],
              },
              {
                title: 'Anti-Bullying Policy',
                points: [
                  'SGS has a zero-tolerance policy for bullying, verbal or physical.',
                  'Any instance of bullying should be reported to the class teacher or counsellor.',
                  'Investigation and appropriate action within 5 working days.',
                  'Support is available for both the affected student and the one responsible.',
                ],
              },
            ].map(({ title, points }) => (
              <Card key={title} className="border border-brand-border">
                <div className="h-1 w-10 rounded-full bg-brand-gradient mb-4" />
                <h3 className="font-display font-bold text-navy-900 mb-4">{title}</h3>
                <ul className="flex flex-col gap-2">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                      <Shield size={13} className="text-navy-700 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section id="downloads" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Resources" title="Downloads" subtitle="Find all school forms, calendars, policies, and fee documents here." />

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-700 text-white shadow-sm'
                    : 'bg-brand-light border border-brand-border text-brand-muted hover:border-navy-700 hover:text-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="font-display font-bold text-navy-900 text-sm uppercase tracking-widest mb-3 mt-4">{cat}</h3>
                <div className="flex flex-col gap-2">
                  {items.map((doc) => {
                    const Icon = fileSizeIcon(doc.category);
                    return (
                      <div key={doc.id} className="flex items-center gap-4 p-4 bg-brand-light rounded-xl border border-brand-border hover:border-navy-700/30 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-navy-700/8 text-navy-700 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-brand-text text-sm truncate">{doc.title}</p>
                          <p className="text-xs text-brand-muted mt-0.5">{doc.size} · Updated {new Date(doc.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
                        </div>
                        <Button href={doc.url} variant="outline" size="sm" className="flex-shrink-0">
                          <Download size={14} /> Download
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
