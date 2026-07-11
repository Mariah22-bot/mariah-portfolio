// import React from "react";
// import type { Section } from "./types";
// 
// interface ShowWordProps {
//     section: Section;
//     transformStr: string;
// }
// 
// export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr }) => {
//     // Define a palavra que vai aparecer na tela
//     const getLabel = () => {
//         if (section === "sobre") return "SOBRE";
//         if (section === "projetos") return "PROJETOS";
//         if (section === "contato") return "CONTATO";
//         return String(section).toUpperCase();
//     };
// 
//     // Identifica se este componente específico está renderizando o olho direito espelhado
//     const isRightEye = section === "sobre" && transformStr.includes("scale(-1");
// 
//     // Define a posição anatômica exata de onde a palavra vai brotar no SVG
//     const getCoordinates = () => {
//         // 1. Olhos (SOBRE)
//         if (section === "sobre") {
//             if (isRightEye) {
//                 /* 
//                   MATEMÁTICA DO SVG:
//                   Como o olho direito move o ponto inicial em +990 e espelha o eixo X (scale(-1)),
//                   para o texto aparecer exatamente no centro real (X: 480), precisamos calcular:
//                   990 - 480 = 510.
//                 */
//                 return { x: 476, y: 520 };
//             }
//             // Olho esquerdo normal
//             return { x: 482, y: 520 };
//         }
// 
//         // 2. Boca (ABAIXO do elemento)
//         if (section === "contato") {
//             return { x: 495, y: 930 };
//         }
// 
//         // 3. Cachos do Cabelo (ABAIXO e centralizada em relação a cada cacho)
//         if (section === "projetos") {
//             if (transformStr.includes('rotate(-32')) return { x: 485, y: 350 }; // Cacho Esquerdo
//             if (transformStr.includes('rotate(32')) return { x: 485, y: 350 };  // Cacho Direito
//             return { x: 485, y: 350 };                                         // Cacho Central
//         }
// 
//         return { x: 0, y: 0 };
//     };
// 
//     const coords = getCoordinates();
// 
//     return (
//         <text
//             x={coords.x}
//             y={coords.y}
//             textAnchor="middle" /* Garante o alinhamento centralizado perfeito a partir do ponto X */
//             style={{
//                 /*
//                   MÁGICA DO ALINHAMENTO:
//                   Se for o olho direito, aplicamos de volta um 'scale(-1, 1)' via CSS inline.
//                   Isso desfaz o espelhamento das letras para ler corretamente "SOBRE" da esquerda para a direita!
//                 */
//                 transform: isRightEye ? "scale(-1, 1)" : "none",
//                 transformOrigin: `${coords.x}px ${coords.y}px`
//             }}
//             className="fill-pink-300 font-cyber text-7xl tracking-widest font-bold pointer-events-none select-none drop-shadow-[0_0_6px_rgba(1,211,238,010)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//             {getLabel()}
//         </text>
//     );
// };


// import React from "react";
// import type { Section } from "./types";
// 
// interface ShowWordProps {
//     section: Section;
//     transformStr: string;
// }
// 
// export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr }) => {
//     // Define a palavra que vai aparecer na tela
//     const getLabel = () => {
//         if (section === "sobre") return "SOBRE";
//         if (section === "projetos") return "PROJETOS";
//         if (section === "contato") return "CONTATO";
//         return String(section).toUpperCase();
//     };
// 
//     const label = getLabel();
// 
//     // Identifica se este componente específico está renderizando o olho direito espelhado
//     const isRightEye = section === "sobre" && transformStr.includes("scale(-1");
// 
//     // Define a posição anatômica exata de onde a palavra vai brotar no SVG
//     const getCoordinates = () => {
//         if (section === "sobre") {
//             if (isRightEye) {
//                 return { x: 476, y: 520 };
//             }
//             return { x: 482, y: 520 };
//         }
// 
//         if (section === "contato") {
//             return { x: 495, y: 930 };
//         }
// 
//         if (section === "projetos") {
//             return { x: 485, y: 350 };
//         }
// 
//         return { x: 0, y: 0 };
//     };
// 
//     const coords = getCoordinates();
// 
//     return (
//         <text
//             x={coords.x}
//             y={coords.y}
//             textAnchor="middle"
//             style={{
//                 transform: isRightEye ? "scale(-1, 1)" : "none",
//                 transformOrigin: `${coords.x}px ${coords.y}px`
//             }}
//             /* 
//                Mantemos a opacidade controlada pelo grupo para o container, 
//                mas removemos a transição de opacidade daqui para dar lugar ao efeito das letras!
//             */
//             className="fill-pink-300 font-cyber text-7xl tracking-widest font-bold pointer-events-none select-none drop-shadow-[0_0_6px_rgba(1,211,238,010)]"
//         >
//             {/* Transformamos a string em um array de letras para animar cada uma individualmente */}
//             {label.split("").map((letter, index) => (
//                 <tspan
//                     key={index}
//                     style={{
//                         /* 
//                           Cada letra começa invisível e, quando o grupo ganha hover, 
//                           ela espera o seu respectivo delay para aparecer instantaneamente!
//                         */
//                         opacity: 0,
//                         animation: "none",
//                         WebkitAnimation: "none",
//                     }}
//                     /* 
//                        Injetamos estilos utilitários dinâmicos via classes do Tailwind 
//                        A mágica acontece quando a classe utilitária do grupo ativa as propriedades abaixo:
//                     */
//                     className="group-hover:animate-[fadeIn_0.05s_steps(1)_forwards] inline-block"
//                     // Controlamos o atraso de digitação de cada letra (0.1s multiplicados pela posição da letra)
//                     styles-delay={`${index * 0.1}s`}
//                     // Para garantir compatibilidade cross-browser pura no CSS:
//                     ref={(el) => {
//                         if (el) {
//                             el.style.setProperty("animation-delay", `${index * 0.1}s`);
//                         }
//                     }}
//                 >
//                     {letter}
//                 </tspan>
//             ))}
//         </text>
//     );
// };


// import React, { useState, useEffect } from "react";
// import type { Section } from "./types";
// 
// interface ShowWordProps {
//     section: Section;
//     transformStr: string;
// }
// 
// export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr }) => {
//     const [typedText, setTypedText] = useState("");
//     const [isHovered, setIsHovered] = useState(false);
// 
//     // Define a palavra completa
//     const getLabel = () => {
//         if (section === "sobre") return "SOBRE";
//         if (section === "projetos") return "PROJETOS";
//         if (section === "contato") return "CONTATO";
//         return String(section).toUpperCase();
//     };
// 
//     const fullText = getLabel();
//     const isRightEye = section === "sobre" && transformStr.includes("scale(-1");
// 
//     // Efeito mecânico de digitação baseado no Hover
//     useEffect(() => {
//         if (!isHovered) {
//             setTypedText(""); // Reseta o texto quando tira o mouse
//             return;
//         }
// 
//         let currentLength = 0;
//         setTypedText(""); // Garante que começa vazio ao entrar o mouse
// 
//         const interval = setInterval(() => {
//             currentLength++;
//             setTypedText(fullText.slice(0, currentLength));
// 
//             if (currentLength >= fullText.length) {
//                 clearInterval(interval);
//             }
//         }, 90); // Velocidade da digitação (90ms por letra)
// 
//         return () => clearInterval(interval);
//     }, [isHovered, fullText]);
// 
//     // Define as coordenadas exatas no plano SVG
//     const getCoordinates = () => {
//         if (section === "sobre") {
//             return isRightEye ? { x: 476, y: 520 } : { x: 482, y: 520 };
//         }
//         if (section === "contato") {
//             return { x: 495, y: 930 };
//         }
//         if (section === "projetos") {
//             return { x: 485, y: 350 };
//         }
//         return { x: 0, y: 0 };
//     };
// 
//     const coords = getCoordinates();
// 
//     return (
//         /* 
//            O truque aqui é escutar o mouse enter/leave diretamente no grupo pai invisível 
//            ou capturar o estado de hover para disparar a função do React.
//         */
//         <text
//             x={coords.x}
//             y={coords.y}
//             textAnchor="middle"
//             style={{
//                 transform: isRightEye ? "scale(-1, 1)" : "none",
//                 transformOrigin: `${coords.x}px ${coords.y}px`
//             }}
//             /* 
//                Adicionamos esses listeners para monitorar quando o mouse entra e sai do elemento.
//                Usamos a classe 'opacity-0 group-hover:opacity-100' para controlar a visibilidade,
//                mas deixamos o JS injetar o texto letra por letra!
//             */
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="fill-pink-300 font-cyber text-7xl tracking-widest font-bold pointer-events-auto select-none drop-shadow-[0_0_6px_rgba(1,211,238,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//         >
//             {typedText}
//         </text>
//     );
// };


import React from "react";
import type { Section } from "./types";

interface ShowWordProps {
    section: Section;
    transformStr: string;
}

export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr }) => {
    // Define a palavra que vai aparecer na tela
    const getLabel = () => {
        if (section === "sobre") return "SOBRE";
        if (section === "projetos") return "PROJETOS";
        if (section === "contato") return "CONTATO";
        return String(section).toUpperCase();
    };

    const label = getLabel();
    const isRightEye = section === "sobre" && transformStr.includes("scale(-1");

    // Define as coordenadas exatas no plano SVG
    const getCoordinates = () => {
        if (section === "sobre") {
            return isRightEye ? { x: 476, y: 520 } : { x: 482, y: 520 };
        }
        if (section === "contato") {
            return { x: 495, y: 930 };
        }
        if (section === "projetos") {
            return { x: 485, y: 350 };
        }
        return { x: 0, y: 0 };
    };

    const coords = getCoordinates();

    return (
        <text
            x={coords.x}
            y={coords.y}
            textAnchor="middle"
            style={{
                transform: isRightEye ? "scale(-1, 1)" : "none",
                transformOrigin: `${coords.x}px ${coords.y}px`
            }}
            /* 
               Voltamos para pointer-events-none para o texto não atrapalhar o mouse no SVG,
               e deixamos o 'group-hover' cuidar de revelar o componente.
            */
            className="fill-pink-300 font-cyber text-7xl tracking-widest font-bold pointer-events-none select-none drop-shadow-[0_0_6px_rgba(1,211,238,0.7)]"
        >
            {/* 
                MÁGICA DO CSS PURO: 
                Quebramos a palavra em letras. Cada tag <tspan> terá um atraso de animação 
                baseado na sua posição. Quando o elemento pai (group) receber o mouse, 
                elas disparam a animação 'fadeIn' que você já tem no seu CSS!
            */}
            {label.split("").map((letter, index) => (
                <tspan
                    key={index}
                    style={{
                        opacity: 0,
                        // Aplica dinamicamente o atraso de digitação (0.08 segundos por letra)
                        animationDelay: `${index * 0.10}s`,
                    }}
                    /*
                      Quando o grupo ganha hover, a animação 'fadeIn' (que está no seu CSS)
                      é ativada usando 'steps(1)' para aparecer de forma seca, como digitação,
                      e 'forwards' para a letra continuar na tela.
                    */
                    className="group-hover:animate-[fadeIn_0.09s_steps(1)_forwards]"
                >
                    {letter}
                </tspan>
            ))}
        </text>
    );
};