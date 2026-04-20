import { useEffect, useState } from "react"

const App = () => {
  const [showMatrix, setShowMatrix] = useState([]);
  const [startDragPos, setStartDragPos] = useState([]);
  const [endDragPos, setEndDragPos] = useState([]);

  function createMatrixBoard() {
    let matrix = [];
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        let obj = {
          pos: [i, j],
          isColor: false
        }
        matrix.push(obj);
      }
    }
    setShowMatrix(matrix);
  }

  useEffect(() => {
    createMatrixBoard();
  }, [])

  const handleStartPosition = (e, item) => {
    e.preventDefault();
    setStartDragPos(item.pos);
  }

  const handleEndPosition = (e, item) => {
    e.preventDefault();
    setEndDragPos(item.pos);
  }

  // const handleDragging = (e, item) => {
  //   e.preventDefault();
  //   console.log(item.pos);
  // }

  console.log("Start:" + startDragPos, "End" + endDragPos)

  return (
    <div className="max-w-3xl mx-auto my-8 flex flex-col gap-4">
      <h1 className="text-center text-2xl">Selectable Grid</h1>
      <div>
        <div className="grid grid-cols-10 grid-rows-10 max-w-100 min-h-100 outline-1 mx-auto">
          {
            showMatrix?.map((item) => {
              return <div
                draggable
                onDragOver={(e) => handleStartPosition(e, item)}
                onDrag={(e) => handleEndPosition(e, item)}
                className="flex items-center justify-center outline-1"
              >
                {item.pos}
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App