import { DefaultSession } from 'next-auth';

import { UserData } from './shared';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: UserData;
  }
}
