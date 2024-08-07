import EventBus from './event-bus';
import { v4 as getUUID } from 'uuid';
import Handlebars from 'handlebars';
import { IBlockProps } from '../types';
import isEqual from '../utils/is-equal';

type Meta = {
  tagName: string;
  props?: IBlockProps;
}

type Element = {
  getElement: () => HTMLElement;
  id?: string;
  content?: HTMLElement;
}

type PropEvent = {
  querySelector: string;
  event: EventListener;
}
export default class Block {
  private readonly EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected meta: Meta;
  private readonly eventBus: () => EventBus;

  props: IBlockProps;
  protected lists: IBlockProps = {};
  protected children: IBlockProps;

  private htmlElement?: HTMLElement;

  protected id = getUUID();
  protected state: object = {};

  get element() {
    return this.htmlElement;
  }

  constructor(tagName = 'div', propsWithChildren = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } = this.getPropsChildren(propsWithChildren);

    this.getStateFromProps(props);

    this.meta = {
      tagName,
      props
    };
    this.props = this.makePropsProxy(props);
    this.children = this.makePropsProxy(children);
    this.lists = this.makePropsProxy(lists);

    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);

    eventBus.emit(this.EVENTS.INIT);
  }

  init() {
    this.redefineInit();
    this.addElement();
    this.eventBus().emit(this.EVENTS.FLOW_RENDER);
  }

  protected redefineInit() { }

  private componentDidMount() {
    this.redefineComponentDidMount();
  }

  redefineComponentDidMount() { }

  dispatchComponentDidMount() {
    this.eventBus().emit(this.EVENTS.FLOW_CDM);
  }

  private componentDidUpdate(oldProps: IBlockProps, newProps: IBlockProps) {
    const response = this.redefineComponentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }

    this.render();
  }

  redefineComponentDidUpdate(oldProps: IBlockProps, newProps: IBlockProps) {
    return !isEqual(oldProps, newProps);
  }

  preRender() { }

  removeChildrenInRoot() {
    const element = document.querySelector('#app');

    const childrens = element?.children;
    const arr = [...(childrens as HTMLCollection)];

    arr.map(item => element?.removeChild(item));
  }

  private render() {
    const fragmentContent = this.compile();
    this.removeEvents();

    const newElement = fragmentContent.firstElementChild!;

    this.htmlElement?.replaceWith(newElement);
    this.htmlElement = newElement as HTMLElement;

    this.addEvents();
    this.addAttributes();
  }

  private compile(): DocumentFragment {
    const tmpId = getUUID();
    const propsAndStubs = { ...this.props };

    this.createStubsForChildrenElements(propsAndStubs, tmpId);

    const fragment = document.createElement('template');
    fragment.innerHTML = Handlebars.compile(this.redefineRender())({ ...propsAndStubs, ...this.state });

    this.replaceStubByElement(fragment);
    this.replaceListItemsStubsByElements(fragment, tmpId);

    return fragment.content;
  }

  redefineRender(): string {
    return '';
  }

  getElement() {
    return this.element;
  }

  setState(nextState: object) {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  }

  protected getStateFromProps(props: object) {
    this.state = { ...props }
  }

  show() {
    const element = this.getElement();

    if (element !== undefined && element !== null) {
      element.style.display = 'block';
    }
  }

  hide() {
    const element = this.getElement();

    if (element !== undefined && element !== null) {
      element.style.display = 'none';
    }
  }

  displayToggle(displayType: string) {
    const element = this.getElement();

    if (element !== undefined && element !== null) {
      if (element.style.display === 'none') {
        element.style.display = displayType;
      } else {
        element.style.display = 'none';
      }
    }
  }

  addClass(className: string) {
    const element = this.getElement();

    if (element !== undefined && element !== null) {
      element.classList.add(className);
    }
  }

  setProps(nextProps: unknown) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  private registerEvents(eventBus: EventBus): void {
    eventBus.on(this.EVENTS.INIT, this.init.bind(this));
    eventBus.on(this.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
    eventBus.on(
      this.EVENTS.FLOW_CDU,
      this.componentDidUpdate.bind(this) as (...args: unknown[]) => void
    );
    eventBus.on(this.EVENTS.FLOW_RENDER, this.render.bind(this));
  }

  private addElement() {
    const { tagName } = this.meta;
    this.htmlElement = this.createElement(tagName);
  }

  private createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      if (Array.isArray(events[eventName])) {
        (events[eventName] as unknown as object[]).forEach(objEvent => {
          this.htmlElement
            ?.querySelector((objEvent as unknown as PropEvent).querySelector)
            ?.addEventListener(eventName, (objEvent as unknown as PropEvent).event);
        });
      } else if (typeof events[eventName] === 'object') {
        this.htmlElement
          ?.querySelector((events[eventName] as unknown as PropEvent).querySelector)
          ?.addEventListener(eventName, (events[eventName] as unknown as PropEvent).event);
      } else {
        this.htmlElement?.addEventListener(
          eventName,
          (events as Record<string, EventListener>)[eventName]
        );
      }
    });
  }

  private removeEvents() {
    const { events = {} } = this.props;

    if (events) {
      Object.keys(events).forEach(eventName => {
        if (typeof events[eventName] === 'object') {
          this.htmlElement
            ?.querySelector((events[eventName] as unknown as PropEvent).querySelector)
            ?.removeEventListener(eventName, (events[eventName] as unknown as PropEvent).event);
        } else {
          this.htmlElement?.removeEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  private addAttributes() {
    const { attr = {} } = this.props;

    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        if (key === 'class') {
          //Если добавляется больше одного класса
          if (Array.isArray(value)) {
            (value as string[]).map(item => this.htmlElement?.classList.add(item as string));
          } else {
            this.htmlElement?.classList.add(value as string);
          }
        } else {
          this.htmlElement?.setAttribute(key, value as string);
        }
      });
    }
  }

  private createStubsForChildrenElements(propsAndStubs: Record<string, unknown>, tmpId: string) {
    const childrenEntries = Object.entries(this.children) as [key: string, child: HTMLElement][];
    childrenEntries.forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    Object.entries(this.lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="${tmpId}"></div>`;
    });
  }

  private replaceStubByElement(fragment: HTMLElement) {
    const childrenValues = Object.values(this.children) as (HTMLElement & Element)[];
    childrenValues.forEach(child => {
      const stub = (fragment as unknown as Element).content?.querySelector(`[data-id="${child.id}"]`);
      stub?.replaceWith(child.getElement());
    });
  }

  private replaceListItemsStubsByElements(fragment: HTMLElement, tmpId: string) {
    (Object.entries(this.lists) as [key: string, child: Element[]][]).forEach(([, child]) => {
      const listCont = this.createElement('template');

      (child as HTMLElement & Element[]).forEach(item => {
        if (item instanceof Block) {
          (listCont as HTMLElement & Element).content?.append((item as Element).getElement());
        } else {
          (listCont as HTMLElement & Element).content?.append(`${item}`);
        }
      });

      const stub = (fragment as unknown as Element).content?.querySelector(`[data-id="${tmpId}"]`);

      if ((listCont as HTMLElement & Element).content) {
        stub?.replaceWith((listCont as HTMLElement & Element).content as string | Node);
      }
    });
  }

  private getPropsChildren(propsWithChildren: IBlockProps) {
    const children: IBlockProps = {};
    const props: IBlockProps = {};
    const lists: IBlockProps = {};

    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  private makePropsProxy(props: IBlockProps) {
    return new Proxy(props, {
      get: (target, property: string) => {
        if (property.indexOf('_') === 0) {
          throw new Error('Access denied');
        }

        const value = target[property];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, property: string, value) => {
        if (property.indexOf('_') === 0) {
          throw new Error('Access denied');
        }

        const oldTarget = { ...target };
        target[property] = value;
        this.eventBus().emit(this.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty: () => {
        throw new Error('Access denied');
      }
    });
  }
}
