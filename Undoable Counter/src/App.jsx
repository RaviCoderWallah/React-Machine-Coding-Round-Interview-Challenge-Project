const App = () => {
  const controlsBtn = "py-1 px-4 bg-gray-300 outline-1 cursor-pointer active:scale-110 transition-all duration-75 ease-in-out";
  return (
    <div className="max-w-4xl mx-auto my-8 text-center flex flex-col gap-6">
      <h1 className="text-2xl">Undoable Counter</h1>
      <div className="flex items-center justify-center gap-4">
        <button className="py-1 px-4 bg-purple-600 outline-1 text-white cursor-pointer">Undo</button>
        <button className="py-1 px-4 bg-teal-600 outline-1 text-white cursor-pointer">Redo</button>
      </div>
      <div className="flex items-center justify-center gap-10 my-6">
        <div className="flex gap-6">
          <button className={controlsBtn}>-100</button>
          <button className={controlsBtn}>-10</button>
          <button className={controlsBtn}>-1</button>
        </div>
        <div>
          <p className="text-4xl font-semibold">106</p>
        </div>
        <div className="flex gap-6">
          <butto className={controlsBtn}>+1</butto>
          <button className={controlsBtn}>+10</button>
          <button className={controlsBtn}>+100</button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">History</p>
        <div className="w-88 min-h-44 outline-1 ">
          
        </div>
      </div>
    </div>
  )
}

export default App