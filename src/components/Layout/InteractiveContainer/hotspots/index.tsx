import React, { useState } from "react";
import type { HotspotProps } from "../types";
import { CLASSES } from "../constants";
import { ShowWord } from "./ShowWord"

export const Hotspot: React.FC<HotspotProps> = ({
    section,
    transform,
    animate,
    children,
    showWord = true,
    hovered: externalHovered,
    onNavigate,
}) => {

    const getDelay = () => {
        const transformStr = String(transform || '');
        if (transformStr.includes('scale(-1')) return '0.5s';
        if (transformStr.includes('rotate(-32')) return '1s';
        if (transformStr.includes('rotate(32')) return '1.5s';
        return '0s';
    };

    const [hovered, setHovered] = useState(false);
    const effectiveHovered = externalHovered ?? hovered;
    // touch state: em dispositivos touch, primeiro toque apenas mostra a palavra;
    // segundo toque dispara a navegação.
    const [touchActive, setTouchActive] = useState(false);
    const touchTimerRef = React.useRef<number | null>(null);

    const isTouchDevice = typeof navigator !== 'undefined' && (navigator.maxTouchPoints > 0 || ('ontouchstart' in window));

    const clearTouch = () => {
        if (touchTimerRef.current) {
            clearTimeout(touchTimerRef.current);
            touchTimerRef.current = null;
        }
        setTouchActive(false);
    };

    const handleHotspotClick = (e: React.MouseEvent<SVGGElement, MouseEvent>) => {
        // Em dispositivos touch, alternamos: primeiro toque apenas ativa o texto;
        // segundo toque realmente navega.
        if (isTouchDevice) {
            if (!touchActive) {
                // mostra a palavra
                setTouchActive(true);
                // limpa após 2.5s para permitir um segundo toque
                touchTimerRef.current = window.setTimeout(() => {
                    setTouchActive(false);
                    touchTimerRef.current = null;
                }, 2500);
                // evita navegação neste clique
                e.stopPropagation();
                return;
            }
            // se já estava ativo por toque, segue para navegação
            clearTouch();
            onNavigate(section);
            return;
        }

        // comportamento padrão para mouse/desktop
        onNavigate(section);
    };

    return (
        /* GRUPO EXTERNO: Cuida estritamente de encaixar o hotspot no lugar certo do rosto */
        <g transform={transform}>

            {/* GRUPO INTERNO: Cuida exclusivamente das animações, do zoom e do clique */}
            <g
                onClick={handleHotspotClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    animationDelay: getDelay(),
                    transformBox: "fill-box",     /* Garante que o centro seja o próprio traço */
                    transformOrigin: "center"     /* Alinha o zoom perfeitamente no meio do desenho */
                }}
                /* 
                   Movemos o animate-float, as classes de hover e as durações para cá. 
                   Quando existe hovered externo, aplicamos a escala via classe para forçar o efeito nos 3 cachos.
                */
                className={`${CLASSES.hotspot} ${CLASSES.clickArea} ${animate ? "animate-pulse" : ""} group pointer-events-auto cursor-pointer transition-all duration-700 ${effectiveHovered ? 'scale-115' : 'hover:scale-115'}`}
            >
                {children}
                {showWord && (
                    <ShowWord
                        section={section}
                        transformStr={String(transform || '')}
                        hovered={effectiveHovered || touchActive}
                    />
                )}
            </g>
        </g>
    );
};