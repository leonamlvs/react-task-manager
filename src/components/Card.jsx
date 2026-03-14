import { cn } from '../utils/cn'

function Card({ children, className = '', variant = 'glass' }) {
  const variants = {
    glass: 'glass-full shadow-xl',
    bright: 'bg-surface-bright-light dark:bg-surface-bright-dark glass-border'
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
