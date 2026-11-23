import { expect, test } from 'bun:test';
import { subtract } from './subtract';

test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(0, 0)).toBe(0);
  expect(subtract(-2, 3)).toBe(-5);
});
