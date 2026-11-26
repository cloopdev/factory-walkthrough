import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing whitespace', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with tabs and newlines', () => {
  expect(greet('\t\nAda\n\t')).toBe('Hello, Ada!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with whitespace-only string', () => {
  expect(greet('   ')).toBe('Hello, friend!');
});

test('greet with internal spaces preserved', () => {
  expect(greet('  Ada  Bob  ')).toBe('Hello, Ada  Bob!');
});

test('greet with case preserved', () => {
  expect(greet('  aDa  ')).toBe('Hello, aDa!');
});
