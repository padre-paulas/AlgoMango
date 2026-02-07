const binarySearchFunc = async (array, target, barRefs, timePerOperation) => {
  console.log("working")
  console.log(array);
  
  let left = 0;
  let right = array.length - 1;
  let pivotIndex;
  while (left <= right) {
    pivotIndex = Math.floor((left + right) / 2);
    // pivot = array[pivotIndex];
    console.log("pivotIndex: " + pivotIndex + " target: " + target);
    console.log("pivotIndex: " + typeof(pivotIndex) + " target: " + typeof(target));
    

    await colorArrayBars(left, right, barRefs, true);
    await sleep(timePerOperation);
    barRefs.current[pivotIndex].style.background = 'var(--color-vibrant-coral)';
    await sleep(timePerOperation);
    await colorArrayBars(left, right, barRefs, false);
    
    if (pivotIndex === target) {
      console.log(pivotIndex)
      barRefs.current[pivotIndex].style.background = 'var(--color-midnight-violet)';
      return pivotIndex; 
    }
    if (pivotIndex > target) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
    barRefs.current[pivotIndex].style.background = 'var(--color-amber-glow';
  }
  console.log("unsuccessful")
  return -1;
}

const colorArrayBars = async (left, right, barRefs, toTeal) => {
  let color = toTeal ? 'var(--color-muted-teal)' : 'var(--color-amber-glow';
  for (let i = left; i <= right; i++) {
    barRefs.current[i].style.background = color;
  }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default binarySearchFunc;