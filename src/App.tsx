import { useState } from 'react'
import { Main } from './components/Layout/Main'
import { InteractiveContainer } from './components/Layout/InteractiveContainer'
import { NavBar } from './components/Layout/NavBar/index.tsx'
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

    // 1. Descobre onde a seção está em relação ao topo da página
    const targetPosition = target.getBoundingClientRect().top + window.scrollY

    // 2. Verifica se a NavBar está visível na tela (usando o nosso estado isMenuOpen ou checando a classe)
    // Se o menu de janela está aberto, com certeza a NavBar também está ativa.
    // Vamos definir uma compensação (offset) de 80 pixels se o menu estiver aberto, ou 0 se veio da imagem inicial.
    const NavBarOffset = isMenuOpen ? 80 : 0

    // 3. Faz o cálculo real: posição do alvo MENOS o espaço que a barra ocupa
    const offsetPosition = targetPosition - NavBarOffset

    // 4. Executa a rolagem precisa
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    // 5. Fecha o menu de janela
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
