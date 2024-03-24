import EventBus from './event-bus';
import { v4 as getUUID } from 'uuid';
import Handlebars from 'handlebars';

type Props = {
  events?: Record<string, EventListener>;
  attributes?: Record<string, string>;
  [key: string | symbol]: unknown;
}

type Meta = {
  tagName: string;
  props?: Props;
}

type Element = {
  getElement: () => HTMLElement;
  id?: string;
  content?: HTMLElement;
}

export default class Block {
  private static readonly EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private readonly meta: Meta;
  private readonly props: Props = {};
  private readonly eventBus: () => EventBus;

  private lists: Props = {};
  private children: Props = {};
  private htmlElement: HTMLElement | null = null;

  protected id = getUUID();

  get element() {
    return this.htmlElement;
  }

  constructor(tagName = 'div', propsWithChildren = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } = this.getPropsChildren(propsWithChildren);

    this.meta = {
      tagName,
      props
    };
    this.props = this.makePropsProxy({ ...props });
    this.children = this.makePropsProxy(children);
    this.lists = this.makePropsProxy(lists);

    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  init() {
    this.addElement();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private componentDidMount() {
    this.redefineComponentDidMount();
  }

  redefineComponentDidMount() { }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private componentDidUpdate() {
    const response = this.redefineComponentDidUpdate();

    if (!response) {
      return;
    }

    this.render();
  }

  redefineComponentDidUpdate() {
    return true;
  }

  private render() {
    const tmpId = getUUID();
    const propsAndStubs = { ...this.props };

    this.createStubsForChildrenElements(propsAndStubs, tmpId);

    const fragment = this.createElement('template');
    fragment.innerHTML = Handlebars.compile(this.redefineRender())(propsAndStubs);

    this.replaceStubByElement(fragment);
    this.replaceListItemsStubsByElements(fragment, tmpId);

    const newElement = (fragment as unknown as Element).content?.firstElementChild;

    if (this.htmlElement && newElement) {
      this.removeEvents();
      this.htmlElement.replaceWith(newElement);
    }

    this.htmlElement = newElement as HTMLElement;
    this.addEvents();
    this.addAttributes();
  }

  redefineRender() { }

  getElement() {
    return this.element;
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

  setProps(nextProps: Props) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  private registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.render.bind(this));
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
      this.htmlElement?.addEventListener(
        eventName,
        (events as Record<string, EventListener>)[eventName]
      );
    });
  }

  private removeEvents() {
    const { events = {} } = this.props;

    if (events) {
      Object.keys(events).forEach(eventName => {
        this.htmlElement?.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  private addAttributes() {
    const { attr = {} } = this.props;

    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        if (key === 'class') {
          this.htmlElement?.classList.add(value as string);
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

  private getPropsChildren(propsWithChildren: Props) {
    const children: Props = {};
    const props: Props = {};
    const lists: Props = {};

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

  private makePropsProxy(props: Props) {
    const eventBus = this.eventBus;

    return new Proxy(props, {
      get(target, property: string) {
        if (property.indexOf('_') === 0) {
          throw new Error('Access denied');
        }

        const value = target[property];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, property: string, value) {
        if (property.indexOf('_') === 0) {
          throw new Error('Access denied');
        }

        const oldTarget = { ...target };
        target[property] = value;
        eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty() {
        throw new Error('Access denied');
      }
    });
  }
}
