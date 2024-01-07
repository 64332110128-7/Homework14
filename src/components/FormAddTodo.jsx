import { useState } from "react"

function FormAddTodo(props) {
  const { hdlAdd } = props
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()
    let newJob = { todo: input, completed: false, user: 1 }
    hdlAdd(newJob)
    setInput('')
  }

  return (
    <form className="flex items-center justify-center mt-6" onSubmit={hdlSubmit}>
      <input
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md ml-1 focus:outline-none hover:bg-blue-700"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default FormAddTodo;
