import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading whitespace', () => {
  expect(greet('  Ada')).toBe('Hello, Ada!');
});

test('greet with trailing whitespace', () => {
  expect(greet('Ada  ')).toBe('Hello, Ada!');
});

test('greet with both leading and trailing whitespace', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with whitespace-only string', () => {
  expect(greet('   ')).toBe('Hello, friend!');
});

test('greet with mixed whitespace types', () => {
  expect(greet('\t Ada \n')).toBe('Hello, Ada!');
});

test('greet preserves internal spaces', () => {
  expect(greet('  Ada Lovelace  ')).toBe('Hello, Ada Lovelace!');
});

test('greet preserves case', () => {
  expect(greet('  ADA  ')).toBe('Hello, ADA!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});
