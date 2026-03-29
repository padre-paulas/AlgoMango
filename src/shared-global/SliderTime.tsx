import { Dispatch, SetStateAction } from "react";

interface SliderTimeProps {
  value: number;
  onChange: Dispatch<SetStateAction<number>>
}

const SliderTime = ({ value, onChange }: SliderTimeProps) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="1" max="1000" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      onChange(Number(e.target.value));
    }}
    ></input>
}

export default SliderTime;