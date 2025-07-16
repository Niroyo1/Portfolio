'use client'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import '../../lib/i18n'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}

const technologies = [
  { name: "Next js", icon: "/icons/NextJs.svg", row: 1 },
  { name: "React", icon: "/icons/React.svg", row: 1 },
  { name: "Node js", icon: "/icons/NodeJs.svg", row: 1 },
  { name: "Tailwind", icon: "/icons/Tailwind.svg", row: 1 },
  { name: "Express js", icon: "/icons/Express.svg", row: 1 },
  { name: "WWP Pattern", icon: "/icons/WWP.svg", row: 2 },
  { name: "Genexus", icon: "/icons/Genexus.svg", row: 2 },
  { name: "K2B Pattern", icon: "/icons/K2B.svg", row: 2 },
  { name: "MySQL", icon: "/icons/Mysql.svg", row: 3 },
  { name: "MongoDB", icon: "/icons/MongoDB.svg", row: 3 },
  { name: "MSSQL", icon: "/icons/MSSQL.svg", row: 3 },
  { name: "PosgreSQL", icon: "/icons/Posgre.svg", row: 3 },
  { name: "Oracle", icon: "/icons/Oracle.svg", row: 3 },
  { name: "C#", icon: "/icons/Csharp.svg", row: 4 },
  { name: "Unity", icon: "/icons/Unity.svg", row: 4 },
]

const groupedByRow = technologies.reduce((acc, tech) => {
  if (!acc[tech.row]) acc[tech.row] = []
  acc[tech.row].push(tech)
  return acc
}, {} as Record<number, typeof technologies>)

export default function Technologies() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section className="py-20 text-left">
      <h2 className="text-Aquamarine text-3xl font-bold mb-12 text-center sm:text-left">
        {t('technologiesTitle')}
      </h2>
      <div className="flex flex-col gap-8 ml-4">
        {Object.entries(groupedByRow)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([row, techs]) => {
            const shouldLoop = (isClient && ((isMobile && techs.length > 1) || techs.length > 3))
            const itemsToRender = shouldLoop ? [...techs, ...techs] : techs

            return (
              <div
                key={row}
                className="ring-2 ring-LightCyan hover:ring-Aquamarine rounded-2xl"
              >
                {shouldLoop ? (
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={24}
                    loop={true}
                    speed={8000}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={true}
                    className="w-full px-4"
                  >
                    {itemsToRender.map((tech, index) => (
                      <SwiperSlide key={`${tech.name}-${index}`} className="!w-40">
                        <TechnologyCard tech={tech} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="flex justify-center gap-2 flex-wrap">
                    {itemsToRender.map((tech, index) => (
                      <TechnologyCard key={`${tech.name}-${index}`} tech={tech} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </section>
  )
}

function TechnologyCard({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div className="w-36 h-28 flex flex-col items-center justify-center gap-4 p-3 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-LightCyan font-semibold text-center text-lg">
        {tech.name}
      </span>
    </div>
  )
}
