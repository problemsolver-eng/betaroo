import React from 'react';
import { Image, PixelRatio, StyleSheet, Text, View } from 'react-native';
import { appImages } from '../../assets';
import { ChanceBadge } from '../atoms/ChanceBadge';
import { StatPercentagePill } from '../atoms/StatPercentagePill';
import { ChanceLevel, colors, radii, shadows, spacing, typography } from '../../tokens';

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
  position?: string;
};

export type OpportunityCardProps = TeamOpportunityCardProps | PlayerOpportunityCardProps;

export function OpportunityCard(props: OpportunityCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.metaText}>
          {props.event}
          <Text style={styles.metaDot}> · </Text>
          {props.time}
        </Text>
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
            <View style={styles.playerBody}>
              <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.player}
                </Text>
                {props.position ? (
                  <View style={styles.positionPill}>
                    <Text style={styles.positionPillText}>{props.position}</Text>
                  </View>
                ) : null}
              </View>
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
            <StatPercentagePill label={stat.label} value={stat.value} />
            {index < props.stats.length - 1 ? <View style={styles.statSeparator} /> : null}
          </View>
        ))}
        <View style={styles.oddsChip}>
          <Image source={appImages.draftKing} style={styles.oddsIcon} />
          <Text style={styles.odds}>{props.odds}</Text>
        </View>
        <View style={styles.addButtonWrap}>
          <Image source={appImages.addCircle} style={styles.addButtonIcon} />
        </View>
      </View>
    </View>
  );
}

/** Figma team cluster: width 57.375, rear circle offset = cluster − diameter (dp, rounded for crisp layout) */
const TEAM_LOGO_CLUSTER_W = PixelRatio.roundToNearestPixel(57.375);
const TEAM_LOGO_OFFSET = PixelRatio.roundToNearestPixel(57.375 - 34);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.base,
    borderColor: colors.border.subtle,
    borderRadius: radii.card,
    borderWidth: 1,
    height: 126,
    overflow: 'hidden',
    width: 358,
  },
  topRow: {
    alignItems: 'center',
    borderBottomColor: colors.border.dark,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 26,
    paddingBottom: spacing.g6,
    paddingLeft: spacing.md,
    paddingRight: spacing.sm,
    paddingTop: spacing.g6,
  },
  metaRight: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.g6,
  },
  metaText: {
    ...typography.overline,
    color: colors.text.muted,
    fontSize: 10,
    includeFontPadding: false,
    letterSpacing: 0.2,
    lineHeight: 14,
    opacity: 0.8,
    flex: 1,
    marginRight: spacing.sm,
  },
  metaDot: {
    opacity: 1,
  },
  iconImage: {
    height: 14,
    opacity: 0.84,
    width: 14,
  },
  centerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.g14,
    height: 64,
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  teamCenterWrap: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.sm,
  },
  teamLogos: {
    width: TEAM_LOGO_CLUSTER_W,
  },
  teamLogosWrap: {
    height: 34,
    position: 'relative',
    width: TEAM_LOGO_CLUSTER_W,
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
    left: TEAM_LOGO_OFFSET,
    opacity: 0.92,
    position: 'absolute',
    top: 0,
    width: 34,
    zIndex: 0,
  },
  /** Darken rear mark so it reads behind the front logo (blend ≈ design “muted” pass) */
  logoSecondaryOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
    borderRadius: radii.pill,
    height: 34,
    left: TEAM_LOGO_OFFSET,
    position: 'absolute',
    top: 0,
    width: 34,
    zIndex: 1,
  },
  playerBlock: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minWidth: 0,
  },
  playerBody: {
    flex: 1,
    gap: spacing.xxs,
    minWidth: 0,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 20,
  },
  positionPill: {
    backgroundColor: colors.background.secondary,
    borderRadius: radii.badge,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  positionPillText: {
    color: colors.text.muted,
    fontSize: 10,
    fontWeight: '500',
    includeFontPadding: false,
    lineHeight: 12,
  },
  avatarWrap: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    position: 'relative',
    width: 44,
  },
  avatarPrimary: {
    borderRadius: radii.pill,
    height: 40,
    width: 40,
  },
  avatarSecondary: {
    borderColor: colors.background.base,
    borderRadius: radii.pill,
    borderWidth: 1,
    bottom: -1,
    height: 20,
    position: 'absolute',
    right: -1,
    width: 20,
  },
  content: {
    flex: 1,
    gap: spacing.xxs,
  },
  title: {
    ...typography.titleMd,
    color: colors.text.primary,
    flexShrink: 1,
    includeFontPadding: false,
  },
  subtitle: {
    ...typography.bodyMd,
    color: colors.text.tertiary,
    includeFontPadding: false,
  },
  bottomRow: {
    alignItems: 'center',
    borderTopColor: colors.border.dark,
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: spacing.xs,
    height: 36,
    justifyContent: 'space-between',
    paddingBottom: spacing.sm,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingTop: spacing.sm,
  },
  statGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.g6,
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
    backgroundColor: colors.background.secondary,
    borderRadius: radii.odds,
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
    includeFontPadding: false,
  },
  addButtonWrap: {
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: radii.actionIcon,
    gap: spacing.xxs,
    height: 20,
    justifyContent: 'center',
    marginLeft: spacing.xs,
    padding: spacing.xxs,
    width: 20,
    ...shadows.ambientLift,
    elevation: 2,
  },
  addButtonIcon: {
    height: 16,
    width: 16,
  },
});
