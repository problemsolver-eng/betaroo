import { primitiveRadii } from '../primitives';

export const radii = {
  atomFrame: primitiveRadii.frame2,
  input: primitiveRadii.md,
  /** Figma radius-6 (e.g. card add action) */
  actionIcon: primitiveRadii.xs,
  /** DraftKings / odds text chip */
  odds: primitiveRadii.chip5,
  /** Opportunity card small (Figma: radius-8) */
  cardSm: primitiveRadii.sm,
  card: primitiveRadii.lg,
  badge: primitiveRadii.badge,
  statPill: primitiveRadii.badge,
  pill: primitiveRadii.pill,
} as const;

