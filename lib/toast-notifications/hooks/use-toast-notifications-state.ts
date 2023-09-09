import { useStore } from 'effector-react';

import { toastNotifications$, ToastNotificationsState } from '../store';

export function useToastNotificationsState(): ToastNotificationsState {
  return useStore(toastNotifications$);
}
