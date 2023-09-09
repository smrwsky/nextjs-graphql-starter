import { EffectorNext } from '@effector/next';
import cn from 'classnames';
import { Metadata } from 'next';
import React, { FC } from 'react';

import { ModalsList } from '@/layout/ModalsList';
import { ToastNotificationsList } from '@/layout/TostNotificationsList';
import { AuthProvider } from '@/lib/auth';
import { GraphqlClientProvider } from '@/lib/graphql';
import { primaryFont, secondaryFont } from '@/styles/fonts';
import { theme } from '@/styles/theme.css';

import '@seed-ui/styles/css/styles.min.css';
import '@seed-ui/react/css/elements.min.css';

export const metadata: Metadata = {
  applicationName: 'Next.js Boilerplate',
  themeColor: '#056cf2',
  appleWebApp: {
    title: 'Next.js Boilerplate',
  },
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    template: 'Your Page Title | %s',
    default: 'Default Title',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html
    className={cn(primaryFont.variable, secondaryFont.variable, theme)}
    lang="en"
  >
    <body>
      <AuthProvider>
        <GraphqlClientProvider>
          <EffectorNext>
            {children}
            <ModalsList />
            <ToastNotificationsList />
          </EffectorNext>
        </GraphqlClientProvider>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
