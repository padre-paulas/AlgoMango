const setColor = (
  barRefs: React.RefObject<(HTMLDivElement | null)[]>, 
  from: number, 
  until: number, 
  color: string
) =>  {
  for (let i = from; i < until; i++) {
    const bar = barRefs.current?.[i];
    bar && (bar.style.background = color);
  }
}

export default setColor;