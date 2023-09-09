'use client';

import React from 'react';

import { RoutePath, useNavigation, usePathname } from '@/lib/navigation';
import { Menu, MenuItem } from '@/lib/seed-ui';

const AppNavigation = React.memo(() => {
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
    <Menu size="lg" type="horizontal">
      <MenuItem
        href={RoutePath.HOME}
        selected={pathname === RoutePath.HOME}
        onClick={handleMenuItemClick}
      >
        Home
      </MenuItem>

      <MenuItem
        href={RoutePath.POLL}
        selected={pathname === RoutePath.POLL}
        onClick={handleMenuItemClick}
      >
        Poll
      </MenuItem>
    </Menu>
  );
});

AppNavigation.displayName = 'AppNavigation';

export default AppNavigation;
