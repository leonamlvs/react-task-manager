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
    <Card className="overflow-hidden p-0 sm:p-0 lg:p-0">
      <ul
        className="flex flex-col gap-3 p-4 sm:gap-4 sm:p-6 lg:gap-6 lg:p-8"
        aria-live="polite">
        {tasks.length === 0 && (
          <li className="py-4 text-center font-medium text-text-muted-light dark:text-text-muted-dark">
            {t('noTasks')}
          </li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/10 p-2 transition-all duration-300 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10">
            <button
              onClick={() => onTaskClick(task.id)}
              aria-label={
                task.isCompleted ? t('markAsUndone') : t('markAsDone')
              }
              title={task.isCompleted ? t('markAsUndone') : t('markAsDone')}
              className={`icon-button shrink-0 rounded-xl transition-all duration-300 interactive-press ${
                task.isCompleted
                  ? 'opacity-25 text-fuchsia-600 hover:opacity-100 dark:text-indigo-400 dark:opacity-50'
                  : 'text-fuchsia-400 hover:text-fuchsia-600 dark:text-indigo-500 dark:hover:text-indigo-400'
              }`}>
              {task.isCompleted ? (
                <SquareCheckIcon className="shrink-0" />
              ) : (
                <SquareIcon className="shrink-0" />
              )}
            </button>

            <div className="flex-1 overflow-hidden">
              {editingTaskId === task.id ? (
                <>
                  <label htmlFor={`edit-task-${task.id}`} className="sr-only">
                    {t('editTitle')}
                  </label>
                  <Input
                    id={`edit-task-${task.id}`}
                    autoFocus
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onBlur={() => handleSave(task.id)}
                    onKeyDown={(e) => handleKeyDown(e, task.id)}
                    className="h-9 !rounded-xl !bg-white/10 !px-2 text-md font-medium"
                  />
                </>
              ) : (
                <button
                  onClick={() => handleTaskTitleClick(task)}
                  className="editable-toggle w-full text-left focus-visible:ring-inset"
                  title={t('editTitle')}
                  aria-label={`${task.title}, ${t('editTitle')}`}>
                  <div
                    className={`line-clamp-3 font-medium ${
                      task.isCompleted
                        ? 'line-through text-text-muted-light dark:text-text-muted-dark'
                        : 'text-text-secondary-light dark:text-text-secondary-dark'
                    }`}>
                    {task.title}
                  </div>
                </button>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => handleTaskDetailsClick(task)}
                aria-label={`${t('taskDetails')}: ${task.title}`}
                title={t('taskDetails')}>
                <ChevronRightIcon size={18} />
              </Button>
              <Button
                variant="danger"
                onClick={() => onTaskDelete(task.id)}
                aria-label={`${t('deleteTask')}: ${task.title}`}
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
