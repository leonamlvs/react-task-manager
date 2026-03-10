import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="relative flex h-screen w-screen justify-center overflow-hidden  bg-slate-900  p-6">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px] 
          rounded-full bg-blue-600/40 blur-[100px] mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px] 
          rounded-full bg-purple-600/40 blur-[120px] mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px] 
          rounded-full bg-red-600/40 blur-[130px] mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      <div className="relative z-10 w-[500px] space-y-4">
        <header className="relative flex items-center justify-center py-2">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="absolute left-0 rounded-full bg-white/5 p-2 text-white border border-white/10 transition-all hover:bg-white/10 active:scale-90 outline-none focus:ring-2 focus:ring-white/20">
            <ChevronLeftIcon size={20} />
          </button>
          <Title>Task Details</Title>
        </header>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
          <h2 className="mb-4 text-2xl font-bold text-white break-all tracking-tight">
            {title}
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-6" />
          <p className="text-white/70 leading-relaxed break-all font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage
