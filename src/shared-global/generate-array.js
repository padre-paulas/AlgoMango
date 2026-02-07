const generateArray = (numberOfElements) => {
  let array = Array.from({ length: numberOfElements }, 
  () => Math.floor(Math.random() * 100));
  return array;
}

export default generateArray;

/** 
* @note
* Think about doing "random" array generation differently.
* Generate a sorted array first, then shuffle the elements.
* This way you will always know you can search elements values
* by IDs.
*/