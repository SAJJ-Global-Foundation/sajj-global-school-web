export default function SectionHeading({ label, title, subtitle, centered = false, light = false }) {
  const align = centered ? 'items-center text-center' : 'items-start';
  const titleColor = light ? 'text-white' : 'text-brand-text';
  const subtitleColor = light ? 'text-slate-300' : 'text-brand-muted';
  const labelColor = light ? 'text-brand-cyan' : 'text-navy-700';

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {label && (
        <span className={`font-display font-semibold text-xs tracking-widest uppercase ${labelColor}`}>
          {label}
        </span>
      )}
      <h2 className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight ${titleColor}`}>
        {title}
      </h2>
      <div className={`section-divider ${centered ? 'self-center' : ''}`} />
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
