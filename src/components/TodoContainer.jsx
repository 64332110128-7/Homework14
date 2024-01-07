import { useState } from "react"
import TodoItem from "./TodoItem"
import FormEdit from "./FormEdit"

function TodoContainer(props) {
  const { todos, hdlEdit, hdlDel, hdlCom } = props
  const [edit, setEdit] = useState(null)
  const [todo, setTodo] = useState(todos)

  const btnEdit = (job) => { 
    setEdit(job.id)
  }

  const cancelEdit = () => {
    setEdit(null)
  }

  const btnDel = (id) => {
    const conFirm = window.confirm('Do you want to delete this task ?')
    if (conFirm) {
      setTodo([...todo].filter((el) => el.id !== id))
      hdlDel(id)
    }
  }

  return (
    <div className="todo-container">
      {todo.map((el) => (
        <div key={el.id}>
          {edit === el.id ? (
            <FormEdit job={el} hdlEdit={hdlEdit} cancelEdit={cancelEdit} />
          ) : (
            <TodoItem job={el} btnEdit={btnEdit} btnDel={btnDel} hdlCom={hdlCom}/>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoContainer;
