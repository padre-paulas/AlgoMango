const setColor = (barRefs, value, color) =>  {
  for (let i = 0; i < value; i++) {
    barRefs.current[i].style.background = color;
  }
}

export default setColor;