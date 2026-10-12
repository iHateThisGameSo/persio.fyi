export function isPublicationDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function isPublished(data, today = new Date().toISOString().slice(0, 10)) {
  return data.draft === false && isPublicationDate(data.date) && data.date <= today;
}

export function sortWriting(posts) {
  return [...posts].sort((a, b) => b.data.date.localeCompare(a.data.date) || a.slug.localeCompare(b.slug));
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

export function readingMinutes(body) {
  return Math.max(1, Math.ceil(body.trim().split(/\s+/).filter(Boolean).length / 200));
}
