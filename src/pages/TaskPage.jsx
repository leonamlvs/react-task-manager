import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
            className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon />
          </button>
          <Title>Task Details</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold break-all">
            {title}
          </h2>
          <p className="text-slate-600 break-all">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage
