import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Building2, Users, BookOpen, Award, Heart, Globe } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import MessageCard from '@/components/MessageCard.jsx';
import MemberCard from '@/components/MemberCard.jsx';
import { getManagementCommittee, getLeadership } from '@/services/facultyService.js';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const INFRA = [
  { icon: Building2, title: 'Smart Classrooms', body: '60+ smart classrooms with interactive digital boards, Wi-Fi connectivity, and ergonomic seating across our Newtown campus.' },
  { icon: BookOpen, title: 'Central Library', body: '40,000+ volumes including Bengali literature, digital catalogue, reading rooms, and a dedicated Rabindra Kona section.' },
  { icon: Globe, title: 'Science Laboratories', body: 'Fully equipped Physics, Chemistry, Biology, and Computer labs — supporting CBSE and competitive exam preparation.' },
  { icon: Award, title: 'Sports Complex', body: 'Athletics track, swimming pool, indoor badminton and basketball courts, and a dedicated football ground with full coaching.' },
  { icon: Heart, title: 'Health & Wellness', body: 'On-campus medical room, student counselling centre, and a dedicated wellness coordinator available every school day.' },
  { icon: Users, title: 'Cafeteria', body: 'Hygienic cafeteria serving nutritionally balanced Bengali and pan-Indian meals prepared fresh daily under expert dietary supervision.' },
];

export default function About() {
  const [management, setManagement] = useState([]);
  const [leadership, setLeadership] = useState([]);

  useEffect(() => {
    getManagementCommittee().then(setManagement);
    getLeadership().then(setLeadership);
  }, []);

  const principal = leadership.find((l) => l.role === 'Principal');

  return (
    <>
      <PageHero
        title="About Sajj Global School"
        subtitle="A legacy of learning excellence rooted in values, community, and a vision for a better tomorrow."
        breadcrumbs={[{ label: 'About Us', to: '/about' }]}
        seoDescription="Learn about Sajj Global School's history, vision, infrastructure, leadership, and management committee."
      />

      {/* ── School Overview ── */}
      <section id="overview" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <SectionHeading
                label="School Overview"
                title="Built to Inspire, Designed to Excel"
                subtitle="Sajj Global School was established in 2006 by the Sajj Global Foundation in Newtown, Kolkata — with a singular purpose: to create an educational environment where every child can thrive. Today, with over 2,400 students, 120+ faculty, and a sprawling modern campus in the heart of West Bengal's fastest-growing township, we are one of Kolkata's most respected CBSE institutions."
              />
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: 'Established', val: '2006' },
                  { label: 'Affiliation', val: 'CBSE' },
                  { label: 'Campus Area', val: '8 Acres' },
                ].map(({ label, val }) => (
                  <div key={label} className="text-center p-4 bg-brand-light rounded-xl border border-brand-border">
                    <p className="font-display font-bold text-navy-700 text-xl">{val}</p>
                    <p className="text-xs text-brand-muted mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://picsum.photos/seed/about-campus/700/525"
                  alt="Sajj Global School campus, Newtown Kolkata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3">
                    <p className="font-display font-bold text-navy-900 text-sm">CBSE Affiliated · Est. 2006</p>
                    <p className="text-xs text-brand-muted">Newtown, Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section id="vision" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Purpose" title="Vision & Mission" centered />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-navy-700">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center text-white">
                  <Eye size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900">Our Vision</h3>
              </div>
              <p className="text-brand-muted leading-relaxed">
                To be a globally recognised institution that nurtures curious, compassionate, and capable
                individuals — students who lead with integrity, think critically, and contribute meaningfully
                to an interconnected world.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {['Global perspective in local context', 'Technology-enabled, human-centred learning', 'Excellence without exclusivity'].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient flex-shrink-0" style={{ background: 'var(--gradient)' }} />
                    {v}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-t-4 border-t-brand-cyan">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                  <Target size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900">Our Mission</h3>
              </div>
              <p className="text-brand-muted leading-relaxed">
                To deliver a holistic, values-based education through innovative teaching, robust
                infrastructure, and a nurturing community — empowering every student to discover their
                potential and pursue it with confidence and purpose.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {['Personalised learning journeys', 'Character and ethics at the core', 'Partnership with parents and community'].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--gradient)', borderRadius: '50%' }} />
                    {v}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Core values */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🎯', label: 'Excellence', sub: 'In everything we do' },
              { icon: '🤝', label: 'Integrity', sub: 'Honest and ethical' },
              { icon: '💡', label: 'Innovation', sub: 'Always evolving' },
              { icon: '🌍', label: 'Compassion', sub: 'For self and world' },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-card border border-brand-border">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="font-display font-bold text-navy-900 text-sm">{label}</p>
                <p className="text-xs text-brand-muted mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infrastructure ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Campus" title="World-Class Infrastructure" centered subtitle="Our campus is designed to stimulate curiosity and enable every dimension of learning." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INFRA.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Card>
                  <div className="w-12 h-12 rounded-xl bg-navy-700/8 flex items-center justify-center text-navy-700 mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-2">{title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{body}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'https://picsum.photos/seed/infra1/400/300',
              'https://picsum.photos/seed/infra2/400/300',
              'https://picsum.photos/seed/infra3/400/300',
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Campus facility ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management Committee ── */}
      <section id="management" className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Governance" title="Management Committee" centered />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {management.map((m) => <MemberCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>

      {/* ── Principal's Desk ── */}
      {principal && (
        <section id="principal" className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="From the Desk" title="Principal's Message" centered />
            <div className="mt-10">
              <MessageCard person={principal} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
