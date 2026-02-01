const ButtonStart = ({ setArray, array, /*barRefs*/ }) => {
  return <button onClick={() => {
    quicksortFunc(array);
    setArray(array);
  }}
    className="bg-muted-teal rounded-xl w-30 h-12 
    shadow-[0_0_3px_var(--color-teal-700)] border-2 border-teal-700
    text-xl transition-all ease-in-out 
    hover:bg-muted-teal/90 hover:border-muted-teal
    active:text-xs
    ">START</button>
}

const quicksortFunc = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    console.log("I'm working!!!");
    // console.log(barRefs);
    const pivotIndex = partition(array, left, right);
    quicksortFunc(array, left, pivotIndex - 1);
    quicksortFunc(array, pivotIndex + 1, right);
  }
  return array;
}

const partition = (array, left, right) => {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[j], array[i]] = [array[i], array[j]];
     
    } 
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
}

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default ButtonStart;