let arr1 = [5, 35, 25, 0, 55, 454];

let arr2 = [-3, -6, -9];

let arr3 = [0.6, 0.2, 7.6, 3.4, 666.88, 666.665];

let WholeArray = [arr1, arr2, arr3];

WholeArray.forEach((item) => {
  item.sort(function (a, b) {
    return a - b;
  });
});

console.log(WholeArray);
