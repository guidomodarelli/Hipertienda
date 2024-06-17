export function roundedToRange(number: number, range: number): number {
  const integer = Math.floor(number);
  const decimal = number - integer;

  if (decimal < range / 2) {
    return 0;
  } else if (decimal < 1 - range / 2) {
    return range;
  }
  return 1;
}
