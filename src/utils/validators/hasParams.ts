export function hasParams(url: string): boolean {
  const indexOfParams = url.indexOf('?');

  return indexOfParams > -1 && (indexOfParams < (url.trim().length - 1));
}