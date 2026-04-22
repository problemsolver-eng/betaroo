import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { appImages } from '../../assets';
import { ChanceLevel, colors, radii, spacing, typography } from '../../tokens';

type ChanceBadgeProps = {
  level: ChanceLevel;
  label?: string;
  rightText?: string;
};

const labelMap: Record<ChanceLevel, string> = {
  elite: 'ELITE',
  strong: 'STRONG',
  fair: 'FAIR',
  risky: 'RISKY',
};

export function ChanceBadge({ level, label, rightText = '' }: ChanceBadgeProps) {
  const toneStyle = toneStyles[level];
  const badgeLabel = label ?? labelMap[level];

  return (
    <View style={styles.row}>
      <Pressable style={[styles.container, toneStyle.container]} accessibilityRole="button">
        {level === 'elite' ? (
          <View pointerEvents="none" style={styles.eliteLightWrap}>
            <Image source={appImages.light} style={styles.eliteLight} />
          </View>
        ) : null}
        <Text style={[styles.label, toneStyle.label]}>{badgeLabel}</Text>
      </Pressable>
      {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'center',
    minHeight: 18,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: radii.badge,
    height: 18,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: spacing.xs,
    paddingVertical: 0,
    position: 'relative',
  },
  eliteLightWrap: {
    ...StyleSheet.absoluteFill,
    opacity: 0.5,
  },
  eliteLight: {
    height: 26,
    left: -2,
    position: 'absolute',
    top: -4,
    width: 52,
  },
  label: {
    ...typography.chanceBadge,
    color: colors.text.primary,
    fontFamily: 'DMMono-Medium',
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
    zIndex: 1,
    textTransform: 'uppercase',
  },
  rightText: {
    ...typography.bodySm,
    color: colors.text.primary,
    fontVariant: ['lining-nums', 'tabular-nums'],
    fontWeight: typography.bodySm.fontWeight,
    includeFontPadding: false,
    lineHeight: 18,
    textAlignVertical: 'center',
  },
});

const toneStyles: Record<ChanceLevel, { container: ViewStyle; label: TextStyle }> = {
  elite: {
    container: {
      backgroundColor: colors.chance.elite.background,
      shadowColor: colors.chance.elite.glow,
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
    },
    label: {
      color: colors.chance.elite.text,
    },
  },
  strong: {
    container: {
      backgroundColor: colors.chance.strong.background,
    },
    label: {
      color: colors.chance.strong.text,
    },
  },
  fair: {
    container: {
      backgroundColor: colors.chance.fair.background,
    },
    label: {
      color: colors.chance.fair.text,
    },
  },
  risky: {
    container: {
      backgroundColor: colors.chance.risky.background,
    },
    label: {
      color: colors.chance.risky.text,
    },
  },
};
