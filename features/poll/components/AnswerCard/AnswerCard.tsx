'use client';

import { atoms } from '@seed-ui/styles';
import React from 'react';

import { useAnswerCard } from '../../view-model/use-answer-card';

import { Box, Icon, Text } from '@/lib/seed-ui';
import { Answer } from '@/types/graphql.generated';

export interface AnswerCardProps {
  answer: Answer;
  pollId: string;
}

const AnswerCard = React.memo<AnswerCardProps>(({ answer, pollId }) => {
  const {
    isDisabled,
    isLoading,
    percentage,
    showPercentage,
    text,
    votes,
    handleClick,
  } = useAnswerCard({
    answer,
    pollId,
  });

  return (
    <Box mb={4} role="listitem">
      <button
        className={atoms({
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          width: 'full',
          borderRadius: 'lg',
          border: 'none',
          textAlign: 'left',
          px: 4,
          py: 3,
          overflow: 'hidden',
          bg: {
            default: 'primary50',
            hover: 'primary100',
            disabled: 'primary50',
          },
          transition: 'base',
          cursor: { default: 'pointer', disabled: 'not-allowed' },
          opacity: 1,
        })}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {showPercentage && (
          <div
            className={atoms({
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              bg: 'primary200',
            })}
            style={{ width: `${percentage}%` }}
          />
        )}

        <Text
          className={atoms({
            flex: 1,
            position: 'relative',
            zIndex: 10,
          })}
          color="neutral900"
          fontSize="sm"
        >
          {text}
        </Text>

        {isLoading && (
          <Icon
            animation="spin"
            className={atoms({
              ml: 2,
            })}
            color="primary500"
            fontSize="sm"
            name="loader-alt"
          />
        )}

        {!isLoading && showPercentage && (
          <Text color="neutral900" fontSize="sm" fontWeight="semiBold" ml={2}>
            <Text
              as="span"
              color="neutral500"
              fontSize="xs"
              fontWeight="regular"
              letterSpacing="widest"
              lineHeight="snug"
              mr={2}
            >
              {votes} Votes
            </Text>
            {percentage}%
          </Text>
        )}
      </button>
    </Box>
  );
});

AnswerCard.displayName = 'AnswerCard';

export default AnswerCard;
