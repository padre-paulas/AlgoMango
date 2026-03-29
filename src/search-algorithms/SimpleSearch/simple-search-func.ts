import setColor from "../../shared-global/set-array-bars-color";
import sleep from "../../shared-global/sleep";

const simpleSearchFunc = async (
  array: number[], 
  target: number, 
  barRefs: React.RefObject<(HTMLDivElement | null)[]>, 
  timePerOperation: number, 
  sorted: boolean
) => {
  setColor(barRefs, 0, array.length, 'var(--color-amber-glow)')
  for (let i = 0; i < array.length; i++) {
    const bar = barRefs.current?.[i];

    if (bar) {
      bar.style.background = 'var(--color-vibrant-coral)';

      await sleep(timePerOperation);
      if (sorted && i === target || !sorted && array[i] === target) {
        bar.style.background = 'var(--color-midnight-violet)';
        return i;
      }
      bar.style.background = 'var(--color-amber-glow)';
    }
  }
  return -1;
}

export default simpleSearchFunc;