export function isUrl(url: string): boolean {
  if (typeof url != 'string' || !url.trim()) {
    return false;
  }

  if (!url.includes('/')) {
    return false;
  }

  return true;
}