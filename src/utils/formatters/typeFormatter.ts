import { isDate } from 'util/types';
import { ParamType } from '../../types/ParamsType';
import { formatDate } from './formatDate';

export function formatType(value: ParamType): string {
  switch (typeof value) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
      return value.toString();
    case 'object':
      if (isDate(value)) {
        return formatDate(value);
      }

      if (value === null) {
        return '';
      }

      return JSON.stringify(value);
  }

  return '';
}