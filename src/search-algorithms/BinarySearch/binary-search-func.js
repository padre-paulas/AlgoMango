const binarySearchFunc = (array, target) => {
  console.log("working")
  console.log(array);
  
  let left = 0;
  let right = array.length - 1;
  let pivot, pivotIndex;
  while (left < right) {
    pivotIndex = Math.floor((left + right) / 2);
    pivot = array[pivotIndex];

    if (pivot === target) {
      console.log(pivot + " " + pivotIndex)
      return pivotIndex; 
    }
    if (pivot > target) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }
  console.log("unsuccessful")
  return -1;
}

export default binarySearchFunc;