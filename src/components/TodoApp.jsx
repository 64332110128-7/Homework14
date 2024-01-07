/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'https://json-server-beyt.onrender.com/todos'

  useEffect( ()=>{
    setIsLoading(true)
    fetch(apiUrl).then(res=>res.json())
    .then(dat => {
      // console.log(dat)
      setData(dat)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    }).then(res => res.json())
    .then(rs => {
      setData([...data, {id: rs.id, ...newJob}])
      setTrigger(prv=>!prv)
    })
  }

  const hdlEdit = (newJob) => {
    fetch(`https://json-server-beyt.onrender.com/todos/${newJob.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    }).then(res => res.json())
    .then(rs => {
      setData([...data, {...newJob}])
      setTrigger(prv=>!prv)
    })
  }

  const hdlCom = (newCom, id) => {
    fetch(`https://json-server-beyt.onrender.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCom), 
    }).then(res => res.json())
    .then(rs => {})
  }

  const hdlDel = (id) => {
    fetch(`https://json-server-beyt.onrender.com/todos/${id}`, {
    method: 'DELETE',
    }).then(res => res.json())
    .then(rs => {
      setData( prvData => prvData.filter(el => el.id !== id))
    })
  }

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app bg-gray-100 p-8 rounded-xl shadow-lg mt-6 overflow-y-auto" style={{ maxHeight: "90vh" }}>
      <Dashboard task={data.length} />
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} hdlEdit={hdlEdit} hdlDel={hdlDel} hdlCom={hdlCom}/>
    </div>
  )
}

export default TodoApp