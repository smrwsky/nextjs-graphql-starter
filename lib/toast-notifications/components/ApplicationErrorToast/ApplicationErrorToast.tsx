import { Text } from '@seed-ui/react';
import { memo } from 'react';

import { AUTO_HIDE_DURATION } from '../../const';

import { DateTimeFormat } from '@/lib/date-time-format';
import { Toast } from '@/lib/seed-ui';

export interface ApplicationErrorToastProps {
  dateAndTime?: Date;
  message: string;
  title: string;
  visible: boolean;
  onClose: () => void;
  onHide: () => void;
  onRemove: () => void;
}

const ApplicationErrorToast = memo(
  ({
    dateAndTime,
    message,
    title,
    visible,
    onClose,
    onHide,
    onRemove,
  }: ApplicationErrorToastProps) => (
    <Toast
      autoHideDuration={AUTO_HIDE_DURATION}
      variant="danger"
      visible={visible}
      onAfterHide={onRemove}
      onClose={onClose}
      onHide={onHide}
    >
      <Text as="div" fontWeight="semiBold" lineHeight="tight" mb={1}>
        {title}
      </Text>

      {message}

      {dateAndTime && (
        <Text
          as="div"
          color="neutral500"
          fontSize="sm"
          fontWeight="regular"
          letterSpacing="widest"
          lineHeight="snug"
          mt={1}
        >
          <DateTimeFormat date={dateAndTime} />
        </Text>
      )}
    </Toast>
  ),
);

ApplicationErrorToast.displayName = 'ApplicationErrorToast';

export default ApplicationErrorToast;
