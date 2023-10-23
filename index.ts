//Main functions
import { create } from './src/create';
import { parse } from './src/parse';

//Formatters
import { formatParam, getParams } from './src/utils/formatters/formatParams';
import { addParams, normalizeUrl, splitUrl } from './src/utils/formatters/formatUrl';
import { formatType } from './src/utils/formatters/typeFormatter';

//Validators
import { isObject } from './src/utils/validators/isObject';
import { isParams, isValidParam } from './src/utils/validators/isParams';
import { isUrl } from './src/utils/validators/isUrl';
import { validateType } from './src/utils/validators/typeValidator';

//Types
import { ParamType, ParamsType } from './src/types/ParamsType';
import { ParsedUrl } from './src/types/ParsedUrl';
import { SplitedUrl } from './src/types/SplitedUrl';

const utils = {
  formatters: {
    formatParam,
    getParams,
    addParams,
    normalizeUrl,
    splitUrl,
    formatType,
  },
  validators: {
    isObject,
    isParams,
    isValidParam,
    isUrl,
    validateType,
  },
}

export {
  create as createUrl,
  parse as parseUrl,
  utils,
  ParamType,
  ParamsType,
  ParsedUrl,
  SplitedUrl,
};