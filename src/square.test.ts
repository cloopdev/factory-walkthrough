import { expect, test } from 'bun:test';
import { square } from './square';

test('square', () => {
  expect(square(2)).toBe(4);
  expect(square(-3)).toBe(9);
  expect(square(0)).toBe(0);
});
