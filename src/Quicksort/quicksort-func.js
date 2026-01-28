const quicksortFunc = (array) => {
  if (array.length < 2) return array;
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  let less = [], greater = [];
  array.forEach((element, i) => {
    if (i === pivotIndex) return;
    (element < pivot ? less : greater).push(element);
  });
  return [...quicksortFunc(less), array[pivotIndex], ...quicksortFunc(greater)];
}

const array = [1, 5, 3, 6, 33, 54, 2];
console.log(quicksortFunc(array));
const array2 = [56, 4, 678, 10, 100, 0, 1, 3, -4, -65];
console.log(quicksortFunc(array2));

export default quicksortFunc;