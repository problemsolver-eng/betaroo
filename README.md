# Betaroo React Native Developer Test

This project implements all 3 parts of the Betaroo React Native test task using React Native + TypeScript (CLI, no Expo).

Figma: [Developer Test](https://www.figma.com/design/UqWypmTyOe0zAfNCLPpfkk/Developer-Test?node-id=0-1&p=f)

Demo recording:

<video controls playsinline width="100%">
  <source src="https://raw.githubusercontent.com/problemsolver-eng/betaroo/main/assets/Screen%20Recording%202026-04-20%20at%2023.19.34.mp4" type="video/mp4" />
</video>

[Open MP4 on GitHub](https://github.com/problemsolver-eng/betaroo/blob/main/assets/Screen%20Recording%202026-04-20%20at%2023.19.34.mp4)

## Tech + Constraints

- React Native CLI
- TypeScript
- Functional components + hooks
- Styling via `StyleSheet.create`
- No external UI libraries for core components

## How To Run (iOS)

From project root:

```bash
npm install
bundle install
cd ios && bundle exec pod install && cd ..
```

Start Metro:

```bash
npm start
```

Run app (new terminal):

```bash
npm run ios
```

## Requirement Mapping

### Part 1 - Opportunity Cards + Atoms

- Implemented as reusable components:
  - `src/components/cards/OpportunityCard.tsx` (`variant: 'player' | 'team'`)
  - `src/components/atoms/ChanceBadge.tsx`
- Rendered with mock data in scroll list:
  - `src/screens/TestTaskScreen.tsx`
  - `src/data/mock.ts`
- Card layout follows Top / Center / Bottom structure and uses provided assets/icons.

### Part 2 - Preferred Leagues Select

- Component:
  - `src/components/select/PreferredLeaguesSelect.tsx`
- Supports all required states:
  - Default (empty)
  - Focus (dropdown open)
  - Filled (selections made)
- Includes open/close and selection transitions, dropdown item extraction, and asset-driven icons.

### Part 3 - Token Refactor

- Token architecture:
  - `src/tokens/primitives.ts` (base scales)
  - `src/tokens/semantic.ts` (semantic aliases for UI usage)
  - `src/tokens/types.ts` (shared token-driven types)
  - `src/tokens/index.ts` (single export surface)
- Components consume semantic tokens and shared token types for consistency and maintainability.

## Project Structure

- `src/assets` - centralized app asset references
- `src/components` - reusable UI components (atoms/cards/select)
- `src/data` - typed mock data models + fixtures
- `src/screens` - screen-level composition
- `src/tokens` - design tokens (primitives/semantic/types)

## Key Decisions

- Unified team/player cards into one professional reusable component with variant props (`OpportunityCard`) to reduce duplication and keep shared layout logic in one place.
- Kept a single badge atom (`ChanceBadge`) reusable for both confidence chips and stat label-value usage via props (`label`, `rightText`).
- Centralized image imports in `src/assets/index.ts` to avoid scattered `require(...)` calls and make asset swaps safer.

## What I Would Improve With More Time

- Write unit tests for token usage and select state transitions.
- Implement more than pixel-perfect UI design.
- Add more reliable component parameters for further reusability.
- Introduce additional eye-catching animations.
- Create a data repository and models for efficient large data management within the app.
- Optimize components to be reusable and adaptable for different roles and usage frequencies.
