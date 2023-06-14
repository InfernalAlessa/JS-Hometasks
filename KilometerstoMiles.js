const prompt = require("prompt-sync")();
let k = prompt("Enter value in kilometers: ");
function KilometerstoMiles(k) {
  let m;
  m = k * 0.62137;
  return m;
}
console.log(`${k} kilometers is ${KilometerstoMiles(k)} miles`);