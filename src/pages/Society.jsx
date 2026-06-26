import { motion } from 'framer-motion';
import { Heart, Globe, Leaf, BookOpen, Star, Users, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import Card from '@/components/ui/Card.jsx';
import Button from '@/components/ui/Button.jsx';
import foundationLogo from '@/assets/logos/sajj-foundation.jpeg';

const INITIATIVES = [
  {
    icon: BookOpen, title: 'Education for All',
    body: 'The Foundation funds full scholarships for 50+ underprivileged students annually, ensuring talent is never limited by circumstance.',
    color: 'from-brand-cyan/20 to-brand-violet/10',
  },
  {
    icon: Leaf, title: 'Green Future Programme',
    body: 'Annual tree plantation drives, solar panel installation in school buildings, and environmental awareness campaigns across 12 schools.',
    color: 'from-emerald-100 to-teal-50',
  },
  {
    icon: Heart, title: 'Community Health Initiative',
    body: 'Monthly free health check-up camps in collaboration with local hospitals, benefiting over 5,000 families each year.',
    color: 'from-rose-100 to-pink-50',
  },
  {
    icon: Globe, title: 'Digital Literacy Drive',
    body: 'Equipping rural schools with computers, tablets, and internet connectivity. Trained 1,200+ students in basic digital skills in 2023–24.',
    color: 'from-violet-100 to-indigo-50',
  },
  {
    icon: Star, title: 'Skill & Vocational Training',
    body: 'Short-term vocational programmes for school dropouts and youth, in partnership with industry, covering tailoring, culinary arts, and IT.',
    color: 'from-amber-100 to-yellow-50',
  },
  {
    icon: Users, title: 'Women Empowerment Cell',
    body: 'Awareness, legal aid, and skill workshops for women in the local community, with a dedicated helpline and crisis support.',
    color: 'from-pink-100 to-purple-50',
  },
];

const STATS = [
  { val: '18+', label: 'Years Active' },
  { val: '50+', label: 'Scholarships Annually' },
  { val: '5,000+', label: 'Families Impacted' },
  { val: '12', label: 'Partner Schools' },
];

export default function Society() {
  return (
    <>
      <Helmet>
        <title>Sajj Global Foundation — Society</title>
        <meta name="description" content="The Sajj Global Foundation drives education, community health, environmental sustainability, and women's empowerment across the region." />
      </Helmet>

      {/* Dark Hero — distinct treatment for Society */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6D28D9, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="mb-4">
            <Breadcrumbs crumbs={[{ label: 'Society', to: '/society' }]} light />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-brand-cyan mb-4">Sajj Global Foundation</span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Education.<br />
                <span className="gradient-text">Community.</span><br />
                Impact.
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-lg">
                The Sajj Global Foundation was established with a mission that extends beyond school walls —
                to be a force for positive change in the lives of families, communities, and future generations.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                <Button to="/contact" variant="gradient" size="lg">Partner With Us <ArrowRight size={16} /></Button>
                <Button to="/admissions" variant="white" size="lg">School Admissions</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col items-center gap-6">
              <img
                src={foundationLogo}
                alt="Sajj Global Foundation"
                className="w-40 h-40 object-contain rounded-3xl shadow-2xl ring-4 ring-white/10"
              />
              <div className="grid grid-cols-2 gap-4 w-full">
                {STATS.map(({ val, label }) => (
                  <div key={label} className="text-center bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                    <p className="font-display font-bold text-3xl gradient-text">{val}</p>
                    <p className="text-slate-400 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Foundation Overview ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-card-hover">
              <img
                src="https://picsum.photos/seed/foundation-overview/700/450"
                alt="Foundation activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/30 to-transparent" />
            </div>
            <div>
              <SectionHeading
                label="Our Story"
                title="About the Foundation"
                subtitle="The Sajj Global Foundation was founded alongside Sajj Global School with a belief that the responsibility of an educational institution doesn't end at the school gate."
              />
              <div className="mt-5 flex flex-col gap-4 text-brand-muted leading-relaxed">
                <p>
                  For over 18 years, the Foundation has channelled resources, partnerships, and advocacy
                  toward making quality education, community health, environmental stewardship, and
                  women's empowerment real — not aspirational.
                </p>
                <p>
                  Chaired by Mr. Salim Khan, the Foundation today operates across 12 partner institutions,
                  funds 50+ annual scholarships, and reaches over 5,000 families through its programme network.
                </p>
              </div>
              <div className="mt-8 p-5 bg-brand-light rounded-2xl border border-brand-border">
                <p className="text-sm text-brand-muted italic">
                  "Our aim is not charity but partnership — to build capacity, not dependency, in every community we serve."
                </p>
                <p className="mt-2 font-display font-semibold text-navy-900 text-sm">— Mr. Salim Khan, Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Initiatives ── */}
      <section className="py-16 sm:py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Do" title="Activities & Initiatives" light centered />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INITIATIVES.map(({ icon: Icon, title, body, color }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading label="Join Us" title="Partner With the Foundation" centered subtitle="We welcome individuals, businesses, and institutions who share our belief that education is the most powerful investment in the future." />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="gradient" size="lg">Get in Touch</Button>
            <Button to="/about" variant="outline" size="lg">Learn About the School</Button>
          </div>
        </div>
      </section>
    </>
  );
}
