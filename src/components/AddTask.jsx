import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      return alert('Title is required')
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
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </form>
  )
}

export default AddTask
