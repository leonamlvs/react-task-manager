import { ChevronRightIcon, TrashIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate()

  function handleTaskDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)
    navigate(`/tasks?${query.toString()}`)
  }

  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full rounded-md bg-slate-400 p-2 text-left text-white ${task.isCompleted ? 'line-through' : ''}`}>
            {task.title}
          </button>
          <Button onClick={() => handleTaskDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onTaskDelete(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
