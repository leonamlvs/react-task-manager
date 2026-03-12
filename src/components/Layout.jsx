import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { cn } from '../utils/cn'
import Button from './Button'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

function Layout({ children, className = '' }) {
  return (
    <div
      className={cn(
        'relative flex flex-col min-h-screen w-screen items-center overflow-x-hidden bg-surface-bg-light transition-colors duration-300 dark:bg-surface-bg-dark p-4 sm:p-6 lg:p-8',
        className
      )}>
      {/* Background Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px]
          rounded-full bg-accent-indigo dark:bg-accent-blue blur-[100px] dark:mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px]
          rounded-full bg-accent-fuchsia dark:bg-accent-purple blur-[120px] dark:mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px]
          rounded-full bg-accent-indigo dark:bg-accent-purple blur-[130px] dark:mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      {/* Header Container (Buttons) */}
      <div className="relative z-50 flex w-full max-w-[500px] items-center justify-between mb-8">
        {/* Settings Buttons */}
        <div className="flex gap-3 sm:gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <a
            href="https://github.com/leonamlvs"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              variant="secondary"
              aria-label="GitHub profile"
              title="GitHub"
              className="w-11 px-0">
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
              title="LinkedIn"
              className="w-11 px-0">
              <LinkedinIcon size={20} />
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[500px] space-y-3 sm:space-y-4 lg:space-y-6">
        {children}
      </div>
    </div>
  )
}

export default Layout
