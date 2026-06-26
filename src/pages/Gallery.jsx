import { useEffect, useState } from 'react';
import { Images } from 'lucide-react';
import PageHero from '@/components/ui/PageHero.jsx';
import SectionHeading from '@/components/ui/SectionHeading.jsx';
import GalleryGrid from '@/components/GalleryGrid.jsx';
import { getAlbums, getAlbumCategories } from '@/services/galleryService.js';

const EVENT_GALLERY = [
  { src: 'https://picsum.photos/seed/ev1/600/450', alt: 'Annual Prize Distribution 2024 on stage', label: 'Annual Prize Distribution' },
  { src: 'https://picsum.photos/seed/ev2/600/450', alt: 'Republic Day flag hoisting and march past', label: 'Republic Day 2025' },
  { src: 'https://picsum.photos/seed/ev3/600/450', alt: 'Independence Day athletics and sports events', label: 'Independence Day 2024' },
  { src: 'https://picsum.photos/seed/ev4/600/450', alt: "Students celebrate Teachers' Day with activities", label: "Teachers' Day 2024" },
  { src: 'https://picsum.photos/seed/ev5/600/450', alt: "Children's Day celebration with games and performances", label: "Children's Day 2024" },
  { src: 'https://picsum.photos/seed/ev6/600/450', alt: 'Kali Puja and Diwali festival celebrations at school', label: 'Kali Puja / Diwali 2024' },
];

export default function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    getAlbums().then(setAlbums);
    getAlbumCategories().then(setCategories);
  }, []);

  const filtered = activeCategory === 'All' ? albums : albums.filter((a) => a.category === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A window into the vibrant, active life of our students, campus, and community."
        breadcrumbs={[{ label: 'Gallery', to: '/gallery' }]}
        seoDescription="Photo gallery of events, sports, academics, and campus life at Sajj Global School."
      />

      {/* ── Albums ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Albums" title="Photo Gallery" />

          <div className="mt-8 flex flex-wrap gap-2">
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

          <div className="mt-8">
            {filtered.length > 0 ? (
              <GalleryGrid albums={filtered} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 py-20 text-brand-muted">
                <Images size={40} className="opacity-30" />
                <p>No albums found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Event Gallery ── */}
      <section className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Celebrations" title="Event Gallery" centered />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {EVENT_GALLERY.map((ev, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img
                  src={ev.src}
                  alt={ev.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/60 transition-colors flex items-end p-3">
                  <p className="text-white text-sm font-display font-semibold">{ev.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
