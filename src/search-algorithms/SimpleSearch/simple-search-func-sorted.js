import setColor from "../../shared-global/set-array-bars-color";
import sleep from "../../shared-global/sleep";

const simpleSearchFuncSorted = async (array, target, barRefs, timePerOperation, sorted) => {
  setColor(barRefs, 0, array.length, 'var(--color-amber-glow)')
  for (let i = 0; i < array.length; i++) {
    barRefs.current[i].style.background = 'var(--color-vibrant-coral)';
    await sleep(timePerOperation);
    if (sorted && i === target) {
      barRefs.current[i].style.background = 'var(--color-midnight-violet)';
      return i;
    }
    if (!sorted && array[i] === target) {
      barRefs.current[i].style.background = 'var(--color-midnight-violet)';
      return i;
    }
    barRefs.current[i].style.background = 'var(--color-amber-glow)';
  }
}

export default simpleSearchFuncSorted;