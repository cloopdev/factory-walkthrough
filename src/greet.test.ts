import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing whitespace', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with only leading whitespace', () => {
  expect(greet('  Bob')).toBe('Hello, Bob!');
});

test('greet with only trailing whitespace', () => {
  expect(greet('Charlie  ')).toBe('Hello, Charlie!');
});

test('greet with whitespace-only input', () => {
  expect(greet('  ')).toBe('Hello, friend!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet preserves internal whitespace', () => {
  expect(greet('Mary Jane')).toBe('Hello, Mary Jane!');
});

test('greet preserves internal whitespace and trims edges', () => {
  expect(greet('  mary jane  ')).toBe('Hello, mary jane!');
});
