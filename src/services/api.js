// Central API configuration — swap BASE_URL to point at the Laravel API
export const BASE_URL = import.meta.env.VITE_API_URL || '';

// When the real API is wired in, replace these helpers with fetch/axios calls.
// All service functions are async so consumers don't change at API-integration time.

export const ENDPOINTS = {
  news: '/api/news',
  noticesList: '/api/notices',
  gallery: '/api/gallery',
  faculty: '/api/faculty',
  fees: '/api/fees',
  calendar: '/api/calendar',
  downloads: '/api/downloads',
  enquiry: '/api/enquiry',
  contact: '/api/contact',
};

export function apiUrl(path) {
  return `${BASE_URL}${path}`;
}
