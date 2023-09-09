import { useStore } from 'effector-react';

import { modals$, ModalsState } from '../store';

export function useModalsState(): ModalsState {
  return useStore(modals$);
}
