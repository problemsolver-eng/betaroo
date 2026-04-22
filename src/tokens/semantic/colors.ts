import { primitiveColors } from '../primitives';

export const colors = {
  background: {
    app: primitiveColors.black,
    surface: primitiveColors.slate875,
    card: primitiveColors.slate825,
    cardMuted: primitiveColors.slate850,
    border: primitiveColors.borderSoft,
    base: primitiveColors.backgroundBase,
    primary: primitiveColors.backgroundPrimary,
    secondary: primitiveColors.backgroundSecondary,
  },
  border: {
    dark: primitiveColors.borderDark,
    subtle: primitiveColors.whiteAlpha10,
  },
  shadowAmbient: primitiveColors.shadowAmbient,
  text: {
    primary: primitiveColors.slate100,
    secondary: primitiveColors.slate200,
    muted: primitiveColors.slate300,
    tertiary: primitiveColors.textTertiary,
  },
  chance: {
    elite: {
      text: primitiveColors.white,
      background: primitiveColors.chanceEliteBg,
      glow: primitiveColors.pink500,
    },
    /** Reference comps: solid dark fill + bright label (not alpha wash) */
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
      background: primitiveColors.chanceEliteBg,
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

