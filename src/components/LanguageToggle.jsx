import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from './Button'

function LanguageToggle() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'pt-BR' : 'en-US'
    i18n.changeLanguage(nextLang)
  }

  const currentLangLabel = i18n.language.startsWith('en') ? 'EN' : 'PT'

  return (
    <Button
      onClick={toggleLanguage}
      variant="secondary"
      title={i18n.language.startsWith('en') ? t('switchToPT') : t('switchToEN')}
      aria-label={
        i18n.language.startsWith('en') ? t('switchToPT') : t('switchToEN')
      }
      className="flex gap-2 px-3">
      <Languages size={20} />
      <span className="text-xs font-bold">{currentLangLabel}</span>
    </Button>
  )
}

export default LanguageToggle
