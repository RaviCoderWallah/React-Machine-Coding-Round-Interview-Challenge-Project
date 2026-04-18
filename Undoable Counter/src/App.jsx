import { useState } from "react";

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleCounter = (e) => {
    setRedoStack([]);

    const controlValue = parseInt(e.currentTarget.innerText);
    setCurrentCount((prev) => prev + (controlValue));
    setHistory((prev) => [
      ...prev,
      {
        action: controlValue,
        beforeValue: currentCount,
        afterValue: controlValue + (currentCount)
      }
    ]);
  }

  const handleUndo = () => {
    if (history.length > 0) {
      const updatedHistory = history.slice(0, -1);
      setHistory(updatedHistory);
      const removeItem = history[history.length - 1];
      setRedoStack((prev) => [...prev, removeItem])
    }
  }

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const addItem = redoStack[redoStack.length - 1]
      setHistory((prev) => [...prev, addItem]);
      const updateRdoHistory = redoStack.slice(0, -1);
      setRedoStack(updateRdoHistory);
    }
  }

  const controlsBtn = "py-1 px-4 bg-gray-300 outline-1 cursor-pointer active:scale-110 transition-all duration-75 ease-in-out";
  return (
    <div className="max-w-4xl mx-auto my-8 text-center flex flex-col gap-6">
      <h1 className="text-2xl">Undoable Counter</h1>
      <div className="flex items-center justify-center gap-4">
        <button className={`${history.length > 0 ? "bg-purple-600 text-white cursor-pointer" : "opacity-30 bg-gray-200 cursor-no-drop" } py-1 px-4 outline-1 `} onClick={handleUndo}>Undo</button>
        <button className={`${redoStack.length > 0 ? "bg-teal-600 text-white cursor-pointer" : "opacity-30 bg-gray-200 cursor-no-drop"} py-1 px-4 outline-1`} onClick={handleRedo}>Redo</button>
      </div>
      <div className="flex items-center justify-center gap-10 my-6">
        <div className="flex gap-6">
          <button className={controlsBtn} onClick={handleCounter}>-100</button>
          <button className={controlsBtn} onClick={handleCounter}>-10</button>
          <button className={controlsBtn} onClick={handleCounter}>-1</button>
        </div>
        <div>
          <p className="text-4xl font-semibold">{currentCount}</p>
        </div>
        <div className="flex gap-6">
          <butto className={controlsBtn} onClick={handleCounter}>+1</butto>
          <button className={controlsBtn} onClick={handleCounter}>+10</button>
          <button className={controlsBtn} onClick={handleCounter}>+100</button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">History</p>
        <div className="w-88 min-h-44 outline-1">
          {
            history.length > 0 && history.map(({ action, beforeValue, afterValue }) => {
              return (
                <div key={crypto.randomUUID()} className="flex items-center justify-evenly text-lg my-2">
                  <span>{action}</span>
                  <div>
                    (
                    <span>{beforeValue}</span>
                    <span>→</span>
                    <span>{afterValue}</span>
                    )
                  </div>


                </div>
              )
            })
          }
          {
            history.length <= 0 && <div className="flex items-center w-88 min-h-44 justify-center">
              <p>Your History is Empty...</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App