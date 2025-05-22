let array = [10, 20, 30, 40, 50, 60];

const rightShift = (array, times) => {
  for (let i = 0; i < times; i++) {
    for (let j = array.length - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = 0;
  }
  return array;
};

console.log(rightShift(array, 2), "- Right Shift");
