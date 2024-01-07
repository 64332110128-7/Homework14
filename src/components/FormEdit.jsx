import React, { useEffect, useState } from 'react'

function FormEdit(props) {
  const { job, hdlEdit, cancelEdit } = props
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput(job.todo)
  }, [job])

  const hdlCancel = () => {
    cancelEdit()
  }

  const formEdit = (e) => {
    e.preventDefault()
    const newJob = { ...job, todo: input }
    hdlEdit(newJob)
  }

  return (
    <form className="form-edit w-full max-w-sm mx-auto mt-5">
      <input
        className="block border border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={formEdit}
        >
          Save
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={hdlCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default FormEdit;
