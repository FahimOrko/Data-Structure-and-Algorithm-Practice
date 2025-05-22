let array = [10, 20, 30, 40, 50, 60];

const leftShift = (array, times) => {
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = 0;
  }
  return array;
};

console.log(leftShift(array, 2), "- Left Shift");
