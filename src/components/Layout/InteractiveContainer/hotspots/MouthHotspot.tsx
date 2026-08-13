import React from "react";
import type { MouthHotspotProps } from "../types";
import { Hotspot } from ".";
import { MOUTH } from "../paths";
import { TRANSFORMS } from "../transforms";
import { COLORS, STROKE, OPACITY } from "../constants";

export const MouthHotspot: React.FC<MouthHotspotProps> = ({
  animate,
  onNavigate,
}) => {
  const section = "contato";
  const transform = TRANSFORMS.mouth;
  const href = `#${section}` as const;

  return (
    <Hotspot
      href={href}
      section={section}
      transform={transform}
      animate={animate}
      onNavigate={onNavigate}
    >
      {/* Área de Clique Oculta */}
      <path d={MOUTH.clickArea} fill="transparent" className="cursor-pointer" />

      {/* Contorno dos Lábios */}
      <path
        d={MOUTH.outline}
        fill="none"
        stroke={COLORS.mouth}
        strokeWidth={STROKE.mouth.outline}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: OPACITY.visible }} /* Força a visibilidade imediata */
        className="transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Linha Central da Boca */}
      <path
        d={MOUTH.line}
        fill="none"
        stroke={COLORS.mouth}
        strokeWidth={STROKE.mouth.line}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: OPACITY.visible }}
      />
    </Hotspot>
  );
};