const setColor = (barRefs, from, until, color) =>  {
  for (let i = from; i < until; i++) {
    barRefs.current[i].style.background = color;
  }
}

export default setColor;