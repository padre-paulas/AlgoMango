import sleep from "../../shared-global/sleep";
import setColor from "../../shared-global/set-array-bars-color";

const bogosortFunc = async (array, barRefs, timePerOperation) => {
  
  while (!(await isSorted(array, barRefs, timePerOperation))) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

      let heightI = barRefs.current[i].offsetHeight;
      let heightJ = barRefs.current[j].offsetHeight;
      barRefs.current[i].style.height = `${heightJ}px`;
      barRefs.current[j].style.height = `${heightI}px`;
      
      await sleep(timePerOperation);
    }
  }
  return array;
}

const isSorted = async (array, barRefs, timePerOperation) => {
  for (let i = 0; i < array.length - 1; i++) {
    barRefs.current[i].style.background = "var(--color-muted-teal)";
    await sleep(timePerOperation);
    if (array[i] > array[i + 1]) {
      barRefs.current[i + 1].style.background = "var(--color-vibrant-coral)";
      await sleep(timePerOperation);
      setColor(barRefs, 0, array.length, "var(--color-amber-glow)");
      return false;
    }
  }
  barRefs.current[array.length - 1].style.background = "var(--color-muted-teal)";
  return true;
}

export default bogosortFunc;