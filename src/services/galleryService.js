import galleryData from '@/data/gallery.json';

export async function getAlbums({ category } = {}) {
  let albums = [...galleryData.albums];
  if (category && category !== 'All') {
    albums = albums.filter((a) => a.category === category);
  }
  return albums;
}

export async function getAlbumById(id) {
  return galleryData.albums.find((a) => a.id === id) || null;
}

export async function getAlbumCategories() {
  const cats = [...new Set(galleryData.albums.map((a) => a.category))];
  return ['All', ...cats];
}

export async function getPreviewImages(count = 6) {
  return galleryData.albums
    .flatMap((a) => a.images.slice(0, 2).map((img) => ({ ...img, albumId: a.id, albumTitle: a.title })))
    .slice(0, count);
}
