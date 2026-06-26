import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import NoticeItem from '@/components/NoticeItem.jsx';
import Pagination from '@/components/ui/Pagination.jsx';
import { getNotices, getNoticeCategories } from '@/services/noticeService.js';

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, totalPages: 1 });

  useEffect(() => { getNoticeCategories().then(setCategories); }, []);

  useEffect(() => { setPage(1); }, [activeCategory]);

  useEffect(() => {
    getNotices({ category: activeCategory, page, perPage: 8 }).then(({ items, total, totalPages }) => {
      setNotices(items);
      setMeta({ total, totalPages });
    });
  }, [activeCategory, page]);

  return (
    <>
      <PageHero
        title="Notice Board"
        subtitle="Official circulars, announcements, and important information for students and parents."
        breadcrumbs={[{ label: 'Notices', to: '/notices' }]}
        seoDescription="Official notices, circulars, and announcements from Sajj Global School."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <SectionHeading label={`${meta.total} Notices`} title="All Notices" />
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

          {notices.length > 0 ? (
            <>
              <div className="flex flex-col gap-3">
                {notices.map((n) => <NoticeItem key={n.id} notice={n} />)}
              </div>
              <div className="mt-10">
                <Pagination page={page} totalPages={meta.totalPages} onPageChange={setPage} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-brand-muted">
              <Bell size={40} className="opacity-30" />
              <p>No notices found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
