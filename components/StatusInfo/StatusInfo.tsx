import { atoms } from '@seed-ui/styles';
import React from 'react';

import { Box, Flex, Text } from '@/lib/seed-ui';

export interface StatusInfoProps {
  message: string;
  title?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
}

const StatusInfo: React.FC<StatusInfoProps> = ({
  message,
  title,
  variant = 'danger',
  children,
}) => (
  <Box maxWidth="2xl" my={12} px={2} width="full">
    {title && (
      <Text
        className={atoms({ mb: 1, textAlign: 'center' })}
        color={`${variant}600`}
        fontSize="xl"
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="tight"
      >
        {title}
      </Text>
    )}

    <Text
      className={atoms({
        maxWidth: 'full',
        maxHeight: 20,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      })}
      color="neutral500"
      textAlign="center"
    >
      {message}
    </Text>

    {children && (
      <Flex justifyContent="center" mt={6}>
        {children}
      </Flex>
    )}
  </Box>
);

export default StatusInfo;
