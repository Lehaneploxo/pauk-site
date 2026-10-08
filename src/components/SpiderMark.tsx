import { useId } from 'react';
import { legSegments } from './spiderShape';

const SEGMENTS = legSegments();

/** Серебряный паук — логотип и декоративный элемент. */
export function SpiderMark({ size = 32, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  const body = `sm-body-${id}`;
  const leg = `sm-leg-${id}`;

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={body} cx="0.35" cy="0.28" r="0.85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#c9c9d0" />
          <stop offset="0.8" stopColor="#6a6a72" />
          <stop offset="1" stopColor="#3a3a40" />
        </radialGradient>
        <linearGradient id={leg} x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f4f4f6" />
          <stop offset="0.5" stopColor="#c2c2c9" />
          <stop offset="1" stopColor="#85858d" />
        </linearGradient>
      </defs>

      <g fill="none" stroke={`url(#${leg})`} strokeLinecap="round" strokeLinejoin="round">
        {SEGMENTS.map((s, i) => (
          <path key={i} d={s.d} strokeWidth={s.w} />
        ))}
      </g>

      {/* брюшко */}
      <ellipse cx="32" cy="42" rx="6.9" ry="10" fill={`url(#${body})`} />
      <path
        d="M32 34.5 V50 M28.4 39 L32 41.6 L35.6 39 M29 44.2 L32 46.6 L35 44.2"
        stroke="#2c2c31"
        strokeWidth="0.75"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* головогрудь */}
      <ellipse cx="32" cy="28.8" rx="4.6" ry="5" fill={`url(#${body})`} />
      {/* хелицеры */}
      <path d="M30.6 24.2 L29.9 22 M33.4 24.2 L34.1 22" stroke="#d9d9df" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
