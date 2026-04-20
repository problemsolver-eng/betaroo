import { ChanceLevel } from '../tokens';

export type OpportunityStat = {
  label: string;
  value: number;
};

export type TeamOpportunity = {
  id: string;
  event: string;
  time: string;
  team: string;
  market: string;
  chance: ChanceLevel;
  stats: OpportunityStat[];
  odds: string;
};

export type PlayerOpportunity = {
  id: string;
  event: string;
  time: string;
  player: string;
  market: string;
  chance: ChanceLevel;
  stats: OpportunityStat[];
  odds: string;
};
