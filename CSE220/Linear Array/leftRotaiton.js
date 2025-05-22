let array = [10, 20, 30, 40, 50, 60];

const leftRotation = (array, times) => {
  for (let i = 0; i < times; i++) {
    let lastVal = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = lastVal;
  }
  return array;
};

console.log(leftRotation(array, 2), "- Left Rotation");
