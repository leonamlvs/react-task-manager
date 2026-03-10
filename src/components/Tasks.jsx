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
    navigate(`/tasks`, { state: { task } })
  }

  return (
    <ul className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500">
      {tasks.length === 0 && (
        <p className="py-4 text-center font-medium text-white/30">
          Your list is empty. Add a task above to get started.
        </p>
      )}
      {tasks.map((task) => (
        <li
          key={task.id}
          className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-2 transition-all duration-300 hover:bg-white/10">
          <button
            onClick={() => onTaskClick(task.id)}
            aria-label={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            title={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            className={`flex w-full min-w-0 items-center gap-3 rounded-xl p-2 transition-all duration-300 ${
              task.isCompleted ? 'text-white/30' : 'text-white'
            } text-left outline-none`}>
            {task.isCompleted ? (
              <SquareCheckIcon className="shrink-0 text-white/40" />
            ) : (
              <SquareIcon className="shrink-0 group-hover:text-blue-300" />
            )}
            <span className="truncate font-medium">{task.title}</span>
          </button>
          <div className="flex shrink-0 items-center gap-2 pr-2">
            <Button
              onClick={() => handleTaskDetailsClick(task)}
              aria-label="See details"
              title="See details">
              <ChevronRightIcon size={18} />
            </Button>
            <Button
              onClick={() => onTaskDelete(task.id)}
              variant="danger"
              aria-label="Delete task"
              title="Delete task">
              <TrashIcon size={18} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
