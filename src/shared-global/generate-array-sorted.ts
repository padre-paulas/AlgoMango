const generateArraySorted = (numberOfElements: number) => {
  let array: number[] = Array.from({ length: numberOfElements  },
  (_, i) => ((i + 1) * (99 / numberOfElements))
  );
  return array;
}

export default generateArraySorted;