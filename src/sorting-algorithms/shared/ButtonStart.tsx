// interface ButtonStartProps {
//   array: number[];
//   barRefs: React.RefObject<(HTMLDivElement | null)[]>;
//   timePerOperation: number;
//   sortFunc: (array: number[], barRefs: React.RefObject<(HTMLDivElement | null)[]>, timePerOperation: number) => number[]
// }
interface ButtonStartProps {
  sortFunc: () => Promise<number[]>;
}

const ButtonStart = ({ sortFunc }: ButtonStartProps) => {
  return <button onClick={() => {
    sortFunc();
  }}
    className="bg-muted-teal rounded-xl w-30 h-12 
    shadow-[0_0_3px_var(--color-teal-700)] border-2 border-teal-700
    text-xl transition-all ease-in-out 
    hover:bg-muted-teal/90 hover:border-muted-teal
    active:text-xs
    ">START</button>
}

export default ButtonStart;