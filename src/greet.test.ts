import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing spaces', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with whitespace-only input', () => {
  expect(greet('  ')).toBe('Hello, friend!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with internal spaces preserved', () => {
  expect(greet('Mary Jane')).toBe('Hello, Mary Jane!');
});

test('greet with case preserved', () => {
  expect(greet('ALICE')).toBe('Hello, ALICE!');
});

test('greet with tabs and newlines', () => {
  expect(greet('\t\nBob\n\t')).toBe('Hello, Bob!');
});
