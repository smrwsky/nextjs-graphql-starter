import { Scope, serialize } from 'effector';

import { GlobalState } from './init-store';

export interface StoreProps {
  globalStore: GlobalState;
}

export function getStoreProps(store: Scope): StoreProps {
  return {
    globalStore: serialize(store),
  };
}
