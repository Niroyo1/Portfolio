'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import '../../lib/i18n'

interface ExperienceItem {
  key: string
  period: string
  url: string
}

const experiences: ExperienceItem[] = [
  {
    key: 'experienceBigCheese',
    period: '2022 - 2025',
    url: 'https://wearebigcheese.com/',
  },
]

export default function Experience() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section className="py-20 text-left">
      <h2 className="text-Aquamarine text-3xl font-bold mb-8 text-center sm:text-left">
        {t('experienceTitle')}
      </h2>

      {experiences.map(({ key, period, url }) => (
        <Link
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-10 p-4 pl-4 rounded-xl hover:ring-2 hover:ring-Aquamarine hover:bg-[#0b0f14]"
        >
          <div className="flex justify-start items-center flex-wrap gap-x-4 gap-y-2">
            <h3 className="text-white text-2xl font-semibold transition-colors duration-75 group-hover:text-Aquamarine">
              {t(`${key}.company`)}
            </h3>
            <span className="text-LightCyan text-sm pb-4">{period}</span>
          </div>
          <p className="mt-4 text-lg text-LightCyan ">{t(`${key}.description`)}</p>
        </Link>
      ))}
    </section>
  )
}
