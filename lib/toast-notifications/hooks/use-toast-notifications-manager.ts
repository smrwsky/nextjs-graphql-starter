import { useEvent } from 'effector-react';
import React, { useMemo } from 'react';

import {
  toastNotificationDismissed,
  toastNotificationPushed,
  toastNotificationRemoved,
  toastNotificationsCleared,
} from '../store';
import { AnyToastNotification } from '../types';

import { ID } from '@/types/shared';
import { uid } from '@/utils/uid';

export interface ToastConfig<T extends AnyToastNotification> {
  id?: ID;
  props: Partial<T['props']>;
  type: T['type'];
}

export interface ToastsManager {
  clear: () => void;
  dismiss: (id: ID) => void;
  push: <T extends AnyToastNotification>(params: ToastConfig<T>) => void;
  remove: (id: ID) => void;
}

export function useToastNotificationsManager(): ToastsManager {
  const pushToast = useEvent(toastNotificationPushed);
  const dismissToast = useEvent(toastNotificationDismissed);
  const removeToast = useEvent(toastNotificationRemoved);
  const clearToasts = useEvent(toastNotificationsCleared);

  const push = React.useCallback(
    <T extends AnyToastNotification>(toastNotification: ToastConfig<T>) => {
      const id = toastNotification.id || uid();

      pushToast({
        id,
        type: toastNotification.type,
        props: {
          ...toastNotification.props,
          visible: true,
          onClose: () => {
            dismissToast(id);
            toastNotification.props.onClose?.();
          },
          onHide: () => {
            dismissToast(id);
            toastNotification.props.onHide?.();
          },
          onRemove: () => {
            removeToast(id);
            toastNotification.props.onRemove?.();
          },
        },
      });
    },
    [dismissToast, pushToast, removeToast],
  );

  const dismiss = React.useCallback(
    (id: ID) => {
      dismissToast(id);
    },
    [dismissToast],
  );

  const remove = React.useCallback(
    (id: ID) => {
      removeToast(id);
    },
    [removeToast],
  );

  const clear = React.useCallback(() => {
    clearToasts();
  }, [clearToasts]);

  return useMemo(
    () => ({
      push,
      dismiss,
      remove,
      clear,
    }),
    [push, dismiss, remove, clear],
  );
}
