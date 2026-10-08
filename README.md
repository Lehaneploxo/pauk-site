# PAUK — персональный сайт

React + Vite + TypeScript, чистый CSS, иконки lucide-react. Языки: UA (по умолчанию) / RU / EN.

## Запуск

```bash
npm install
npm run dev      # разработка
npm run build    # сборка в dist/
npm run preview  # просмотр собранной версии
npm run deploy   # собрать и выложить на https://paukkh.com (GitHub Pages, ветка gh-pages)
```

Полное описание проекта: `ПАСПОРТ ПРОЕКТА.md`. Для ИИ-помощника: `CLAUDE.md`.

## Перенос на другой хостинг

Сайт статический: после `npm run build` всё лежит в папке `dist/`. Пути относительные, поэтому сайт работает
и в корне домена, и в подпапке (как на GitHub Pages).

1. В файле `.env` поменяй `VITE_SITE_URL` на новый адрес (со слешем в конце) — он нужен для превью ссылки
   в Telegram/Instagram (og:image) и canonical.
2. Настройки на хостинге (Netlify / Vercel / Cloudflare Pages — везде одинаково):
   - Build command: `npm run build`
   - Output / publish directory: `dist`
   - Node.js 18+
3. Или без сборки на хостинге: `npm run build` локально и перетащить папку `dist/` в Netlify Drop
   (app.netlify.com/drop) или загрузить её в любой хостинг статических файлов.

Сейчас сайт выложен на GitHub Pages с доменом **paukkh.com**: ветка `gh-pages` = содержимое `dist/`, выкладка — `npm run deploy`.

## Что где менять

| Что | Где |
| --- | --- |
| Имя, ник, ссылки (Telegram, Instagram, TikTok, monobank) | `src/config/site.ts` |
| Порядок карточек соцсетей | `socialOrder` в `src/config/site.ts` |
| Все тексты на трёх языках, title/description | `src/i18n/translations.ts` |
| Цвета, шрифты, радиусы | `src/styles/theme.css` |
| Фото первого экрана | `public/hero.webp` + уменьшенная `public/hero-640.webp` (вертикальное ~1080×1920, WebP до ~500 КБ); размеры — `heroPhoto` в `src/config/site.ts` |
| Видео первого экрана | `public/hero.mp4` (без звука, вертикальное, до ~2 МБ). Играет поверх фото, только если сеть и устройство тянут — логика в `src/hooks/useHeroVideo.ts` |
| Адрес сайта (для превью ссылок) | `VITE_SITE_URL` в `.env` |
| Паук (логотип, загрузка, favicon) | форма в `src/components/spiderShape.ts`, затем `node tools/build-spider.mjs` |
| Favicon / OG-картинка | `public/favicon.svg`, `public/og-image.png`, `public/apple-touch-icon.png` |

Язык можно задать ссылкой: `?lang=ru`, `?lang=en`, `?lang=uk`. Выбор сохраняется в localStorage.

## Структура

```
src/
  components/   Loader, LanguageSwitcher, SpiderMark, CornerWeb, Smoke, иконки
  sections/     Header, Hero, SocialLinks, Support, Footer
  i18n/         переводы + LanguageContext
  hooks/        видео первого экрана, появление при скролле, активный пункт меню
  config/       site.ts — имя и ссылки
  styles/       theme.css (токены), global.css
```
