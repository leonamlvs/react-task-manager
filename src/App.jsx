import AddTask from './components/AddTask'
import Layout from './components/Layout'
import Tasks from './components/Tasks'
import Title from './components/Title'
import { useTasks } from './hooks/useTasks'

function App() {
  const { tasks, onTaskAdd, onTaskDelete, onTaskClick } = useTasks()

  return (
    <Layout>
      <Title>My Tasks</Title>
      <AddTask onTaskAdd={onTaskAdd} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
      />
    </Layout>
  )
}

export default App
