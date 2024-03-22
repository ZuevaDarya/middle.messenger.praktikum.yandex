type Callback = (...args: unknown[]) => void;
type FuncWithCallback = (event: string, callback: Callback) => void;
type FuncWithArgs = (event: string, ...args: unknown[]) => void;
type Listeners = Record<string, Callback[]>;

interface IEventBus {
  on: FuncWithCallback;
  off: FuncWithCallback;
  emit: FuncWithArgs;
}

export default class EventBus implements IEventBus {
  private listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on: FuncWithCallback = (event, callback) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off: FuncWithCallback = (event, callback) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  emit: FuncWithArgs = (event, ...args) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(listener => listener(...args));
  }
}
