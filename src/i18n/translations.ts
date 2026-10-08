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
  nav: { home: 'Головна', about: 'Про мене', social: 'Соцмережі', support: 'Підтримати' },
  hero: {
    name: 'ПАУК',
    tagline: 'Стримлю. Знімаю. Не зупиняюсь.',
    description:
      'Стример і блогер. Ефіри, відео та живе спілкування — усе, що я роблю, і всі місця, де мене знайти.',
    ctaPrimary: 'Написати в Telegram',
    ctaSecondary: 'Підтримати',
    scroll: 'Гортай',
    avatarAlt: 'Фото Паука',
  },
  about: {
    kicker: '01 — Про мене',
    title: 'Хто такий Паук',
    lead:
      'Я — Паук, стример і автор контенту. Виходжу в ефір, знімаю відео та збираю навколо себе людей, яким цікаве те саме, що й мені. Тут усе в одному місці: де дивитися, куди писати і як підтримати.',
  },
  social: {
    kicker: '02 — Соцмережі',
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
    kicker: '03 — Підтримка',
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
  nav: { home: 'Главная', about: 'Обо мне', social: 'Соцсети', support: 'Поддержать' },
  hero: {
    name: 'ПАУК',
    tagline: 'Стримлю. Снимаю. Не останавливаюсь.',
    description:
      'Стример и блогер. Эфиры, видео и живое общение — всё, что я делаю, и все места, где меня найти.',
    ctaPrimary: 'Написать в Telegram',
    ctaSecondary: 'Поддержать',
    scroll: 'Листай',
    avatarAlt: 'Фото Паука',
  },
  about: {
    kicker: '01 — Обо мне',
    title: 'Кто такой Паук',
    lead:
      'Я — Паук, стример и автор контента. Выхожу в эфир, снимаю видео и собираю вокруг себя людей, которым интересно то же, что и мне. Здесь всё в одном месте: где смотреть, куда писать и как поддержать.',
  },
  social: {
    kicker: '02 — Соцсети',
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
    kicker: '03 — Поддержка',
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
  nav: { home: 'Home', about: 'About', social: 'Socials', support: 'Support' },
  hero: {
    name: 'PAUK',
    tagline: 'Stream. Create. Never stop.',
    description:
      'Streamer and content creator. Live streams, videos and real talk — everything I do and every place to find me.',
    ctaPrimary: 'Message on Telegram',
    ctaSecondary: 'Support',
    scroll: 'Scroll',
    avatarAlt: 'Photo of PAUK',
  },
  about: {
    kicker: '01 — About',
    title: 'Who is PAUK',
    lead:
      'I’m PAUK (“spider” in Ukrainian) — a streamer and content creator. I go live, make videos and bring together people who are into the same things I am. Everything is in one place here: where to watch, where to message me and how to support.',
  },
  social: {
    kicker: '02 — Socials',
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
    kicker: '03 — Support',
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
