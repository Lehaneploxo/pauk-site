type Pt = [number, number];

/** Левые лапы (правые — зеркально). Каждая — 4 точки: корень, колено, сустав, кончик. */
const LEFT_LEGS: Pt[][] = [
  [[286, 106], [238, 52], [198, 10], [176, -34]],
  [[279, 116], [206, 82], [128, 72], [64, 34]],
  [[277, 130], [196, 162], [120, 208], [82, 268]],
  [[284, 142], [234, 214], [198, 302], [188, 418]],
];
const WIDTHS = [11, 7.5, 3.6];

const mirror = (leg: Pt[]): Pt[] => leg.map(([x, y]) => [600 - x, y]);
const LEGS = [...LEFT_LEGS, ...LEFT_LEGS.map(mirror)];

/** Большой «металлический» паук для первого экрана. Чистый SVG, без картинок. */
export function BigSpider({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 440" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bs-leg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3a41" />
          <stop offset="0.55" stopColor="#141417" />
          <stop offset="1" stopColor="#08080a" />
        </linearGradient>
        <radialGradient id="bs-body" cx="0.42" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#4b4b54" />
          <stop offset="0.45" stopColor="#17171b" />
          <stop offset="1" stopColor="#040405" />
        </radialGradient>
        <linearGradient id="bs-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f4f6" />
          <stop offset="0.5" stopColor="#a9a9b2" />
          <stop offset="1" stopColor="#55555c" />
        </linearGradient>
      </defs>

      {/* нить */}
      <line x1="300" y1="-300" x2="300" y2="98" stroke="rgba(255,255,255,.35)" strokeWidth="1" />

      {/* лапы */}
      {LEGS.map((leg, li) => (
        <g key={li}>
          {WIDTHS.map((w, si) => {
            const [x1, y1] = leg[si];
            const [x2, y2] = leg[si + 1];
            return (
              <g key={si}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#bs-leg)" strokeWidth={w} strokeLinecap="round" />
                <line
                  x1={x1 - 1}
                  y1={y1 - 1}
                  x2={x2 - 1}
                  y2={y2 - 1}
                  stroke="rgba(255,255,255,.32)"
                  strokeWidth={Math.max(0.7, w * 0.16)}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
          {leg.slice(1, 3).map(([x, y], ji) => (
            <circle key={ji} cx={x} cy={y} r={WIDTHS[ji + 1] * 0.75} fill="#1b1b1f" stroke="rgba(255,255,255,.22)" strokeWidth="0.8" />
          ))}
        </g>
      ))}

      {/* брюшко */}
      <ellipse cx="300" cy="205" rx="47" ry="68" fill="url(#bs-body)" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
      {/* серебряный знак на спине */}
      <g opacity="0.85">
        <path d="M300 150 L313 182 L300 262 L287 182 Z" fill="url(#bs-silver)" opacity="0.75" />
        <path d="M300 160 L300 250" stroke="#0a0a0c" strokeWidth="1.4" />
        <g fill="none" stroke="url(#bs-silver)" strokeWidth="1.6" strokeLinecap="round" opacity="0.8">
          <path d="M282 170 Q264 182 262 206" />
          <path d="M318 170 Q336 182 338 206" />
          <path d="M284 200 Q270 218 272 240" />
          <path d="M316 200 Q330 218 328 240" />
        </g>
      </g>

      {/* головогрудь */}
      <ellipse cx="300" cy="122" rx="30" ry="27" fill="url(#bs-body)" stroke="rgba(255,255,255,.22)" strokeWidth="1" />
      <g fill="#d9d9de">
        <circle cx="292" cy="108" r="2.2" />
        <circle cx="308" cy="108" r="2.2" />
        <circle cx="286" cy="114" r="1.4" opacity=".7" />
        <circle cx="314" cy="114" r="1.4" opacity=".7" />
      </g>
      {/* хелицеры */}
      <path d="M293 96 Q290 86 295 82 M307 96 Q310 86 305 82" stroke="#2a2a30" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
