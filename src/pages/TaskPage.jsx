import { ChevronLeftIcon, TrashIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { useTasks } from '../hooks/useTasks.jsx'
import { cn } from '../utils/cn'

function TaskPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { tasks, onTaskUpdate, onTaskDelete } = useTasks()
  const { t } = useTranslation()

  const task = tasks.find((t) => t.id === id)

  const [editingField, setEditingField] = useState(null)
  const [tempTitle, setTempTitle] = useState('')
  const [tempDescription, setTempDescription] = useState('')

  const isCancelling = useRef(false)

  useEffect(() => {
    if (task) {
      setTempTitle(task.title)
      setTempDescription(task.description || '')
    }
  }, [task])

  if (!task) {
    return (
      <Layout>
        <header className="relative flex items-center justify-center py-2 mb-4">
          <Button
            onClick={() => navigate('/')}
            aria-label={t('goBack')}
            variant="secondary"
            className="absolute left-0 w-11 px-0">
            <ChevronLeftIcon size={20} />
          </Button>
          <Title>{t('notFound')}</Title>
        </header>
        <Card variant="bright" className="text-center text-accent-fuchsia">
          {t('taskNotFound')}
        </Card>
      </Layout>
    )
  }

  function handleSave() {
    if (isCancelling.current) {
      isCancelling.current = false
      return
    }

    if (tempTitle.trim()) {
      onTaskUpdate(task.id, {
        title: tempTitle,
        description: tempDescription
      })
    } else {
      setTempTitle(task.title)
    }
    setEditingField(null)
  }

  function handleCancel() {
    isCancelling.current = true
    setTempTitle(task.title)
    setTempDescription(task.description || '')
    setEditingField(null)
    setTimeout(() => {
      isCancelling.current = false
    }, 100)
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      handleCancel()
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSave()
    } else if (editingField === 'title' && e.key === 'Enter') {
      handleSave()
    }
  }

  function handleDelete() {
    if (confirm(t('confirmDelete'))) {
      onTaskDelete(task.id)
      navigate('/')
    }
  }

  return (
    <Layout>
      <header className="relative flex items-center justify-center py-2 mb-4">
        <Button
          onClick={() => navigate('/')}
          aria-label={t('goBack')}
          variant="secondary"
          className="absolute left-0 w-11 px-0">
          <ChevronLeftIcon size={20} />
        </Button>
        <Title>{t('taskDetails')}</Title>
        <div className="absolute right-0 flex gap-2">
          {editingField ? (
            <Button
              key="cancel-edit"
              onMouseDown={(e) => {
                e.preventDefault()
                handleCancel()
              }}
              aria-label={t('cancel')}
              variant="secondary"
              title={t('cancel')}
              className="w-11 px-0">
              <XIcon size={20} />
            </Button>
          ) : (
            <Button
              key="delete-task"
              onClick={handleDelete}
              aria-label={t('deleteTask')}
              variant="danger"
              title={t('deleteTask')}
              className="w-11 px-0">
              <TrashIcon size={20} />
            </Button>
          )}
        </div>
      </header>

      <Card>
        <div className="space-y-6">
          {/* Title Section */}
          <div className="group relative">
            {editingField === 'title' ? (
              <Input
                autoFocus
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className="h-auto w-full py-2 text-xl sm:text-2xl font-bold tracking-tight !rounded-2xl !bg-white/10"
                placeholder={t('addTaskPlaceholder')}
              />
            ) : (
              <h2
                onClick={() => setEditingField('title')}
                className="cursor-pointer break-all text-xl sm:text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark rounded-xl p-2 -m-2 hover:bg-white/10 transition-colors"
                title={t('editTitle')}>
                {task.title}
              </h2>
            )}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-accent-indigo/40 dark:from-white/20 to-transparent" />

          {/* Description Section */}
          <div className="group relative">
            {editingField === 'description' ? (
              <textarea
                autoFocus
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className={cn(
                  'w-full min-h-[150px] rounded-2xl bg-white/10 px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark placeholder-text-muted-light dark:placeholder-text-muted-dark border border-white/20 shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-indigo-400/50 resize-none font-medium leading-relaxed'
                )}
                placeholder={t('addTaskDescriptionPlaceholder')}
              />
            ) : (
              <p
                onClick={() => setEditingField('description')}
                className="cursor-pointer break-all font-medium leading-relaxed text-text-secondary-light dark:text-text-secondary-dark whitespace-pre-wrap rounded-xl p-2 -m-2 hover:bg-white/10 transition-colors"
                title={t('editDescription')}>
                {task.description || (
                  <span className="opacity-50 font-normal text-sm italic">
                    {t('noDescription')}
                  </span>
                )}
              </p>
            )}
          </div>

          {editingField && (
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-right">
              {t('pressToSave')}
            </p>
          )}
        </div>
      </Card>
    </Layout>
  )
}

export default TaskPage
