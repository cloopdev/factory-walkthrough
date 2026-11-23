import { greet } from './greet';
import { status } from './status';

console.log(greet('World'));
console.log(JSON.stringify(status(), null, 2));
