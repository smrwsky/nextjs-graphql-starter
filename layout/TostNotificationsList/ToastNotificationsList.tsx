'use client';

import { atoms } from '@seed-ui/styles';
import React from 'react';

import { ToastContainer } from '@/lib/seed-ui';
import {
  ApplicationErrorToast,
  ToastNotificationType,
  useToastNotificationsState,
} from '@/lib/toast-notifications';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NOTIFICATION_COMPONENTS: Record<string, React.FC<any>> = {
  [ToastNotificationType.APPLICATION_ERROR]: ApplicationErrorToast,
};

const ToastNotificationsList = React.memo(() => {
  const toastNotifications = useToastNotificationsState();

  return (
    <ToastContainer
      className={atoms({
        pt: 14,
        px: 4,
        pb: 4,
      })}
    >
      {toastNotifications.map(({ id, props, type }) => {
        const Component = NOTIFICATION_COMPONENTS[type];
        return <Component key={id} {...props} />;
      })}
    </ToastContainer>
  );
});

ToastNotificationsList.displayName = 'ToastNotificationsList';

export default ToastNotificationsList;
