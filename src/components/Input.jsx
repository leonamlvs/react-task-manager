import { cn } from '../utils/cn'

function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-2xl bg-surface-glass-light dark:bg-white/5 px-4 text-text-primary-light dark:text-text-primary-dark placeholder-text-muted-light dark:placeholder-text-muted-dark border border-white/40 dark:border-white/10 shadow-inner outline-none transition-all duration-300 ease-in-out focus:border-indigo-400/50 dark:focus:border-blue-400/50 focus:bg-white/40 dark:focus:bg-white/10',
        className
      )}
      {...props}
    />
  )
}

export default Input
