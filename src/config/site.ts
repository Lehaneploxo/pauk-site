/**
 * Главные настройки сайта. Имя, ник и ссылки меняются здесь —
 * компоненты берут всё отсюда.
 *
 * Фото первого экрана: public/hero.webp (см. heroPhoto ниже).
 * Цвета: src/styles/theme.css (CSS-переменные).
 * Тексты и языки: src/i18n/translations.ts.
 */
export const site = {
  name: { latin: 'PAUK', cyrillic: 'ПАУК' },
  handle: '@paukkh',
  /** Подпись под именем — всегда по-английски, на всех языках */
  brandLine: 'Personal brand',
  /** Фото первого экрана: public/hero.webp (вертикальное, 1080×1920 или похожее) */
  heroPhoto: {
    src: `${import.meta.env.BASE_URL}hero.webp`,
    /** уменьшенная копия для небольших экранов */
    srcSet: `${import.meta.env.BASE_URL}hero-640.webp 640w, ${import.meta.env.BASE_URL}hero.webp 941w`,
    sizes: '(min-width: 700px) and (min-aspect-ratio: 4/5) 57vh, 100vw',
    width: 941,
    height: 1672,
  },
  /** Видео первого экрана поверх фото (без звука, 720×1280); играет, только если сеть и устройство тянут */
  heroVideo: `${import.meta.env.BASE_URL}hero.mp4`,
  links: {
    telegram: 'https://t.me/paukkh',
    instagram: 'https://www.instagram.com/paukkh?stkn=Zm5seWd5MmdtanZs',
    tiktok: 'https://www.tiktok.com/@paukkh?_r=1&_t=ZS-9ANVq8tefBA',
    support: 'https://send.monobank.ua/jar/A21YwsieSz',
  },
} as const;

export type LinkKey = keyof typeof site.links;

/** Порядок карточек в блоке «Найти меня» и ссылок в футере */
export const socialOrder: LinkKey[] = ['instagram', 'support', 'telegram', 'tiktok'];
