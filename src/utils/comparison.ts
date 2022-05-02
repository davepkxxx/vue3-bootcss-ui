export function isOrContain(arr: any, item: any) {
  return arr === item || (Array.isArray(arr) ? arr.includes(item) : false);
}
