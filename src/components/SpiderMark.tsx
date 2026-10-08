/** Минималистичный паук — логотип и декоративный элемент. */
export function SpiderMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 27 L18 15 L10 19" />
        <path d="M37 27 L46 15 L54 19" />
        <path d="M26 31 L13 27 L6 33" />
        <path d="M38 31 L51 27 L58 33" />
        <path d="M26 35 L14 41 L10 51" />
        <path d="M38 35 L50 41 L54 51" />
        <path d="M28 40 L21 49 L21 59" />
        <path d="M36 40 L43 49 L43 59" />
      </g>
      <ellipse cx="32" cy="25.5" rx="4.6" ry="4.2" fill="currentColor" />
      <ellipse cx="32" cy="37" rx="6.6" ry="8.8" fill="currentColor" />
      <path d="M32 31 v12 M28.6 35 l3.4 2.4 3.4-2.4" stroke="var(--bg)" strokeOpacity=".55" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
