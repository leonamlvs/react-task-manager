import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Title from './components/Title'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(newTasks)
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="relative flex h-screen w-screen justify-center overflow-hidden bg-slate-900 p-6">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px] 
          rounded-full bg-blue-600/80 blur-[100px] mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px] 
          rounded-full bg-purple-600/80 blur-[120px] mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px] 
          rounded-full bg-rose-600/80 blur-[130px] mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      <div className="relative z-10 w-[500px] space-y-4">
        <Title>My Tasks</Title>
        <AddTask onTaskAdd={onTaskAdd} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  )
}

export default App
