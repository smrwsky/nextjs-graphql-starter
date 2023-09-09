import { atoms } from '@seed-ui/styles';
import Link from 'next/link';
import { Session } from 'next-auth';
import React from 'react';

import { AnswerCard } from '../AnswerCard';

import { RoutePath } from '@/lib/navigation';
import { Alert, Box, Icon, Text } from '@/lib/seed-ui';
import { Poll } from '@/types/graphql.generated';
import { Maybe } from '@/types/shared';

export interface PollContentProps {
  poll: Poll;
  session: Maybe<Session>;
}

const PollContent = React.memo<PollContentProps>(({ poll, session }) => (
  <Box px={{ mobile: 4, desktop: 0 }}>
    {!session && (
      <Alert
        className={atoms({
          my: 6,
        })}
        title="You are not signed in"
        variant="warning"
      >
        <Text fontSize="sm">You need to sign in to vote. </Text>

        <Text fontSize="sm">
          <Link href={RoutePath.SIGN_IN}>
            Sign in <Icon name="log-in" />
          </Link>
        </Text>
      </Alert>
    )}

    <Text
      className={atoms({
        my: 8,
        mx: { mobile: 2, tablet: 0 },
      })}
      fontSize="5xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
    >
      {poll.question}
    </Text>

    <Text
      className={atoms({
        mb: 4,
        mx: { mobile: 2, tablet: 0 },
      })}
      color="neutral500"
    >
      Total votes: {poll.totalVotes}
    </Text>

    <Box maxWidth="3xl" role="list">
      {poll.answers.map((answer) => (
        <AnswerCard key={answer.id} answer={answer} pollId={poll.id} />
      ))}
    </Box>
  </Box>
));

PollContent.displayName = 'PollContent';

export default PollContent;
