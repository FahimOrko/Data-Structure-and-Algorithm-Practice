let array = [10, 20, 30, 40, 50, 60];

const rightRotation = (array, times) => {
  for (let i = 0; i < times; i++) {
    let firstVal = array[array.length - 1];
    for (let j = array.length - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = firstVal;
  }
  return array;
};

console.log(rightRotation(array, 2), "- Right Rotation");
