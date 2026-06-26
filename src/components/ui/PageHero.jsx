import { Helmet } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs.jsx';

export default function PageHero({ title, subtitle, breadcrumbs = [], seoTitle, seoDescription }) {
  return (
    <>
      <Helmet>
        <title>{seoTitle || `${title} — Sajj Global School`}</title>
        {seoDescription && <meta name="description" content={seoDescription} />}
      </Helmet>

      <section className="relative bg-navy-900 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        {/* Gradient accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
        {/* Subtle radial glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #22C9E8, transparent)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {breadcrumbs.length > 0 && (
            <Breadcrumbs crumbs={breadcrumbs} light />
          )}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>
    </>
  );
}
