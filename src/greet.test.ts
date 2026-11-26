import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading spaces', () => {
  expect(greet('  Ada')).toBe('Hello, Ada!');
});

test('greet with trailing spaces', () => {
  expect(greet('Ada  ')).toBe('Hello, Ada!');
});

test('greet with both leading and trailing spaces', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with internal spaces preserved', () => {
  expect(greet('  john doe  ')).toBe('Hello, john doe!');
});

test('greet with tabs at edges', () => {
  expect(greet('\tAda\t')).toBe('Hello, Ada!');
});

test('greet with newlines at edges', () => {
  expect(greet('\nAda\n')).toBe('Hello, Ada!');
});

test('greet with whitespace-only input', () => {
  expect(greet('   ')).toBe('Hello, friend!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with mixed whitespace at edges', () => {
  expect(greet(' \t\nAda\n\t ')).toBe('Hello, Ada!');
});
