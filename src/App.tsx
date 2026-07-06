import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { NavBar } from './components/Layout/NavBar'
import { WindowMenu } from './components/Layout/WindowMenu'
import { Projetos } from './components/Projetos'
import { Sobre } from './components/Sobre'
import { Contato } from './components/Contato'

type MenuItem = 'home' | 'sobre' | 'projetos' | 'contato'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (section: MenuItem) => {
    const target = document.getElementById(section)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

      <div className="flex-grow w-full px-4 sm:px-6 md:px-8">
        <section id="home" className="scroll-mt-24">
          <InteractiveContainer showHotspots={isMenuOpen} onSelectHotspot={closeMenu} />
        </section>

        <section id="sobre" className="scroll-mt-24">
          <Sobre />
        </section>

        <section id="projetos" className="scroll-mt-24">
          <Projetos />
        </section>
      </div>

      <Contato />
    </Main>
  )
}

export default App
