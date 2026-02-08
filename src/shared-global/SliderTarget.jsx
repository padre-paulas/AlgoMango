const SliderTarget = ({ value, onChange, numberOfElements }) => {
  return <input className="h-1 w-35 bg-transparent" 
    min={1} max={numberOfElements} value={value} type="range"
    style={{ accentColor: 'var(--color-midnight-violet)' }}
    onChange={(e) => {
      onChange(Number(e.target.value));
    }}
    ></input>
}

export default SliderTarget;