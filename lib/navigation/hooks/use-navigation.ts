import { useRouter } from 'next/navigation';
import React from 'react';

import { resolveHref } from '../resolve-href';
import { AnyRoute } from '../types';

export interface NavigateOptions {
  scroll?: boolean;
}

export declare enum PrefetchKind {
  AUTO = 'auto',
  FULL = 'full',
  TEMPORARY = 'temporary',
}

export interface PrefetchOptions {
  kind: PrefetchKind;
}

export function useNavigation() {
  const router = useRouter();

  const prefetch = React.useCallback(
    (route: AnyRoute | string, options?: PrefetchOptions) => {
      router.prefetch(resolveHref(route), options);
    },
    [router],
  );

  const push = React.useCallback(
    (route: AnyRoute | string, options?: NavigateOptions) => {
      router.push(resolveHref(route), options);
    },
    [router],
  );

  const replace = React.useCallback(
    (route: AnyRoute | string, options?: NavigateOptions) => {
      router.replace(resolveHref(route), options);
    },
    [router],
  );

  const back = React.useCallback(() => {
    router.back();
  }, [router]);

  const forward = React.useCallback(() => {
    router.forward();
  }, [router]);

  const refresh = React.useCallback(() => {
    router.refresh();
  }, [router]);

  return React.useMemo(
    () => ({
      back,
      forward,
      prefetch,
      push,
      replace,
      refresh,
    }),
    [back, forward, prefetch, push, refresh, replace],
  );
}
