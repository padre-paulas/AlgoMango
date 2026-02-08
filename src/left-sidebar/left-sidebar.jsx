const LeftSidebar = ({ setCurrentPage }) => {
  return <div className="group justify-center text-center m-2
    bg-muted-teal/60 hover:bg-muted-teal
    w-15 text-midnight-violet 
    rounded-xl shadow-[0_0_8px_var(--color-midnight-violet)] border-2 border-midnight-violet/30 
    hover:w-60 transition-all ease-in-out duration-200
    ">
      <h2 className="mt-4 text-2xl ">🥭</h2>
      <div className="flex flex-col gap-6 mb-auto mt-6 h-full [&_button]:cursor-pointer 
      [&_button]:hover:text-amber-glow **:text-lg
      ">

        <div>
        <button onClick={() => setCurrentPage("Bubblesort")}>
          <span className="group-hover:hidden transition-all ease-in-out">B</span>
          <span className="hidden group-hover:block transition-all ease-in-out">Bubblesort</span>
          </button>
        </div>

        <div>
          <button onClick={() => setCurrentPage("Quicksort")}>
            <span className="group-hover:hidden transition-all ease-in-out">Q</span>
            <span className="hidden group-hover:block transition-all ease-in-out">Quicksort</span>
            </button>
        </div>

        <div>
          <button onClick={() => setCurrentPage("SimpleSearch")}>
            <span className="group-hover:hidden transition-all ease-in-out">S</span>
            <span className="hidden group-hover:block transition-all ease-in-out">Simple Search</span>
            </button>
        </div>

        <div>
          <button onClick={() => setCurrentPage("BinarySearch")}>
            <span className="group-hover:hidden transition-all ease-in-out">Bi</span>
            <span className="hidden group-hover:block transition-all ease-in-out">Binary Seach</span>
            </button>
        </div>

      </div>
    </div>
}

export default LeftSidebar;