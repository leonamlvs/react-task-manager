import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      title={theme === 'dark' ? t('switchToLight') : t('switchToDark')}
      aria-label={theme === 'dark' ? t('switchToLight') : t('switchToDark')}>
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400 transition-all" />
      ) : (
        <Moon size={20} className="text-slate-700 transition-all" />
      )}
    </Button>
  )
}

export default ThemeToggle
