import { addParams, normalizeUrl } from './utils/formatters/formatUrl';
import { isUrl } from './utils/validators/isUrl';

export function create(url: string, params: object): string {
  if (!isUrl(url)) {
    if (typeof url === 'string') {
      return url;
    }

    return '';
  }

  let formattedUrl = url;

  formattedUrl = normalizeUrl(formattedUrl);
  formattedUrl = addParams(formattedUrl, params);

  return formattedUrl;
}