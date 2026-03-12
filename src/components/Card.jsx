import { cn } from '../utils/cn'

function Card({ children, className = '', variant = 'glass' }) {
  const variants = {
    glass:
      'bg-surface-glass-light dark:bg-surface-glass-dark border-white/40 dark:border-white/10 backdrop-blur-2xl shadow-xl',
    bright:
      'bg-surface-bright-light dark:bg-surface-bright-dark border-white/40 dark:border-white/10'
  }

  return (
    <div
      className={cn(
        'rounded-3xl border p-5 sm:p-6 lg:p-8 transition-all duration-300',
        variants[variant],
        className
      )}>
      {children}
    </div>
  )
}

export default Card
