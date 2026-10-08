// Генерирует public/spider.svg и public/favicon.svg из той же формы, что SpiderMark.
// Запуск: node tools/build-spider.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/components/spiderShape.ts', import.meta.url), 'utf8');
const legs = JSON.parse(
  src
    .match(/LEFT_LEGS[^=]*=\s*(\[[\s\S]*?\]);/)[1]
    .replace(/\s+/g, '')
    .replace(/,\]/g, ']'),
);
const widths = JSON.parse(src.match(/LEG_WIDTHS = (\[[^\]]*\])/)[1]);
const all = [...legs, ...legs.map((leg) => leg.map(([x, y]) => [64 - x, y]))];
const segs = all
  .flatMap((leg) => widths.map((w, i) => `<path d="M${leg[i][0]} ${leg[i][1]} L${leg[i + 1][0]} ${leg[i + 1][1]}" stroke-width="${w}"/>`))
  .join('');

const spider = `<defs><radialGradient id="b" cx="0.35" cy="0.28" r="0.85"><stop offset="0" stop-color="#fff"/><stop offset="0.35" stop-color="#c9c9d0"/><stop offset="0.8" stop-color="#6a6a72"/><stop offset="1" stop-color="#3a3a40"/></radialGradient><linearGradient id="l" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f4f4f6"/><stop offset="0.5" stop-color="#c2c2c9"/><stop offset="1" stop-color="#85858d"/></linearGradient></defs><g fill="none" stroke="url(#l)" stroke-linecap="round" stroke-linejoin="round">${segs}</g><ellipse cx="32" cy="42" rx="6.9" ry="10" fill="url(#b)"/><path d="M32 34.5 V50 M28.4 39 L32 41.6 L35.6 39 M29 44.2 L32 46.6 L35 44.2" stroke="#2c2c31" stroke-width="0.75" fill="none" stroke-linecap="round" opacity="0.55"/><ellipse cx="32" cy="28.8" rx="4.6" ry="5" fill="url(#b)"/><path d="M30.6 24.2 L29.9 22 M33.4 24.2 L34.1 22" stroke="#d9d9df" stroke-width="1.2" stroke-linecap="round"/>`;

writeFileSync(new URL('../public/spider.svg', import.meta.url), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${spider}</svg>\n`);
writeFileSync(
  new URL('../public/favicon.svg', import.meta.url),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#000"/><g transform="translate(4 4) scale(.875)">${spider}</g></svg>\n`,
);
console.log('spider.svg + favicon.svg written');
