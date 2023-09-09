export function cleanObj<T = unknown>(o: Partial<T>): T {
  return Object.entries(o).reduce(
    (acc, [key, val]) =>
      typeof val === 'undefined' ? acc : { ...acc, [key]: val },
    {} as T,
  );
}

export function wait(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
