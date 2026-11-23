import { expect, test } from 'bun:test';
import { cube } from './cube';

test('cube', () => {
  expect(cube(2)).toBe(8);
  expect(cube(-3)).toBe(-27);
  expect(cube(0)).toBe(0);
});
