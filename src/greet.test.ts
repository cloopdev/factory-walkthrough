import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with default punctuation', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with custom punctuation', () => {
  expect(greet('World', '.')).toBe('Hello, World.');
});

test('greet with empty punctuation', () => {
  expect(greet('World', '')).toBe('Hello, World');
});
