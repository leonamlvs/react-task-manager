import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { cn } from '../utils/cn'
import Button from './Button'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

function Layout({ children, className = '' }) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-screen justify-center overflow-x-hidden bg-orange-50/20 transition-colors duration-300 dark:bg-slate-900 p-6',
        className
      )}>
      {/* Background Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px]
          rounded-full bg-orange-400/40 dark:bg-blue-600/60 blur-[100px] mix-blend-multiply dark:mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px]
          rounded-full bg-amber-400/30 dark:bg-purple-600/60 blur-[120px] mix-blend-multiply dark:mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px]
          rounded-full bg-rose-400/30 dark:bg-rose-600/60 blur-[130px] mix-blend-multiply dark:mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      {/* Settings Buttons (Superior Left) */}
      <div className="fixed left-6 top-6 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Social Buttons (Global) */}
      <div className="fixed right-6 top-6 z-50 flex gap-2">
        <a
          href="https://github.com/leonamlvs"
          target="_blank"
          rel="noopener noreferrer">
          <Button
            variant="secondary"
            aria-label="GitHub profile"
            title="GitHub">
            <GithubIcon size={20} />
          </Button>
        </a>
        <a
          href="https://linkedin.com/in/leonamlvs"
          target="_blank"
          rel="noopener noreferrer">
          <Button
            variant="secondary"
            aria-label="LinkedIn profile"
            title="LinkedIn">
            <LinkedinIcon size={20} />
          </Button>
        </a>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-[500px] space-y-4">{children}</div>
    </div>
  )
}

export default Layout
