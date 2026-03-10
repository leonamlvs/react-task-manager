import { ChevronLeftIcon, TrashIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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
            aria-label="Go back"
            variant="secondary"
            className="absolute left-0">
            <ChevronLeftIcon size={20} />
          </Button>
          <Title>Not Found</Title>
        </header>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white/50">
          Task not found.
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
    if (confirm('Are you sure you want to delete this task?')) {
      onTaskDelete(task.id)
      navigate('/')
    }
  }

  return (
    <Layout>
      <header className="relative flex items-center justify-center py-2">
        <Button
          onClick={() => navigate('/')}
          aria-label="Go back"
          variant="secondary"
          className="absolute left-0">
          <ChevronLeftIcon size={20} />
        </Button>
        <Title>Task Details</Title>
        <div className="absolute right-0 flex gap-2">
          {editingField ? (
            <Button
              key="cancel-edit"
              onMouseDown={(e) => {
                // Prevent onBlur from firing before we can set isCancelling
                e.preventDefault()
                handleCancel()
              }}
              aria-label="Cancel editing"
              variant="secondary"
              title="Cancel (Esc)">
              <XIcon size={20} />
            </Button>
          ) : (
            <Button
              key="delete-task"
              onClick={handleDelete}
              aria-label="Delete task"
              variant="danger"
              title="Delete Task">
              <TrashIcon size={20} />
            </Button>
          )}
        </div>
      </header>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
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
                className="w-full text-2xl font-bold tracking-tight !rounded-2xl !bg-white/10"
                placeholder="Task title"
              />
            ) : (
              <h2
                onClick={() => setEditingField('title')}
                className="cursor-pointer break-all text-2xl font-bold tracking-tight text-white rounded-xl p-1 -m-1 hover:bg-white/5 transition-colors"
                title="Click to edit title">
                {task.title}
              </h2>
            )}
          </div>

          <div className="mb-6 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

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
                  'w-full min-h-[150px] rounded-2xl bg-white/10 px-4 py-3 text-white placeholder-white/40 border border-transparent shadow-inner outline-none transition-all duration-500 ease-in-out focus:border-white/30 focus:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] focus:duration-75 resize-none font-medium leading-relaxed'
                )}
                placeholder="Task description (optional)"
              />
            ) : (
              <p
                onClick={() => setEditingField('description')}
                className="cursor-pointer break-all font-medium leading-relaxed text-white/70 whitespace-pre-wrap rounded-xl p-1 -m-1 hover:bg-white/5 transition-colors"
                title="Click to edit description">
                {task.description || (
                  <span className="italic opacity-50 font-normal text-sm">
                    No description provided. Click to add one.
                  </span>
                )}
              </p>
            )}
          </div>

          {editingField && (
            <p className="text-xs text-white/30 text-right animate-pulse">
              Press Ctrl+Enter to save, Click outside to auto-save
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default TaskPage
