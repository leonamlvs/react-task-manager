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
      className="flex flex-col space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Task title"
      />
      <Input
        type="text"
        placeholder="Add a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Description"
      />
      <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-white/10 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20 active:scale-95 outline-none focus:ring-2 focus:ring-white/20">
        <span className="relative z-10">Add Task</span>
        <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      </button>
    </form>
  )
}

export default AddTask
