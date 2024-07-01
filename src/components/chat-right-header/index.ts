import { IChatRightHeader, UserType } from '../../shared/types';
import Avatar from '../avatar';
import Block from '../../shared/core/block';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import ChatController from '../../shared/controllers/chat-controller';
import ChatFunctions from '../chat-functions';
import chatRightHeaderTmpl from './chat-right-header';
import ChatTitle from '../chat-title';
import { fileReader } from '../../shared/utils/file-reader';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import Popup from '../../components/popup';
import { POPUPS_DATA } from '../../shared/consts/pages-data/popups-data';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import store from '../../shared/core/store';
import UserController from '../../shared/controllers/user-controller';

export default class ChatRightHeader extends Block {
  constructor(props: IChatRightHeader) {
    super('div', {
      chatAvatar: new Avatar({
        alt: CHAT_AVATAR_DATA.alt,
        src: props.src
      }),
      chatTitle: new ChatTitle({ title: props.title })
    });
  }

  redefineInit() {
    const currentChat = store.getState().currentChat;
    const currentChatUsers = store.getState().currentChatUsers;

    this.props['events'] = {
      click: [
        {
          event: () => {
            if (this.children['chatFunctions']) {
              (this.children['chatFunctions'] as Block).displayToggle('block');
            } else {
              this.children['chatFunctions'] = new ChatFunctions();
            }
          },
          querySelector: 'button'
        },
        {
          event: (e: Event) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            this.children['popup'] = new Popup({
              title: POPUPS_DATA.loadAvatar.title,
              buttonText: POPUPS_DATA.loadAvatar.buttonText,
              name: POPUPS_DATA.loadAvatar.name,
              type: POPUPS_DATA.loadAvatar.type,
              accept: POPUPS_DATA.loadAvatar.accept,
              events: {
                submit: {
                  event: (e: Event) => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();

                    fileReader(e.target as HTMLFormElement, currentChat?.id);
                  },
                  querySelector: '.popup__form'
                }
              }
            });
          },
          querySelector: '.chat-functions__item_change-avatar'
        },
        {
          event: (e: Event) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            this.children['popup'] = new Popup({
              title: POPUPS_DATA.addUser.title,
              buttonText: POPUPS_DATA.addUser.buttonText,
              name: POPUPS_DATA.addUser.name,
              type: POPUPS_DATA.addUser.type,
              labelText: POPUPS_DATA.addUser.labelText,
              events: {
                submit: {
                  event: (e: Event) => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();

                    const data = getFormData(e.target as HTMLFormElement);

                    UserController.searchUserByLogin(data.login).then(jsonData => {
                      const users = JSON.parse(jsonData);

                      if (users.length === 0) {
                        alert('Пользователь не найден!');
                      } else {
                        const userToAdd = (users as UserType[]).filter(user => user.login === data.login)[0];
                        const isInChat = currentChatUsers!.findIndex(user => user.id === userToAdd?.id) > -1;

                        if (!userToAdd) {
                          alert('Пользователь не найден!');
                        } else {
                          if (!isInChat) {
                            ChatController.addUsersToChat([userToAdd.id], currentChat!.id);
                            alert('Пользователь добавлен в чат!');
                            store.setState('currentChatUsers', [...currentChatUsers!, userToAdd]);
                            Router.go(Routes.Chats);
                          } else {
                            alert('Пользователь уже в чате!');
                          }
                        }
                      }
                    })
                  },
                  querySelector: '.popup__form'
                }
              }
            });
          },
          querySelector: '.chat-functions__item_add-user'
        },
        {
          event: (e: Event) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            this.children['popup'] = new Popup({
              title: POPUPS_DATA.deleteUser.title,
              buttonText: POPUPS_DATA.deleteUser.buttonText,
              name: POPUPS_DATA.deleteUser.name,
              type: POPUPS_DATA.deleteUser.type,
              labelText: POPUPS_DATA.deleteUser.labelText,
              events: {
                submit: {
                  event: (e: Event) => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();

                    const data = getFormData(e.target as HTMLFormElement);
                    const usersToDelete = currentChatUsers!.filter(user => user.login === data.login);

                    if (usersToDelete.length === 0) {
                      alert('Пользователь не найден!');
                    } else {
                      ChatController.deleteUsersFromChat([...usersToDelete.map(user => user.id)], currentChat!.id);
                      alert('Пользователь удален из чата!');

                      const currentChatUserUpdate = currentChatUsers!.filter(user => user.id !== usersToDelete[0].id);
                      store.setState('currentChatUsers', currentChatUserUpdate);
                      Router.go(Routes.Chats);
                    }
                  },
                  querySelector: '.popup__form'
                }
              }
            });
          },
          querySelector: '.chat-functions__item_delete-user'
        },
        {
          event: () => {
            ChatController.deleteChatById(currentChat!.id);
            alert('Чат удален!');
            Router.go(Routes.Chats);
          },
          querySelector: '.chat-functions__item_delete-chat'
        }
      ] as unknown as EventListener
    }
  }

  redefineRender() {
    return chatRightHeaderTmpl;
  }
}

