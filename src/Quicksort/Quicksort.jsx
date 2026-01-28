import Slider from "./Slider";
const Quicksort = (props) => {
  const { numberOfElements, timePerOperation, value } = props;

  return <div className="flex justify-center h-screen w-screen bg-amber-glow/20">
    <div className="ml-0 w-screen">
      <h1 className="flex items-center text-center justify-center text-4xl mt-4">Quicksort</h1>
      
    </div>
    <div className="bg-amber-glow w-60 text-white grid justify-center text-center
    m-2 rounded-xl shadow-[0_0_15px_#2E0014] border-2 border-amber-600
    ">
      <h2 className="mt-4">Info</h2>
      <div>
        <p>Number of elements: {numberOfElements}</p>
        <Slider value={value} />
      </div>
      <div className="mb-40">
        <p>Time per operation, ms: {timePerOperation}</p>
        <Slider value={value} />
      </div>
    </div>
  </div>
}

export default Quicksort;