import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './Button'
import Card from './Card'
import Input from './Input'

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { t } = useTranslation()

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      return alert(t('addTaskValidation'))
    }
    onTaskAdd(title.trim(), description.trim())
    setTitle('')
    setDescription('')
  }

  return (
    <Card className="hover:border-white/20 dark:hover:border-white/20">
      <form onSubmit={handleAdd} className="flex flex-col gap-4 sm:gap-5">
        <div>
          <label htmlFor="task-title" className="sr-only">
            {t('addTaskPlaceholder')}
          </label>
          <Input
            id="task-title"
            type="text"
            placeholder={t('addTaskPlaceholder')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="task-description" className="sr-only">
            {t('addTaskDescriptionPlaceholder')}
          </label>
          <Input
            id="task-description"
            type="text"
            placeholder={t('addTaskDescriptionPlaceholder')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button variant="primary" type="submit">
          {t('addTaskButton')}
        </Button>
      </form>
    </Card>
  )
}

export default AddTask
