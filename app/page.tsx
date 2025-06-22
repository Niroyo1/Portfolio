import Main from './components/main'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Technologies from './components/technologies'
import LanguageSwitcher from './components/languageSwitcher'

export default function Home() {
  return (
    <>
      <main className="relative w-full bg-RichBlack">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black pointer-events-none z-10" />
        <LanguageSwitcher />
        <div className="flex flex-col md:flex-row min-h-screen py-30 px-6 md:px-50 relative z-20">
          <div className="md:w-[40%] md:fixed md:h-full">
            <Main />
          </div>
          <div className="md:w-[60%] md:ml-[40%] mt-6 md:mt-0 px-4 md:px-0">
            <About />
            <div className="pr-0 md:pr-40">
              <Experience />
              <Education />
              <Technologies />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
