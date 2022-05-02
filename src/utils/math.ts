export function isNumber(num: any) {
  if (num == null) {
    return false;
  }

  switch (typeof num) {
    case 'string': return !isNaN(parseFloat(num));
    case 'number': return !isNaN(num);
    default: return false;
  }
}
