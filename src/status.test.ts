import { expect, test } from 'bun:test';
import { status } from './status';

test('status', () => {
  const result = status();
  expect(result.status).toBe('ok');
  expect(result.service).toBe('factory-walkthrough');
  expect(result.version).toBe('0.1.0');
  expect(typeof result.uptime).toBe('number');
  expect(result.uptime).toBeGreaterThanOrEqual(0);
});
