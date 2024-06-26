export const range = (from: number, to: number) =>
  new Array(to - from).fill(0).map((_, i) => i + from)