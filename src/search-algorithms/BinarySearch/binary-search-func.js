import setColor from "../../shared-global/set-array-bars-color";

const binarySearchFunc = async (array, target, barRefs, timePerOperation) => {
  let left = 0;
  let right = array.length - 1;
  let pivotIndex;
  while (left <= right) {
    pivotIndex = Math.floor((left + right) / 2);
    
    setColor(barRefs, left, right + 1, 'var(--color-muted-teal)')
    await sleep(timePerOperation);
    barRefs.current[pivotIndex].style.background = 'var(--color-vibrant-coral)';
    await sleep(timePerOperation);
    setColor(barRefs, left, right + 1, 'var(--color-amber-glow')
    
    if (pivotIndex === target) {
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
  return -1;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default binarySearchFunc;