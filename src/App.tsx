import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { Navbar } from './components/Layout/NavBar'
import { WindowMenu } from './components/Layout/WindowMenu'

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
      <Navbar
        isOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />
      <InteractiveContainer
        showHotspots={isMenuOpen}
        onSelectHotspot={closeMenu}
      />
      <WindowMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onSelectItem={handleMenuItem}
      />
    </Main>
  )
}

export default App
