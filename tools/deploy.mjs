// Выкладка сайта на GitHub Pages: содержимое dist/ → ветка gh-pages репозитория pauk-site.
// Запуск: npm run deploy (сначала собирает сайт, потом вызывает этот скрипт).
// Служебная папка git создаётся во временном каталоге, поэтому dist/ остаётся чистым.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const REPO = 'https://github.com/Lehaneploxo/pauk-site.git';
const DIST = resolve('dist');

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('Нет dist/index.html — сначала npm run build');
  process.exit(1);
}
writeFileSync(join(DIST, '.nojekyll'), '');

const gitDir = mkdtempSync(join(tmpdir(), 'pauk-deploy-'));
const git = (...args) => execFileSync('git', [`--git-dir=${gitDir}`, `--work-tree=${DIST}`, ...args], { stdio: 'inherit' });

try {
  git('init', '-q', '-b', 'gh-pages');
  git('add', '-A');
  git('commit', '-q', '-m', 'Deploy PAUK site build');
  git('push', '-q', '-f', REPO, 'gh-pages');
  console.log('Готово: https://paukkh.com (обновится через 1–2 минуты)');
} finally {
  rmSync(gitDir, { recursive: true, force: true });
}
