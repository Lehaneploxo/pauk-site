import type { SVGProps } from 'react';

/** Иконки брендов (в lucide их нет). Размер и цвет — как у lucide: size + currentColor. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  'aria-hidden': true as const,
  focusable: false as const,
});

export function TelegramIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" {...rest}>
      <path d="M21.94 4.6a1.2 1.2 0 0 0-1.62-1.33L2.9 10.1c-1.04.41-1.02 1.9.03 2.27l4.27 1.5 1.65 5.27c.24.77 1.2 1.03 1.79.47l2.43-2.28 4.33 3.2c.68.5 1.65.13 1.83-.7L21.94 4.6Zm-4.1 3.1-7.5 6.8a.6.6 0 0 0-.19.36l-.33 2.6-1.1-3.6 8.7-5.6c.32-.2.65.22.42.44Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" {...rest}>
      <path d="M16.6 2.5h-3.3v12.9a2.9 2.9 0 1 1-2.9-2.9c.3 0 .58.04.85.12V9.24a6.2 6.2 0 1 0 5.35 6.16V8.8a7.6 7.6 0 0 0 4.4 1.4V6.9a4.4 4.4 0 0 1-4.4-4.4Z" />
    </svg>
  );
}
