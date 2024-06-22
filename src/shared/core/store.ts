import { ChatType, IState, UserType } from '../types';
import EventBus from './event-bus';
import { set } from '../utils/set';

enum StoreEvents {
  Update = 'update',
}

class Store extends EventBus {
  private state: IState = {
    user: {} as UserType,
    chats: [] as ChatType[],
    currentChat: {} as ChatType,
    currentChatUsers: [] as UserType[]
  };

  getState() {
    return this.state;
  }

  setState(path: string, newData: unknown) {
    set(this.state, path, newData);
    this.emit(StoreEvents.Update);
  }
}

export default new Store();
