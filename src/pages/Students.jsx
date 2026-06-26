import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Users, Medal, Music, Brush, BookOpen } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';

const ACHIEVEMENTS = [
  { icon: Trophy, title: 'State Science Olympiad', year: '2024', detail: 'Gold Medal — Priya Sharma (Class XII)', category: 'Academics' },
  { icon: Medal, title: 'District Athletics Champion', year: '2024', detail: 'Arjun Mehta — 100m & 200m Sprint Gold', category: 'Sports' },
  { icon: Star, title: 'National Debate Championship', year: '2023', detail: 'Runners-up — Team of 4, Class X–XII', category: 'Debate' },
  { icon: Trophy, title: 'CBSE Inter-School Science Fair', year: '2023', detail: '1st Prize — AI Plant Detection Model', category: 'Academics' },
  { icon: Medal, title: 'State Badminton Championship', year: '2024', detail: 'Girls Doubles — Gold Medal', category: 'Sports' },
  { icon: Star, title: 'National Creative Writing Award', year: '2023', detail: 'Zoya Ansari (Class XI) — 2nd Rank', category: 'Arts' },
];

const ACTIVITIES = [
  {
    icon: BookOpen, title: 'Student Council',
    body: 'An elected student council that gives students a democratic voice in school governance, building leadership and civic responsibility.',
    image: 'https://picsum.photos/seed/stcouncil/500/350',
  },
  {
    icon: Music, title: 'Performing Arts Club',
    body: 'Drama, music, dance — the performing arts club stages two major productions a year and performs at inter-school festivals.',
    image: 'https://picsum.photos/seed/perarts/500/350',
  },
  {
    icon: Brush, title: 'STEM Innovation Lab',
    body: 'A weekly club where students design, build, and test real-world solutions. Projects have won at state and national levels.',
    image: 'https://picsum.photos/seed/stemlab/500/350',
  },
  {
    icon: Users, title: 'Community Service Cell',
    body: 'Students lead initiatives in tutoring underprivileged children, environmental drives, and local community outreach.',
    image: 'https://picsum.photos/seed/community/500/350',
  },
];

const SPORTS = [
  { sport: 'Athletics', achievements: 'District Champions 2023 & 2024; 3 state qualifiers' },
  { sport: 'Swimming', achievements: 'State silver medallist; in-house pool training daily' },
  { sport: 'Badminton', achievements: 'State gold (Girls Doubles 2024); active coaching programme' },
  { sport: 'Cricket', achievements: 'District runners-up 2023; astro-turf practice nets' },
  { sport: 'Volleyball', achievements: 'Inter-school champions; girls team unbeaten 2024' },
  { sport: 'Basketball', achievements: 'District quarter-finalists; dedicated indoor court' },
  { sport: 'Chess', achievements: 'State-level participant; Friday club sessions' },
  { sport: 'Yoga & Fitness', achievements: 'Certified instructor; daily morning sessions for all' },
];

export default function Students() {
  return (
    <>
      <PageHero
        title="Student Life"
        subtitle="At SGS, students don't just study — they lead, create, compete, and grow in every dimension."
        breadcrumbs={[{ label: 'Students', to: '/students' }]}
        seoDescription="Student activities, achievements, sports, and events at Sajj Global School."
      />

      {/* ── Activities ── */}
      <section id="activities" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Campus Life" title="Student Activities" subtitle="From student governance to creative clubs, we give students the platform to lead." />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {ACTIVITIES.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card padding={false} className="overflow-hidden flex flex-col sm:flex-row">
                  <div className="sm:w-44 flex-shrink-0 aspect-video sm:aspect-auto overflow-hidden">
                    <img src={act.image} alt={act.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <act.icon size={16} className="text-navy-700" />
                      <h3 className="font-display font-bold text-navy-900">{act.title}</h3>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">{act.body}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section id="achievements" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Pride" title="Student Achievements" centered subtitle="Our students represent SGS at district, state, and national levels — and bring home the laurels." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((ach) => (
              <Card key={ach.title} className="border border-brand-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                    <ach.icon size={18} />
                  </div>
                  <span className="text-xs bg-navy-700/8 text-navy-700 px-3 py-1 rounded-full font-semibold">{ach.category}</span>
                </div>
                <h3 className="font-display font-bold text-navy-900 leading-snug">{ach.title}</h3>
                <p className="text-xs text-brand-muted mt-1">{ach.detail}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-brand-muted">
                  <Zap size={12} className="text-brand-cyan" />
                  <span>{ach.year}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Highlight banner */}
          <div className="mt-10 relative rounded-3xl bg-navy-900 overflow-hidden p-8 sm:p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
            <p className="text-xs text-brand-cyan font-semibold tracking-widest uppercase mb-3">2024 Board Results</p>
            <h3 className="font-display font-bold text-white text-3xl sm:text-4xl">100% Pass Rate</h3>
            <p className="text-slate-300 mt-2">14 students scored above 95% — including our first State Topper in Mathematics</p>
          </div>
        </div>
      </section>

      {/* ── Sports ── */}
      <section id="sports" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading label="Sports & Athletics" title="Sports Programme" subtitle="We believe sport builds not just bodies, but character — resilience, teamwork, and discipline." />
              <div className="mt-8 flex flex-col gap-3">
                {SPORTS.map((s) => (
                  <div key={s.sport} className="flex items-start gap-4 p-4 bg-brand-light rounded-xl border border-brand-border">
                    <div className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center text-white flex-shrink-0">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-navy-900 text-sm">{s.sport}</p>
                      <p className="text-xs text-brand-muted mt-0.5">{s.achievements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['https://picsum.photos/seed/sport1/400/300', 'https://picsum.photos/seed/sport2/400/300', 'https://picsum.photos/seed/sport3/400/300', 'https://picsum.photos/seed/sport4/400/300'].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={src} alt={`Sports action ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
