import Block from './utils/block';

export interface IBlockProps {
  events?: Record<string, EventListener>;
  attributes?: Record<string, string>;
  [key: string | symbol]: unknown;
}

export type PlainObject<T = unknown> = {
  [k in string]: T;
};

export interface ILink {
  url: string;
  text: string;
  page?: string;
}

export interface IButton {
  buttonClass?: string;
  text: string;
  page?: string;
}

export interface IFormFooter {
  buttonClass: string;
  buttonText: string;
  linkUrl: string;
  linkText: string;
}

export interface IForm extends IFormFooter{
  formContentClass?: string;
  list?: Block[];
}

export interface IPageContainer extends IForm {
  text: string;
}

