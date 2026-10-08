import { useEffect, useState } from 'react';
import { site } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';
import { CornerWeb } from './CornerWeb';
import { Smoke } from './Smoke';
import { SpiderMark } from './SpiderMark';

const SHOW_MS = 1700;
const FADE_MS = 700;

/**
 * Экран загрузки: «ПАУК» между двумя пауками, подпись снизу, дым и паутина в углах.
 * Повторяет разметку статического прелоадера из index.html, поэтому переход бесшовный.
 */
export function Loader() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<'show' | 'hide' | 'done'>('show');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show = reduce ? 400 : SHOW_MS;
    const t1 = window.setTimeout(() => {
      setPhase('hide');
      document.documentElement.classList.remove('is-loading');
      document.documentElement.classList.add('is-ready');
    }, show);
    const t2 = window.setTimeout(() => setPhase('done'), show + FADE_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`loader${phase === 'hide' ? ' is-hidden' : ''}`} aria-hidden="true">
      <Smoke intensity={0.9} className="loader__smoke" />
      <CornerWeb corner="tl" seed={5} className="loader__web" />
      <CornerWeb corner="br" seed={29} className="loader__web" />
      <div className="loader__center">
        <p className="loader__title">
          <SpiderMark className="loader__spider" size={40} />
          <span>{t.hero.name}</span>
          <SpiderMark className="loader__spider" size={40} />
        </p>
        <span className="loader__line" />
      </div>
      <p className="loader__brand">{site.brandLine}</p>
    </div>
  );
}
