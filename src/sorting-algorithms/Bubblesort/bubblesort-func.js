const bubblesortFunc = async (array, barRefs, timePerOperation) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {

      barRefs.current[j].style.background = 'var(--color-vibrant-coral)';

      await sleep(timePerOperation)

      if (array[j] <= array[j + 1]) {
        barRefs.current[j].style.background = 'var(--color-amber-glow)';
        barRefs.current[j + 1].style.background = 'var(--color-vibrant-coral)';
      } else if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        let heightJ = barRefs.current[j].offsetHeight;
        let heightJplus1 = barRefs.current[j + 1].offsetHeight;

        barRefs.current[j].style.height = `${heightJplus1}px`;
        barRefs.current[j].style.background = 'var(--color-amber-glow)'
        barRefs.current[j + 1].style.background = 'var(--color-vibrant-coral)'
        barRefs.current[j + 1].style.height = `${heightJ}px`;
      }
      barRefs.current[j].style.background = 'var(--color-amber-glow)'
      barRefs.current[j + 1].style.background = 'var(--color-muted-teal)'

      
    }
    if (i == array.length - 1) {
      barRefs.current[0].style.background = 'var(--color-muted-teal)'
    }
    await sleep(timePerOperation);
  }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default bubblesortFunc;