import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './Button'
import Input from './Input'

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { t } = useTranslation()

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      return
    }
    onTaskAdd(title.trim(), description.trim())
    setTitle('')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-col space-y-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 p-6 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20">
      <Input
        type="text"
        placeholder={t('addTaskPlaceholder')}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label={t('addTaskPlaceholder')}
      />
      <Input
        type="text"
        placeholder={t('addTaskDescriptionPlaceholder')}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label={t('addTaskDescriptionPlaceholder')}
      />
      <Button variant="primary" type="submit">
        {t('addTaskButton')}
      </Button>
    </form>
  )
}

export default AddTask
