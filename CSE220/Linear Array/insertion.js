let array = [10, 20, 30, 40, 50, 60, 0];

const rightShift = (array) => {
  for (let j = array.length - 1; j > 0; j--) {
    array[j] = array[j - 1];
  }
  array[0] = 0;

  return array;
};

const insertion = (array, idx, item, size) => {
  try {
    if (array.length === size) {
      throw new Error("Array has no space left");
    }
    for (let i = 0; i < idx + 1; i++) {
      if (idx === i) {
        let newArray = array.slice(idx);
        newArray = rightShift(newArray);
        array[i] = item;
        array = array.slice(0, idx + 1);
        newArray = [...array, ...newArray.slice(1)];
        return newArray;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

console.log(insertion(array, 4, 100, 7));
