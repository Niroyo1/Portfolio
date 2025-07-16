'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Trans, useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import '../../lib/i18n'

interface ProjectItem {
  key: string
  name: string
  image: string
  url: string
  tags: string[]
}

const projects: ProjectItem[] = [
  {
    key: 'projectMiCartelera',
    name: 'MiCartelera',
    image: '/projects/miCartelera.png',
    url: 'https://github.com/Niroyo1/Cartelera',
    tags: ["Next js", "TypeScript", "Tailwind", "PosgreSQL", "Vercel"]
  },
  {
    key: 'projectIsThisFlag',
    name: 'Is this Flag???',
    image: '/projects/isThisFlag.png',
    url: 'https://isthisflag.vercel.app/',
    tags: ["Vite", "React", "TypeScript", "Tailwind", "Express js", "Socket.IO", "MongoDB", "Vercel", "Render"]
  },
]

export default function Projects() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section className="py-20 text-left">
      <h2 className="text-Aquamarine text-3xl font-bold mb-8 text-center sm:text-left">
        {t('projectsTitle')}
      </h2>

      {projects.map(({ key, name, image, url }) => (
        <Link
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-12 p-10 rounded-xl hover:ring-2 hover:ring-Aquamarine transition-all"
        >
          <div className="flex flex-col gap-4">
            <div className="max-w-4xl aspect-5/2 relative hidden sm:block">
              <Image
                src={image}
                alt={name}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="text-white mt-5 text-2xl font-semibold transition-colors duration-300 group-hover:text-Aquamarine">
              {name}
            </h3>
            <div className="text-lg text-LightCyan">
              <Trans
                i18nKey={`${key}.description`}
                components={{ 1: <br /> }}
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {projects.find(p => p.key === key)?.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-black text-Aquamarine text-sm px-3 py-1 rounded-full border border-Aquamarine"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
