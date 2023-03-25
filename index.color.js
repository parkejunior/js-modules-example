import { rgbToHex, hexToRgb } from "./lib/colorConverter.js";

let result

result = rgbToHex(255, 13, 92)

console.log(result)

// ------------------------------

result = hexToRgb('#ffa55c')

console.log(result)
console.log(result.g)