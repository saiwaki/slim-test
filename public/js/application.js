let foo = [1, 2, 3];
{
  let foo = [4, 5, 6];
  console.log(foo);
  // => 4, 5, 6
}
console.log(foo);