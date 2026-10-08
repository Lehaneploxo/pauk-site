export const languages = ['uk', 'ru', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'uk';

/** Подпись в переключателе языков */
export const langLabels: Record<Lang, string> = { uk: 'UA', ru: 'RU', en: 'EN' };
export const ogLocale: Record<Lang, string> = { uk: 'uk_UA', ru: 'ru_RU', en: 'en_US' };

const uk = {
  meta: {
    title: 'PAUK — офіційний сайт стримера',
    description:
      'ПАУК — стример і блогер. Стріми, відео та контент. Telegram, Instagram, TikTok і підтримка автора.',
  },
  nav: { home: 'Головна', social: 'Соцмережі', support: 'Підтримати' },
  hero: {
    name: 'ПАУК',
    tagline: 'Стримлю. Знімаю. Не зупиняюсь.',
    ctaPrimary: 'Телеграм канал',
    ctaSecondary: 'Підтримати через Mono',
    scroll: 'Гортай',
    photoAlt: 'Паук — стример і блогер',
  },
  social: {
    kicker: '01 — Соцмережі',
    title: 'Знайти мене',
    subtitle: 'Стріми, відео та новини — обирай, де зручніше.',
    cards: {
      telegram: { name: 'Telegram' },
      instagram: { name: 'Instagram' },
      tiktok: { name: 'TikTok' },
      support: { name: 'Підтримати' },
    },
  },
  support: {
    kicker: '02 — Підтримка',
    title: 'Подобаються стріми?',
    text: 'Якщо тобі заходить мій контент — можеш підтримати канал. Кожен донат допомагає стримити частіше та якісніше. Без тиску, будь-яка сума.',
    button: 'Підтримати',
    note: 'Безпечно через monobank',
  },
  footer: {
    tagline: 'Стріми, відео та живе спілкування.',
    language: 'Мова',
    rights: 'Усі права захищено.',
    toTop: 'Нагору',
  },
  a11y: {
    openMenu: 'Відкрити меню',
    closeMenu: 'Закрити меню',
    language: 'Вибір мови',
    newTab: '(відкривається в новій вкладці)',
    home: 'PAUK — на головну',
    mainNav: 'Головне меню',
  },
};

export type Dict = typeof uk;

const ru: Dict = {
  meta: {
    title: 'PAUK — официальный сайт стримера',
    description:
      'ПАУК — стример и блогер. Стримы, видео и контент. Telegram, Instagram, TikTok и поддержка автора.',
  },
  nav: { home: 'Главная', social: 'Соцсети', support: 'Поддержать' },
  hero: {
    name: 'ПАУК',
    tagline: 'Стримлю. Снимаю. Не останавливаюсь.',
    ctaPrimary: 'Телеграм канал',
    ctaSecondary: 'Поддержать через Mono',
    scroll: 'Листай',
    photoAlt: 'Паук — стример и блогер',
  },
  social: {
    kicker: '01 — Соцсети',
    title: 'Найти меня',
    subtitle: 'Стримы, видео и новости — выбирай, где удобнее.',
    cards: {
      telegram: { name: 'Telegram' },
      instagram: { name: 'Instagram' },
      tiktok: { name: 'TikTok' },
      support: { name: 'Поддержать' },
    },
  },
  support: {
    kicker: '02 — Поддержка',
    title: 'Нравятся стримы?',
    text: 'Если тебе заходит мой контент — можешь поддержать канал. Каждый донат помогает стримить чаще и качественнее. Без давления, любая сумма.',
    button: 'Поддержать',
    note: 'Безопасно через monobank',
  },
  footer: {
    tagline: 'Стримы, видео и живое общение.',
    language: 'Язык',
    rights: 'Все права защищены.',
    toTop: 'Наверх',
  },
  a11y: {
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    language: 'Выбор языка',
    newTab: '(открывается в новой вкладке)',
    home: 'PAUK — на главную',
    mainNav: 'Главное меню',
  },
};

const en: Dict = {
  meta: {
    title: 'PAUK — official streamer website',
    description:
      'PAUK is a streamer and content creator. Streams, videos and more. Telegram, Instagram, TikTok and ways to support.',
  },
  nav: { home: 'Home', social: 'Socials', support: 'Support' },
  hero: {
    name: 'PAUK',
    tagline: 'Stream. Create. Never stop.',
    ctaPrimary: 'Telegram channel',
    ctaSecondary: 'Support via Mono',
    scroll: 'Scroll',
    photoAlt: 'PAUK — streamer and content creator',
  },
  social: {
    kicker: '01 — Socials',
    title: 'Find me',
    subtitle: 'Streams, videos and news — pick whatever suits you.',
    cards: {
      telegram: { name: 'Telegram' },
      instagram: { name: 'Instagram' },
      tiktok: { name: 'TikTok' },
      support: { name: 'Support' },
    },
  },
  support: {
    kicker: '02 — Support',
    title: 'Enjoy the streams?',
    text: 'If you like my content, you can support the channel. Every donation helps me stream more often and better. No pressure — any amount helps.',
    button: 'Support',
    note: 'Secure via monobank',
  },
  footer: {
    tagline: 'Streams, videos and real talk.',
    language: 'Language',
    rights: 'All rights reserved.',
    toTop: 'Back to top',
  },
  a11y: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Choose language',
    newTab: '(opens in a new tab)',
    home: 'PAUK — home',
    mainNav: 'Main navigation',
  },
};

export const translations: Record<Lang, Dict> = { uk, ru, en };
