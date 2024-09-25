// Arrays

// const array = new Array();

// const array = [];
// BAD PRACTICE, I am modyfying the object
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

const array = [1, 2, 3, 4];
// BAD!
// let array2 = array;
let array2 = [...array, 5];

const array3 = array2.map((number) => {
  return number / 2;
});

console.log(array);
console.log(array2);
console.log(array3);
