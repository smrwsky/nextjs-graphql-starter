import { createEvent, createStore, sample } from 'effector';
import { produce } from 'immer';

import { AnyModalContract } from './types';

/* Store */

export interface BaseModalProps {
  visible: boolean;
}

export interface ModalsNormalizedState {
  types: string[];
  byType: Record<string, AnyModalContract>;
}

export const modalManager$ = createStore<ModalsNormalizedState>({
  byType: {},
  types: [],
});

export type ModalsState = ReadonlyArray<AnyModalContract>;

export const modals$ = createStore<ModalsState>([]);

/* Events */

export type ShowModalEvent<
  Contract extends AnyModalContract = AnyModalContract,
> = Contract;

export const modalShown = createEvent<ShowModalEvent>();

export type HideModalEvent<
  Contract extends AnyModalContract = AnyModalContract,
> = Contract['type'];

export const modalHidden = createEvent<HideModalEvent>();

export type RemoveModalEvent<
  Contract extends AnyModalContract = AnyModalContract,
> = Contract['type'];

export const modalRemoved = createEvent<RemoveModalEvent>();

/* Effects */

modalManager$.on(modalShown, (state, payload) =>
  produce(state, (draft) => {
    draft.byType[payload.type] = payload;
    draft.byType[payload.type].props.visible = true;
    draft.types.push(payload.type);
  }),
);

modalManager$.on(modalHidden, (state, payload) =>
  produce(state, (draft) => {
    draft.byType[payload].props.visible = false;
  }),
);

modalManager$.on(modalRemoved, (state, payload) =>
  produce(state, (draft) => {
    delete draft.byType[payload];
    draft.types = draft.types.filter((type) => type !== payload);
  }),
);

sample({
  source: modalManager$,
  fn: (state) => state.types.map((type) => state.byType[type]),
  target: modals$,
});
