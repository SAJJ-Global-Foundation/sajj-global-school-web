import { Link } from 'react-router-dom';

export default function QuickLinkTile({ icon: Icon, label, to, description }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center text-center gap-3 p-5 sm:p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-transparent hover:border-navy-700/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-navy-700/8 group-hover:bg-brand-gradient flex items-center justify-center transition-all duration-300">
        <Icon
          size={26}
          className="text-navy-700 group-hover:text-white transition-colors duration-300"
        />
      </div>
      <div>
        <p className="font-display font-bold text-sm text-brand-text group-hover:text-navy-700 transition-colors">
          {label}
        </p>
        {description && (
          <p className="text-xs text-brand-muted mt-0.5 leading-snug">{description}</p>
        )}
      </div>
    </Link>
  );
}
