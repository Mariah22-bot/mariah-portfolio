import type { ReactNode } from "react";

/* Navegação */

export type Section = "sobre" | "projetos" | "contato";

/* InteractiveContainer */

export interface InteractiveContainerProps {
    showHotspots?: boolean;
    onSelectHotspot?: () => void;
}

/* Hotspot Base */

export interface HotspotProps {
    href: `#${Section}`;
    section: Section;
    transform?: string;
    animate?: boolean;
    children: ReactNode;
    /** Controla se a palavra (ShowWord) deve ser exibida para este hotspot */
    showWord?: boolean;

    /** Força o estado de hover externamente (ex: grupo de cachos) */
    hovered?: boolean;

    onNavigate: (section: Section) => void;
}

/* Eye */

export interface EyeHotspotProps {
    side: "left" | "right";
    animate?: boolean;

    onNavigate: (section: Section) => void;
}

/* Hair */

export interface HairHotspotProps {
    variant: "left" | "center" | "right";
    animate?: boolean;

    /** Recebe hover de grupo, se houver */
    hovered?: boolean;

    onNavigate: (section: Section) => void;
}

/* Mouth */

export interface MouthHotspotProps {
    animate?: boolean;

    onNavigate: (section: Section) => void;
}
