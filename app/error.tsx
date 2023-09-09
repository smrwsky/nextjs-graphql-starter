'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import { PageWithSidebar } from '@/components/PageWithSidebar';
import { StatusInfo } from '@/components/StatusInfo';
import { AppHeader } from '@/layout/AppHeader';
import { MobileNavigation } from '@/layout/MobileNavigation';
import { getApplicationError } from '@/utils/get-application-error';

interface RootErrorProps {
  error: Error;
}

const RootError = React.memo<RootErrorProps>(({ error }) => {
  const session = useSession();

  const { title, message } = React.useMemo(
    () => getApplicationError(error),
    [error],
  );

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageWithSidebar>
      <AppHeader session={session.data} />
      <PageWithSidebar.Main>
        <PageWithSidebar.Content>
          <StatusInfo message={message} title={title} />
        </PageWithSidebar.Content>
      </PageWithSidebar.Main>
      <MobileNavigation session={session.data} />
    </PageWithSidebar>
  );
});

RootError.displayName = 'RootError';

export default RootError;
