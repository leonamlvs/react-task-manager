import { cn } from '../utils/cn'

function Title({ children, className = '' }) {
  return (
    <h1
      className={cn(
        'text-2xl sm:text-3xl font-bold text-center text-text-primary-light dark:text-text-primary-dark transition-colors tracking-tight',
        className
      )}>
      {children}
    </h1>
  )
}

export default Title
