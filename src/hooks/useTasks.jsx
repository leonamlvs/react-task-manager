import { createContext, useContext, useEffect, useState } from 'react'

const TasksContext = createContext()

export function TasksProvider({ children }) {
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

  function onTaskUpdate(taskId, updates) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updates }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        onTaskAdd,
        onTaskDelete,
        onTaskClick,
        onTaskUpdate
      }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider')
  }
  return context
}
