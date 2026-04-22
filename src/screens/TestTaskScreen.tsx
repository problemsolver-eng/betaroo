import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  ChanceBadge,
  OpportunityCard,
  PreferredLeaguesSelect,
  StatPercentagePill,
} from '../components';
import { PlayerOpportunity, TeamOpportunity } from '../data/types';
import { playerCards, preferredLeagueOptions, teamCards } from '../data/mock';
import { colors, radii, spacing, typography } from '../tokens';

export function TestTaskScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Opportunity Cards</Text>
      <FlatList
        data={[...playerCards, ...teamCards]}
        horizontal
        keyExtractor={(item: PlayerOpportunity | TeamOpportunity) => item.id}
        contentContainerStyle={styles.cardList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>
          'player' in item ? (
            <OpportunityCard
              variant="player"
              event={item.event}
              time={item.time}
              player={item.player}
              position={item.position}
              market={item.market}
              chance={item.chance}
              stats={item.stats}
              odds={item.odds}
            />
          ) : (
            <OpportunityCard
              variant="team"
              event={item.event}
              time={item.time}
              team={item.team}
              market={item.market}
              chance={item.chance}
              stats={item.stats}
              odds={item.odds}
            />
          )
        }
      />

      <Text style={styles.atomHeading}>{'Atom / Chance Badge'}</Text>
      <View style={styles.atomPanel}>
        <View style={styles.atomColumn}>
          <ChanceBadge level="elite" />
          <ChanceBadge level="strong" />
          <ChanceBadge level="fair" />
          <ChanceBadge level="risky" />
        </View>
      </View>

      <Text style={styles.atomHeading}>{'Atom / Stat %'}</Text>
      <View style={styles.atomPanel}>
        <View style={styles.atomColumn}>
          <StatPercentagePill label="L5" value={99} />
          <StatPercentagePill label="L5" value={85} />
          <StatPercentagePill label="L5" value={45} />
          <StatPercentagePill label="L5" value={15} />
        </View>
      </View>

      <Text style={styles.title}>Preferred Leagues Select</Text>
      <View style={styles.selectStack}>
        <PreferredLeaguesSelect options={preferredLeagueOptions} mode="default" />
        <PreferredLeaguesSelect options={preferredLeagueOptions} mode="focus" />
        <PreferredLeaguesSelect options={preferredLeagueOptions} mode="filled" filledCount={3} />
        <PreferredLeaguesSelect options={preferredLeagueOptions} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background.app,
    flex: 1,
  },
  content: {
    gap: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl * 2,
  },
  title: {
    ...typography.titleMd,
    color: colors.text.primary,
    includeFontPadding: false,
    marginBottom: spacing.md,
  },
  cardList: {
    gap: spacing.sm,
  },
  /**
   * Atom demo: #262626 panel; badge group centered H+V in the panel; badges
   * start-aligned inside the group column.
   */
  atomHeading: {
    ...typography.titleSm,
    color: colors.text.primary,
    includeFontPadding: false,
    marginBottom: spacing.sm,
  },
  atomPanel: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.subtle,
    borderRadius: radii.atomFrame,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 320,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  atomColumn: {
    alignItems: 'flex-start',
    gap: spacing.lg + 2,
  },
  selectStack: {
    gap: spacing.md,
  },
});
