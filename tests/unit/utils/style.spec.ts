import { unref } from 'vue';
import { zIndex, nextZIndex } from '../../../src/utils/style';

describe('test utils/style.ts', () => {
  let zIndexValue: number;

  beforeEach(() => {
    zIndexValue = unref(zIndex);
  });

  afterEach(() => {
    zIndex.value = zIndexValue;
  });

  test('zIndex\'s initial value is 2000', () => {
    expect(unref(zIndex)).toBe(2000);
  });

  test('test nextZIndex, it can increases zIndex\'s value by 1', () => {
    expect(nextZIndex()).toBe(2001);
    expect(unref(zIndex)).toBe(2001);
  });
});
