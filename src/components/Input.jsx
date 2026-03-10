import { cn } from '../utils/cn'

function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'rounded-full bg-black/20 px-4 py-2 text-white placeholder-white/40 border border-transparent shadow-inner outline-none transition-all duration-500 ease-in-out focus:border-white/30 focus:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] focus:duration-75',
        className
      )}
      {...props}
    />
  )
}

export default Input
