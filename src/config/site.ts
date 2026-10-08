/**
 * Главные настройки сайта. Имя, ник и ссылки меняются здесь —
 * компоненты берут всё отсюда.
 *
 * Фото: положи файл в src/assets/avatar.jpg (или .jpeg / .png / .webp) —
 * он подхватится автоматически. Если файла нет — показывается placeholder.
 * Цвета: src/styles/theme.css (CSS-переменные).
 * Тексты и языки: src/i18n/translations.ts.
 */
export const site = {
  name: { latin: 'PAUK', cyrillic: 'ПАУК' },
  handle: '@paukkh',
  links: {
    telegram: 'https://t.me/paukkh',
    instagram: 'https://www.instagram.com/paukkh?stkn=Zm5seWd5MmdtanZs',
    tiktok: 'https://www.tiktok.com/@paukkh?_r=1&_t=ZS-9ANVq8tefBA',
    support: 'https://send.monobank.ua/jar/A21YwsieSz',
  },
} as const;

export type LinkKey = keyof typeof site.links;

/** Порядок карточек в блоке «Найти меня» и ссылок в футере */
export const socialOrder: LinkKey[] = ['telegram', 'instagram', 'tiktok', 'support'];
