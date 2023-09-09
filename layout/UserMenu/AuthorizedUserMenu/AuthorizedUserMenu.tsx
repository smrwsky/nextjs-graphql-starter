'use client';

import NextImage from 'next/image';
import { Session } from 'next-auth';
import React from 'react';

import { RoutePath, useNavigation } from '@/lib/navigation';
import { Avatar, IconButton, MenuItem, PopupMenu } from '@/lib/seed-ui';

export interface AuthorizedUserMenuProps {
  session: Session;
}

const AuthorizedUserMenu = React.memo<AuthorizedUserMenuProps>(
  ({ session }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { push } = useNavigation();

    const handleMenuItemClick = React.useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => push(e.currentTarget.href),
      [push],
    );

    return (
      <>
        <IconButton
          ref={setAnchorEl}
          avatar
          title={`${session.user.name} (${session.user.email})`}
        >
          <Avatar placeholder={session.user.name}>
            <NextImage
              alt={session.user.name}
              height={32}
              src={session.user.image}
              width={32}
            />
          </Avatar>
        </IconButton>

        <PopupMenu anchorElement={anchorEl}>
          <MenuItem href={RoutePath.SIGN_OUT} onClick={handleMenuItemClick}>
            Sign Out
          </MenuItem>
        </PopupMenu>
      </>
    );
  },
);

AuthorizedUserMenu.displayName = 'AuthorizedUserMenu';

export default AuthorizedUserMenu;
