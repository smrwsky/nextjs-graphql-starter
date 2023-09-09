import React from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

const dateTimeFormatter = (date: string | number | Date) => {
  const now = new Date();
  const d = new Date(date);

  // 14 Feb. 2021
  if (now.getFullYear() !== d.getFullYear()) {
    return new Intl.DateTimeFormat([], {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(d);
  }

  // February 14
  if (
    now.getDate() - d.getDate() < 0 ||
    now.getDate() - d.getDate() > 1 ||
    now.getMonth() !== d.getMonth()
  ) {
    return new Intl.DateTimeFormat([], {
      day: 'numeric',
      month: 'long',
    }).format(d);
  }

  const df = now.getDate() - d.getDate() > 0 ? 'Yesterday' : 'Today';

  // Today, 14:40
  return `${df}, ${new Intl.DateTimeFormat([], {
    hour: 'numeric',
    minute: 'numeric',
  }).format(d)}`;
};

export function useDateTimeFormat(date: string | number | Date): string {
  const [output, setOutput] = React.useState('');

  useIsomorphicLayoutEffect(() => {
    setOutput(dateTimeFormatter(date));
  }, []);

  return output;
}
