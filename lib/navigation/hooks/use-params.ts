import * as Navigation from 'next/navigation';

import { AnyRoute } from '../types';

export function useParams<Route extends AnyRoute = AnyRoute>() {
  const params = Navigation.useParams();
  return params as Route['params'];
}
