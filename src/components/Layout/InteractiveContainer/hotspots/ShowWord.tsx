import React, { useEffect, useMemo, useState } from "react";
import type { Section } from "../types";

interface ShowWordProps {
    section: Section;
    transformStr: string;
}

/**
 * Mostra a palavra inteira imediatamente ao montar, mantém por 3s e
 * então faz desaparecer letra-a-letra (do início ao fim).
 */
export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr }) => {
    const getLabel = () => {
        if (section === "sobre") return "SOBRE";
        if (section === "projetos") return "PROJETOS";
        if (section === "contato") return "CONTATO";
        return String(section).toUpperCase();
    };

    const label = useMemo(() => getLabel(), [section]);
    const letters = useMemo(() => label.split(""), [label]);
    const isRightEye = section === "sobre" && transformStr.includes("scale(-1");

    const getCoordinates = () => {
        if (section === "sobre") {
            return isRightEye ? { x: 476, y: 625 } : { x: 482, y: 625 };
        }
        if (section === "contato") {
            return { x: 495, y: 800 };
        }
        if (section === "projetos") {
            return { x: 485, y: 200 };
        }
        return { x: 0, y: 0 };
    };

    const coords = getCoordinates();

    // true = letra visível
    const [visible, setVisible] = useState<boolean[]>(() => letters.map(() => false));

    useEffect(() => {
        const appearMs = 200; // intervalo entre cada letra aparecer (efeito digitação)
        const stayMs = 2500; // manter palavra inteira visível após o último caractere
        const disappearMs = 200; // intervalo entre cada letra desaparecer

        const appearTimers: number[] = [];
        const hideTimers: number[] = [];

        // Agendar aparecimento das letras (digitação)
        letters.forEach((_, i) => {
            const t = window.setTimeout(() => {
                setVisible((prev) => {
                    const copy = [...prev];
                    copy[i] = true;
                    return copy;
                });
            }, i * appearMs);
            appearTimers.push(t);
        });

        // Após a última letra aparecer, aguarda stayMs e então inicia o sumiço sequencial
        const totalAppearTime = (letters.length - 1) * appearMs;
        const startHide = window.setTimeout(() => {
            letters.forEach((_, i) => {
                const t = window.setTimeout(() => {
                    setVisible((prev) => {
                        const copy = [...prev];
                        copy[i] = false;
                        return copy;
                    });
                }, i * disappearMs);
                hideTimers.push(t);
            });
        }, totalAppearTime + stayMs);

        // cleanup
        return () => {
            appearTimers.forEach((t) => clearTimeout(t));
            hideTimers.forEach((t) => clearTimeout(t));
            clearTimeout(startHide);
        };
        // rodar apenas no mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <text
            x={coords.x}
            y={coords.y}
            textAnchor="middle"
            style={{
                transform: isRightEye ? "scale(-1, 1)" : "none",
                transformOrigin: `${coords.x}px ${coords.y}px`,
            }}
            className="fill-pink-300 font-cyber text-7xl tracking-widest font-bold pointer-events-none select-none drop-shadow-[0_0_6px_rgba(1,211,238,0.7)]"
        >
            {letters.map((letter, index) => (
                <tspan
                    key={index}
                    style={{
                        opacity: visible[index] ? 1 : 0,
                        transition: "opacity 0.12s linear",
                        // mantém o espaçamento quando a letra sumir
                        display: "inline-block",
                    }}
                >
                    {letter}
                </tspan>
            ))}
        </text>
    );
};