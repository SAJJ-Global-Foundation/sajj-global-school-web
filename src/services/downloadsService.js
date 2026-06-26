import downloadsData from '@/data/downloads.json';
import feesData from '@/data/fees.json';
import calendarData from '@/data/calendar.json';

export async function getDownloads({ category } = {}) {
  if (category && category !== 'All') {
    return downloadsData.filter((d) => d.category === category);
  }
  return downloadsData;
}

export async function getDownloadCategories() {
  const cats = [...new Set(downloadsData.map((d) => d.category))];
  return ['All', ...cats];
}

export async function getFeeStructure() {
  return feesData;
}

export async function getAcademicCalendar() {
  return calendarData;
}
