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
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const task = tasks.find((t) => t.id === id)

  const [editingField, setEditingField] = useState(null)
  const [tempTitle, setTempTitle] = useState('')
  const [tempDescription, setTempDescription] = useState('')
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const isCancelling = useRef(false)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

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
            title={t('goBack')}
            variant="secondary"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 px-0">
            <ChevronLeftIcon size={20} />
          </Button>
          <Title>{t('notFound')}</Title>
        </header>
        <Card
          variant="bright"
          className="text-center text-text-secondary-light dark:text-text-secondary-dark">
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
          title={t('goBack')}
          variant="secondary"
          className="absolute left-0 w-11 px-0">
          <ChevronLeftIcon size={20} />
        </Button>
        <Title>{t('taskDetails')}</Title>
        <div className="absolute right-0 w-11 px-0">
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
              <>
                <label htmlFor="edit-title" className="sr-only">
                  {t('editTitle')}
                </label>
                <Input
                  id="edit-title"
                  autoFocus
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  onBlur={handleSave}
                  onKeyDown={handleKeyDown}
                  className="h-auto w-full p-2 -m-2 text-xl font-bold tracking-tight !rounded-2xl !bg-white/10 sm:text-2xl"
                  placeholder={t('addTaskPlaceholder')}
                />
              </>
            ) : (
              <button
                onClick={() => setEditingField('title')}
                className="w-full rounded-xl p-2 -m-2 text-left transition-colors hover:bg-white/10 focus-visible:ring-inset"
                title={t('editTitle')}
                aria-label={`${task.title}, ${t('editTitle')}`}>
                <h2 className="break-words text-xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark sm:text-2xl">
                  {task.title}
                </h2>
              </button>
            )}
          </div>

          <div className="gradient-divider" />

          {/* Description Section */}
          <div className="group relative">
            {editingField === 'description' ? (
              <>
                <label htmlFor="edit-description" className="sr-only">
                  {t('editDescription')}
                </label>
                <textarea
                  id="edit-description"
                  autoFocus
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                  onBlur={handleSave}
                  onKeyDown={handleKeyDown}
                  className={cn(
                    'min-h-[150px] w-full resize-none rounded-2xl border border-white/20 bg-white/10 p-2 font-medium leading-relaxed text-text-secondary-light shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-indigo-400/50 dark:text-text-secondary-dark placeholder-text-muted-light dark:placeholder-text-muted-dark'
                  )}
                  placeholder={t('addTaskDescriptionPlaceholder')}
                />
              </>
            ) : (
              <button
                onClick={() => setEditingField('description')}
                className="w-full rounded-xl text-left transition-colors hover:bg-white/10 focus-visible:ring-inset"
                title={t('editDescription')}
                aria-label={`${task.description || t('noDescription')}, ${t('editDescription')}`}>
                <p className="break-words font-medium leading-relaxed text-text-secondary-light whitespace-pre-wrap dark:text-text-secondary-dark">
                  {task.description || (
                    <span className="text-sm font-normal opacity-50">
                      {t('noDescription')}
                    </span>
                  )}
                </p>
              </button>
            )}
          </div>

          {editingField && (
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-right">
              {isTouchDevice ? t('autoSave') : t('pressToSave')}
            </p>
          )}
        </div>
      </Card>
    </Layout>
  )
}

export default TaskPage
