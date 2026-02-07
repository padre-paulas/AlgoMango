import generateArray from "./generate-array";
import generateArraySorted from "./generate-array-sorted";
import setColor from "./set-array-bars-color";

const SortedUnsortedToggle = ({ sorted, setSorted, numberOfElements, setArray, barRefs }) => {
  return <button className={`h-7 w-16 bg-white rounded-full flex justify-center items-center text-center bg-center m-auto my-4 shadow-[inset_0_0_2px_var(--color-midnight-violet)]`} value={sorted}
  onClick={() => {
    let nextSorted = !sorted;
    setSorted(nextSorted);
    setColor(barRefs, numberOfElements, 'var(--color-amber-glow)')
    setArray((nextSorted ? generateArraySorted(numberOfElements) : generateArray(numberOfElements)));
  }}
  >
    <div className={`border-6 border-midnight-violet w-7 h-7 rounded-full transform transition-all
    ease-in-out ${sorted ? '-translate-x-4.5' : 'translate-x-4.5'}
    `}
    ></div>
  </button>
}

export default SortedUnsortedToggle;