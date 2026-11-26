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

test('greet with leading and trailing whitespace', () => {
  expect(greet('  World  ')).toBe('Hello, World!');
});

test('greet with tabs', () => {
  expect(greet('\tWorld\t')).toBe('Hello, World!');
});

test('greet with newlines', () => {
  expect(greet('\nWorld\n')).toBe('Hello, World!');
});

test('greet with mixed whitespace', () => {
  expect(greet(' \t\nWorld\n\t ')).toBe('Hello, World!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with whitespace-only string', () => {
  expect(greet('   ')).toBe('Hello, friend!');
});

test('greet with tabs only', () => {
  expect(greet('\t\t\t')).toBe('Hello, friend!');
});

test('greet with newlines only', () => {
  expect(greet('\n\n\n')).toBe('Hello, friend!');
});

test('greet with mixed whitespace only', () => {
  expect(greet(' \t\n \t\n ')).toBe('Hello, friend!');
});

test('greet preserves internal spaces', () => {
  expect(greet('  John Doe  ')).toBe('Hello, John Doe!');
});

test('greet preserves case', () => {
  expect(greet('  jOhN dOe  ')).toBe('Hello, jOhN dOe!');
});
