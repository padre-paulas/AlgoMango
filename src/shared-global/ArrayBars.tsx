interface ArrayBarsProps {
  array: number[],
  barRefs: React.RefObject<(HTMLDivElement | null)[]>,
  stretch: boolean
}

const ArrayBars = ({ array = [], barRefs, stretch }: ArrayBarsProps) => {
  const width = 100 / array.length;
  const stretchFactor = 100 / array.length;
  return <div  className="flex items-end place-self-center w-full h-full px-3 py-1">
    {array.map((element, i) => {
      return <div key={i} ref={(element) => {
        let bar = barRefs.current[i];
        if (bar) bar = element;
      }}
      className={`
        bg-amber-glow flex rounded-sm border border-midnight-violet/30`} style={{ 
        height: `${stretch ? element * stretchFactor : element}%`, width: `${width}%` 
      }}></div>
    })}
  </div>
}

export default ArrayBars;