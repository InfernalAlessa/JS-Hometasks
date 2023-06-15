const obj = [
  arr1 = [1, 2, 3],
  arr2 = [4, 5, 6],
  arr3 = [7, 8, 9],
];

function getSumRow(row){
let SumRow = 0;
obj[row].forEach((item) => (SumRow += item));
return SumRow
}

function getSumColumn(arr, column) {
  let sumColumn = 0;
  arr.forEach((item) => (sumColumn += item[column]));
  return sumColumn;
}

console.log(`The summm in the selected column is ${getSumColumn(obj, 2)}, the summ in the selected row is ${getSumRow(0)}`);
