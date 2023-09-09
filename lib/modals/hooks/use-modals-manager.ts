import { useEvent } from 'effector-react';
import React from 'react';

import {
  modalHidden,
  modalRemoved,
  modalShown,
  ShowModalEvent,
} from '../store';
import { AnyModalContract, ModalType } from '../types';

export interface ModalManager {
  hide: (type: ModalType) => void;
  show: <T extends AnyModalContract>(params: ShowModalEvent<T>) => void;
  remove: (type: ModalType) => void;
}

export function useModalsManager(): ModalManager {
  const showModal = useEvent(modalShown);
  const hide = useEvent(modalHidden);
  const remove = useEvent(modalRemoved);

  const show = React.useCallback(
    <T extends AnyModalContract>({ type, props }: ShowModalEvent<T>) => {
      showModal({
        type,
        props: {
          ...props,
          onHide: () => {
            hide(type);
            props.onHide?.();
          },
          onRemove: () => {
            remove(type);
            props.onRemove?.();
          },
        },
      } as AnyModalContract);
    },
    [hide, remove, showModal],
  );

  return React.useMemo(
    () => ({
      hide,
      show,
      remove,
    }),
    [hide, remove, show],
  );
}
