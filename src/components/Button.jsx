import { cn } from '../utils/cn'

const variants = {
  primary:
    'group relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:bg-none dark:bg-white/10 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/20 active:scale-95 outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/20',
  secondary:
    'rounded-full bg-slate-400/20 dark:bg-white/5 p-2 text-slate-600 dark:text-white border border-white/50 dark:border-white/10 transition-all hover:bg-slate-400/30 dark:hover:bg-white/10 active:scale-90 outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/20',
  danger:
    'rounded-full bg-rose-500/10 p-2 text-rose-500 dark:text-rose-500 border border-rose-500/20 transition-all hover:bg-rose-500/20 active:scale-90 outline-none focus:ring-2 focus:ring-rose-500/20',
  icon: 'rounded-full bg-slate-400/20 dark:bg-white/10 p-2 text-slate-600 dark:text-white transition-all duration-300 hover:bg-slate-400/30 dark:hover:bg-white/20 active:scale-90 outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/20'
}

function Button({ children, variant = 'icon', className = '', ...props }) {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {variant === 'primary' && (
        <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      )}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  )
}

export default Button
