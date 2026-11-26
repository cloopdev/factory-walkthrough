import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing spaces', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with no spaces', () => {
  expect(greet('Ada')).toBe('Hello, Ada!');
});

test('greet with whitespace-only string', () => {
  expect(greet('  ')).toBe('Hello, friend!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet preserves internal spaces', () => {
  expect(greet('Ada  Grace')).toBe('Hello, Ada  Grace!');
});

test('greet with tabs and newlines at edges', () => {
  expect(greet('\t\nAda\n\t')).toBe('Hello, Ada!');
});

test('greet preserves case', () => {
  expect(greet('  ADA  ')).toBe('Hello, ADA!');
});
