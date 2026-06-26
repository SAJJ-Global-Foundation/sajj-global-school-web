import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './layout/Layout.jsx';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 rounded-full border-4 border-brand-border border-t-navy-700 animate-spin" />
  </div>
);

function lazyPage(importFn) {
  const Page = lazy(importFn);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Page />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: lazyPage(() => import('./pages/Home.jsx')) },
      { path: 'about', element: lazyPage(() => import('./pages/About.jsx')) },
      { path: 'admissions', element: lazyPage(() => import('./pages/Admissions.jsx')) },
      { path: 'academics', element: lazyPage(() => import('./pages/Academics.jsx')) },
      { path: 'students', element: lazyPage(() => import('./pages/Students.jsx')) },
      { path: 'parents', element: lazyPage(() => import('./pages/Parents.jsx')) },
      { path: 'society', element: lazyPage(() => import('./pages/Society.jsx')) },
      { path: 'gallery', element: lazyPage(() => import('./pages/Gallery.jsx')) },
      { path: 'gallery/:albumId', element: lazyPage(() => import('./pages/GalleryAlbum.jsx')) },
      { path: 'news', element: lazyPage(() => import('./pages/News.jsx')) },
      { path: 'news/:slug', element: lazyPage(() => import('./pages/NewsDetail.jsx')) },
      { path: 'notices', element: lazyPage(() => import('./pages/Notices.jsx')) },
      { path: 'notices/:id', element: lazyPage(() => import('./pages/NoticeDetail.jsx')) },
      { path: 'contact', element: lazyPage(() => import('./pages/Contact.jsx')) },
    ],
  },
]);
