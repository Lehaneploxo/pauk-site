# CLAUDE.md — PAUK site (paukkh.com)

Personal site for the client «ПАУК / PAUK» (Шадик, streamer & blogger, @paukkh). Owner of this repo/work: the user (Леха Неплохо, GitHub `Lehaneploxo`). Human-readable overview for the user: `ПАСПОРТ ПРОЕКТА.md` — keep it in sync when something it describes changes. Talk to the user in Russian.

## Live & infrastructure
- Live: **https://paukkh.com** (GitHub Pages, custom domain, HTTPS enforced). `lehaneploxo.github.io/pauk-site` 301-redirects there.
- Repo: `github.com/Lehaneploxo/pauk-site` (public). `main` = source, `gh-pages` = built `dist/` (served).
- Deploy: **`npm run deploy`** = `npm run build` + `tools/deploy.mjs` (force-pushes `dist/` to `gh-pages` using a temp `--git-dir`, so `dist/` stays clean). The `gh` token has **no `workflow` scope** → GitHub Actions deploy is impossible; don't add `.github/workflows`.
- Verify a deploy is live: compare `dist/assets/index-*.js` name with `curl -s https://paukkh.com/` (add a cache-busting query).
- Domain: Namecheap, **owned by the client** (account `paukkh`); user's account `lehaneploxo` has full manager access. DNS: A @ → 185.199.108/109/110/111.153, CNAME www → lehaneploxo.github.io. Registered 2026-10-08, expires 2027-10-08, auto-renew on. `public/CNAME` must contain `paukkh.com`.
- `.env`: `VITE_SITE_URL=https://paukkh.com/` → substituted into `index.html` (`%VITE_SITE_URL%`) for og:url, og:image, canonical.
- The user's own site lehaneploxo.com is a different repo (`leha-neploxo`, folder «сайт Леха Неплохо»). Never touch it from here.

## Stack
React 18.3.1 + Vite 5.4.10 + TypeScript 5.6.3 (strict, `noUnusedLocals`), plain CSS with tokens, lucide-react 0.454.0. No backend. `vite.config.ts` uses `base: './'` (relative paths → works at domain root or a subpath). Fonts: Google Fonts **variable** ranges `Manrope:wght@400..800`, `Montserrat:wght@400..700` (4 font files; keep as ranges).

## Layout
- `src/config/site.ts`: name, handle, `brandLine` ('Personal brand', **always English**), links, `socialOrder` (**instagram, support, telegram, tiktok**), `heroPhoto` (src/srcSet/sizes), `heroVideo`.
- `src/i18n/translations.ts`: `uk` (default) is the source of `Dict` type; `ru`/`en` must match. `LanguageContext.tsx`: `?lang=` > localStorage `pauk-lang` > `uk`; syncs `<html lang>`, title, meta/OG.
- `src/sections/`: Header (sticky, burger < 860px), Hero (photo + video + scrim, text at bottom), SocialLinks (`.scard` cards copied from the user's lehaneploxo site), Support, Footer. `sectionIds.ts` = nav order (home, social, support).
- `src/components/`: Loader (React copy of the static preloader in `index.html`; shows ~1.7s, then sets `html.is-ready`), SpiderMark + `spiderShape.ts` (silver spider; `node tools/build-spider.mjs` regenerates `public/spider.svg` + `favicon.svg` from the same shape), CornerWeb (procedural web rendered as ONE data-URL `<img>`; loader only), Smoke (canvas fbm smoke computed once & cached, low res, center skipped), BrandIcons, SocialIcon, ExternalLink (always `target=_blank rel=noopener noreferrer` + sr-only hint), LanguageSwitcher.
- `src/hooks/useHeroVideo.ts`: loads `hero.mp4` only if not reduced-motion / saveData / 2g-3g / deviceMemory ≤ 2; fades in on `playing`; gives up after 8s; pauses off-screen / hidden tab.
- `public/`: hero.webp (941×1672) + hero-640.webp, hero.mp4 (720×1280, no audio, 9s seamless loop — end crossfaded into start via ffmpeg xfade), og-image.png, apple-touch-icon.png, favicon.svg, spider.svg, robots.txt, CNAME.

## Client decisions — do not revert without asking
Black/silver monochrome; all graphics drawn in code (client images were references only, never use them as backgrounds). Loader: «🕷 ПАУК 🕷» + PERSONAL BRAND. Corner webs/small spiders **only on the loader**. Removed on request: «Створюю/Досліджую/Рухаюсь далі» cards, About section, avatar circle, big drawn spider in hero. Hero buttons: «Телеграм канал» / «Підтримати через Mono». Texts are for a streamer/bloger.

## Gotchas
- `backdrop-filter` on the header makes it the containing block for the fixed mobile menu → `.header.is-open` disables it. Keep that.
- `.load-in` hero animations start only when `html.is-ready` (set by Loader). Static preloader in `index.html` has critical inline CSS + a tiny script for `?lang=en`/localStorage.
- Inline SVG with hundreds of nodes caused heavy first layout on throttled mobile; prefer `<img>`/canvas for decorative graphics.
- Lighthouse mobile perf ≈ 62–72 (dominated by the intentional loader + throttled font layout); desktop 95–98; a11y/BP/SEO 100. Keep `--text-dim` ≥ #8a8a92 for WCAG contrast.
- In this Windows sandbox Node `fs.rmSync` can silently fail on dirs; shell `rm -rf` works.
- ffmpeg: `C:\Users\38063\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.1-full_build\bin`. Chrome: `C:\Program Files\Google\Chrome\Application\chrome.exe` (puppeteer-core tests were run from the session scratchpad, not in repo).

## Checks before deploy
`npm run build` (runs `tsc -b`) → check widths 320–1920 for no horizontal scroll, UA/RU/EN switch, mobile menu, all external links, video on fast vs slow network, no console errors. Commit to `main` with the attribution lines from the system prompt, then `npm run deploy`.
