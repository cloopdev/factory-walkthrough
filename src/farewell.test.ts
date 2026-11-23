import { expect, test } from 'bun:test';
import { farewell } from './farewell';

test('farewell', () => {
  expect(farewell('World')).toBe('Goodbye, World!');
});
