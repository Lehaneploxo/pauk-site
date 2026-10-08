import { useEffect, useRef } from 'react';
import { mulberry32 } from './random';

/** Value-noise + fbm: дым считается один раз в маленький canvas и растягивается CSS. */
function makeNoise(seed: number) {
  const rnd = mulberry32(seed);
  const SIZE = 256;
  const perm = new Uint8Array(SIZE * 2);
  const vals = new Float32Array(SIZE);
  for (let i = 0; i < SIZE; i++) {
    perm[i] = i;
    vals[i] = rnd();
  }
  for (let i = SIZE - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  for (let i = 0; i < SIZE; i++) perm[i + SIZE] = perm[i];

  const v = (x: number, y: number) => vals[perm[(perm[x & 255] + y) & 511]];
  const s = (t: number) => t * t * (3 - 2 * t);

  const noise = (x: number, y: number) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = s(x - xi);
    const yf = s(y - yi);
    const a = v(xi, yi);
    const b = v(xi + 1, yi);
    const c = v(xi, yi + 1);
    const d = v(xi + 1, yi + 1);
    return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
  };

  return (x: number, y: number) => {
    let sum = 0;
    let amp = 0.5;
    let freq = 1;
    for (let o = 0; o < 5; o++) {
      sum += amp * noise(x * freq, y * freq);
      freq *= 2.03;
      amp *= 0.5;
    }
    return sum;
  };
}

const smooth = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

interface SmokeProps {
  seed?: number;
  /** общая плотность дыма */
  intensity?: number;
  className?: string;
}

/**
 * Дым по краям экрана (слева, справа, снизу), центр остаётся тёмным.
 * Считается один раз; анимация — только медленный transform обёртки (дёшево для GPU).
 */
export function Smoke({ seed = 5, intensity = 1, className = '' }: SmokeProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 180;
    const aspect = Math.min(2.4, Math.max(0.45, window.innerHeight / window.innerWidth));
    const H = Math.round(W * aspect);
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fbm = makeNoise(seed);
    const warp = makeNoise(seed + 99);
    const img = ctx.createImageData(W, H);
    const scale = 3.2 / W;

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const u = x / W;
        const v = y / H;
        const px = x * scale;
        const py = y * scale;
        // искажение координат даёт «клубы» и завитки
        const w = warp(px * 0.8, py * 0.8);
        const n = fbm(px * 1.4 + w * 2.2, py * 1.1 + w * 1.6);
        const edge = Math.max(
          smooth(0.42, 0.0, u),
          smooth(0.58, 1.0, u),
          smooth(0.55, 1.0, v) * 0.95,
          smooth(0.25, 0.0, v) * 0.35,
        );
        const a = Math.pow(smooth(0.42, 0.85, n), 1.4) * edge * 0.6 * intensity;
        const i = (y * W + x) * 4;
        img.data[i] = 205;
        img.data[i + 1] = 205;
        img.data[i + 2] = 212;
        img.data[i + 3] = Math.min(255, a * 255);
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [seed, intensity]);

  return (
    <div className={`smoke ${className}`} aria-hidden="true">
      <canvas ref={ref} className="smoke__canvas" />
    </div>
  );
}
