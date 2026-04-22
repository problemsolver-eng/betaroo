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
  /** Position abbreviation (e.g. SG), shown as pill next to name */
  position?: string;
  market: string;
  chance: ChanceLevel;
  stats: OpportunityStat[];
  odds: string;
};
