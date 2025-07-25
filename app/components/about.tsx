'use client'
import { Trans, useTranslation } from 'react-i18next'
import '../../lib/i18n'
import { useEffect, useState } from 'react'

export default function About() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section className="flex flex-col justify-center text-LightCyan text-2xl lg:pr-34">
      <p>
        <Trans
          i18nKey="about"
          components={{
            1: <span className="text-Aquamarine" />,
            2: <span className="text-Aquamarine" />,
          }}
        />
      </p>
    </section>
  )
}