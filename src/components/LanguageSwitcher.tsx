import { useI18n } from '../i18n/LanguageContext';
import { langLabels, languages } from '../i18n/translations';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div className={`lang ${className}`} role="group" aria-label={t.a11y.language}>
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang__btn${code === lang ? ' is-active' : ''}`}
          aria-pressed={code === lang}
          lang={code}
          onClick={() => setLang(code)}
        >
          {langLabels[code]}
        </button>
      ))}
    </div>
  );
}
