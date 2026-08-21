/**
 SVG TRANSFORMS -
 Todas as transformações SVG ficam centralizadas aqui.
 */

export const TRANSFORMS = {

    mouth: `
        translate(16 -210)
    `,

    eye: `
        translate(5 -1)
    `,

    hair: {

        center: `
            translate(12 -230)
        `,

        left: `
            translate(-54 -230)
            rotate(-32 485 260)
        `,

        right: `
            translate(94 -230)
            rotate(32 485 260)
        `,

    },

} as const;