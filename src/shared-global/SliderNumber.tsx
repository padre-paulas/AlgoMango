import setColor from "./set-array-bars-color";
import React, { Dispatch, SetStateAction } from 'react';

interface SliderNumberProps {
  value: number;
  onChange: (e: number) => void;
  setArray: Dispatch<SetStateAction<number[]>>;
  barRefs: React.RefObject<(HTMLDivElement | null)[]>;
  generateArrayFunc: (n: number) => number[];
  setTarget: Dispatch<SetStateAction<number>> | null;
  target: number | null;
}

const SliderNumber = ({ value, onChange, setArray, barRefs, generateArrayFunc, setTarget, target }: SliderNumberProps) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="1" max="100" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      let val = Number(e.target.value);
      onChange(val);
      setArray(generateArrayFunc(val));
      if (setTarget) { Number(target) + 1 > val && setTarget(val - 1); };
    }}
    onMouseDown={(e) => {
      const target = e.target as HTMLInputElement;
      setColor(barRefs, 0, Number(target.value), 'var(--color-amber-glow)');
    }}
    ></input>
}

export default SliderNumber;