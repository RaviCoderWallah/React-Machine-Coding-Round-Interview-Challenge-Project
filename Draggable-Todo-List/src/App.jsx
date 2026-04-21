import { useState } from "react"

const App = () => {
  const [task, setTask] = useState("");
  const [todoTaskList, setTodoTaskList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  //For add task
  const handleAddTask = (e) => {
    if (e.key === "Enter" && task.trim().length > 0) {
      if (editingId) {
        setTodoTaskList((prev) => {
          return prev.map((item) => {
            return item.id === editingId ? { ...item, value: task } : item
          })
        })
        setEditingId(null);
      } else {
        //Add todo task list and reset input field
        setTodoTaskList((prev) => [...prev, { id: Date.now(), value: task }]);
      }

      setTask("");
    }
  }

  //For Edit Functionality 
  const handleEditTask = (targetEditId, previousEditValue) => {
    setTask(previousEditValue);
    setEditingId(targetEditId);
  }

  //For Delete Functionality
  const handleDeleteTask = (todoId) => {
    let updatedTodoTaskList = todoTaskList.filter((todoTask) => todoTask.id !== todoId);
    setTodoTaskList(updatedTodoTaskList);
  }

  return (
    <div className="max-w-3xl mx-auto my-8 flex items-center flex-col gap-8">
      <h1 className="text-3xl font-semibold">Task Manager</h1>
      <input
        type="text"
        placeholder="Your Task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleAddTask}
        spellCheck="false"
        className="text-xl p-1 outline-1 outline-gray-900 rounded-sm"
      />

      <div className="flex flex-col w-80 gap-6">
        <div className="bg-purple-100 px-2 py-1">
          <h2 className="text-center text-gray-900 text-lg font-semibold">Todo</h2>
        </div>
        <div className="flex flex-col gap-2">
          {
            todoTaskList?.length > 0 && todoTaskList?.map(({ id, value }) => {
              return <div key={id} className="bg-gray-100 flex justify-between p-2 outline-1 outline-gray-400">
                <p>{value}</p>
                <div className="flex items-center gap-2">
                  <button className="cursor-pointer active:scale-110" onClick={() => handleEditTask(id, value)}>✏</button>
                  <button className="cursor-pointer active:scale-110" onClick={() => handleDeleteTask(id)}>🗑</button>
                </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default App