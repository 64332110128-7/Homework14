import { useState } from "react"

function TodoItem(props) {
  const { job, btnEdit, btnDel, hdlCom } = props
  const [completed, setCompleted] = useState(job.completed)

  const todoComplete = () => {
    const newCom = { ...job, completed: !completed };
    setCompleted(!completed);
    hdlCom(newCom, job.id)
  }

  return (
    <div className="todo-item flex justify-between items-center border-b-2 py-2 px-4 ">
      <label className={`checkbox-job ${completed ? 'line-through text-gray-500' : ''}`}>
        <div className="flex items-center m-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={todoComplete}
          className="mr-2 rounded cursor-pointer"
        />
        <p className="text-lg whitespace-pre-line ">{job.todo}</p>
        </div>
      </label>
      <div className="btn-group">
        <button
          onClick={() => btnEdit(job)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => btnDel(job.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem;
