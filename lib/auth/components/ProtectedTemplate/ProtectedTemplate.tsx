'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export interface ProtectedTemplateProps {
  LoadingComponent?: React.ComponentType;
  UnauthenticatedComponent?: React.ComponentType;
  children?: React.ReactNode;
}

const ProtectedTemplate: React.FC<ProtectedTemplateProps> = ({
  children,
  LoadingComponent,
  UnauthenticatedComponent,
}) => {
  const { status } = useSession();

  if (status === 'loading' && typeof LoadingComponent !== 'undefined') {
    return <LoadingComponent />;
  }

  if (status === 'unauthenticated') {
    return UnauthenticatedComponent ? <UnauthenticatedComponent /> : null;
  }

  return <>{children}</>;
};

ProtectedTemplate.displayName = 'ProtectedTemplate';

export default ProtectedTemplate;
