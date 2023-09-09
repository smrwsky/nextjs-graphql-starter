// This file is auto types by GraphQL Code Generator.
// Do not edit manually!
import * as Types from '../../types/graphql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AnswerPollMutationVariables = Types.Exact<{
  pollId: Types.Scalars['ID'];
  answerId: Types.Scalars['ID'];
}>;

export type AnswerPollMutation = {
  __typename?: 'Mutation';
  answerPoll?: {
    __typename?: 'Poll';
    id: string;
    question: string;
    totalVotes: number;
    answers: Array<{
      __typename?: 'Answer';
      id: string;
      text: string;
      votes: number;
      percentage: number;
    }>;
  } | null;
};

export type GetPollQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  delay?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetPollQuery = {
  __typename?: 'Query';
  poll?: {
    __typename?: 'Poll';
    id: string;
    question: string;
    totalVotes: number;
    answers: Array<{
      __typename?: 'Answer';
      id: string;
      text: string;
      votes: number;
      percentage: number;
    }>;
  } | null;
};

export const AnswerPollDocument = gql`
  mutation AnswerPoll($pollId: ID!, $answerId: ID!) {
    answerPoll(id: $pollId, answerId: $answerId) {
      id
      question
      totalVotes
      answers {
        id
        text
        votes
        percentage
      }
    }
  }
`;
export type AnswerPollMutationFn = Apollo.MutationFunction<
  AnswerPollMutation,
  AnswerPollMutationVariables
>;

/**
 * __useAnswerPollMutation__
 *
 * To run a mutation, you first call `useAnswerPollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerPollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerPollMutation, { data, loading, error }] = useAnswerPollMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      answerId: // value for 'answerId'
 *   },
 * });
 */
export function useAnswerPollMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AnswerPollMutation,
    AnswerPollMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AnswerPollMutation, AnswerPollMutationVariables>(
    AnswerPollDocument,
    options,
  );
}
export type AnswerPollMutationHookResult = ReturnType<
  typeof useAnswerPollMutation
>;
export type AnswerPollMutationResult =
  Apollo.MutationResult<AnswerPollMutation>;
export type AnswerPollMutationOptions = Apollo.BaseMutationOptions<
  AnswerPollMutation,
  AnswerPollMutationVariables
>;
export const GetPollDocument = gql`
  query GetPoll($id: ID!, $delay: Int = 0) {
    poll(id: $id) @delay(ms: $delay) {
      id
      question
      totalVotes
      answers {
        id
        text
        votes
        percentage
      }
    }
  }
`;

/**
 * __useGetPollQuery__
 *
 * To run a query within a React component, call `useGetPollQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPollQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPollQuery({
 *   variables: {
 *      id: // value for 'id'
 *      delay: // value for 'delay'
 *   },
 * });
 */
export function useGetPollQuery(
  baseOptions: Apollo.QueryHookOptions<GetPollQuery, GetPollQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPollQuery, GetPollQueryVariables>(
    GetPollDocument,
    options,
  );
}
export function useGetPollLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPollQuery,
    GetPollQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPollQuery, GetPollQueryVariables>(
    GetPollDocument,
    options,
  );
}
export type GetPollQueryHookResult = ReturnType<typeof useGetPollQuery>;
export type GetPollLazyQueryHookResult = ReturnType<typeof useGetPollLazyQuery>;
export type GetPollQueryResult = Apollo.QueryResult<
  GetPollQuery,
  GetPollQueryVariables
>;
