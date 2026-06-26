import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, AlertCircle, Bell, Download, ArrowLeft, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs.jsx';
import Button from '@/components/ui/Button.jsx';
import { getNoticeById } from '@/services/noticeService.js';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getNoticeById(id).then((n) => {
      if (!n) { setNotFound(true); return; }
      setNotice(n);
    });
  }, [id]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-brand-muted px-4">
        <p className="text-xl font-display font-bold text-navy-900">Notice Not Found</p>
        <Link to="/notices" className="text-navy-700 font-semibold flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Notices
        </Link>
      </div>
    );
  }

  if (!notice) return null;

  return (
    <>
      <Helmet>
        <title>{notice.title} — Notice Board — Sajj Global School</title>
        <meta name="description" content={`Official notice: ${notice.title}. Issued on ${formatDate(notice.date)}.`} />
      </Helmet>

      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <Breadcrumbs crumbs={[{ label: 'Notices', to: '/notices' }, { label: notice.title, to: `/notices/${id}` }]} light />
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs font-semibold bg-navy-700/60 text-white px-3 py-1 rounded-full border border-white/20">{notice.category}</span>
            {notice.important && (
              <span className="text-xs font-semibold bg-red-500/80 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <AlertCircle size={11} /> Important
              </span>
            )}
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">{notice.title}</h1>
          <p className="flex items-center gap-2 text-slate-400 text-sm mt-4">
            <Calendar size={14} /> Issued on {formatDate(notice.date)}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Notice body */}
            <div className="lg:col-span-2">
              <div className="bg-brand-light rounded-2xl p-6 border border-brand-border mb-6">
                <div className="flex items-center gap-2 mb-1">
                  {notice.important ? <AlertCircle size={16} className="text-red-500" /> : <Bell size={16} className="text-navy-700" />}
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">Official Notice</span>
                </div>
                <p className="font-display font-bold text-navy-900 text-lg">{notice.title}</p>
              </div>

              {notice.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-brand-muted leading-relaxed mb-5">{para}</p>
              ))}

              <div className="mt-8 pt-6 border-t border-brand-border">
                <Link to="/notices" className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:gap-3 transition-all">
                  <ArrowLeft size={16} /> All Notices
                </Link>
              </div>
            </div>

            {/* Sidebar — attachments & meta */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-5">
                {/* Meta */}
                <div className="bg-brand-light rounded-2xl p-5 border border-brand-border">
                  <h3 className="font-display font-bold text-navy-900 text-sm mb-4">Notice Details</h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-muted">Category</span>
                      <span className="font-medium text-navy-700">{notice.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted">Date Issued</span>
                      <span className="font-medium">{formatDate(notice.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted">Priority</span>
                      <span className={`font-medium ${notice.important ? 'text-red-500' : 'text-green-600'}`}>
                        {notice.important ? 'Important' : 'Regular'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                {notice.attachments?.length > 0 && (
                  <div className="bg-brand-light rounded-2xl p-5 border border-brand-border">
                    <h3 className="font-display font-bold text-navy-900 text-sm mb-4">Attachments</h3>
                    <div className="flex flex-col gap-3">
                      {notice.attachments.map((att, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-border">
                          <FileText size={18} className="text-navy-700 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-brand-text truncate">{att.name}</p>
                            <p className="text-xs text-brand-muted">{att.size}</p>
                          </div>
                          <Button href={att.url} variant="ghost" size="sm" className="flex-shrink-0 p-1.5 !px-2">
                            <Download size={14} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
