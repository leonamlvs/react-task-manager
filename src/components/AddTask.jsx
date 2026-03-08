import { useState } from 'react'
import Input from './Input'

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      return alert('Both fields are required')
    }
    onTaskAdd(title.trim(), description.trim())
    setTitle('')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow">
      <Input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Task title"
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Description"
      />
      <button className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white">
        Add Task
      </button>
    </form>
  )
}

export default AddTask
