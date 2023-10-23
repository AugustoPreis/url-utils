export function formatDate(value: Date) {
  if (!(value instanceof Date)) {
    return '';
  }

  if (isNaN(value.getTime())) {
    return 'Invalid Date';
  }

  return value.toISOString();
}