import React from "react";
import type { Section } from "../types";

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