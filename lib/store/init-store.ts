import { fork, serialize } from 'effector';
import { Scope } from 'effector/effector.cjs';

export type GlobalState = Record<string, unknown>;

let scope: Scope;

export function initStore(initialState: GlobalState): Scope {
  const store = fork({
    values: {
      ...(scope ? serialize(scope) : {}),
      ...initialState,
    },
  });

  if (typeof document !== 'undefined') {
    scope = store;
  }

  return store;
}
