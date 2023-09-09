'use client';

import { Avatar } from '@seed-ui/react';
import NextImage from 'next/image';
import { Session } from 'next-auth';
import React from 'react';

import { PageWithSidebar } from '@/components/PageWithSidebar';
import { RoutePath, useNavigation, usePathname } from '@/lib/navigation';
import { Icon, Menu, MenuItem } from '@/lib/seed-ui';
import { Maybe } from '@/types/shared';

export interface MobileNavigationProps {
  session: Maybe<Session>;
}

const MobileNavigation = React.memo<MobileNavigationProps>(({ session }) => {
  const pathname = usePathname();
  const { push } = useNavigation();

  const handleMenuItemClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { href } = e.currentTarget;

      if (href) {
        push(href);
      }
    },
    [push],
  );

  return (
    <PageWithSidebar.MobileNavigation>
      <Menu collapsed type="horizontal" variant="secondary">
        <MenuItem
          href={RoutePath.HOME}
          icon={<Icon name="home" />}
          selected={pathname === RoutePath.HOME}
          onClick={handleMenuItemClick}
        >
          Home
        </MenuItem>

        <MenuItem
          href={RoutePath.POLL}
          icon={<Icon name="poll" />}
          selected={pathname === RoutePath.POLL}
          onClick={handleMenuItemClick}
        >
          Poll
        </MenuItem>

        {session ? (
          <MenuItem
            href={RoutePath.SIGN_OUT}
            icon={
              <Avatar placeholder={session.user.name} size="sm">
                <NextImage
                  alt={session.user.name}
                  height={24}
                  src={session.user.image}
                  width={24}
                />
              </Avatar>
            }
            onClick={handleMenuItemClick}
          >
            {session.user.name}
          </MenuItem>
        ) : (
          <MenuItem
            href={RoutePath.SIGN_IN}
            icon={<Icon name="log-in" />}
            onClick={handleMenuItemClick}
          >
            Login
          </MenuItem>
        )}
      </Menu>
    </PageWithSidebar.MobileNavigation>
  );
});

MobileNavigation.displayName = 'MobileNavigation';

export default MobileNavigation;
