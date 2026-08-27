// Hero SVG data: a grid of registered tools narrowing to the 5 acri resolves.
// Plain data, split out so page.tsx stays a component, not a dot-position table.
const COLS = 10;
const ROWS = 8;
const HIT_INDEXES = new Set([23, 34, 45, 56, 67]); // a diagonal band -- arbitrary, just visually spread

export const HERO_DOTS = Array.from({ length: COLS * ROWS }, (_, i) => ({
  x: 14 + (i % COLS) * 24,
  y: 14 + Math.floor(i / COLS) * 22,
  hit: HIT_INDEXES.has(i),
}));
