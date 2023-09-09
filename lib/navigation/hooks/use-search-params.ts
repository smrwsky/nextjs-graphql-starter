import * as Navigation from 'next/navigation';
import qs from 'query-string';

import { AnyRoute } from '@/lib/navigation';

export function useSearchParams<Route extends AnyRoute = AnyRoute>() {
  const searchParams = Navigation.useSearchParams();

  return qs.parse(searchParams.toString()) as NonNullable<
    Route['searchParams']
  >;
}
