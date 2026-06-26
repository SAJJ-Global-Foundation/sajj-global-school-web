import noticesData from '@/data/notices.json';

export async function getNotices({ category, page = 1, perPage = 8 } = {}) {
  let items = [...noticesData];
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

export async function getNoticeCategories() {
  const cats = [...new Set(noticesData.map((n) => n.category))];
  return ['All', ...cats];
}

export async function getNoticeById(id) {
  return noticesData.find((n) => n.id === Number(id)) || null;
}

export async function getRecentNotices(count = 5) {
  return noticesData.slice(0, count);
}
