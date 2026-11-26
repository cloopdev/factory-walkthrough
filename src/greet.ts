export function greet(name: string): string {
  const trimmedName = name.trim();
  const displayName = trimmedName || 'friend';
  return `Hello, ${displayName}!`;
}
