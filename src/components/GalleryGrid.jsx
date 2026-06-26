import { Link } from 'react-router-dom';
import { Images } from 'lucide-react';

export default function GalleryGrid({ albums, onAlbumClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <Link
          key={album.id}
          to={`/gallery/${album.id}`}
          onClick={onAlbumClick}
          className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 aspect-[4/3] block"
        >
          <img
            src={album.coverImage}
            alt={album.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
          {/* Category chip */}
          <span className="absolute top-3 left-3 text-xs font-semibold font-display bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            {album.category}
          </span>
          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="font-display font-bold text-white text-base leading-snug">{album.title}</p>
            <div className="flex items-center gap-2 mt-1 text-slate-300 text-xs">
              <Images size={12} />
              <span>{album.imageCount} photos</span>
              <span>·</span>
              <span>{new Date(album.date).getFullYear()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
