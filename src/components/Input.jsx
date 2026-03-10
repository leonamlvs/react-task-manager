import { cn } from '../utils/cn'

function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'rounded-full bg-slate-200 dark:bg-black/20 px-4 py-2 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 border border-transparent shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-slate-300 dark:focus:border-white/30 focus:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:focus:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]',
        className
      )}
      {...props}
    />
  )
}

export default Input
