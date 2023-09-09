export type Maybe<T> = T | null | undefined;

export type ArrayElement<T extends readonly unknown[]> =
  T extends readonly (infer ElementType)[] ? ElementType : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type ID = string;

export enum ErrorCode {
  BAD_USER_INPUT = 'BAD_USER_INPUT',
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
}

export type RequestHeaders = Record<string, string>;

export interface ResponseDetails<T = unknown> {
  data: T;
  headers: RequestHeaders;
  status: number;
  statusText: string;
  url: string;
}

export interface UserData {
  name: string;
  email: string;
  image: string;
}
