import { ParamType } from '../../types/ParamsType';

const validators = {
  //invalid
  function: false,
  symbol: false,
  undefined: false,

  //valid
  bigint: true,
  boolean: true,
  number: true,
  string: true,

  //need validation
  object: (value: object) => value != null,
}

export function validateType(value: ParamType): boolean {
  const validator = validators[typeof value];

  if (typeof validator === 'function') {
    return validator(value as never);
  }

  return validator;
}

export default validators;