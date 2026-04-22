import { primitiveTypography } from '../primitives';

export const typography = {
  overline: {
    fontSize: primitiveTypography.size.xxs,
    fontWeight: primitiveTypography.weight.medium,
    letterSpacing: primitiveTypography.letterSpacing.wider,
  },
  bodySm: {
    fontSize: primitiveTypography.size.sm,
    fontWeight: primitiveTypography.weight.regular,
    letterSpacing: primitiveTypography.letterSpacing.normal,
    lineHeight: primitiveTypography.lineHeight.bodySm,
  },
  bodyMd: {
    fontSize: primitiveTypography.size.md,
    fontWeight: primitiveTypography.weight.regular,
    letterSpacing: primitiveTypography.letterSpacing.normal,
    lineHeight: primitiveTypography.lineHeight.bodyMd,
  },
  titleSm: {
    fontSize: primitiveTypography.size.md,
    fontWeight: primitiveTypography.weight.semibold,
    letterSpacing: primitiveTypography.letterSpacing.tight,
    lineHeight: 18,
  },
  titleMd: {
    fontSize: primitiveTypography.size.lg,
    fontWeight: primitiveTypography.weight.semibold,
    letterSpacing: primitiveTypography.letterSpacing.tight,
    lineHeight: 20,
  },
  monoBadge: {
    fontSize: primitiveTypography.size.md,
    fontWeight: primitiveTypography.weight.medium,
    letterSpacing: primitiveTypography.letterSpacing.wider,
  },
  monoPill: {
    fontSize: primitiveTypography.size.lg,
    fontWeight: primitiveTypography.weight.medium,
    letterSpacing: primitiveTypography.letterSpacing.wider,
  },
  /** Chance badge label (DM Mono) — Figma Type="Elite" text spec */
  chanceBadge: {
    fontSize: primitiveTypography.size.sm,
    fontWeight: primitiveTypography.weight.medium,
    letterSpacing: primitiveTypography.letterSpacing.chance2Pct,
    lineHeight: primitiveTypography.lineHeight.chanceBadge,
  },
} as const;

