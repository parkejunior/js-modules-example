import batata from './lib/clock.js';

// for testing time
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

await delay(3000)

console.log(batata())