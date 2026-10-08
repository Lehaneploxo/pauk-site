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
| Фото первого экрана | `public/hero.webp` (вертикальное ~1080×1920, WebP/JPG до ~500 КБ); размеры — `heroPhoto` в `src/config/site.ts` |
| Паук (логотип, загрузка, favicon) | форма в `src/components/spiderShape.ts`, затем `node tools/build-spider.mjs` |
| Favicon / OG-картинка | `public/favicon.svg`, `public/og-image.png`, `public/apple-touch-icon.png` |

Язык можно задать ссылкой: `?lang=ru`, `?lang=en`, `?lang=uk`. Выбор сохраняется в localStorage.

## Структура

```
src/
  components/   Loader, LanguageSwitcher, SpiderMark, CornerWeb, Smoke, иконки
  sections/     Header, Hero, About, SocialLinks, Support, Footer
  i18n/         переводы + LanguageContext
  hooks/        появление при скролле, активный пункт меню
  config/       site.ts — имя и ссылки
  styles/       theme.css (токены), global.css
```
