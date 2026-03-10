import {
  ChevronRightIcon,
  SquareCheckIcon,
  SquareIcon,
  TrashIcon
} from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

function Tasks({ tasks, onTaskClick, onTaskDelete, onTaskUpdate }) {
  const navigate = useNavigate()
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [tempTitle, setTempTitle] = useState('')

  function handleTaskDetailsClick(task) {
    navigate(`/tasks`, { state: { task } })
  }

  function handleTaskTitleClick(task) {
    setEditingTaskId(task.id)
    setTempTitle(task.title)
  }

  function handleSave(taskId) {
    if (tempTitle.trim()) {
      onTaskUpdate(taskId, tempTitle)
    }
    setEditingTaskId(null)
  }

  function handleKeyDown(e, taskId) {
    if (e.key === 'Enter') {
      handleSave(taskId)
    } else if (e.key === 'Escape') {
      setEditingTaskId(null)
    }
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
            className={`flex shrink-0 items-center justify-center rounded-xl p-2 transition-all duration-300 outline-none hover:text-blue-400 ${
              task.isCompleted ? 'text-white/30' : 'text-white/60'
            }`}>
            {task.isCompleted ? (
              <SquareCheckIcon className="shrink-0" />
            ) : (
              <SquareIcon className="shrink-0" />
            )}
          </button>

          <div className="flex-1 overflow-hidden">
            {editingTaskId === task.id ? (
              <Input
                autoFocus
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onBlur={() => handleSave(task.id)}
                onKeyDown={(e) => handleKeyDown(e, task.id)}
                className="w-full !rounded-xl !bg-white/10 !px-2 !py-1 text-sm font-medium"
              />
            ) : (
              <div
                onClick={() => handleTaskTitleClick(task)}
                className={`cursor-pointer truncate rounded-xl p-2 font-medium transition-all duration-300 hover:bg-white/5 ${
                  task.isCompleted ? 'text-white/30' : 'text-white'
                }`}
                title="Click to edit">
                {task.title}
              </div>
            )}
          </div>

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
