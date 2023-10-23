import { ParamType, ParamsType } from '../../types/ParamsType';
import { ParsedUrl } from '../../types/ParsedUrl';
import { formatType } from './typeFormatter';

export function formatParam(param: ParamType): string {
  return formatType(param);
}

export function getParams(parsedUrl: ParsedUrl): ParamsType {
  const splited = {};

  if (parsedUrl.paramsCount === 0) {
    return splited;
  }

  if (typeof parsedUrl.strParams != 'string' || !parsedUrl.strParams.trim()) {
    return splited;
  }

  const params = parsedUrl.strParams.split('&');

  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    const [key, value] = param.split('=');

    splited[key] = value;
  }

  return splited;
}