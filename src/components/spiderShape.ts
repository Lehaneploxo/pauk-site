/**
 * Форма серебряного паука (viewBox 0 0 64 64). Используется в SpiderMark
 * и в tools/build-spider.mjs для public/spider.svg (прелоадер, favicon).
 */
export type Pt = readonly [number, number];

/** Левые лапы: корень → колено → сустав → кончик. Передние вверх, задние вниз. */
export const LEFT_LEGS: readonly (readonly Pt[])[] = [
  [[29.6, 25.2], [22.5, 14.5], [19.2, 6.5], [18.6, 0.8]],
  [[28.9, 27.4], [17.5, 19.5], [10.5, 13.2], [5.6, 8.6]],
  [[28.9, 30.6], [17, 32.2], [10.2, 38.6], [5.4, 45.8]],
  [[29.6, 33.2], [21.2, 41.2], [17.4, 51.2], [16.4, 62]],
];

/** Толщина сегментов лапы от корня к кончику */
export const LEG_WIDTHS = [2.3, 1.55, 0.95] as const;

export const ALL_LEGS: readonly (readonly Pt[])[] = [
  ...LEFT_LEGS,
  ...LEFT_LEGS.map((leg) => leg.map(([x, y]) => [64 - x, y] as const)),
];

export const legSegments = () =>
  ALL_LEGS.flatMap((leg) => LEG_WIDTHS.map((w, i) => ({ d: `M${leg[i][0]} ${leg[i][1]} L${leg[i + 1][0]} ${leg[i + 1][1]}`, w })));
