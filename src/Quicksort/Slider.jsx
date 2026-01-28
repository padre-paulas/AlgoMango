const Slider = (props) => {
  const { value } = props;
  return <input className="h-1 w-35 bg-transparent" 
    min="0" max="100" value={value} type="range"
    style={{ accentColor: 'white' }}
    ></input>
}

export default Slider;