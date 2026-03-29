import sleep from "../../shared-global/sleep";
import setColor from "../../shared-global/set-array-bars-color";

const binarySearchFunc = async (
  array: number[],
  target: number, 
  barRefs: React.RefObject<(HTMLDivElement | null)[]>, 
  timePerOperation: number
) => {
  let left = 0;
  let right = array.length - 1;
  let pivotIndex;
  while (left <= right) {
    pivotIndex = Math.floor((left + right) / 2);
    
    setColor(barRefs, left, right + 1, 'var(--color-muted-teal)')
    await sleep(timePerOperation);

    const pivotBar = barRefs.current[pivotIndex];
    if (!pivotBar) return -1;
    pivotBar.style.background = 'var(--color-vibrant-coral)';
    await sleep(timePerOperation);
    setColor(barRefs, left, right + 1, 'var(--color-amber-glow')
    
    if (pivotIndex === target) {
      pivotBar.style.background = 'var(--color-midnight-violet)';
      return pivotIndex; 
    }
    if (pivotIndex > target) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
    pivotBar.style.background = 'var(--color-amber-glow';
  }
  return -1;
}

export default binarySearchFunc;