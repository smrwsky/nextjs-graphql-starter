import { Session } from 'next-auth';
import React from 'react';

import { AuthorizedUserMenu } from './AuthorizedUserMenu';
import { UnauthorizedUserMenu } from './UnauthorizedUserMenu';

import { Maybe } from '@/types/shared';

export interface UserMenuProps {
  session: Maybe<Session>;
}

const UserMenu = React.memo<UserMenuProps>(({ session }) =>
  session ? <AuthorizedUserMenu session={session} /> : <UnauthorizedUserMenu />,
);

UserMenu.displayName = 'UserMenu';

export default UserMenu;
