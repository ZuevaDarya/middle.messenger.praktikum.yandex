import { ChatType, IState, MessageType, UserType } from '../types';
import EventBus from './event-bus';
import { set } from '../utils/set';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: IState = {
    user: {} as UserType,
    chats: [] as ChatType[],
    currentChat: {} as ChatType,
    currentChatUsers: [] as UserType[],
    messages: [] as Record<number, MessageType[]>
  };

  getState() {
    return this.state;
  }

  setState(path: string, newData: unknown) {
    set(this.state, path, newData);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
