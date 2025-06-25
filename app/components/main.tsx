'use client'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../lib/i18n'

export default function Main() {
  const { t, i18n } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Evita render server/client desalineados

  const resumeFile =
    i18n.language === 'es'
      ? '/NicolasRodriguezCVes.pdf'
      : '/NicolasRodriguezCVen.pdf'

  return (
    <section className="relative flex flex-col justify-center gap-4 items-center 2xl:items-start mb-8 2xl:mb-0">

      <div className="relative z-10 flex flex-col gap-0 leading-tight text-center 2xl:text-left">
        <h1 className="!text-6xl font-bold text-white">Nicolás Rodriguez</h1>
        <h2 className="!text-3xl font-semibold text-Aquamarine">Full-Stack Developer</h2>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-LightCyan">
        <img
          src="/icons/Location.svg"
          alt="Ubicación"
          className="h-5 w-5 object-contain leading-none"
        />
        <span>San Jacinto, Uruguay</span>
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap gap-4 justify-center 2xl:justify-start">
        <a
          href={resumeFile}
          download
          className="px-6 py-2 rounded-xl !bg-black ring-1 ring-LightCyan text-LightCyan font-semibold transition-colors duration-200 hover:ring-Aquamarine hover:text-Aquamarine"
        >
          {t('downloadResume')}
        </a>
        <a
          href="mailto:nicorodriguez9900@gmail.com"
          className="px-6 py-2 rounded-xl !bg-black ring-1 ring-LightCyan text-LightCyan font-semibold transition-colors duration-200 hover:ring-Aquamarine hover:text-Aquamarine"
        >
          {t('contactMe')}
        </a>
      </div>

      <div className="relative z-10 hidden 2xl:flex gap-6 mt-100">
        <a
          href="https://github.com/Niroyo1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/Github.svg"
            alt="GitHub"
            className="h-6 w-6 hover:opacity-80 transition-opacity duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nicol%C3%A1s-rodriguez-844b681a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/Linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 hover:opacity-80 transition-opacity duration-200"
          />
        </a>
      </div>
    </section>
  )
}
