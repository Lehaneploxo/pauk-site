import { useMemo } from 'react';
import { mulberry32 } from './random';

export type Corner = 'tl' | 'tr' | 'bl' | 'br';

interface Dew {
  x: number;
  y: number;
  r: number;
}

const f = (n: number) => n.toFixed(1);

/**
 * Угловая паутина: центр смещён от угла, радиальные нити упираются в «стены»,
 * спираль слегка провисает, часть нитей порвана, на пересечениях — капли росы.
 * Рисуется для левого верхнего угла, остальные углы — зеркалом в CSS.
 */
function buildWeb(seed: number) {
  const rnd = mulberry32(seed);
  const hub = { x: 90 + rnd() * 40, y: 70 + rnd() * 40 };
  const n = 17;
  const spokes = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 + (rnd() - 0.5) * 0.22;
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    // расстояние до «стены» (край экрана)
    let wall = Infinity;
    if (dx < 0) wall = Math.min(wall, -hub.x / dx);
    if (dy < 0) wall = Math.min(wall, -hub.y / dy);
    const reach = 210 + rnd() * 170;
    return { dx, dy, len: Math.min(wall, reach), anchored: wall <= reach };
  });

  const spokePaths = spokes.map((s) => {
    const ex = hub.x + s.dx * s.len;
    const ey = hub.y + s.dy * s.len;
    const sag = (rnd() - 0.5) * 6;
    const cx = (hub.x + ex) / 2 - s.dy * sag;
    const cy = (hub.y + ey) / 2 + s.dx * sag;
    return `M${f(hub.x)} ${f(hub.y)} Q${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}`;
  });

  const dew: Dew[] = [];
  const ringPaths: string[] = [];
  let r = 7;
  let step = 7;
  while (r < 300) {
    let d = '';
    let pen = false;
    for (let i = 0; i < n; i++) {
      const a = spokes[i];
      const b = spokes[(i + 1) % n];
      const rr = r * (1 + (rnd() - 0.5) * 0.05);
      if (a.len < rr || b.len < rr || rnd() < 0.07) {
        pen = false;
        continue;
      }
      const x1 = hub.x + a.dx * rr;
      const y1 = hub.y + a.dy * rr;
      const x2 = hub.x + b.dx * rr;
      const y2 = hub.y + b.dy * rr;
      // провис к центру
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const qx = mx + (hub.x - mx) * 0.08;
      const qy = my + (hub.y - my) * 0.08 + 1.5;
      d += `${pen ? '' : `M${f(x1)} ${f(y1)}`} Q${f(qx)} ${f(qy)} ${f(x2)} ${f(y2)}`;
      pen = true;
      if (rnd() < 0.16) dew.push({ x: x1, y: y1, r: 0.7 + rnd() * 1.1 });
      if (rnd() < 0.05) dew.push({ x: qx, y: qy, r: 0.6 + rnd() * 0.8 });
    }
    if (d) ringPaths.push(d);
    step *= 1.085;
    r += step;
  }

  // Длинные несущие нити, уходящие за край
  const anchorPaths = Array.from({ length: 3 }, () => {
    const s = spokes[Math.floor(rnd() * n)];
    const sx = hub.x + s.dx * s.len * 0.8;
    const sy = hub.y + s.dy * s.len * 0.8;
    const ex = rnd() < 0.5 ? 400 : 120 + rnd() * 280;
    const ey = ex === 400 ? 120 + rnd() * 280 : 400;
    return `M${f(sx)} ${f(sy)} Q${f((sx + ex) / 2)} ${f((sy + ey) / 2 + 8)} ${f(ex)} ${f(ey)}`;
  });

  return { spokePaths, ringPaths, anchorPaths, dew };
}

/** Цвет нитей (в <img> currentColor не работает) */
const WEB_COLOR = '#c9c9d0';

/** Паутина как SVG-строка: в одном <img> вместо сотен DOM-узлов, и ноль байт загрузки. */
function webToDataUrl(seed: number) {
  const web = buildWeb(seed);
  const path = (d: string, w: number, o: number) => `<path d="${d}" stroke-width="${w}" opacity="${o.toFixed(3)}"/>`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">` +
    `<g fill="none" stroke="${WEB_COLOR}" stroke-linecap="round">` +
    web.anchorPaths.map((d) => path(d, 0.7, 0.55)).join('') +
    web.spokePaths.map((d) => path(d, 0.8, 0.8)).join('') +
    web.ringPaths.map((d, i) => path(d, 0.6, 0.75 - i * 0.025)).join('') +
    `</g><g fill="${WEB_COLOR}" opacity="0.9">` +
    web.dew.map((p) => `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${p.r.toFixed(2)}"/>`).join('') +
    `</g></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/** Угловая паутина. Рисуется для левого верхнего угла, остальные углы — зеркалом в CSS. */
export function CornerWeb({ corner, seed = 7, className = '' }: { corner: Corner; seed?: number; className?: string }) {
  const src = useMemo(() => webToDataUrl(seed), [seed]);
  return (
    <img
      className={`corner-web corner-web--${corner} ${className}`}
      src={src}
      alt=""
      aria-hidden="true"
      width={400}
      height={400}
    />
  );
}
