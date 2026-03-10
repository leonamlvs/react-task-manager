import { cn } from '../utils/cn'

function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'rounded-full bg-orange-100/50 dark:bg-black/20 px-4 py-2 text-orange-900 dark:text-white placeholder-orange-400 dark:placeholder-white/40 border border-transparent shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-orange-300 dark:focus:border-white/30 focus:drop-shadow-[0_0_10px_rgba(251,146,60,0.2)] dark:focus:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]',
        className
      )}
      {...props}
    />
  )
}

export default Input
