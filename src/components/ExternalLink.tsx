import type { AnchorHTMLAttributes } from 'react';
import { useI18n } from '../i18n/LanguageContext';

/** Внешняя ссылка: всегда новая вкладка + noopener + подсказка для скринридеров. */
export function ExternalLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t } = useI18n();
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  );
}
