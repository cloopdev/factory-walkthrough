import { expect, test } from 'bun:test';
import { version } from './version';

test('version', () => {
  expect(version()).toBe('1.0.0');
});
