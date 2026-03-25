import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { cn } from '../utils/cn'
import Button from './Button'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

function Layout({ children, className = '' }) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-screen flex-col items-center overflow-x-hidden bg-surface-bg-light p-4 transition-colors duration-300 dark:bg-surface-bg-dark sm:p-6 lg:p-8',
        className
      )}>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-indigo-600 focus:shadow-xl dark:focus:bg-surface-glass-dark dark:focus:text-blue-400">
        Skip to main content
      </a>

      {/* Background Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true">
        <div
          className="animate-glow absolute left-[5%] top-[10%] h-[500px] w-[500px]
          rounded-full bg-indigo-500 blur-[100px] dark:bg-accent-blue dark:mix-blend-plus-lighter [animation-delay:0s]"
        />
        <div
          className="animate-glow absolute right-[10%] top-[20%] h-[600px] w-[600px]
          rounded-full bg-fuchsia-500 blur-[120px] dark:bg-accent-purple dark:mix-blend-plus-lighter [animation-delay:-5s]"
        />
        <div
          className="animate-glow absolute bottom-[10%] left-[20%] h-[550px] w-[550px]
          rounded-full bg-cyan-500 blur-[130px] dark:bg-fuchsia-500 dark:mix-blend-plus-lighter [animation-delay:-10s]"
        />
      </div>

      {/* Header Container (Buttons) */}
      <header className="relative z-50 mb-8 flex w-full max-w-[500px] items-center justify-between">
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
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-full transition-all duration-300 interactive-hover interactive-press hover:shadow-md">
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/leonamlvs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-full transition-all duration-300 interactive-hover interactive-press hover:shadow-md">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        id="main-content"
        className="relative z-10 w-full max-w-[500px] space-y-3 sm:space-y-4 lg:space-y-6">
        {children}
      </main>
    </div>
  )
}

export default Layout
