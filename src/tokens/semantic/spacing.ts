import { primitiveSpacing } from '../primitives';

export const spacing = {
  none: primitiveSpacing[0],
  xxs: primitiveSpacing[2],
  xs: primitiveSpacing[4],
  /** Figma spacing-6 */
  g6: primitiveSpacing[6],
  sm: primitiveSpacing[8],
  md: primitiveSpacing[12],
  /** Figma card center row gap */
  g14: primitiveSpacing[14],
  lg: primitiveSpacing[16],
  xl: primitiveSpacing[20],
  xxl: primitiveSpacing[24],
} as const;

