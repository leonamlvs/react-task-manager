import { useEffect, useState } from 'react'

export function useTasks() {
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

  function onTaskUpdate(taskId, updatedTitle) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: updatedTitle }
      }
      return task
    })
    setTasks(newTasks)
  }

  return {
    tasks,
    onTaskAdd,
    onTaskDelete,
    onTaskClick,
    onTaskUpdate
  }
}
