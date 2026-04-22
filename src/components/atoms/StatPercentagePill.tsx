import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChanceLevel, colors, spacing, typography } from '../../tokens';
import { ChanceBadge } from './ChanceBadge';

/** Tier from percent: under 16 risky, 16–45 fair, 46–85 strong, 86+ elite */
export function statLevelFromPercent(value: number): ChanceLevel {
  if (value < 16) return 'risky';
  if (value <= 45) return 'fair';
  if (value <= 85) return 'strong';
  return 'elite';
}

type StatPercentagePillProps = {
  label: string;
  value: number;
};

export function StatPercentagePill({ label, value }: StatPercentagePillProps) {
  const level = statLevelFromPercent(value);

  return (
    <View style={styles.container}>
      <ChanceBadge level={level} label={label} />
      <Text style={styles.valueText}>{`${value}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
    height: 18,
    justifyContent: 'flex-start',
    minWidth: 55,
  },
  valueText: {
    ...typography.bodySm,
    color: colors.text.primary,
    fontVariant: ['lining-nums', 'tabular-nums'],
    includeFontPadding: false,
    lineHeight: 18,
    textAlignVertical: 'center',
  },
});
