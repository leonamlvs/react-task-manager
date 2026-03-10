import { ChevronLeftIcon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const task = location.state?.task

  if (!task) {
    return (
      <Layout>
        <header className="relative flex items-center justify-center py-2">
          <Button
            onClick={() => navigate(-1)}
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

  return (
    <Layout>
      <header className="relative flex items-center justify-center py-2">
        <Button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          variant="secondary"
          className="absolute left-0">
          <ChevronLeftIcon size={20} />
        </Button>
        <Title>Task Details</Title>
      </header>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
        <h2 className="mb-4 break-all text-2xl font-bold tracking-tight text-white">
          {task.title}
        </h2>
        <div className="mb-6 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
        <p className="break-all font-medium leading-relaxed text-white/70">
          {task.description}
        </p>
      </div>
    </Layout>
  )
}

export default TaskPage
