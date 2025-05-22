let array = [0, 0, 0, 10, 20, 30, 40, 50, 60];
let size = 7;
let start = 3;

const printForward = (array, size, start) => {
  console.log("Printing Forward");

  let k = start;
  for (let i = 0; i < size; i++) {
    console.log(array[k], "-------", k);
    k = (k + 1) % array.length;
  }
};

const printBackward = (array, size, start) => {
  console.log("Printing Backward");

  let k = start;
  for (let i = 0; i < size; i++) {
    console.log(array[k], "-------", k);
    k = k === 0 ? array.length - 1 : k - 1;
  }
};

const linerize = (array, size, start) => {
  console.log("Linerizing circular array");

  size = array.length;
  const newArray = [];
  let k = start;
  for (let i = 0; i < size; i++) {
    newArray.push(array[k]);
    k = (k + 1) % array.length;
  }
  return newArray;
};

printBackward(array, size, start);
printForward(array, size, start);
console.log(linerize(array, size, start));
