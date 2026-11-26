export function greet(name: string): string {
  const trimmedName = name.trim();
  return trimmedName ? `Hello, ${trimmedName}!` : 'Hello, friend!';
}
