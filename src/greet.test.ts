import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet trims whitespace', () => {
  expect(greet('  World  ')).toBe('Hello, World!');
});

test('greet trims leading whitespace', () => {
  expect(greet('  Alice')).toBe('Hello, Alice!');
});

test('greet trims trailing whitespace', () => {
  expect(greet('Bob  ')).toBe('Hello, Bob!');
});
