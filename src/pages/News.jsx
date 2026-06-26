import { useEffect, useState } from 'react';
import { Newspaper } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import Pagination from '@/components/ui/Pagination.jsx';
import { getNews, getNewsCategories } from '@/services/newsService.js';

export default function News() {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, totalPages: 1 });

  useEffect(() => { getNewsCategories().then(setCategories); }, []);

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  useEffect(() => {
    getNews({ category: activeCategory, page, perPage: 6 }).then(({ items, total, totalPages }) => {
      setNews(items);
      setMeta({ total, totalPages });
    });
  }, [activeCategory, page]);

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Stay up to date with the latest happenings, achievements, and announcements from Sajj Global School."
        breadcrumbs={[{ label: 'News', to: '/news' }]}
        seoDescription="Latest news, events, and updates from Sajj Global School."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <SectionHeading label={`${meta.total} Articles`} title="All News" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-navy-700 text-white'
                      : 'bg-brand-light border border-brand-border text-brand-muted hover:border-navy-700 hover:text-navy-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {news.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => <NewsCard key={item.id} item={item} />)}
              </div>
              <div className="mt-12">
                <Pagination page={page} totalPages={meta.totalPages} onPageChange={setPage} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-brand-muted">
              <Newspaper size={40} className="opacity-30" />
              <p>No news found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
