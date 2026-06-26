import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsCard({ item, featured = false }) {
  return (
    <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      <div className={`relative overflow-hidden ${featured ? 'h-56' : 'h-44'}`}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-navy-700 text-white text-xs font-display font-semibold px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3 text-xs text-brand-muted">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(item.date)}
          </span>
          {item.author && (
            <span className="flex items-center gap-1">
              <Tag size={12} />
              {item.author}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-navy-900 text-base leading-snug line-clamp-2 group-hover:text-navy-700 transition-colors">
          {item.title}
        </h3>

        <p className="text-brand-muted text-sm leading-relaxed line-clamp-3 flex-1">
          {item.excerpt}
        </p>

        <Link
          to={`/news/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:gap-2.5 transition-all duration-150 group/link"
          aria-label={`Read more about ${item.title}`}
        >
          Read More
          <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
