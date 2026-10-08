export const languages = ['uk', 'ru', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'uk';

/** Подпись в переключателе языков */
export const langLabels: Record<Lang, string> = { uk: 'UA', ru: 'RU', en: 'EN' };
export const ogLocale: Record<Lang, string> = { uk: 'uk_UA', ru: 'ru_RU', en: 'en_US' };

const uk = {
  meta: {
    title: 'PAUK — офіційний сайт',
    description:
      'Персональна сторінка Паука: проєкти, творчість, Telegram, Instagram, TikTok і підтримка проєкту.',
  },
  nav: { home: 'Головна', about: 'Про мене', social: 'Соцмережі', support: 'Підтримати' },
  hero: {
    eyebrow: 'Персональний бренд',
    name: 'ПАУК',
    tagline: 'Створюю. Досліджую. Рухаюсь далі.',
    description:
      'Тут мої проєкти, творчість і всі місця, де мене можна знайти. Плету свою мережу — нитка за ниткою.',
    ctaPrimary: 'Написати в Telegram',
    ctaSecondary: 'Підтримати',
    scroll: 'Гортай',
    avatarAlt: 'Фото Паука',
  },
  about: {
    kicker: '01 — Про мене',
    title: 'Тихо. Уважно. По-своєму.',
    lead:
      'Я — Паук. Роблю те, що цікаво мені, і ділюся цим з тими, кому цікаво теж. Без зайвого шуму — лише результат і рух уперед.',
  },
  social: {
    kicker: '02 — Соцмережі',
    title: 'Знайти мене',
    subtitle: 'Обирай, де зручніше. Усі посилання відкриваються в новій вкладці.',
    open: 'Відкрити',
    cards: {
      telegram: { name: 'Telegram', desc: 'Пиши напряму — тут я відповідаю найшвидше.' },
      instagram: { name: 'Instagram', desc: 'Фото, моменти та те, що відбувається зараз.' },
      tiktok: { name: 'TikTok', desc: 'Короткі відео, ефіри та все найживіше.' },
      support: { name: 'Підтримати', desc: 'Банка monobank — для тих, хто хоче допомогти проєкту.' },
    },
  },
  support: {
    kicker: '03 — Підтримка',
    title: 'Подобається те, що я роблю?',
    text: 'Якщо так — можеш підтримати проєкт. Без зобов’язань: будь-яка сума — це ще одна нитка, яка тримає мережу.',
    button: 'Підтримати',
    note: 'Безпечно через monobank',
  },
  footer: {
    tagline: 'Тихо плету свою мережу.',
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
    title: 'PAUK — официальный сайт',
    description:
      'Персональная страница Паука: проекты, творчество, Telegram, Instagram, TikTok и поддержка проекта.',
  },
  nav: { home: 'Главная', about: 'Обо мне', social: 'Соцсети', support: 'Поддержать' },
  hero: {
    eyebrow: 'Персональный бренд',
    name: 'ПАУК',
    tagline: 'Создаю. Исследую. Двигаюсь дальше.',
    description:
      'Здесь мои проекты, творчество и все места, где меня можно найти. Плету свою сеть — нить за нитью.',
    ctaPrimary: 'Написать в Telegram',
    ctaSecondary: 'Поддержать',
    scroll: 'Листай',
    avatarAlt: 'Фото Паука',
  },
  about: {
    kicker: '01 — Обо мне',
    title: 'Тихо. Внимательно. По-своему.',
    lead:
      'Я — Паук. Делаю то, что интересно мне, и делюсь этим с теми, кому интересно тоже. Без лишнего шума — только результат и движение вперёд.',
  },
  social: {
    kicker: '02 — Соцсети',
    title: 'Найти меня',
    subtitle: 'Выбирай, где удобнее. Все ссылки открываются в новой вкладке.',
    open: 'Открыть',
    cards: {
      telegram: { name: 'Telegram', desc: 'Пиши напрямую — здесь я отвечаю быстрее всего.' },
      instagram: { name: 'Instagram', desc: 'Фото, моменты и то, что происходит сейчас.' },
      tiktok: { name: 'TikTok', desc: 'Короткие видео, эфиры и всё самое живое.' },
      support: { name: 'Поддержать', desc: 'Банка monobank — для тех, кто хочет помочь проекту.' },
    },
  },
  support: {
    kicker: '03 — Поддержка',
    title: 'Нравится то, что я делаю?',
    text: 'Если да — можешь поддержать проект. Без обязательств: любая сумма — это ещё одна нить, которая держит сеть.',
    button: 'Поддержать',
    note: 'Безопасно через monobank',
  },
  footer: {
    tagline: 'Тихо плету свою сеть.',
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
    title: 'PAUK — official website',
    description:
      'The personal page of PAUK: projects, creative work, Telegram, Instagram, TikTok and ways to support.',
  },
  nav: { home: 'Home', about: 'About', social: 'Socials', support: 'Support' },
  hero: {
    eyebrow: 'Personal brand',
    name: 'PAUK',
    tagline: 'Create. Explore. Keep moving.',
    description:
      'My projects, my work and every place you can find me. Weaving my own web — one thread at a time.',
    ctaPrimary: 'Message on Telegram',
    ctaSecondary: 'Support',
    scroll: 'Scroll',
    avatarAlt: 'Photo of PAUK',
  },
  about: {
    kicker: '01 — About',
    title: 'Quiet. Focused. My own way.',
    lead:
      'I’m PAUK — “spider” in Ukrainian. I make what I find interesting and share it with people who feel the same. No noise — just results and moving forward.',
  },
  social: {
    kicker: '02 — Socials',
    title: 'Find me',
    subtitle: 'Pick whatever suits you. All links open in a new tab.',
    open: 'Open',
    cards: {
      telegram: { name: 'Telegram', desc: 'Message me directly — the fastest way to reach me.' },
      instagram: { name: 'Instagram', desc: 'Photos, moments and what’s happening right now.' },
      tiktok: { name: 'TikTok', desc: 'Short videos, live streams and the rawest stuff.' },
      support: { name: 'Support', desc: 'A monobank jar — for anyone who wants to help the project.' },
    },
  },
  support: {
    kicker: '03 — Support',
    title: 'Like what I do?',
    text: 'If so, you can support the project. No pressure — any amount is one more thread holding the web together.',
    button: 'Support',
    note: 'Secure via monobank',
  },
  footer: {
    tagline: 'Quietly weaving my web.',
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
