import { greet } from './greet.ts';

const samples = ['Ada', '  Ada  ', '', 'Grace Hopper'];
const escape = (s: string) => s.replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`);
const page = () => `<!doctype html><meta charset="utf-8"><title>Greeting preview</title>
<h1>Greeting preview</h1>
<ul>${samples.map(n => `<li><code>${escape(JSON.stringify(n))}</code> &rarr; ${escape(greet(n))}</li>`).join('')}</ul>`;

Bun.serve({
  hostname: process.env.HOST ?? '127.0.0.1',
  port: Number(process.env.PORT ?? 3000),
  fetch: () => new Response(page(), { headers: { 'Content-Type': 'text/html; charset=utf-8' } }),
});
