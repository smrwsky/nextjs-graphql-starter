import urlcat from 'urlcat';

import { AnyRoute } from './types';

export function resolveHref(route: AnyRoute | string) {
  if (typeof route === 'string') {
    return route;
  }

  const { pathname, params, searchParams, hash } = route;

  let url = urlcat(pathname, {
    ...(params || {}),
    ...(searchParams || {}),
  });

  if (hash) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    url += `#${hash}`;
  }

  console.log(url);

  return url;
}
