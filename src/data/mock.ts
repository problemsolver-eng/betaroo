import { PlayerOpportunity, TeamOpportunity } from './types';

export const teamCards: TeamOpportunity[] = [
  {
    id: 't-2',
    event: 'OKC @ CHI',
    time: 'FRI 10AM',
    team: 'Oklahoma City Thunder',
    market: 'Moneyline',
    chance: 'elite',
    stats: [
      { label: 'L5', value: 80 },
      { label: 'L10', value: 80 },
      { label: 'L20', value: 80 },
    ],
    odds: '+172',
  },
];

export const playerCards: PlayerOpportunity[] = [
  {
    id: 'p-1',
    event: 'CEL @ GSW',
    time: 'FRI 10AM',
    player: 'Derrick White',
    position: 'SG',
    market: '+6 Assists',
    chance: 'strong' as const,
    stats: [
      { label: 'L5', value: 75 },
      { label: 'L10', value: 72 },
      { label: 'L20', value: 71 },
    ],
    odds: '+172',
  },
];

export const preferredLeagueOptions = [
  'NBA',
  'NCAAB',
  'NFL',
  'NHL',
];
