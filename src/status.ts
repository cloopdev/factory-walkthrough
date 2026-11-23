const startedAt = Date.now();

export function status(): {
  status: 'ok';
  service: string;
  version: string;
  uptime: number;
} {
  return {
    status: 'ok',
    service: 'factory-walkthrough',
    version: '0.1.0',
    uptime: Date.now() - startedAt,
  };
}
