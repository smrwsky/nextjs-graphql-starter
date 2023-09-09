import { getServerSession } from 'next-auth';
import React from 'react';

import { PageWithSidebar } from '@/components/PageWithSidebar';
import { GetPollDocument, GetPollQuery, PollContent } from '@/features/poll';
import { AppHeader } from '@/layout/AppHeader';
import { MobileNavigation } from '@/layout/MobileNavigation';
import { getGraphqlSsrClient } from '@/lib/graphql';

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
    throw new Error("Couldn't load data");
  }

  return (
    <PageWithSidebar>
      <AppHeader session={session} />

      <PageWithSidebar.Main>
        <PageWithSidebar.Content>
          <PollContent poll={data.poll} session={session} />
        </PageWithSidebar.Content>
      </PageWithSidebar.Main>

      <MobileNavigation session={session} />
    </PageWithSidebar>
  );
};

export default RootPage;
