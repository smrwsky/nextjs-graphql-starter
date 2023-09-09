import React from 'react';

export function mergeRefs<T>(
  ...refs: Array<React.Ref<T> | React.MutableRefObject<T>>
) {
  return (node: T): void => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    }
  };
}
