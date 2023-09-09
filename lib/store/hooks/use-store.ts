import { Scope } from 'effector/effector.cjs';
import { useMemo } from 'react';

import { GlobalState, initStore } from '../init-store';

export function useStore(initialData: GlobalState = {}): Scope {
  return useMemo(() => initStore(initialData), [initialData]);
}
