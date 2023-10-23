import { ParamsType } from '../../types/ParamsType';
import { isObject } from './isObject';
import { validateType } from './typeValidator';

export function isParams(params: ParamsType): boolean {
  if (!isObject(params)) {
    return false;
  }

  return Object
    .values(params)
    .some((item) => isValidParam(item));
}

export function isValidParam(param: ParamsType): boolean {
  return validateType(param);
}