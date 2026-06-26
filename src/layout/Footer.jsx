import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import foundationLogo from '@/assets/logos/sajj-foundation.jpeg';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Academics', to: '/academics' },
  { label: 'Students', to: '/students' },
  { label: 'Parents', to: '/parents' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Updates', to: '/news' },
  { label: 'Notice Board', to: '/notices' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Society', to: '/society' },
];

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter/X' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      {/* Gradient accent top border */}
      <div className="h-1 bg-brand-gradient" />

      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-white text-lg">Stay Updated</p>
              <p className="text-sm text-slate-400">Get news and notices delivered to your inbox.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full sm:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-brand-cyan/60 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl gradient-btn text-sm font-semibold flex items-center gap-1.5"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={foundationLogo}
                alt="Sajj Global Foundation"
                className="h-14 w-14 object-contain rounded-xl"
              />
              <div>
                <p className="font-display font-bold text-white leading-tight text-sm">Sajj Global</p>
                <p className="font-display font-bold text-brand-cyan leading-tight text-sm">Foundation</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              The Sajj Global Foundation is dedicated to fostering excellence in education, promoting
              cultural values, and building a community of responsible, compassionate leaders for tomorrow.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gradient flex items-center justify-center transition-all duration-200 text-slate-300 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors group"
                  >
                    <ArrowRight size={12} className="text-brand-cyan/40 group-hover:text-brand-cyan transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sajj Global School Campus,<br />
                  Sector 12, Education Zone,<br />
                  New Delhi – 110 085
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-cyan flex-shrink-0" />
                <a href="tel:+911123456789" className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                  +91 11 2345 6789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                <a href="mailto:info@sajjglobalschool.edu.in" className="text-sm text-slate-400 hover:text-brand-cyan transition-colors break-all">
                  info@sajjglobalschool.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* School hours */}
          <div>
            <h3 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-widest">School Hours</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-slate-300 font-medium">8:00 AM – 3:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-slate-300 font-medium">8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-slate-500">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-brand-cyan font-semibold">Admission Office:</span><br />
                Mon – Sat, 9:00 AM – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sajj Global School. All rights reserved. Managed by Sajj Global Foundation.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-brand-cyan transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
