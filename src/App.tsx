import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { NavBar } from './components/Layout/NavBar'
import { WindowMenu } from './components/Layout/WindowMenu'
import { Projetos } from './components/Projetos'
import { Sobre } from './components/Sobre'
import { Contato } from './components/Contato'
import type { MenuItem } from './types/menu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (section: MenuItem) => {
    const target = document.getElementById(section)
    if (!target) return

    // Rolagem suave para a seção, compensando a altura da NavBar quando aberta
    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    const NavBarOffset = isMenuOpen ? 80 : 0
    const offsetPosition = targetPosition - NavBarOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    closeMenu()
  }

  return (
    <Main>
      <NavBar
        isOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
        onHomeClick={() => scrollToSection('home')}
      />

      <WindowMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onSelectItem={scrollToSection}
      />

      <div className="grow w-full px-4 sm:px-6 md:px-8">
        <section id="home" className="scroll-mt-24 min-h-[85vh] flex items-center justify-center">
          <InteractiveContainer onSelectHotspot={closeMenu} />
        </section>

        {/*
          md (Medium): 768px
          lg (Large): 1024px
        */}

        <section id="sobre"
          className="scroll-mt-210 
                     min-[500px]:max-[766px]:scroll-mt-18
                     min-[767px]:max-[1278px]:scroll-mt-20
                     min-[1279px]:scroll-mt-20

                     -mt-10 
                     min-[454.55px]:max-[960px]:mt-30 
                     md:mt-40 
                     lg:mt-50"
        >
          <Sobre />
        </section>

        <section id="projetos"
          className="scroll-mt-125
                     min-[500px]:max-[766px]:scroll-mt-10
                     min-[767px]:max-[1278px]:scroll-mt-10
                     min-[1279px]:scroll-mt-10"
                     
        >
          <Projetos />
        </section>
      </div>

      <section id="contato"
        className='scroll-mt-10'
      >
        <Contato />
      </section>

    </Main>
  )
}

export default App
