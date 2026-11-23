import { expect, test } from 'bun:test';
import { negate } from './negate';

test('negate', () => {
  expect(negate(5)).toBe(-5);
  expect(negate(-3)).toBe(3);
  expect(negate(0)).toBe(0);
});
