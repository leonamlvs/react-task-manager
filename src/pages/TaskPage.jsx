import { ChevronLeftIcon, TrashIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
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

  // 'title' | 'description' | null
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
        <header className="relative flex items-center justify-center py-2">
          <Button
            onClick={() => navigate('/')}
            aria-label={t('goBack')}
            variant="secondary"
            className="absolute left-0">
            <ChevronLeftIcon size={20} />
          </Button>
          <Title>{t('notFound')}</Title>
        </header>
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 p-8 text-center text-slate-500 dark:text-white/50">
          {t('taskNotFound')}
        </div>
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
      // Revert title if empty
      setTempTitle(task.title)
    }
    setEditingField(null)
  }

  function handleCancel() {
    isCancelling.current = true
    setTempTitle(task.title)
    setTempDescription(task.description || '')
    setEditingField(null)
    // Reset the ref after a short delay to ensure blur event doesn't save
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
      <header className="relative flex items-center justify-center py-2">
        <Button
          onClick={() => navigate('/')}
          aria-label={t('goBack')}
          variant="secondary"
          className="absolute left-0">
          <ChevronLeftIcon size={20} />
        </Button>
        <Title>{t('taskDetails')}</Title>
        <div className="absolute right-0 flex gap-2">
          {editingField ? (
            <Button
              key="cancel-edit"
              onMouseDown={(e) => {
                // Prevent onBlur from firing before we can set isCancelling
                e.preventDefault()
                handleCancel()
              }}
              aria-label={t('cancel')}
              variant="secondary"
              title={t('cancel')}>
              <XIcon size={20} />
            </Button>
          ) : (
            <Button
              key="delete-task"
              onClick={handleDelete}
              aria-label={t('deleteTask')}
              variant="danger"
              title={t('deleteTask')}>
              <TrashIcon size={20} />
            </Button>
          )}
        </div>
      </header>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 p-8 shadow-xl backdrop-blur-2xl transition-all duration-300">
        <div className="space-y-4">
          {/* Title Section */}
          <div className="group relative">
            {editingField === 'title' ? (
              <Input
                autoFocus
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className="w-full text-2xl font-bold tracking-tight !rounded-2xl !bg-slate-300/50 dark:!bg-white/10"
                placeholder={t('addTaskPlaceholder')}
              />
            ) : (
              <h2
                onClick={() => setEditingField('title')}
                className="cursor-pointer break-all text-2xl font-bold tracking-tight text-slate-800 dark:text-white rounded-xl p-1 -m-1 hover:bg-white/40 dark:hover:bg-white/5 transition-colors"
                title={t('editTitle')}>
                {task.title}
              </h2>
            )}
          </div>

          <div className="mb-6 h-px w-full bg-gradient-to-r from-slate-200 dark:from-white/20 to-transparent" />

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
                  'w-full min-h-[150px] rounded-2xl bg-slate-300/50 dark:bg-white/10 px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 border border-transparent shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-slate-300 dark:focus:border-white/30 resize-none font-medium leading-relaxed'
                )}
                placeholder={t('addTaskDescriptionPlaceholder')}
              />
            ) : (
              <p
                onClick={() => setEditingField('description')}
                className="cursor-pointer break-all font-medium leading-relaxed text-slate-600 dark:text-white/70 whitespace-pre-wrap rounded-xl p-1 -m-1 hover:bg-white/40 dark:hover:bg-white/5 transition-colors"
                title={t('editDescription')}>
                {task.description || (
                  <span className="opacity-50 font-normal text-sm">
                    {t('noDescription')}
                  </span>
                )}
              </p>
            )}
          </div>

          {editingField && (
            <p className="text-xs text-slate-400 dark:text-white/30 text-right animate-pulse">
              {t('pressToSave')}
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default TaskPage
