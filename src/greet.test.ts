import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
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

test('greet with internal spaces preserved', () => {
  expect(greet('  John Doe  ')).toBe('Hello, John Doe!');
});

test('greet with tabs', () => {
  expect(greet('\tWorld\t')).toBe('Hello, World!');
});

test('greet with newlines', () => {
  expect(greet('\nWorld\n')).toBe('Hello, World!');
});

test('greet with mixed whitespace types', () => {
  expect(greet(' \t\nWorld \n\t ')).toBe('Hello, World!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, !');
});

test('greet with whitespace-only string', () => {
  expect(greet('   ')).toBe('Hello, !');
});

test('greet with single character with whitespace', () => {
  expect(greet('  X  ')).toBe('Hello, X!');
});
