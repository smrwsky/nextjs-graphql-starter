import Link from 'next/link';
import React from 'react';

import { RoutePath } from '@/lib/navigation';
import { Button } from '@/lib/seed-ui';

const UnauthorizedUserMenu = React.memo(() => (
  <Button as={Link} href={RoutePath.SIGN_IN} variant="secondary">
    Login
  </Button>
));

UnauthorizedUserMenu.displayName = 'UnauthorizedUserMenu';

export default UnauthorizedUserMenu;
