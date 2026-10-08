# PAUK — персональный сайт

React + Vite + TypeScript, чистый CSS, иконки lucide-react. Языки: UA (по умолчанию) / RU / EN.

## Запуск

```bash
npm install
npm run dev      # разработка
npm run build    # сборка в dist/
npm run preview  # просмотр собранной версии
```

Папку `dist/` можно залить на любой статический хостинг (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Что где менять

| Что | Где |
| --- | --- |
| Имя, ник, ссылки (Telegram, Instagram, TikTok, monobank) | `src/config/site.ts` |
| Порядок карточек соцсетей | `socialOrder` в `src/config/site.ts` |
| Все тексты на трёх языках, title/description | `src/i18n/translations.ts` |
| Цвета, шрифты, радиусы | `src/styles/theme.css` |
| Фото | положить `src/assets/avatar.jpg` (или `.png` / `.webp`) и пересобрать. Нет файла — показывается placeholder с пауком |
| Favicon / OG-картинка | `public/favicon.svg`, `public/og-image.png`, `public/apple-touch-icon.png` |

Язык можно задать ссылкой: `?lang=ru`, `?lang=en`, `?lang=uk`. Выбор сохраняется в localStorage.

## Структура

```
src/
  components/   Avatar, LanguageSwitcher, SpiderMark, WebGraphic, иконки
  sections/     Header, Hero, About, SocialLinks, Support, Footer
  i18n/         переводы + LanguageContext
  hooks/        появление при скролле, активный пункт меню
  config/       site.ts — имя и ссылки
  styles/       theme.css (токены), global.css
  assets/       сюда кладётся avatar.jpg
```
