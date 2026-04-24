import sleep from "../../shared-global/sleep";
import setColor from "../../shared-global/set-array-bars-color";

const bogosortFunc = async (
  array: number[], 
  barRefs: React.RefObject<(HTMLDivElement | null)[]>,
  timePerOperation: number
): Promise<number[]> => {
  while (!(await isSorted(array, barRefs, timePerOperation))) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

      const barI = barRefs.current[i];
      const barJ = barRefs.current[j];
      if (!barI || !barJ) throw new Error("No array bars!");

      let heightI = barI.offsetHeight;
      let heightJ = barJ.offsetHeight;
      barI.style.height = `${heightJ}px`;
      barJ.style.height = `${heightI}px`;
      
      await sleep(timePerOperation);
    }
  }
  return array;
}

const isSorted = async (
  array: number[], 
  barRefs: React.RefObject<(HTMLDivElement | null)[]>,
  timePerOperation: number
): Promise<boolean> => {
  for (let i = 0; i < array.length - 1; i++) {
    const barI = barRefs.current[i];
    const barIPlus1 = barRefs.current[i + 1];
    if (!barI || !barIPlus1) throw new Error("No array bars!");

    barI.style.background = "var(--color-muted-teal)";
    await sleep(timePerOperation);
    if (array[i] > array[i + 1]) {
      barIPlus1.style.background = "var(--color-vibrant-coral)";
      await sleep(timePerOperation);
      setColor(barRefs, 0, array.length, "var(--color-amber-glow)");
      return false;
    }
  }
  const barLast = barRefs.current[array.length - 1];
  if (!barLast) throw new Error("No array bars!");
  barLast.style.background = "var(--color-muted-teal)";
  return true;
}

export default bogosortFunc;

