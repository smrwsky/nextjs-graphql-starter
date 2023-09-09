import { atoms } from '@seed-ui/styles';
import NextLink from 'next/link';
import { getServerSession } from 'next-auth';
import React from 'react';

import { PageWithSidebar } from '@/components/PageWithSidebar';
import { GetPollDocument, GetPollQuery } from '@/features/poll';
import { AppHeader } from '@/layout/AppHeader';
import { MobileNavigation } from '@/layout/MobileNavigation';
import { getGraphqlSsrClient } from '@/lib/graphql';
import { RoutePath } from '@/lib/navigation';
import { Box, Button, Text } from '@/lib/seed-ui';
import { ApplicationError } from '@/utils/errors';

const RootPage = async () => {
  const session = await getServerSession();
  const client = getGraphqlSsrClient();

  const { data } = await client.query<GetPollQuery>({
    query: GetPollDocument,
    variables: {
      id: '1',
    },
  });

  if (!data.poll) {
    throw new ApplicationError();
  }

  return (
    <PageWithSidebar>
      <AppHeader session={session} />

      <PageWithSidebar.Main>
        <PageWithSidebar.Content>
          <Box px={{ mobile: 4, desktop: 0 }}>
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
              Welcome to Poll App!
            </Text>

            <Text
              className={atoms({
                mb: 12,
                mx: { mobile: 2, tablet: 0 },
              })}
            >
              This is a demo application that shows how to build a web
              application using Next.js, GraphQL, and Next Auth.
            </Text>

            <Button as={NextLink} href={RoutePath.POLL} size="lg">
              Getting Started
            </Button>
          </Box>
        </PageWithSidebar.Content>
      </PageWithSidebar.Main>

      <MobileNavigation session={session} />
    </PageWithSidebar>
  );
};

export default RootPage;
