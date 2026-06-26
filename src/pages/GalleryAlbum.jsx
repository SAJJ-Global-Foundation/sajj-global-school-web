import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Images } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import Lightbox from '@/components/Lightbox.jsx';
import { getAlbumById } from '@/services/galleryService.js';

export default function GalleryAlbum() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    getAlbumById(albumId).then(setAlbum);
  }, [albumId]);

  if (!album) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center text-brand-muted">
          <Images size={40} className="mx-auto mb-3 opacity-30" />
          <p>Album not found.</p>
          <Link to="/gallery" className="text-navy-700 font-semibold text-sm mt-2 inline-block">Back to Gallery</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={album.title}
        subtitle={`${album.imageCount} photos · ${new Date(album.date).getFullYear()} · ${album.category}`}
        breadcrumbs={[{ label: 'Gallery', to: '/gallery' }, { label: album.title, to: `/gallery/${album.id}` }]}
        seoTitle={`${album.title} — Gallery — Sajj Global School`}
        seoDescription={`Photos from ${album.title} at Sajj Global School.`}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-navy-700 transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Gallery
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {album.images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className="relative rounded-2xl overflow-hidden aspect-square group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors flex items-end p-3">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity leading-snug">
                    {img.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {album.images.length < album.imageCount && (
            <p className="text-center text-brand-muted text-sm mt-8">
              Showing {album.images.length} of {album.imageCount} photos. More photos available on request.
            </p>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={album.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, i - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(album.images.length - 1, i + 1))}
        />
      )}
    </>
  );
}
