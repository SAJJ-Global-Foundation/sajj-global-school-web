import { Link } from 'react-router-dom';
import { Bell, AlertCircle, ArrowRight } from 'lucide-react';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function NoticeItem({ notice, compact = false }) {
  if (compact) {
    return (
      <Link
        to={`/notices/${notice.id}`}
        className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-light transition-colors group"
      >
        <span
          className={`mt-0.5 flex-shrink-0 ${notice.important ? 'text-brand-magenta' : 'text-navy-700'}`}
        >
          {notice.important ? <AlertCircle size={16} /> : <Bell size={16} />}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-brand-text leading-snug line-clamp-2 group-hover:text-navy-700 transition-colors">
            {notice.title}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-brand-muted">{formatDate(notice.date)}</span>
            <span className="text-xs bg-navy-700/10 text-navy-700 px-2 py-0.5 rounded-full font-medium">
              {notice.category}
            </span>
            {notice.important && (
              <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium">
                Important
              </span>
            )}
          </div>
        </div>
        <ArrowRight size={14} className="flex-shrink-0 mt-1 text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }

  return (
    <article className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          notice.important ? 'bg-red-50 text-red-500' : 'bg-navy-700/10 text-navy-700'
        }`}
      >
        {notice.important ? <AlertCircle size={20} /> : <Bell size={20} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs bg-navy-700/10 text-navy-700 px-2 py-0.5 rounded-full font-semibold">
            {notice.category}
          </span>
          {notice.important && (
            <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-semibold">
              Important
            </span>
          )}
          <span className="text-xs text-brand-muted">{formatDate(notice.date)}</span>
        </div>
        <Link
          to={`/notices/${notice.id}`}
          className="font-display font-semibold text-brand-text hover:text-navy-700 transition-colors leading-snug"
        >
          {notice.title}
        </Link>
        {notice.attachments?.length > 0 && (
          <p className="text-xs text-brand-muted mt-1">{notice.attachments.length} attachment{notice.attachments.length > 1 ? 's' : ''}</p>
        )}
      </div>
      <Link
        to={`/notices/${notice.id}`}
        className="flex-shrink-0 text-navy-700 hover:text-navy-900 transition-colors"
        aria-label={`View notice: ${notice.title}`}
      >
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
