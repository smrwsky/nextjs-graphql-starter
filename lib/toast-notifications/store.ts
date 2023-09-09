import { createEvent, createStore, sample } from 'effector';
import { produce } from 'immer';

export interface ToastNotificationStateProps {
  visible: boolean;
  onHide: () => void;
  onRemove: () => void;
  [key: string]: unknown;
}

export interface ToastNotificationState {
  id: string;
  type: string;
  props: ToastNotificationStateProps;
}

export interface ToastNotificationsManagerState {
  byId: Record<string, ToastNotificationState>;
  ids: string[];
}

export const toastNotificationsManager$ =
  createStore<ToastNotificationsManagerState>({
    byId: {},
    ids: [],
  });

export type ToastNotificationsState = ReadonlyArray<ToastNotificationState>;

export const toastNotifications$ = createStore<ToastNotificationsState>([]);

/* Events */

export const toastNotificationPushed = createEvent<ToastNotificationState>();

export const toastNotificationDismissed = createEvent<string>();

export const toastNotificationRemoved = createEvent<string>();

export const toastNotificationsCleared = createEvent();

/* Effects */

toastNotificationsManager$.on(toastNotificationPushed, (state, payload) =>
  produce(state, (draft) => {
    draft.byId[payload.id] = payload;
    draft.byId[payload.id].props.visible = true;
    draft.ids.unshift(payload.id);
  }),
);

toastNotificationsManager$.on(toastNotificationDismissed, (state, payload) =>
  produce(state, (draft) => {
    draft.byId[payload].props.visible = false;
  }),
);

toastNotificationsManager$.on(toastNotificationRemoved, (state, payload) =>
  produce(state, (draft) => {
    delete draft.byId[payload];
    draft.ids = draft.ids.filter((id) => id !== payload);
  }),
);

toastNotificationsManager$.on(toastNotificationsCleared, () => ({
  byId: {},
  ids: [],
}));

sample({
  clock: toastNotificationsManager$,
  fn: (state) => state.ids.map((id) => state.byId[id]),
  target: toastNotifications$,
});
