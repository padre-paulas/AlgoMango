const generateArraySorted = (numberOfElements) => {
  let array = Array.from({ length: numberOfElements  },
  (el, i) => (i + 1) * (99 / numberOfElements)
  );
  return array;
}

export default generateArraySorted;