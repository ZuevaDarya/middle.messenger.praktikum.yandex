import isArrayOrObject from './is-array-object';
import isPlainObject from './is-plain-object';
import { PlainObject } from '../types';

type StringIndexed = Record<string, unknown>;

function queryStringify(data: StringIndexed): string {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object');
  }

  return getParams(data).map(arr => arr.join('=')).join('&');
}

function getParams(data: PlainObject | [], parentKey?: string) {
  const result: [string, string][] = [];

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
}

function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}: ${key}` : key;
}

export default queryStringify;

