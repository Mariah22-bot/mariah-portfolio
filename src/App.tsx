import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { NavBar } from './components/Layout/NavBar'
import { WindowMenu } from './components/Layout/WindowMenu'
import { Routes, Route } from 'react-router-dom'
import { Projetos } from './components/Projetos'
import { Sobre } from './components/Sobre'
import { Contato } from './components/Contato'

type MenuItem = 'projetos' | 'sobre' | 'contato'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)
  const handleMenuItem = (item: MenuItem) => {
    console.log('Menu item selecionado:', item)
  }

  return (
    <Main>
      <NavBar
        isOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />

      <Routes>
        <Route path="/" element=
          {<InteractiveContainer showHotspots={isMenuOpen} onSelectHotspot={closeMenu}>
          </InteractiveContainer>} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <WindowMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onSelectItem={handleMenuItem}
      />
    </Main>
  )
}

export default App
