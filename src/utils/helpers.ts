export function callWithDelay(callback: () => void, delay: number): void {
  setTimeout(callback, delay)
}
