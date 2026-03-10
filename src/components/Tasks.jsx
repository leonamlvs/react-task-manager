import {
  ChevronRightIcon,
  SquareCheckIcon,
  SquareIcon,
  TrashIcon
} from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

function Tasks({ tasks, onTaskClick, onTaskDelete, onTaskUpdate }) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [tempTitle, setTempTitle] = useState('')

  function handleTaskDetailsClick(task) {
    navigate(`/tasks/${task.id}`)
  }

  function handleTaskTitleClick(task) {
    setEditingTaskId(task.id)
    setTempTitle(task.title)
  }

  function handleSave(taskId) {
    if (tempTitle.trim()) {
      onTaskUpdate(taskId, { title: tempTitle })
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
    <ul className="space-y-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 p-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {tasks.length === 0 && (
        <p className="py-4 text-center font-medium text-slate-400 dark:text-white/30">
          {t('noTasks')}
        </p>
      )}
      {tasks.map((task) => (
        <li
          key={task.id}
          className="group flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/5 bg-white/20 dark:bg-white/5 p-2 transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/10">
          <button
            onClick={() => onTaskClick(task.id)}
            aria-label={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            title={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
            className={`flex shrink-0 items-center justify-center rounded-xl p-2 transition-all duration-300 outline-none hover:text-blue-500 dark:hover:text-blue-400 ${
              task.isCompleted
                ? 'text-slate-400 dark:text-white/30'
                : 'text-slate-600 dark:text-white/60'
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
                className="w-full !rounded-xl !bg-slate-300/50 dark:!bg-white/10 !px-2 !py-1 text-sm font-medium"
              />
            ) : (
              <div
                onClick={() => handleTaskTitleClick(task)}
                className={`cursor-pointer truncate rounded-xl p-2 font-medium transition-all duration-300 hover:bg-white/30 dark:hover:bg-white/5 ${
                  task.isCompleted
                    ? 'text-slate-400 dark:text-white/30'
                    : 'text-slate-800 dark:text-white'
                }`}
                title="Click to edit">
                {task.title}
              </div>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2 pr-2">
            <Button
              onClick={() => handleTaskDetailsClick(task)}
              aria-label={t('taskDetails')}
              title={t('taskDetails')}>
              <ChevronRightIcon size={18} />
            </Button>
            <Button
              onClick={() => onTaskDelete(task.id)}
              variant="danger"
              aria-label={t('deleteTask')}
              title={t('deleteTask')}>
              <TrashIcon size={18} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
