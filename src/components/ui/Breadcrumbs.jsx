import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ crumbs = [], light = false }) {
  const textColor = light ? 'text-slate-400 hover:text-white' : 'text-brand-muted hover:text-navy-700';
  const currentColor = light ? 'text-brand-cyan' : 'text-navy-700';
  const dividerColor = light ? 'text-slate-500' : 'text-brand-border';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <Link to="/" className={`flex items-center gap-1 transition-colors ${textColor}`}>
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={14} className={dividerColor} />
            {i === crumbs.length - 1 ? (
              <span className={`font-medium ${currentColor}`}>{crumb.label}</span>
            ) : (
              <Link to={crumb.to} className={`transition-colors ${textColor}`}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
