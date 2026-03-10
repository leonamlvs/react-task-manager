import { cn } from '../utils/cn'

function Layout({ children, className = '' }) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-screen justify-center overflow-x-hidden bg-slate-900 p-6',
        className
      )}>
      {/* Background Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px]
          rounded-full bg-blue-600/60 blur-[100px] mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px]
          rounded-full bg-purple-600/60 blur-[120px] mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px]
          rounded-full bg-rose-600/60 blur-[130px] mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-[500px] space-y-4">{children}</div>
    </div>
  )
}

export default Layout
