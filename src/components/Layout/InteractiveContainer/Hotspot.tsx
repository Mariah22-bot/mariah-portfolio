import React from "react";
import type { HotspotProps } from "./types";
import { CLASSES } from "./constants";
import { ShowWord } from "./ShowWord"; // Importando com o novo nome

export const Hotspot: React.FC<HotspotProps> = ({
    section,
    transform,
    animate,
    children,
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

    return (
        /* GRUPO EXTERNO: Cuida estritamente de encaixar o hotspot no lugar certo do rosto */
        <g transform={transform}>

            {/* GRUPO INTERNO: Cuida exclusivamente das animações, do zoom e do clique */}
            <g
                onClick={handleClick}
                style={{
                    animationDelay: getDelay(),
                    transformBox: "fill-box",     /* Garante que o centro seja o próprio traço */
                    transformOrigin: "center"     /* Alinha o zoom perfeitamente no meio do desenho */
                }}
                /* 
                   Movemos o animate-float, as classes de hover e as durações para cá. 
                   Adicionamos 'transition-all duration-300 hover:scale-105' sem quebrar a estrutura externa!
                */
                className={`${CLASSES.hotspot} ${CLASSES.clickArea} ${animate ? "animate-pulse" : ""
                    } group pointer-events-auto cursor-pointer transition-all duration-700 hover:scale-115`}
            >
                {children}
                <ShowWord section={section} transformStr={String(transform || '')} />
            </g>
        </g>
    );
};