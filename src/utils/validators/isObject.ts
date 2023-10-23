import { isDate } from 'util/types';
import { ParamsType } from '../../types/ParamsType';

export function isObject(params: ParamsType): boolean {
  if (typeof params !== 'object') {
    return false;
  }

  if (params === null) {
    return false;
  }

  if (isDate(params)) {
    return false;
  }

  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return false;
  }

  return true;
}