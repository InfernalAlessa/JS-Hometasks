function testArray(a, b) 
{
 let y = a.reverse();
 let u = b.reverse();
 let x = [y, u];
 x.reverse();
 return x;
}
console.log(testArray([10, 9, 8, 7], [6, 5, 4, 3, 2, 1]))