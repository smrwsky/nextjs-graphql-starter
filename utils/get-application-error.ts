import { ApolloError, ServerParseError } from '@apollo/client';

import { ApplicationError, NetworkError, ServerError } from '@/utils/errors';

export function getApplicationError(error: unknown) {
  // return error if it's already handled
  if (ApplicationError.isApplicationError(error)) {
    return error;
  }

  // handle Network Error with response
  if (
    error instanceof ApolloError &&
    error.networkError &&
    (error.networkError as ServerParseError).response
  ) {
    const message = error.networkError.message || error.message;

    const {
      status,
      statusText,
      url,
      headers: respHeaders,
    } = (error.networkError as ServerParseError).response;

    const headers = Object.fromEntries(respHeaders.entries());

    return new ServerError({
      message,
      response: {
        headers,
        status,
        statusText,
        url,
        data: null,
      },
    });
  }

  // handle Apollo Network Error without response
  if (error instanceof ApolloError && error.networkError) {
    return new NetworkError({
      message: error.networkError.message || error.message,
    });
  }

  // handle Graphql Errors
  if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
    const graphqlError = error.graphQLErrors[0];

    return new ApplicationError({
      message: graphqlError.message,
    });
  }

  // return ApplicationError if nothing is detected
  return new ApplicationError({
    message: (error as Error)?.message,
  });
}
