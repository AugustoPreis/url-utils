import { ParamsType } from '../../types/ParamsType';
import { SplitedUrl } from '../../types/SplitedUrl';
import { hasParams } from '../validators/hasParams';
import { isParams, isValidParam } from '../validators/isParams';
import { formatParam } from './formatParams';

export function normalizeUrl(url: string): string {
  let formatted = url;

  formatted = url.trim();

  if (!formatted.includes('?')) {
    formatted = formatted.concat('?');
  }

  return formatted;
}

export function addParams(url: string, params: ParamsType): string {
  if (!isParams(params)) {
    return url;
  }

  const entries = Object.entries(params);
  let formattedUrl = url;
  let paramsCount = 0;

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];

    if (!isValidParam(value as never)) {
      continue;
    }

    const divider = paramsCount > 0 ? '&' : '';
    const formattedParam = `${key}=${formatParam(value)}`;

    formattedUrl = `${formattedUrl}${divider}${formattedParam}`;
    paramsCount++;
  }

  return formattedUrl;
}

export function splitUrl(urlAndParams: string): SplitedUrl {
  const indexOfParams = urlAndParams.indexOf('?');
  const splited = {
    url: urlAndParams,
    strParams: '',
    paramsCount: 0,
  }

  if (indexOfParams > -1) {
    splited.url = urlAndParams.substring(0, indexOfParams);
  }

  if (indexOfParams === -1 || !hasParams(urlAndParams)) {
    return splited;
  }

  splited.strParams = urlAndParams.substring(indexOfParams + 1);
  splited.paramsCount = splited.strParams.split('&').length;

  return splited;
}