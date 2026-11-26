import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing spaces', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with leading spaces only', () => {
  expect(greet('  Bob')).toBe('Hello, Bob!');
});

test('greet with trailing spaces only', () => {
  expect(greet('Charlie  ')).toBe('Hello, Charlie!');
});

test('greet with internal spaces preserved', () => {
  expect(greet('Mary Jane')).toBe('Hello, Mary Jane!');
});

test('greet with internal spaces and surrounding whitespace', () => {
  expect(greet('  Mary Jane  ')).toBe('Hello, Mary Jane!');
});

test('greet with tabs and newlines', () => {
  expect(greet('\t\n Diana \n\t')).toBe('Hello, Diana!');
});

test('greet with empty string returns friend', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with whitespace-only string returns friend', () => {
  expect(greet('   ')).toBe('Hello, friend!');
});

test('greet with tabs and newlines only returns friend', () => {
  expect(greet('\t\n\t')).toBe('Hello, friend!');
});

test('greet preserves case', () => {
  expect(greet('  aDa  ')).toBe('Hello, aDa!');
});
