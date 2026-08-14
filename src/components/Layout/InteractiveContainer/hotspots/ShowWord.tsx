import React, { useMemo, useState } from "react";
import type { Section } from "../types";

interface ShowWordProps {
    section: Section;
    transformStr: string;
    /** Quando true, dispara a animação de aparecer/sumir (ex: hover) */
    hovered?: boolean;
}

/**
 * Mostra a palavra inteira imediatamente ao montar, mantém por 3s e
 * então faz desaparecer letra-a-letra (do início ao fim).
 */
export const ShowWord: React.FC<ShowWordProps> = ({ section, transformStr, hovered }) => {
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
            return isRightEye ? { x: 476, y: 555 } : { x: 482, y: 555 };
        }
        if (section === "contato") {
            return { x: 495, y: 800 };
        }
        if (section === "projetos") {
            return { x: 485, y: 300 };
        }
        return { x: 0, y: 0 };
    };

    const coords = getCoordinates();

    // controla visibilidade de toda a palavra (todas as letras juntas)
    const [visible, setVisible] = useState<boolean>(false);

    // duração e tempos configuráveis
    const appearDuration = 1000; // ms para o fade-in (mais devagar)
    const stayMs = 1000; // permanecer visível por 1s

    // timers refs para controlar execução da sequência
    const showTimerRef = React.useRef<number | null>(null);
    const hideTimerRef = React.useRef<number | null>(null);

    const clearAll = () => {
        if (showTimerRef.current) {
            clearTimeout(showTimerRef.current);
            showTimerRef.current = null;
        }
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    };

    const startSequence = () => {
        clearAll();
        // começa invisível e depois faz fade-in coletivo
        setVisible(false);

        // small delay to allow transition to apply
        showTimerRef.current = window.setTimeout(() => {
            setVisible(true);
        }, 100);

        // programar fade-out após aparecer + permanecer
        hideTimerRef.current = window.setTimeout(() => {
            setVisible(false);
        }, appearDuration + stayMs + 100);
    };

    // roda no mount
    React.useEffect(() => {
        startSequence();
        return () => clearAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // quando o mouse entra: mostra e cancela timers; quando sai: esconde (fade-out)
    React.useEffect(() => {
        if (hovered) {
            clearAll();
            setVisible(true);
        } else {
            // se o mouse saiu, esconder imediatamente (com a transição de opacidade)
            setVisible(false);
        }
    }, [hovered]);

    const gradId = `sw-grad-${section}`;
    const glowId = `sw-glow-${section}`;

    return (
        <g
            transform={isRightEye ? `scale(-1,1) translate(${-coords.x * 2},0)` : undefined}
            style={{ opacity: visible ? 1 : 0, transition: `opacity ${appearDuration}ms ease` }}
            className="pointer-events-none select-none"
        >
            <defs>
                <linearGradient id={gradId} x1="0" x2="1">
                    <stop offset="0%" stopColor="#7df0ff" />
                    <stop offset="100%" stopColor="#ff80e1" />
                </linearGradient>

                <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <text
                x={coords.x}
                y={coords.y}
                textAnchor="middle"
                letterSpacing={"0.25em"}
                fill={`url(#${gradId})`}
                stroke="rgba(0,0,0,0.12)"
                strokeWidth={0.6}
                style={{
                    transformOrigin: `${coords.x}px ${coords.y}px`,
                    fontFamily: 'Orbitron, "Press Start 2P", sans-serif',
                    fontWeight: 700,
                    fontSize: 52,
                    paintOrder: 'stroke fill',
                    textRendering: 'geometricPrecision',
                }}
                filter={`url(#${glowId})`}
                className="pointer-events-none"
            >
                {letters.join("")}
            </text>
        </g>
    );
};