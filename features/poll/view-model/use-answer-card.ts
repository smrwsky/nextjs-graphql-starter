import { useSession } from 'next-auth/react';
import React from 'react';

import { useAnswerPollMutation } from '@/features/poll';
import {
  HomeRoute,
  RoutePath,
  useNavigation,
  useSearchParams,
} from '@/lib/navigation';
import {
  ToastNotificationType,
  useToastNotificationsManager,
} from '@/lib/toast-notifications';
import { Answer } from '@/types/graphql.generated';
import { getApplicationError } from '@/utils/get-application-error';

export interface UseAnswerCardProps {
  answer: Answer;
  pollId: string;
}

export function useAnswerCard({ answer, pollId }: UseAnswerCardProps) {
  const { text, votes } = answer;
  const { status } = useSession();
  const { showPercentage } = useSearchParams<HomeRoute>();
  const navigation = useNavigation();
  const notifications = useToastNotificationsManager();
  const [mutate, { loading: isLoading }] = useAnswerPollMutation();
  const percentage = answer.percentage.toPrecision(2);
  const isDisabled = isLoading || showPercentage || status !== 'authenticated';

  const handleClick = React.useCallback(() => {
    void mutate({
      variables: {
        answerId: answer.id,
        pollId,
      },
    })
      .then(() => {
        navigation.push({
          pathname: RoutePath.POLL,
          searchParams: {
            showPercentage: true,
          },
        });
      })
      .catch((err: unknown) => {
        const error = getApplicationError(err);

        notifications.push({
          type: ToastNotificationType.APPLICATION_ERROR,
          props: {
            message: error.message,
            title: error.title,
          },
        });
      });
  }, [answer.id, mutate, navigation, notifications, pollId]);

  return {
    isDisabled,
    isLoading,
    percentage,
    showPercentage,
    text,
    votes,
    handleClick,
  };
}
