import { ParsedUrl } from './types/ParsedUrl';
import { getParams } from './utils/formatters/formatParams';
import { splitUrl } from './utils/formatters/formatUrl';
import { isUrl } from './utils/validators/isUrl';

export function parse(url: string): ParsedUrl {
  const parsed = {
    url: '',
    params: {},
    strParams: '',
    paramsCount: 0,
    valid: false,
  }

  if (!isUrl(url)) {
    if (typeof url === 'string') {
      parsed.url = url;
    }

    return parsed;
  }

  const splited = splitUrl(url);

  Object.assign(parsed, splited);

  parsed.params = getParams(parsed);
  parsed.valid = true;

  return parsed;
}