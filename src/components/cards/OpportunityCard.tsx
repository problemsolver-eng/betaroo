import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { appImages } from '../../assets';
import { ChanceBadge } from '../atoms/ChanceBadge';
import { ChanceLevel, colors, radii, spacing, typography } from '../../tokens';

type StatLine = {
  label: string;
  value: number;
};

type OpportunityCardBaseProps = {
  event: string;
  time: string;
  market: string;
  chance: ChanceLevel;
  stats: StatLine[];
  odds: string;
};

type TeamOpportunityCardProps = OpportunityCardBaseProps & {
  variant: 'team';
  team: string;
};

type PlayerOpportunityCardProps = OpportunityCardBaseProps & {
  variant: 'player';
  player: string;
};

export type OpportunityCardProps = TeamOpportunityCardProps | PlayerOpportunityCardProps;

export function OpportunityCard(props: OpportunityCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.metaLeft}>
          <Text style={styles.metaText}>{props.event}</Text>
          <Text style={styles.metaText}>{props.time}</Text>
        </View>
        <View style={styles.metaRight}>
          <Image source={appImages.info} style={styles.iconImage} />
          <Image source={appImages.share} style={styles.iconImage} />
          <Image source={appImages.arrowRight} style={styles.iconImage} />
        </View>
      </View>

      <View style={styles.centerRow}>
        {props.variant === 'player' ? (
          <View style={styles.playerBlock}>
            <View style={styles.avatarWrap}>
              <Image source={appImages.player} style={styles.avatarPrimary} />
              <Image
                source={appImages.playerBadge}
                style={styles.avatarSecondary}
              />
            </View>
            <View>
              <Text style={styles.title}>{props.player}</Text>
              <Text style={styles.subtitle}>{props.market}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.teamCenterWrap}>
            <View style={styles.teamLogos}>
              <View style={styles.teamLogosWrap}>
                <Image source={appImages.teamLogoFront} style={styles.logoPrimary} />
                <View pointerEvents="none" style={styles.logoPrimaryOverlay} />
                <Image source={appImages.teamLogoBack} style={styles.logoSecondary} />
                <View pointerEvents="none" style={styles.logoSecondaryOverlay} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{props.team}</Text>
              <Text style={styles.subtitle}>{props.market}</Text>
            </View>
          </View>
        )}
        <ChanceBadge level={props.chance} />
      </View>

      <View style={styles.bottomRow}>
        {props.stats.map((stat, index) => (
          <View key={stat.label} style={styles.statGroup}>
            <ChanceBadge level="strong" label={stat.label} rightText={`${stat.value}%`} />
            {index < props.stats.length - 1 ? <View style={styles.statSeparator} /> : null}
          </View>
        ))}
        <View style={styles.oddsChip}>
          <Image source={appImages.draftKing} style={styles.oddsIcon} />
          <Text style={styles.odds}>{props.odds}</Text>
        </View>
        <Image source={appImages.addCircle} style={styles.trailingIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1C',
    borderColor: colors.background.border,
    borderRadius: 8,
    borderWidth: 1,
    height: 126,
    overflow: 'hidden',
    width: 358,
  },
  topRow: {
    alignItems: 'center',
    borderBottomColor: '#202020',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 26,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 6,
  },
  metaLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  metaRight: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs + 1,
  },
  metaText: {
    ...typography.overline,
    color: colors.text.muted,
    fontSize: 10,
    letterSpacing: 0.2,
    opacity: 0.8,
  },
  iconImage: {
    height: 16,
    opacity: 0.84,
    width: 16,
  },
  centerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    height: 64,
    justifyContent: 'space-between',
    padding: 12,
  },
  teamCenterWrap: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.xs + 2,
  },
  teamLogos: {
    width: 52,
  },
  teamLogosWrap: {
    height: 34,
    position: 'relative',
    width: 52,
  },
  logoPrimary: {
    borderRadius: radii.pill,
    height: 34,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 34,
    zIndex: 2,
  },
  logoPrimaryOverlay: {
    backgroundColor: '#FFFFFF14',
    borderRadius: radii.pill,
    height: 34,
    left: 0,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    width: 34,
    zIndex: 3,
  },
  logoSecondary: {
    borderRadius: radii.pill,
    height: 34,
    left: 14,
    position: 'absolute',
    top: 0,
    width: 34,
  },
  logoSecondaryOverlay: {
    backgroundColor: '#000000',
    borderRadius: radii.pill,
    height: 34,
    left: 14,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    width: 34,
    zIndex: 1,
  },
  playerBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs + 2,
  },
  avatarWrap: {
    height: 44,
    position: 'relative',
    width: 44,
  },
  avatarPrimary: {
    borderRadius: radii.pill,
    height: 40,
    width: 40,
  },
  avatarSecondary: {
    borderColor: '#1C1C1C',
    borderRadius: radii.pill,
    borderWidth: 1,
    bottom: -2,
    height: 20,
    position: 'absolute',
    right: -2,
    width: 20,
  },
  content: {
    flex: 1,
    gap: spacing.xs - 1,
  },
  title: {
    ...typography.titleSm,
    color: colors.text.primary,
  },
  subtitle: {
    ...typography.bodySm,
    color: colors.text.secondary,
  },
  bottomRow: {
    alignItems: 'center',
    borderTopColor: '#202020',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: spacing.xs,
    height: 36,
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
  },
  statGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  statSeparator: {
    backgroundColor: colors.background.border,
    height: 22,
    marginLeft: spacing.xs,
    opacity: 0.55,
    width: 1,
  },
  oddsChip: {
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    gap: 2,
    height: 20,
    marginLeft: 'auto',
    minWidth: 15,
    paddingHorizontal: 4,
    paddingVertical: 0,
    width: 51,
  },
  oddsIcon: {
    height: 13,
    width: 13,
  },
  odds: {
    ...typography.bodySm,
    color: colors.text.primary,
    fontWeight: '700',
  },
  trailingIcon: {
    height: 20,
    marginLeft: spacing.xs,
    width: 20,
  },
});
