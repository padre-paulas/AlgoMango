import setColor from "./set-array-bars-color";
const SliderNumber = ({ value, onChange, setArray, barRefs, generateArrayFunc, setTarget, target }) => {
  return <input className="h-1 w-35 bg-transparent" 
    min="1" max="100" value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      let val = Number(e.target.value);
      onChange(val);
      setArray(generateArrayFunc(val));
      Number(target) > val && setTarget(val);
    }}
    onMouseDown={(e) => {
      setColor(barRefs, e.target.value, 'var(--color-amber-glow)');
    }}
    ></input>
}

export default SliderNumber;