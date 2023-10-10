export const generateNumberRange = (from: number, to: number, isAsc: boolean): number[] => {
  const step = isAsc ? 1 : -1;
  const length = Math.abs(to - from) + 1;
  const res = new Array(length);

  for (let i = 0; i < length; i++) {
    res[i] = from + i * step;
  }

  return res;
}