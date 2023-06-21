let arr1 = [5, 35, 25, 0, 55, 454];

let arr2 = [-3, -6, -9];

let arr3 = [0.6, 0.2, 7.6, 3.4, 666.88, 666.665];

function ArraySort(arr) {
arr.sort(function (a, b) {
    return a - b;
  });

return arr;
}
console.log(` Integer array: ${ArraySort(arr1)}\n Negative array: ${ArraySort(arr2)}\n Decimal array: ${ArraySort(arr3)}`)