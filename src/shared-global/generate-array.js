const generateArray = (numberOfElements) => {
  let array = Array.from({ length: numberOfElements }, 
  (_, i) => i);
  for (let i = numberOfElements - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default generateArray;