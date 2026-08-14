import React, { useState } from "react";
import type { HotspotProps } from "../types";
import { CLASSES } from "../constants";
import { ShowWord } from "./ShowWord"; // Importando com o novo nome

export const Hotspot: React.FC<HotspotProps> = ({
    section,
    transform,
    animate,
    children,
    showWord = true,
    hovered: externalHovered,
    onNavigate,
}) => {
    const handleClick = () => {
        onNavigate(section);
    };

    const getDelay = () => {
        const transformStr = String(transform || '');
        if (transformStr.includes('scale(-1')) return '0.5s';
        if (transformStr.includes('rotate(-32')) return '1s';
        if (transformStr.includes('rotate(32')) return '1.5s';
        return '0s';
    };

    const [hovered, setHovered] = useState(false);
    const effectiveHovered = externalHovered ?? hovered;

    return (
        /* GRUPO EXTERNO: Cuida estritamente de encaixar o hotspot no lugar certo do rosto */
        <g transform={transform}>

            {/* GRUPO INTERNO: Cuida exclusivamente das animações, do zoom e do clique */}
            <g
                onClick={handleClick}
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
                        hovered={effectiveHovered}
                    />
                )}
            </g>
        </g>
    );
};