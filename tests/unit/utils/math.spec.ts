import { isNumber } from '../../../src/utils/math';

describe('test utils/math.ts', () => {
  describe('test isNumber', () => {
    test('when argument is null or undefined', () => {
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
    });

    test('when argument is not string or number', () => {
      expect(isNumber(Symbol())).toBe(false);
    });

    test('when argument is NaN', () => {
      expect(isNumber(NaN)).toBe(false);
    });

    test('when argument is blank string', () => {
      expect(isNumber('')).toBe(false);
    });

    test('when argument is not a string containing only numbers', () => {
      expect(isNumber('a')).toBe(false);
    });

    test('when argument is a string containing only numbers', () => {
      expect(isNumber('0')).toBe(true);
      expect(isNumber('1')).toBe(true);
    });

    test('when argument is number', () => {
      expect(isNumber(0)).toBe(true);
      expect(isNumber(1)).toBe(true);
    });
  });
});
