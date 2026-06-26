import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  GraduationCap, Users, Trophy, Star, BookOpen, Calendar,
  Download, Images, Phone, MapPin, ArrowRight, ChevronRight,
} from 'lucide-react';
import Button from '@/components/ui/Button.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import NoticeItem from '@/components/NoticeItem.jsx';
import MessageCard from '@/components/MessageCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import QuickLinkTile from '@/components/QuickLinkTile.jsx';
import { getLatestNews } from '@/services/newsService.js';
import { getRecentNotices } from '@/services/noticeService.js';
import { getPrincipal, getChairman } from '@/services/facultyService.js';
import { getPreviewImages } from '@/services/galleryService.js';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const STATS = [
  { icon: Users, value: '2,400+', label: 'Students Enrolled', suffix: '' },
  { icon: GraduationCap, value: '120+', label: 'Expert Faculty', suffix: '' },
  { icon: Trophy, value: '18', label: 'Years of Excellence', suffix: '' },
  { icon: Star, value: '100%', label: 'Board Pass Rate', suffix: '' },
];

const QUICK_LINKS = [
  { label: 'Admissions', to: '/admissions', icon: GraduationCap, description: 'Apply for 2025–26' },
  { label: 'Academic Calendar', to: '/academics#calendar', icon: Calendar, description: 'Term dates & events' },
  { label: 'Downloads', to: '/parents#downloads', icon: Download, description: 'Forms & circulars' },
  { label: 'Gallery', to: '/gallery', icon: Images, description: 'Photos & events' },
  { label: 'Notice Board', to: '/notices', icon: BookOpen, description: 'Latest circulars' },
  { label: 'Contact Us', to: '/contact', icon: Phone, description: 'Get in touch' },
];

const GALLERY_PREVIEWS = [
  { src: 'https://picsum.photos/seed/home-gal1/600/450', alt: 'Annual Science Exhibition', wide: true },
  { src: 'https://picsum.photos/seed/home-gal2/600/450', alt: 'Sports Day' },
  { src: 'https://picsum.photos/seed/home-gal3/600/450', alt: 'Cultural Harmony Day' },
  { src: 'https://picsum.photos/seed/home-gal4/600/450', alt: 'Graduation Ceremony', wide: true },
  { src: 'https://picsum.photos/seed/home-gal5/600/450', alt: 'Community Outreach' },
];

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default function Home() {
  const [news, setNews] = useState([]);
  const [notices, setNotices] = useState([]);
  const [principal, setPrincipal] = useState(null);
  const [chairman, setChairman] = useState(null);

  useEffect(() => {
    getLatestNews(3).then(setNews);
    getRecentNotices(5).then(setNotices);
    getPrincipal().then(setPrincipal);
    getChairman().then(setChairman);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sajj Global School — Excellence in Education</title>
        <meta name="description" content="Sajj Global School is a premier institution committed to holistic education, academic excellence, and character-building. Admissions open for 2025–26." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-navy-900 min-h-[88vh] flex items-center overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern" />
        {/* Gradient glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #22C9E8, transparent)' }} />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #C724B1, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-7"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-brand-cyan text-xs font-display font-semibold tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brand-cyan inline-block" />
              Sajj Global Foundation
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.12]">
              Where Excellence{' '}
              <span className="gradient-text">Meets Purpose</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed max-w-lg">
              A nurturing, modern learning environment that prepares students not just for examinations,
              but for life — academically rigorous, culturally rich, and deeply human.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button to="/admissions" variant="gradient" size="lg">
                Apply Now
                <ArrowRight size={18} />
              </Button>
              <Button to="/about" variant="white" size="lg">
                Explore School
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2 border-t border-white/10">
              {[{ label: 'Established', val: '2006' }, { label: 'Affiliation', val: 'CBSE' }, { label: 'Classes', val: 'Nursery–XII' }].map(({ label, val }) => (
                <div key={label}>
                  <p className="font-display font-bold text-white text-lg">{val}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/sgs-hero-main/700/520"
                alt="Students engaged in learning at Sajj Global School"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-navy-900 text-lg leading-none">100%</p>
                <p className="text-xs text-brand-muted">Board Pass Rate</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-navy-900 text-lg leading-none">2,400+</p>
                <p className="text-xs text-brand-muted">Students</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading
              label="Who We Are"
              title="A School Built on Excellence and Values"
              subtitle="Founded in 2006 under the Sajj Global Foundation, Sajj Global School has been a beacon of quality education in the region. We are a CBSE-affiliated institution offering a holistic curriculum from Nursery to Class XII — where academic rigor meets creative freedom and character development."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/about" variant="primary" size="md">
                Learn More <ChevronRight size={16} />
              </Button>
              <Button to="/admissions" variant="outline" size="md">Admissions Open</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: 'CBSE Curriculum', body: 'Rigorous academics aligned with the latest CBSE guidelines and competitive exam requirements.' },
              { title: 'Expert Faculty', body: 'Over 120 trained educators, many with postgraduate degrees and over a decade of experience.' },
              { title: 'Modern Infrastructure', body: 'Smart classrooms, advanced labs, a 60-seat computer lab, library, and sports complex.' },
              { title: 'Holistic Growth', body: "Sports, arts, debate, music — co-curricular activities for every student's unique strengths." },
            ].map((item) => (
              <div key={item.title} className="bg-brand-light rounded-2xl p-5 border border-brand-border">
                <div className="h-1 w-8 rounded-full bg-brand-gradient mb-3" />
                <h3 className="font-display font-bold text-navy-900 text-sm mb-1.5">{item.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── Leadership Messages ── */}
      {(chairman || principal) && (
        <Section className="bg-brand-light">
          <SectionHeading label="Leadership" title="Messages from Our Leaders" centered />
          <div className="mt-10 flex flex-col gap-6">
            {chairman && <MessageCard person={chairman} short />}
            {principal && <MessageCard person={principal} short />}
          </div>
        </Section>
      )}

      {/* ── News & Notices ── */}
      <Section className="bg-white" id="news">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <SectionHeading label="Latest" title="News & Updates" />
              <Button to="/news" variant="ghost" size="sm" className="flex-shrink-0">
                All News <ArrowRight size={14} />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.map((item) => <NewsCard key={item.id} item={item} />)}
            </div>
          </div>

          {/* Notices */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <SectionHeading label="Board" title="Notices" />
              <Button to="/notices" variant="ghost" size="sm" className="flex-shrink-0">
                All <ArrowRight size={14} />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              {notices.map((n) => <NoticeItem key={n.id} notice={n} compact />)}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Quick Links ── */}
      <Section className="bg-brand-light">
        <SectionHeading label="Navigate" title="Quick Links" centered />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_LINKS.map((ql) => <QuickLinkTile key={ql.label} {...ql} />)}
        </div>
      </Section>

      {/* ── Gallery Preview ── */}
      <Section className="bg-white">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading label="Memories" title="Life at SGS" />
          <Button to="/gallery" variant="outline" size="sm">
            Full Gallery <Images size={14} />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px]">
          {GALLERY_PREVIEWS.map((img, i) => (
            <Link
              key={i}
              to="/gallery"
              className={`relative overflow-hidden rounded-2xl group ${img.wide ? 'col-span-2' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white text-xs font-semibold">{img.alt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Stats Strip ── */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-navy-800 overflow-hidden p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
            <div className="relative">
              <p className="font-display font-bold text-white text-2xl sm:text-3xl leading-tight">
                Give Your Child the SGS Advantage
              </p>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
                Admissions for 2025–26 are open. Join a community of learners, thinkers, and achievers.
              </p>
              <div className="flex items-center gap-3 mt-3 text-sm text-slate-400">
                <MapPin size={14} className="text-brand-cyan" />
                <span>Sector 12, Education Zone, New Delhi</span>
              </div>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button to="/admissions" variant="gradient" size="lg">
                Apply Now <ArrowRight size={16} />
              </Button>
              <Button to="/contact" variant="white" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
