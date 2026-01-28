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

export default quicksortFunc;