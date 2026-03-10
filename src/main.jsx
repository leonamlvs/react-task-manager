import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TasksProvider } from './hooks/useTasks.jsx'
import './i18n'
import './index.css'
import TaskPage from './pages/TaskPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/tasks/:id',
    element: <TaskPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>
)
