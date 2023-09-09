import React from 'react';

import { useDateTimeFormat } from '@/lib/date-time-format';

export interface DateFormatProps {
  date: string | number | Date;
}

const DateTimeFormat = React.memo<DateFormatProps>(({ date }) => {
  const formattedDate = useDateTimeFormat(date);
  return <>{formattedDate}</>;
});

DateTimeFormat.displayName = 'DateTimeFormat';

export default DateTimeFormat;
