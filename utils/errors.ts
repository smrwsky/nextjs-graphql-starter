import { ErrorCode, ResponseDetails } from '@/types/shared';

export interface ApplicationErrorConfig {
  code?: ErrorCode;
  message?: string;
  title?: string;
}

export class ApplicationError {
  static isApplicationError(err: unknown): err is ApplicationError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as ApplicationError).name === 'ApplicationError'
    );
  }

  readonly code: ErrorCode;

  readonly message: string;

  readonly name: string = 'ApplicationError';

  readonly title: string;

  constructor(data?: ApplicationErrorConfig) {
    this.code = data?.code || ErrorCode.INTERNAL_SERVER_ERROR;

    this.message =
      data?.message ||
      "We're working on fixing a problem. Please try again later.";

    this.title = data?.title || 'Something went wrong';

    Object.setPrototypeOf(this, Object.prototype);
  }
}

export interface AccessErrorConfig {
  message?: string;
  title?: string;
}

export class AccessError extends ApplicationError {
  static isAccessError(err: unknown): err is AccessError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as AccessError).name === 'AccessError'
    );
  }

  readonly code = ErrorCode.FORBIDDEN;

  readonly name = 'AccessError';

  constructor(data?: AccessErrorConfig) {
    super({
      message:
        data?.message || 'You do not have permissions to access this resource.',

      title: data?.title || 'Access denied',
    });
  }
}

export interface AuthenticationErrorConfig {
  message?: string;
  title?: string;
}

export class AuthenticationError extends ApplicationError {
  static isAuthenticationError(err: unknown): err is AuthenticationError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as AuthenticationError).name === 'AuthenticationError'
    );
  }

  readonly code = ErrorCode.UNAUTHENTICATED;

  readonly name = 'AuthenticationError';

  constructor(data?: AuthenticationErrorConfig) {
    super({
      message:
        data?.message ||
        'Try to refresh the page and fill in correct credentials.',

      title: data?.title || 'Authorization failed',
    });
  }
}

export interface NetworkErrorConfig {
  message?: string;
  title?: string;
}

export class NetworkError extends ApplicationError {
  static isNetworkError(err: unknown): err is NetworkError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as NetworkError).name === 'NetworkError'
    );
  }

  readonly code = ErrorCode.SERVICE_UNAVAILABLE;

  readonly name = 'NetworkError';

  constructor(data?: NetworkErrorConfig) {
    super({
      message: data?.message || "You're not connected to the internet",
      title: data?.title || 'No internet connection',
    });
  }
}

export interface ServerErrorConfig {
  message?: string;
  response: ResponseDetails;
  title?: string;
}

export class ServerError extends ApplicationError {
  static isServerError(err: unknown): err is ServerError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as ServerError).name === 'ServerError'
    );
  }

  readonly code: ErrorCode;

  readonly name = 'ServerError';

  readonly response: ResponseDetails;

  constructor(data: ServerErrorConfig) {
    super({
      title: data.title || data.response.statusText,

      message:
        data.message ||
        `Request failed with status code ${data.response.status}`,
    });

    this.response = data.response;

    this.code =
      (data.response.status === 401 && ErrorCode.UNAUTHENTICATED) ||
      (data.response.status === 403 && ErrorCode.FORBIDDEN) ||
      (data.response.status === 503 && ErrorCode.SERVICE_UNAVAILABLE) ||
      ErrorCode.INTERNAL_SERVER_ERROR;
  }

  get statusCode(): number {
    return this.response.status;
  }
}

export interface UserInputErrorPayloadValue {
  field: string;
  message: string;
}

export type UserInputErrorPayload = ReadonlyArray<UserInputErrorPayloadValue>;

export interface UserInputErrorData {
  message?: string;
  payload: UserInputErrorPayload;
  title?: string;
}

export class UserInputError extends ApplicationError {
  static isUserInputError(err: unknown): err is UserInputError {
    return (
      typeof err === 'object' &&
      err !== null &&
      (err as UserInputError).name === 'UserInputError'
    );
  }

  readonly code = ErrorCode.BAD_USER_INPUT;

  readonly name = 'UserInputError';

  readonly payload: UserInputErrorPayload;

  constructor(data: UserInputErrorData) {
    super({
      message:
        data?.message || 'Check that all fields are correct and try again',

      title: data?.title || 'Incorrect input',
    });

    this.payload = data.payload;
  }
}
