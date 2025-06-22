'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../lib/i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Forzar inglés la primera vez si no hay idioma guardado
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('en')
    }
  }, [])

  if (!isClient) return null

  const currentLang = i18n.language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const languages = ['es', 'en']

  return (
    <div className="z-50 flex gap-5
      pt-8 pl-8
      2xl:mt-0 2xl:mx-0 2xl:fixed 2xl:top-4 2xl:right-4 2xl:mr-40"
    >
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`w-10 h-10 rounded-full ring-2 text-xs transition-all
            ${
              currentLang === lng
                ? 'bg-Aquamarine text-black ring-Aquamarine'
                : 'text-white ring-white hover:text-Aquamarine hover:ring-Aquamarine'
            }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
