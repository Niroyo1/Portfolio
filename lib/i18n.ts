import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // idioma por defecto si no se detecta otro
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'querystring'], // evitar navigator
      caches: ['localStorage'],
    },
  })

export default i18n
