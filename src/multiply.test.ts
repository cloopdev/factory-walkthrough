import { expect, test } from 'bun:test';
import { multiply } from './multiply';

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6);
});
