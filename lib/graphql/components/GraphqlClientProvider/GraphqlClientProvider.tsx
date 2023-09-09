'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react';

import { initGraphql } from '../../init-graphql';

const GraphqlClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <ApolloNextAppProvider makeClient={initGraphql}>
    {children}
  </ApolloNextAppProvider>
);

export default GraphqlClientProvider;
