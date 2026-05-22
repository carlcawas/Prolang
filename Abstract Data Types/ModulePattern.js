// math.js — module file
const PI = Math.PI;

function circleArea(r)  { return PI * r * r; }
function circlePerim(r) { return 2 * PI * r; }
function _helper()      { /* private, not exported */ }

export { circleArea, circlePerim };
export default PI;

// main.js — consumer
import PI, { circleArea, circlePerim } from './math.js';

console.log(circleArea(5));  // 78.54...
console.log(circlePerim(5)); // 31.41...