import { useTranslation } from 'react-i18next'
import AddTask from './components/AddTask'
import Layout from './components/Layout'
import Tasks from './components/Tasks'
import Title from './components/Title'
import { useTasks } from './hooks/useTasks.jsx'

function App() {
  const { tasks, onTaskAdd, onTaskDelete, onTaskClick, onTaskUpdate } =
    useTasks()
  const { t } = useTranslation()

  return (
    <Layout>
      <Title>{t('title')}</Title>
      <AddTask onTaskAdd={onTaskAdd} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
        onTaskUpdate={onTaskUpdate}
      />
    </Layout>
  )
}

export default App
