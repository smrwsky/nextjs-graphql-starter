import * as Navigation from 'next/navigation';

import { AnyRoute } from '@/lib/navigation';

export function usePathname<Route extends AnyRoute = AnyRoute>() {
  const pathname = Navigation.usePathname();
  return pathname as Route['pathname'];
}
