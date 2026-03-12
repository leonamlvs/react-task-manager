import { cn } from '../utils/cn'

const variants = {
  primary:
    'group relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 outline-none dark:bg-none dark:bg-surface-bright-dark',
  secondary:
    'flex h-11 items-center justify-center rounded-2xl bg-surface-glass-light dark:bg-surface-glass-dark px-4 text-text-secondary-light dark:text-text-secondary-dark border border-white/40 dark:border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 outline-none',
  danger:
    'flex h-11 items-center justify-center rounded-2xl bg-rose-500/10 px-4 text-rose-500 border border-rose-500/20 transition-all duration-300 hover:scale-105 active:scale-95 outline-none',
  ghost:
    'flex h-11 w-11 items-center justify-center rounded-xl bg-surface-glass-light dark:bg-surface-glass-dark text-text-secondary-light dark:text-text-secondary-dark transition-all duration-300 hover:scale-110 active:scale-95 outline-none'
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
