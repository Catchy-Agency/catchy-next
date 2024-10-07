/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
) {
  let shouldWait = false;

  return (...args: Parameters<T>) => {
    if (shouldWait) return;
    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
