export const primitiveTypography = {
  size: {
    xxs: 10,
    xs: 11,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    tight: -0.2,
    normal: 0,
    wide: 0.3,
    wider: 0.8,
    /** Figma chance badge: 2% of 12px */
    chance2Pct: 0.24,
  },
  lineHeight: {
    /** Mono badge: ≥ font size so RN vertically centers in 18px chip */
    chanceBadge: 12,
    bodySm: 16,
    bodyMd: 20,
  },
} as const;

