let array = [10, 20, 30, 40, 50, 60];

const leftShift = (array) => {
  for (let j = 0; j < array.length - 1; j++) {
    array[j] = array[j + 1];
  }
  array[array.length - 1] = 0;
  return array;
};

const remove = (array, idx) => {
  try {
    if (idx > array.length) {
      throw new Error("Index out of lenght");
    }
    for (let i = 0; i < array.length; i++) {
      if (i === idx) {
        let newArray = array.slice(i);
        newArray = leftShift(newArray);
        newArray = [
          ...array.slice(0, i),
          ...newArray.slice(0, newArray.length - 1),
        ];
        return newArray;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

console.log(remove(array, 7));
