/* Pathnames */

export enum RoutePath {
  HOME = '/',
  POLL = '/poll',
  SIGN_IN = '/api/auth/signin',
  SIGN_OUT = '/api/auth/signout',
}

export type SearchParamsValue = string | number | boolean | null;

export type SearchParamsBase = Record<
  string,
  SearchParamsValue | SearchParamsValue[] | undefined
>;

export interface ParamsBase {
  [key: string]: string | string[];
}

export interface Route<
  Path extends RoutePath,
  SearchParams extends SearchParamsBase | undefined = undefined,
  Hash extends string | undefined = undefined,
> {
  pathname: Path;
  params?: Record<string, never>;
  searchParams?: SearchParams;
  hash?: Hash;
}

export interface RouteWithParams<
  Path extends RoutePath,
  Params extends ParamsBase,
  SearchParams extends SearchParamsBase | undefined = undefined,
  Hash extends string | undefined = undefined,
> {
  pathname: Path;
  params: Params;
  searchParams?: SearchParams;
  hash?: Hash;
}

/* Routes */

export type HomeRoute = Route<RoutePath.HOME>;

interface PollSearchParams extends SearchParamsBase {
  showPercentage?: boolean;
}

export type PollRoute = Route<RoutePath.POLL, PollSearchParams>;

interface SignInSearchParams extends SearchParamsBase {
  redirect_uri?: string;
}

export type SignInRoute = Route<RoutePath.SIGN_IN, SignInSearchParams>;

export type SignOutRoute = Route<RoutePath.SIGN_OUT>;

// Any Route
export type AnyRoute = HomeRoute | PollRoute | SignInRoute | SignOutRoute;
