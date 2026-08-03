import React from "react";
import type { HairHotspotProps } from "../types";
import { Hotspot } from ".";
import { HAIR } from "../paths";
import { TRANSFORMS } from "../transforms";
import { COLORS, STROKE, OPACITY } from "../constants";

export const HairHotspot: React.FC<HairHotspotProps> = ({
  variant,
  animate,
  onNavigate,
}) => {
  const section = "projetos";
  const transform = TRANSFORMS.hair[variant];
  const href = `#${section}` as const;

  return (
    <Hotspot
      href={href}
      section={section}
      transform={transform}
      animate={animate}
      onNavigate={onNavigate}
    >
      {/* Área de clique estendida */}
      <path
        d={HAIR.path}
        fill="none"
        stroke="transparent"
        strokeWidth={STROKE.hair.clickArea}
        strokeLinecap="round"
        className="cursor-pointer"
      />

      {/* Cacho de Neon Visível */}
      <path
        d={HAIR.path}
        fill="none"
        stroke={COLORS.hair}
        strokeWidth={STROKE.hair.outline}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: OPACITY.visible }} /* Força a visibilidade imediata */
        className="transition-opacity duration-500 group-hover:opacity-100"
      />
    </Hotspot>
  );
};