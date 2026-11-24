import { expect, test } from 'bun:test';
import { greet } from './greet';

test('greet with normal name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet with leading and trailing spaces', () => {
  expect(greet('  Ada  ')).toBe('Hello, Ada!');
});

test('greet with no extra spaces', () => {
  expect(greet('Ada')).toBe('Hello, Ada!');
});

test('greet with whitespace-only input', () => {
  expect(greet('  ')).toBe('Hello, friend!');
});

test('greet with empty string', () => {
  expect(greet('')).toBe('Hello, friend!');
});

test('greet with internal spaces', () => {
  expect(greet('Mary Jane')).toBe('Hello, Mary Jane!');
});

test('greet with internal spaces and surrounding whitespace', () => {
  expect(greet('  mary jane  ')).toBe('Hello, mary jane!');
});

test('greet with tabs and spaces', () => {
  expect(greet('\t Ada \t')).toBe('Hello, Ada!');
});

test('greet with newlines', () => {
  expect(greet('\n Ada \n')).toBe('Hello, Ada!');
});

test('greet with mixed whitespace', () => {
  expect(greet('  \t\n Ada \n\t  ')).toBe('Hello, Ada!');
});
