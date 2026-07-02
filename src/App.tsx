import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { Navbar } from './components/Layout/Navbar'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

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
    </Main>
  )
}

export default App
