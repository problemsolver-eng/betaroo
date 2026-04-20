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
import { ChanceLevel, colors, typography } from '../../tokens';

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
  },
  container: {
    alignItems: 'center',
    borderRadius: 4,
    height: 18,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 4,
    paddingVertical: 0,
    position: 'relative',
  },
  eliteLightWrap: {
    ...StyleSheet.absoluteFill,
    opacity: 0.28,
  },
  eliteLight: {
    height: 26,
    left: -2,
    position: 'absolute',
    top: -4,
    width: 52,
  },
  label: {
    fontFamily: 'DM Mono',
    fontSize: 12,
    fontWeight: '500',
    includeFontPadding: false,
    letterSpacing: 0.24,
    lineHeight: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    zIndex: 1,
    textTransform: 'uppercase',
  },
  rightText: {
    ...typography.bodySm,
    color: '#FFFFFF',
    fontFamily: 'System',
    fontSize: 12,
    fontVariant: ['lining-nums', 'tabular-nums'],
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
    marginLeft: 4,
  },
});

const toneStyles: Record<ChanceLevel, { container: ViewStyle; label: TextStyle }> = {
  elite: {
    container: {
      backgroundColor: '#CD3158',
      shadowColor: colors.chance.elite.glow,
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
    },
    label: {
      color: '#FFFFFF',
    },
  },
  strong: {
    container: {
      backgroundColor: '#1FC16B1A',
    },
    label: {
      color: '#35F0A1',
    },
  },
  fair: {
    container: {
      backgroundColor: '#FBC64B29',
    },
    label: {
      color: '#FFD166',
    },
  },
  risky: {
    container: {
      backgroundColor: '#FB374829',
    },
    label: {
      color: '#FF6B77',
    },
  },
};
