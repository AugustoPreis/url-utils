import { ParamsType } from './ParamsType';

export interface ParsedUrl {
  url: string;
  params: ParamsType;
  strParams: string;
  paramsCount: number;
  valid: boolean;
}