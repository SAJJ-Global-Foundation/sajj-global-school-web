import { useEffect, useState } from 'react';
import { BookOpen, Clock, Music, Palette, Mic, FlaskConical, Camera, Leaf } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import { getAcademicCalendar } from '@/services/downloadsService.js';

const CURRICULUM = [
  {
    group: 'Pre-Primary (Nursery – UKG)',
    description: 'Play-based, activity-led curriculum focused on language, numeracy, creativity, and social-emotional skills.',
    subjects: ['English', 'Hindi', 'Environmental Awareness', 'Art & Craft', 'Music', 'Physical Education'],
  },
  {
    group: 'Primary (Class I – V)',
    description: 'Foundational CBSE curriculum with emphasis on conceptual understanding and curiosity-driven learning.',
    subjects: ['English', 'Hindi', 'Mathematics', 'EVS / Science', 'Social Studies', 'Computer Basics', 'Physical Education', 'Art'],
  },
  {
    group: 'Middle School (Class VI – VIII)',
    description: 'Deepening subject knowledge with project-based learning, lab work, and co-curricular exploration.',
    subjects: ['English', 'Hindi / Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Art', 'Sports'],
  },
  {
    group: 'Secondary (Class IX – X)',
    description: 'Rigorous CBSE Board preparation with comprehensive subject coverage and regular assessments.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi / Sanskrit / Computer', 'Physical Education'],
  },
  {
    group: 'Senior Secondary (Class XI – XII)',
    description: 'Three streams — Science, Commerce, Arts — tailored for board exams and competitive entrance preparation.',
    streams: [
      { name: 'Science', subs: ['Physics', 'Chemistry', 'Biology / Mathematics', 'English', 'Optional: Computer Science / PE'] },
      { name: 'Commerce', subs: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / IP', 'English'] },
      { name: 'Arts / Humanities', subs: ['History', 'Political Science', 'Geography / Psychology', 'English', 'Hindi / Economics'] },
    ],
  },
];

const ACTIVITY_ICONS = {
  'Music & Performing Arts': Music,
  'Fine Arts & Craft': Palette,
  'Debate & Public Speaking': Mic,
  'STEM Club': FlaskConical,
  'Photography & Media': Camera,
  'Eco Club / Environmental Science': Leaf,
};

export default function Academics() {
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    getAcademicCalendar().then(setCalendar);
  }, []);

  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A rigorous, inspiring curriculum that prepares students for board exams, competitive tests, and lifelong learning."
        breadcrumbs={[{ label: 'Academics', to: '/academics' }]}
        seoDescription="Curriculum, academic calendar, and co-curricular activities at Sajj Global School."
      />

      {/* ── Curriculum ── */}
      <section id="curriculum" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CBSE Curriculum"
            title="Curriculum Information"
            subtitle="Our CBSE-aligned curriculum is thoughtfully structured from pre-primary through senior secondary, balancing academic rigour with holistic development at every stage."
          />
          <div className="mt-10 flex flex-col gap-6">
            {CURRICULUM.map((c) => (
              <Card key={c.group} hover={false} className="border border-brand-border">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center text-white">
                      <BookOpen size={18} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-navy-900 text-lg mb-1">{c.group}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-4">{c.description}</p>
                    {c.subjects && (
                      <div className="flex flex-wrap gap-2">
                        {c.subjects.map((s) => (
                          <span key={s} className="text-xs bg-navy-700/8 text-navy-700 px-3 py-1 rounded-full font-medium">{s}</span>
                        ))}
                      </div>
                    )}
                    {c.streams && (
                      <div className="grid sm:grid-cols-3 gap-4">
                        {c.streams.map((stream) => (
                          <div key={stream.name} className="bg-brand-light rounded-xl p-4 border border-brand-border">
                            <p className="font-display font-bold text-navy-900 text-sm mb-2">{stream.name} Stream</p>
                            <ul className="flex flex-col gap-1">
                              {stream.subs.map((s) => (
                                <li key={s} className="text-xs text-brand-muted flex items-center gap-1.5">
                                  <span className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Calendar ── */}
      <section id="calendar" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={calendar?.academicYear} title="Academic Calendar" centered />
          {calendar && (
            <div className="mt-10 flex flex-col gap-10">
              {calendar.terms.map((term) => (
                <div key={term.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-brand-border" />
                    <div className="flex items-center gap-2 bg-navy-900 text-white px-4 py-2 rounded-full text-sm font-display font-semibold">
                      {term.name} — {term.period}
                    </div>
                    <div className="h-px flex-1 bg-brand-border" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {term.months.map((month) => (
                      <Card key={month.month} padding={false} hover={false} className="border border-brand-border overflow-hidden">
                        <div className="bg-navy-700 px-5 py-3">
                          <p className="font-display font-bold text-white text-sm">{month.month}</p>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                          {month.events.map((ev) => (
                            <div key={ev.date} className="flex items-start gap-3 text-sm">
                              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-navy-700/8 text-navy-700 flex items-center justify-center text-xs font-bold">{ev.date}</span>
                              <span className="text-brand-muted leading-snug">{ev.event}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Co-Curricular Activities ── */}
      <section id="cocurricular" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Beyond the Classroom"
            title="Co-Curricular Activities"
            subtitle="We believe learning extends beyond textbooks. Our structured co-curricular programme gives every student space to discover, create, and excel."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {calendar?.coCurricular.map((act) => {
              const Icon = ACTIVITY_ICONS[act.activity] || BookOpen;
              return (
                <Card key={act.activity} className="border border-brand-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-sm leading-snug mb-2">{act.activity}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock size={12} className="text-navy-700" />
                    <span>{act.day}</span>
                  </div>
                  <div className="text-xs text-brand-muted mt-0.5 pl-4">{act.time}</div>
                </Card>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img src="https://picsum.photos/seed/cocurr1/600/340" alt="Students performing classical dance and drama on stage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent flex items-end p-5">
                <p className="font-display font-bold text-white">Arts & Culture</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img src="https://picsum.photos/seed/cocurr2/600/340" alt="Students training on the athletics track during sports programme" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent flex items-end p-5">
                <p className="font-display font-bold text-white">Sports & Athletics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
