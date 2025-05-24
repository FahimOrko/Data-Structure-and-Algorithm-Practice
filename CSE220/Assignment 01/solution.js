// --------------------------------------

const leftShift = (array, times) => {
  array = array.slice();
  for (let j = 0; j < times; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array[array.length - 1] = 0;
  }
  return array;
};

// --------------------------------------

const rotateLeft = (array, times) => {
  array = array.slice();
  for (let j = 0; j < times; j++) {
    let firstVal = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array[array.length - 1] = firstVal;
  }
  return array;
};

// --------------------------------------

const removeElement = (array, idx) => {
  array = array.slice();
  for (let i = 0; i < array.length; i++) {
    if (idx === i) {
      array = [...array.slice(0, i), ...leftShift(array.slice(i), 1)];
      return array;
    }
  }
};

// --------------------------------------

const removeAlloCcurence = (array, item) => {
  array = array.slice();

  let i = 0;

  while (i < array.length) {
    if (array[i] === item) {
      array = [...array.slice(0, i), ...leftShift(array.slice(i), 1)];
    } else {
      i++;
    }
  }

  return array;
};

// --------------------------------------

const arraySplitting = (array) => {
  array = array.slice();

  let firstArray = [];
  let secondArray = [];
  const sumOfFirstArray = () => firstArray.reduce((a, b) => a + b, 0);
  const sumOfSecondArray = () => secondArray.reduce((a, b) => a + b, 0);
  let i = 1;

  while (i < array.length) {
    firstArray = array.slice(0, i);
    secondArray = array.slice(i);

    if (sumOfFirstArray() === sumOfSecondArray()) return true;

    i++;
  }

  return false;
};

// --------------------------------------

const arraySeries = (n) => {
  let array = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 >= n - j) {
        array.push(n - j);
      } else {
        array.push(0);
      }
    }
  }

  return array;
};

// --------------------------------------

const maxBrunch = (array) => {
  let maxCount = 0;
  let currCount = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      currCount++;
      if (currCount >= maxCount) {
        maxCount = currCount;
      }
    } else {
      currCount = 1;
    }
  }

  return maxCount;
};

// --------------------------------------

const repetition = (array) => {
  const object = {};
  const counter = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      object[array[i]] = 1;
    } else if (object[array[i]]) {
      object[array[i]]++;
    } else {
      object[array[i]] = 1;
    }
  }

  for (let key in object) {
    if (object[key] > 1) counter.push(object[key]);
  }

  counter.sort((a, b) => a - b);

  for (let i = 1; i < counter.length; i++) {
    if (counter[i] === counter[i - 1]) {
      return true;
    }
  }

  return false;
};

// --------------------------------------

// console.log("Arrays -");
const array = [10, 20, 30, 40, 50, 60];
const secondArray = [10, 20, 2, 2, 30, 2, 2, 2, 40, 50, 2, 60];
const array1 = [1, 1, 1, 2, 1];
const array2 = [2, 1, 1, 2, 1];
const array3 = [10, 3, 1, 2, 10];
const array4 = [4, 5, 6, 6, 4, 3, 6, 4];
const array5 = [3, 4, 6, 3, 4, 7, 4, 6, 8, 6, 6];
const array6 = [1, 2, 2, 3, 4, 4, 4];
const array7 = [1, 1, 2, 2, 1, 1, 1, 1];
const array8 = [1, 1, 2, 2, 2, 1, 1];
console.log("--------------------------------------");
console.log("1. Left Shift -", leftShift(array, 3));
console.log("--------------------------------------");
console.log("2. Rotate left -", rotateLeft(array, 3));
console.log("--------------------------------------");
console.log("3. Removed Element -", removeElement(array, 3));
console.log("--------------------------------------");
console.log("4. Removed all occurence -", removeAlloCcurence(secondArray, 2));
console.log("--------------------------------------");
console.log("5. Array Splliting -", arraySplitting(array1));
console.log("5. Array Splliting -", arraySplitting(array2));
console.log("5. Array Splliting -", arraySplitting(array3));
console.log("--------------------------------------");
console.log("6. Array Series -", arraySeries(4));
console.log("--------------------------------------");
console.log("7. Max Brunch -", maxBrunch(array6));
console.log("7. Max Brunch -", maxBrunch(array7));
console.log("7. Max Brunch -", maxBrunch(array8));
console.log("--------------------------------------");
console.log("8. Repetition -", repetition(array4));
console.log("8. Repetition -", repetition(array5));
console.log("--------------------------------------");
