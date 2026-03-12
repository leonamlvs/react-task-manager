import { cn } from '../utils/cn'

const variants = {
  primary:
    'group relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 font-bold text-white transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-90 dark:hover:before:opacity-40 before:transition-opacity before:duration-700 hover:drop-shadow-md active:scale-95 outline-none dark:bg-none dark:bg-surface-bright-dark',
  secondary:
    'flex h-11 items-center justify-center rounded-full bg-surface-glass-light dark:bg-surface-glass-dark px-4 text-text-secondary-light dark:text-text-secondary-dark border border-white/40 dark:border-white/10 backdrop-blur-2xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-md active:scale-95 outline-none',
  danger:
    'flex h-11 items-center justify-center rounded-full bg-rose-500/10 size-11 text-rose-500 border border-rose-500/20 hover:bg-rose-500/20 dark:hover:bg-rose-500/20 hover:shadow-md transition-all duration-300 active:scale-95 outline-none',
  ghost:
    'flex h-11 w-11 items-center justify-center rounded-full bg-surface-glass-light dark:bg-surface-glass-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-md transition-all duration-300 active:scale-95 outline-none'
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export default Button
