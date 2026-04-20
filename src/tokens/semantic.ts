import { primitiveColors, primitiveRadii, primitiveSpacing, primitiveTypography } from './primitives';

export const colors = {
  background: {
    app: primitiveColors.black,
    surface: primitiveColors.slate875,
    card: primitiveColors.slate825,
    cardMuted: primitiveColors.slate850,
    border: primitiveColors.borderSoft,
  },
  text: {
    primary: primitiveColors.slate100,
    secondary: primitiveColors.slate200,
    muted: primitiveColors.slate300,
  },
  chance: {
    elite: {
      text: primitiveColors.white,
      background: primitiveColors.pink700,
      glow: primitiveColors.pink500,
    },
    strong: {
      text: primitiveColors.green500,
      background: primitiveColors.green900,
    },
    fair: {
      text: primitiveColors.yellow500,
      background: primitiveColors.yellow900,
    },
    risky: {
      text: primitiveColors.red500,
      background: primitiveColors.red900,
    },
  },
  statPill: {
    elite: {
      text: primitiveColors.white,
      background: primitiveColors.pink700,
      glow: primitiveColors.pink500,
    },
    strong: {
      text: primitiveColors.green500,
      background: primitiveColors.green900,
    },
    fair: {
      text: primitiveColors.yellow500,
      background: primitiveColors.yellow900,
    },
    risky: {
      text: primitiveColors.red500,
      background: primitiveColors.red900,
    },
  },
  accent: {
    positive: primitiveColors.green500,
    warning: primitiveColors.yellow500,
  },
} as const;

export const spacing = {
  none: primitiveSpacing[0],
  xxs: primitiveSpacing[2],
  xs: primitiveSpacing[4],
  sm: primitiveSpacing[8],
  md: primitiveSpacing[12],
  lg: primitiveSpacing[16],
  xl: primitiveSpacing[20],
  xxl: primitiveSpacing[24],
} as const;

export const radii = {
  input: primitiveRadii.md,
  card: primitiveRadii.lg,
  badge: primitiveRadii.sm,
  statPill: primitiveRadii.sm,
  pill: primitiveRadii.pill,
} as const;

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
  },
  bodyMd: {
    fontSize: primitiveTypography.size.md,
    fontWeight: primitiveTypography.weight.regular,
    letterSpacing: primitiveTypography.letterSpacing.normal,
  },
  titleSm: {
    fontSize: primitiveTypography.size.md,
    fontWeight: primitiveTypography.weight.semibold,
    letterSpacing: primitiveTypography.letterSpacing.tight,
  },
  titleMd: {
    fontSize: primitiveTypography.size.lg,
    fontWeight: primitiveTypography.weight.semibold,
    letterSpacing: primitiveTypography.letterSpacing.tight,
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
} as const;
