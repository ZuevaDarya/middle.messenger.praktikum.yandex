
import { IState, PlainObject } from '../types';
import store, { StoreEvents } from '../core/store';
import Block from '../core/block';
import isEqual from './is-equal';

export const connect =
  (mapStateToProps: (state: IState) => object) =>
    (Component: typeof Block) => {
      const oldState = mapStateToProps(store.getState());

      return class extends Component {
        constructor(props: object) {
          super('', { ...props, ...oldState });

          store.on(StoreEvents.Updated, () => {
            const newState = mapStateToProps(store.getState());

            if (!isEqual(oldState as PlainObject, newState as PlainObject)) {
              this.setProps({ ...mapStateToProps(store.getState()) });
            }
          });
        }
      };
    };
