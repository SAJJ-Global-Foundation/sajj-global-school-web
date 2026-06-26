import newsData from '@/data/news.json';

export async function getNews({ category, page = 1, perPage = 6 } = {}) {
  let items = [...newsData];
  if (category && category !== 'All') {
    items = items.filter((n) => n.category === category);
  }
  const total = items.length;
  const start = (page - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    total,
    page,
    perPage,
    totalPages: Math.ceil(total / perPage),
  };
}

export async function getNewsCategories() {
  const cats = [...new Set(newsData.map((n) => n.category))];
  return ['All', ...cats];
}

export async function getNewsBySlug(slug) {
  return newsData.find((n) => n.slug === slug) || null;
}

export async function getLatestNews(count = 3) {
  return newsData.slice(0, count);
}
