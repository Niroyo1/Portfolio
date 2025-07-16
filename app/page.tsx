import Main from './components/main'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Technologies from './components/technologies'
import Projects from './components/projects'
import LanguageSwitcher from './components/languageSwitcher'

export default function Home() {
  return (
    <>
      <main className="relative w-full bg-RichBlack">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black pointer-events-none z-10" />
        <LanguageSwitcher />
        <div className="flex flex-col 2xl:flex-row min-h-screen py-30 px-6 2xl:px-46 relative z-20">
          <div className="2xl:w-[40%] 2xl:fixed md:h-full">
            <Main />
          </div>
          <div className="2xl:w-[60%] 2xl:ml-[40%] mt-6 2xl:mt-0 px-4 2xl:px-0">
            <About />
            <div className="pr-0 2xl:pr-30">
              <Experience />
              <Education />
              <Technologies />
              <Projects />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

