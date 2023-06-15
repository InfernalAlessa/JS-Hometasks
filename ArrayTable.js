const obj = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const prompt = require("prompt-sync")();
let r = prompt("Enter index of the row: ");
let c = prompt("Enter index of the column: ");

function getSumRow(r){
let SumRow = 0;
obj[r].forEach((item) => (SumRow += item));
return SumRow
}

function getSumColumn(arr, c) {
  let sumColumn = 0;
  arr.forEach((item) => (sumColumn += item[c]));
  return sumColumn;
}

console.log(`The summm in the selected column is ${getSumColumn(obj, c)}, the summ in the selected row is ${getSumRow(r)}`);
