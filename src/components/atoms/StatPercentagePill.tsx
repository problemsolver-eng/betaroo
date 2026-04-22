import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChanceLevel, radii, spacing, typography } from '../../tokens';
import { ChanceBadge } from './ChanceBadge';

type StatPercentagePillProps = {
  label: string;
  value: number;
  level: ChanceLevel;
};

export function StatPercentagePill({ label, value, level }: StatPercentagePillProps) {
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
    borderRadius: radii.statPill,
    flexDirection: 'row',
    gap: spacing.xs,
    height: 18,
    width: 55,
  },
  valueText: {
    ...typography.bodySm,
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
    fontVariant: ['lining-nums', 'tabular-nums'],
  },
});
