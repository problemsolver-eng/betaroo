# Betaroo — React Native developer test

A small React Native (CLI) + TypeScript app that covers the three parts of the Betaroo take-home: opportunity cards, a preferred-leagues select, and a token layer. No Expo, no extra UI kit for the core components.

**Design** · [Figma — Developer Test](https://www.figma.com/design/UqWypmTyOe0zAfNCLPpfkk/Developer-Test?node-id=0-1&p=f)

**Demo** 
<video src="https://github.com/user-attachments/assets/61f17f45-6e14-49ec-a8a5-f6107acc4b36" controls width="700"></video>

---

## What I updated

- **Tokens** — Shared the soft “lift” shadow (`shadows.ambientLift`) and the odds-pill radius (`radii.odds`) so cards and inputs don’t drift.
- **Preferred Leagues** — Dropped stray hexes in favor of the same semantic colors and shadow as everywhere else.
- **Opportunity card** — Tighter layout: team-logo overlap rounded in dp, `includeFontPadding: false` where it matters on Android, explicit line heights on headings.
- **`StatPercentagePill`** — L5 (or any label) + % in one row; the percent maps to a chance band and drives `ChanceBadge`, with tabular numbers on the value for a clean footer.
- **Test screen** — One scroll shows the interactive select plus default, focus, and filled previews, so you aren’t toggling props to review states.
- **This doc** — Synced with the code; visual parity with Figma is always a product discussion, not something the README can sign off on by itself.

---

## Stack

| | |
| --- | --- |
| **Runtime** | React Native CLI, TypeScript |
| **UI** | Functional components, hooks, `StyleSheet` only (no third-party component library for the test UI) |

---

## Run it (iOS)

From the project root:

```bash
npm install
bundle install
cd ios && bundle exec pod install && cd ..
```

Metro (terminal 1):

```bash
npm start
```

App (terminal 2):

```bash
npm run ios
```

---

## What’s implemented

**1 — Opportunity cards & atoms**  
`OpportunityCard` handles player vs team with a `variant` prop. Layout is top / center / bottom, with shared assets. Mock data and the screen live in `src/data/mock.ts` and `src/screens/TestTaskScreen.tsx`. Atoms: `ChanceBadge` (tiers) and `StatPercentagePill` (label + %, composed with `ChanceBadge`).

**2 — Preferred Leagues**  
`PreferredLeaguesSelect` covers empty, open (focus), and filled, with open/close animation and a scrollable list. The test screen stacks the real control and static previews of each state.

**3 — Tokens**  
Primitives under `src/tokens/primitives/`, semantics under `src/tokens/semantic/` (colors, spacing, radii, typography, shadows), plus `src/tokens/types.ts` and a single `src/tokens/index.ts` export. Components read semantic tokens, not raw palette soup.

---

## Project layout

| Path | Role |
| --- | --- |
| `src/assets` | Central image / font references |
| `src/components` | Atoms, cards, select |
| `src/data` | Types and fixtures |
| `src/screens` | `TestTaskScreen` and composition |
| `src/tokens` | Primitives, semantics, shared types |

---

## How I approached it

One card component for both variants keeps layout and behavior in one place. `ChanceBadge` owns tier styling; `StatPercentagePill` adds the % and tier math. Images go through `src/assets/index.ts` so swapping assets stays boring and safe. Tokens are split so scale tweaks don’t require hunting through components.

---

## If I had more time

- Tests around tokens and select behavior  
- Real product flows past the demo screen  
- Richer component APIs for reuse  
- A few more intentional motion details  
- Real data layer and models when the app grows past mocks  
