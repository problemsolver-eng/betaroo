import { primitiveColors } from '../primitives';

/**
 * Figma: x 0 y 1 blur 2 spread 0, color #0A0D14 at 3.14% → alpha 8/255.
 * Use on cards, inputs, dropdowns; pair `elevation` for Android.
 */
export const shadows = {
  ambientLift: {
    shadowColor: primitiveColors.shadowAmbient,
    shadowOffset: { width: 0, height: 1 } as const,
    shadowOpacity: 8 / 255,
    shadowRadius: 2,
    elevation: 1,
  },
} as const;
