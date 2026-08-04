/**
 * HOTSPOT CONSTANTS

 * Este arquivo centraliza todas as constantes utilizadas
 * pelos hotspots.
 */

/* ==========================================================
 * Cores
 * ========================================================== */

export const COLORS = {
    eye: "var(--color-glow-eye)",
    hair: "var(--color-glow-hair)",
    mouth: "var(--color-glow-mouth)",
} as const;

/* ==========================================================
 * Stroke
 * ========================================================== */

export const STROKE = {
    eye: {
        outline: 4,
        line: 4,
    },

    mouth: {
        outline: 4,
        line: 4,
    },

    hair: {
        outline: 4,
        clickArea: 40,
    },

} as const;

/* ==========================================================
 * Opacidade
 * ========================================================== */

export const OPACITY = {
    hidden: 0.2,
    default: 0.4,
    visible: 0.8,
    active: 0.9,
    hover: 1,
} as const;

/* ==========================================================
 * Animações
 * ========================================================== */

export const ANIMATION = {
    duration: 500,
    hoverScale: 1.1,
} as const;

/* ==========================================================
 * Classes compartilhadas
 * ========================================================== */

export const CLASSES = {
    hotspot: `
        fill-none
        transition-all
        duration-500
        animate-float
    `,

    stroke: `
        transition-opacity
        duration-500
    `,

    clickArea: `
        cursor-pointer
    `,

} as const;