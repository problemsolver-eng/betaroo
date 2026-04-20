import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChanceBadge, OpportunityCard, PreferredLeaguesSelect } from '../components';
import { PlayerOpportunity, TeamOpportunity } from '../data/types';
import { playerCards, preferredLeagueOptions, teamCards } from '../data/mock';
import { colors, spacing, typography } from '../tokens';

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

      <Text style={styles.title}>Atom / Chance Badge</Text>
      <View style={[styles.atomBox, styles.chanceAtomBox]}>
        <ChanceBadge level="elite" />
        <ChanceBadge level="strong" />
        <ChanceBadge level="fair" />
        <ChanceBadge level="risky" />
      </View>

      <Text style={styles.title}>Atom / Stat %</Text>
      <View style={[styles.atomBox, styles.statAtomBox]}>
        <ChanceBadge level="elite" label="L5" rightText="99%" />
        <ChanceBadge level="strong" label="L5" rightText="85%" />
        <ChanceBadge level="fair" label="L5" rightText="45%" />
        <ChanceBadge level="risky" label="L5" rightText="15%" />
      </View>

      <Text style={styles.title}>Preferred Leagues Select</Text>
      <PreferredLeaguesSelect options={preferredLeagueOptions} />
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
    marginBottom: spacing.md,
  },
  cardList: {
    gap: spacing.sm,
  },
  atomBox: {
    backgroundColor: '#171717',
    borderColor: '#FFFFFF1A',
    borderRadius: 12,
    borderWidth: 1,
    gap: spacing.lg + 2,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  chanceAtomBox: {
    backgroundColor: '#171717',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
  },
  statAtomBox: {
    backgroundColor: '#171717',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
  },
});
