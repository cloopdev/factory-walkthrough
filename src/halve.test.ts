import { expect, test } from 'bun:test';
import { halve } from './halve';

test('halve', () => {
  expect(halve(4)).toBe(2);
  expect(halve(5)).toBe(2.5);
  expect(halve(0)).toBe(0);
  expect(halve(-6)).toBe(-3);
});
