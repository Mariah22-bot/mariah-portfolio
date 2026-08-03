// import React from "react";
// import type { InteractiveContainerProps, Section } from "./types";
// import { EyeHotspot } from "./EyeHotspot";
// import { HairHotspot } from "./HairHotspot";
// import { MouthHotspot } from "./MouthHotspot";
// 
// export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
//     showHotspots = true,
//     onSelectHotspot,
// }) => {
//     const handleNavigation = (section: Section) => {
//         console.log(`Navegando para a seção: ${section}`);
//         if (onSelectHotspot) {
//             onSelectHotspot();
//         }
// 
//         const element = document.getElementById(section);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };
// 
//     return (
//         /* Mudança aqui: Tiramos o aspect-[2/1] e deixamos o container se ajustar à imagem */
//         <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center overflow-hidden rounded-lg">
// 
//             {/* Imagem Artística de Fundo */}
//             <img
//                 src="/src/assets/images/imagem-central.png" // Substitua pelo caminho correto do seu arquivo de imagem
//                 alt="Mariáh Cyber Avatar"
//                 /* Mudança aqui: 'w-full h-auto' mantém a proporção real da arte sem cortar nada */
//                 className="w-full h-auto select-none pointer-events-none block"
//             />
// 
//             {/* Camada SVG Interativa com Overlays */}
//             {showHotspots && (
//                 <svg
//                     viewBox="0 0 1000 500"
//                     /* Garantimos que o SVG se ajuste exatamente às mesmas dimensões da imagem */
//                     className="absolute inset-0 w-full h-full select-none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     {/* Hotspots do Cabelo (Projetos) */}
//                     <HairHotspot variant="left" animate={false} onNavigate={handleNavigation} />
//                     <HairHotspot variant="center" animate={false} onNavigate={handleNavigation} />
//                     <HairHotspot variant="right" animate={false} onNavigate={handleNavigation} />
// 
//                     {/* Hotspots dos Olhos (Sobre) */}
//                     <EyeHotspot side="left" animate={false} onNavigate={handleNavigation} />
//                     <EyeHotspot side="right" animate={false} onNavigate={handleNavigation} />
// 
//                     {/* Hotspot da Boca (Contato) */}
//                     <MouthHotspot animate={false} onNavigate={handleNavigation} />
//                 </svg>
//             )}
//         </div>
//     );
// };
// 
// export default InteractiveContainer;



// import React from "react";
// import type { InteractiveContainerProps, Section } from "./types";
// import { EyeHotspot } from "./EyeHotspot";
// import { HairHotspot } from "./HairHotspot";
// import { MouthHotspot } from "./MouthHotspot";
// 
// export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
//     showHotspots = true,
//     onSelectHotspot,
// }) => {
//     const handleNavigation = (section: Section) => {
//         console.log(`Navegando para a seção: ${section}`);
//         if (onSelectHotspot) {
//             onSelectHotspot();
//         }
// 
//         const element = document.getElementById(section);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };
// 
//     return (
//         /* 
//           MUDANÇA AQUI:
//           - Trocamos o 'max-w-5xl' antigo por um controle dinâmico.
//           - 'w-full' garante que seja responsivo em telas menores.
//           - 'max-[1920px]:max-w-[905px]' trava o tamanho máximo em exatamente 905px para qualquer monitor ATÉ 1920px de largura.
//           - Se a tela for maior que 1920px, ele passa a ignorar essa trava e cresce livremente.
//         */
//         <div className="relative w-full max-[1920px]:max-w-226.25 mx-auto flex items-center justify-center overflow-hidden rounded-lg">
// 
//             {/* Imagem Artística de Fundo */}
//             <img
//                 src="/src/assets/images/imagem-central.png" // Lembre-se de manter o caminho correto do seu arquivo
//                 alt="Mariáh Cyber Avatar"
//                 /* w-full e h-auto mantêm a proporção quadrada 1:1 perfeita (905x905) da sua imagem */
//                 className="w-full h-auto select-none pointer-events-none block z-0"
//             />
// 
//             {/* Camada SVG Interativa com Overlays */}
//             {showHotspots && (
//                 <svg
//                     viewBox="0 0 1000 500"
//                     className="absolute top-0 left-0 w-full h-full select-none z-10 pointer-events-auto"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     {/* Hotspots do Cabelo (Projetos) */}
//                     <HairHotspot variant="left" animate={false} onNavigate={handleNavigation} />
//                     <HairHotspot variant="center" animate={false} onNavigate={handleNavigation} />
//                     <HairHotspot variant="right" animate={false} onNavigate={handleNavigation} />
// 
//                     {/* Hotspots dos Olhos (Sobre) */}
//                     <EyeHotspot side="left" animate={false} onNavigate={handleNavigation} />
//                     <EyeHotspot side="right" animate={false} onNavigate={handleNavigation} />
// 
//                     {/* Hotspot da Boca (Contato) */}
//                     <MouthHotspot animate={false} onNavigate={handleNavigation} />
//                 </svg>
//             )}
//         </div>
//     );
// };
// 
// export default InteractiveContainer;


import React, { useState, useEffect } from "react";
import type { InteractiveContainerProps, Section } from "./types";
import { EyeHotspot } from "./hotspots/EyeHotspot";
import { HairHotspot } from "./hotspots/HairHotspot";
import { MouthHotspot } from "./hotspots/MouthHotspot";

export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
    showHotspots = true,
    onSelectHotspot,
}) => {
    const [maxWidth, setMaxWidth] = useState<string>("905px");

    useEffect(() => {
        const handleResize = () => {
            // Se a tela for maior que 1920px, remove o limite de 905px (deixa crescer livre)
            if (window.innerWidth > 1920) {
                setMaxWidth("none");
            } else {
                // Para qualquer tela ATÉ 1920px, crava o limite máximo em 905px
                setMaxWidth("905px");
            }
        };

        // Executa ao montar o componente e adiciona o listener de redimensionamento
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavigation = (section: Section) => {
        console.log(`Navegando para a seção: ${section}`);
        if (onSelectHotspot) {
            onSelectHotspot();
        }

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        /* 
          Injetamos o max-width dinamicamente via style inline para garantir compatibilidade total,
          independentemente de como o compilador do Tailwind v4 esteja interpretando as classes.
        */
        <div
            style={{ maxWidth: maxWidth }}
            className="relative w-full mx-auto flex items-center justify-center overflow-hidden rounded-lg"
        >

            {/* Imagem Artística de Fundo */}
            <img
                src="/src/assets/images/mariah-avatar.png" // Mantenha o seu caminho real aqui
                alt="Mariáh Cyber Avatar"
                className="w-full h-auto select-none pointer-events-none block z-0"
            />

            {/* Camada SVG Interativa com Overlays */}
            {showHotspots && (
                <svg
                    viewBox="0 0 1000 500"
                    className="absolute top-0 left-0 w-full h-full select-none z-10 pointer-events-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Hotspots do Cabelo (Projetos) */}
                    <HairHotspot variant="left" animate={false} onNavigate={handleNavigation} />
                    <HairHotspot variant="center" animate={false} onNavigate={handleNavigation} />
                    <HairHotspot variant="right" animate={false} onNavigate={handleNavigation} />

                    {/* Hotspots dos Olhos (Sobre) */}
                    <EyeHotspot side="left" animate={false} onNavigate={handleNavigation} />
                    <EyeHotspot side="right" animate={false} onNavigate={handleNavigation} />

                    {/* Hotspot da Boca (Contato) */}
                    <MouthHotspot animate={false} onNavigate={handleNavigation} />
                </svg>
            )}
        </div>
    );
};

export default InteractiveContainer;