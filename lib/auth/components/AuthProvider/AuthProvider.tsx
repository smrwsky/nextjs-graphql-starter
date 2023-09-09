'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthProvider;
