import {
  ChevronRightIcon,
  SquareCheckIcon,
  SquareIcon,
  TrashIcon
} from 'lucide-react'
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
      {tasks.length === 0 && (
        <p className="text-center text-slate-500">
          No tasks found. Add one above!
        </p>
      )}
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            aria-label={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            title={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            className={`flex w-full min-w-0 items-center gap-2 rounded-md bg-slate-400 p-2 text-left text-white ${
              task.isCompleted ? 'line-through' : ''
            }`}>
            {task.isCompleted ? (
              <SquareCheckIcon className="shrink-0" />
            ) : (
              <SquareIcon className="shrink-0" />
            )}
            <span>{task.title}</span>
          </button>
          <Button
            onClick={() => handleTaskDetailsClick(task)}
            aria-label="See task details"
            title="See task details">
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onTaskDelete(task.id)}
            aria-label="Delete task"
            title="Delete task">
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
