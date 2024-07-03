import isPlainObject from './is-plain-object';
import { PlainObject } from '../types';

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export default isArrayOrObject;
