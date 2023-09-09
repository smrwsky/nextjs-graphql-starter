import { atoms } from '@seed-ui/styles';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Session } from 'next-auth';
import React from 'react';

import { UserMenu } from '../UserMenu';

import logo from '@/assets/images/logo.svg';
import { PageWithSidebar } from '@/components/PageWithSidebar';
import { AppNavigation } from '@/layout/AppNavigation';
import { AuthProvider } from '@/lib/auth';
import { RoutePath } from '@/lib/navigation';
import { Box, Flex } from '@/lib/seed-ui';
import { Maybe } from '@/types/shared';

export interface AppHeaderProps {
  session: Maybe<Session>;
}

const AppHeader = React.memo<AppHeaderProps>(({ session }) => (
  <AuthProvider>
    <PageWithSidebar.Header>
      <Flex alignItems="center" flexWrap="wrap" mx="-2">
        <Box lineHeight="none" px={2}>
          <NextLink
            className={atoms({ display: 'block' })}
            href={RoutePath.HOME}
          >
            <NextImage
              alt="Next.js Boilerplate"
              height={20}
              src={logo}
              width={98}
            />
          </NextLink>
        </Box>

        <Box
          display={{ mobile: 'none', desktop: 'block' }}
          flex={1}
          lineHeight="none"
          px={2}
        >
          <AppNavigation />
        </Box>

        <Box
          display={{ mobile: 'none', desktop: 'block' }}
          flex="none"
          lineHeight="none"
          px={2}
        >
          <UserMenu session={session} />
        </Box>
      </Flex>
    </PageWithSidebar.Header>
  </AuthProvider>
));

AppHeader.displayName = 'AppHeader';

export default AppHeader;
