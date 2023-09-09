import { atoms } from '@seed-ui/styles';
import React from 'react';

import {
  Flex,
  Box,
  Button,
  IconButton,
  Modal,
  Text,
  Icon,
} from '@/lib/seed-ui';

export interface ConfirmModalProps {
  cancelLabel?: string;
  closeLabel?: string;
  confirmLabel?: string;
  description: string;
  title?: string;
  variant?: 'primary' | 'danger' | 'warning' | 'success';
  visible: boolean;
  onConfirm: () => void;
  onHide: () => void;
  onRemove?: () => void;
}

const ConfirmModal = React.memo<ConfirmModalProps>(
  ({
    cancelLabel = 'Cancel',
    closeLabel = 'Close',
    confirmLabel = 'Confirm',
    description,
    title = 'Confirm action',
    variant,
    visible,
    onConfirm,
    onHide,
    onRemove,
  }) => {
    const handleConfirm = React.useCallback(() => {
      onConfirm();
      onHide();
    }, [onConfirm, onHide]);

    return (
      <Modal open={visible} onAfterClose={onRemove} onClose={onHide}>
        <Modal.Header>
          <Flex alignItems="baseline" mx="-1">
            <Box flex={1} px={1}>
              <Text
                as="h1"
                fontSize="xl"
                fontWeight="bold"
                letterSpacing="tight"
                lineHeight="tight"
              >
                {title}
              </Text>
            </Box>

            <Box px={1}>
              <IconButton
                title={closeLabel}
                variant="tertiary"
                onClick={onHide}
              >
                <Icon name="x" />
              </IconButton>
            </Box>
          </Flex>
        </Modal.Header>

        <Modal.Body>
          <Text className={atoms({ height: 12 })}>{description}</Text>
        </Modal.Body>

        <Modal.Footer>
          <Flex flexWrap="wrap" justifyContent="space-between" mx="-1">
            <Box px={1}>
              <Button variant={variant} onClick={handleConfirm}>
                {confirmLabel}
              </Button>
            </Box>

            <Box px={1}>
              <Button variant="tertiary-overlay" onClick={onHide}>
                {cancelLabel}
              </Button>
            </Box>
          </Flex>
        </Modal.Footer>
      </Modal>
    );
  },
);

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
