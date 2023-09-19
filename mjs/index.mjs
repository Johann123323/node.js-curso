//.js -> por defecto utiliza CommoJS
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar CommonJS

import { sum,sub,mult } from './sum.mjs'

console.log(sum(5,5))
console.log(sub(5,5))
console.log(mult(5,5))