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
import Card from './Card'
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
    <Card className="p-0 sm:p-0 lg:p-0 overflow-hidden">
      <ul className="flex flex-col gap-3 p-4 sm:gap-4 sm:p-6 lg:gap-6 lg:p-8">
        {tasks.length === 0 && (
          <p className="py-4 text-center font-medium text-text-muted-light dark:text-text-muted-dark">
            {t('noTasks')}
          </p>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 dark:bg-white/5 p-2 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10">
            <button
              onClick={() => onTaskClick(task.id)}
              aria-label={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
              title={task.isCompleted ? 'Mark as undone' : 'Mark as done'}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 outline-none active:scale-95 ${
                task.isCompleted
                  ? 'text-fuchsia-300 dark:text-indigo-400 opacity-50 hover:opacity-100 '
                  : 'text-fuchsia-400 hover:text-fuchsia-300 dark:text-indigo-500 dark:hover:text-indigo-400'
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
                  className="h-9 !rounded-xl !bg-white/10 !px-3 text-sm font-medium"
                />
              ) : (
                <div
                  onClick={() => handleTaskTitleClick(task)}
                  className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-white/10"
                  title="Click to edit">
                  <div
                    className={`line-clamp-3 font-medium ${
                      task.isCompleted
                        ? 'text-text-muted-light dark:text-text-muted-dark'
                        : 'text-text-secondary-light dark:text-text-secondary-dark'
                    }`}>
                    {task.title}
                  </div>
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => handleTaskDetailsClick(task)}
                aria-label={t('taskDetails')}
                title={t('taskDetails')}>
                <ChevronRightIcon size={18} />
              </Button>
              <Button
                variant="danger"
                onClick={() => onTaskDelete(task.id)}
                aria-label={t('deleteTask')}
                title={t('deleteTask')}>
                <TrashIcon size={18} />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Tasks
