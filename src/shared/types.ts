import Block from './core/block';

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
  buttonText: string;
  page?: string;
  events?: object;
}

export interface IFormFooter {
  buttonClass: string;
  buttonText: string;
  linkUrl: string;
  linkText: string;
}

export interface IForm extends IFormFooter {
  formContentClass?: string;
  list?: Block[];
}

export interface IPageContainer extends IForm {
  text: string;
}

export interface IAvatar {
  src?: string;
  alt?: string;
}

export interface IChatHeaderLink {
  url: string;
  text: string;
}

export type SigninType = {
  login: string;
  password: string;
}

export type SignupType = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export type UserInfoResponseType = Omit<SigninType, 'password'> & {
  id: number,
  display_name: string,
  avatar: string,
}

export type UserType = {
  id: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar?: unknown;
  reason?: string;
}

export type LastMessageType = {
  content: string;
  id: number;
  time: string;
  user: UserType;
}

export type ChatType = {
  id: number;
  title: string;
  avatar: null | string;
  unread_count: number;
  created_by?: number;
  last_message?: LastMessageType;
}

export type IFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
}

export type MessageType = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: IFile;
}

export interface IState {
  user: UserType;
  chats?: ChatType[];
  currentChat?: ChatType;
  currentChatUsers?: UserType[];
  messages?: Record<number, MessageType[]>;
}

export interface IPopup extends IButton, IInputField {
  title: string;
  isDisplay?: boolean;
}

export interface IInputField {
  title: string;
  name: string;
  type: string;
  events?: object;
}

export interface IChatList {
  chats: ChatType[]
}

export type UserProfileInfoType = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type UserPasswordType = {
  oldPassword: string;
  newPassword: string;
  repeatPassword?: string;
};

export interface IProfileAvatar {
  attr?: object;
  src?: string;
  name: string;
  popup?: Block;
}

export interface IProfileItem {
  attr?: object;
  title: string;
  events?: object;
  data?: string;
}

export interface IError {
  code: string;
  title: string;
  text: string;
  button: IButton;
}

export interface IProfileCloseButton {
  events: object;
}

export interface IProfileInput {
  title: string;
  type: string;
  name: string;
  data?: string;
  attr?: object;
  events?: object;
}
