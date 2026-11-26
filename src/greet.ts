export function greet(name: string): string {
  const trimmedName = name.trim();
  if (!trimmedName) {
    return 'Hello, friend!';
  }
  return `Hello, ${trimmedName}!`;
}
