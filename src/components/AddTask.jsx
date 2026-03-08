import { useState } from 'react'

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      return alert('Preencha todos os campos!')
    }
    onTaskAdd(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="rounded-md border border-slate-300 px-4 py-2 outline-slate-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="rounded-md border border-slate-300 px-4 py-2 outline-slate-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white">
        Adicionar
      </button>
    </form>
  )
}

export default AddTask
