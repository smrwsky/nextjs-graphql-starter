'use client';
import React from 'react';

import { ConfirmModal, useModalsState } from '@/lib/modals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MODAL_COMPONENTS: Record<string, React.FC<any>> = {
  ConfirmModal,
};

const ModalsList = React.memo(() => {
  const modals = useModalsState();

  return (
    <>
      {modals.map((modal) => {
        const Component = MODAL_COMPONENTS[modal.type];
        return <Component key={modal.type} {...modal.props} />;
      })}
    </>
  );
});

ModalsList.displayName = 'ModalsList';

export default ModalsList;
