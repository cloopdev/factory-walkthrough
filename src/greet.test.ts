import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading whitespace', () => {
  expect(greet('  World')).toBe('Hello, World!');
});

test('greet with trailing whitespace', () => {
  expect(greet('World  ')).toBe('Hello, World!');
});

test('greet with both leading and trailing whitespace', () => {
  expect(greet('  World  ')).toBe('Hello, World!');
});
