import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import { getNewsBySlug, getLatestNews } from '@/services/newsService.js';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getNewsBySlug(slug).then((a) => {
      if (!a) { setNotFound(true); return; }
      setArticle(a);
    });
    getLatestNews(3).then(setRelated);
  }, [slug]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-brand-muted px-4">
        <p className="text-xl font-display font-bold text-navy-900">Article Not Found</p>
        <p className="text-sm">The article you're looking for doesn't exist or may have been removed.</p>
        <Link to="/news" className="text-navy-700 font-semibold flex items-center gap-2">
          <ArrowLeft size={16} /> Back to News
        </Link>
      </div>
    );
  }

  if (!article) return null;

  return (
    <>
      <Helmet>
        <title>{article.title} — Sajj Global School</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Page hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <Breadcrumbs crumbs={[{ label: 'News', to: '/news' }, { label: article.title, to: `/news/${slug}` }]} light />
          <span className="inline-block mt-4 text-xs font-semibold bg-brand-gradient text-white px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(article.date)}</span>
            {article.author && <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>}
            <span className="flex items-center gap-1.5"><Tag size={14} /> {article.category}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main article */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-8 aspect-video">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-slate max-w-none">
                {article.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-brand-muted leading-relaxed mb-5 text-base">{para}</p>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between pt-6 border-t border-brand-border">
                <Link to="/news" className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3 transition-all">
                  <ArrowLeft size={16} /> All News
                </Link>
                <span className="text-xs text-brand-muted">{formatDate(article.date)}</span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-display font-bold text-navy-900 mb-5">More News</h3>
                <div className="flex flex-col gap-5">
                  {related.filter((r) => r.slug !== slug).slice(0, 3).map((item) => (
                    <Link key={item.id} to={`/news/${item.slug}`} className="group flex gap-3 items-start hover:bg-brand-light rounded-xl p-2 transition-colors">
                      <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-brand-text group-hover:text-navy-700 transition-colors leading-snug line-clamp-2">{item.title}</p>
                        <p className="text-xs text-brand-muted mt-1">{formatDate(item.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/news" className="flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:gap-2.5 transition-all">
                    View All News <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
