import { ArrowUp } from 'lucide-react';
import { ExternalLink } from '../components/ExternalLink';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { SocialIcon } from '../components/SocialIcon';
import { SpiderMark } from '../components/SpiderMark';
import { site, socialOrder } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo logo--lg" href="#home" aria-label={t.a11y.home}>
            <SpiderMark size={36} />
            <span className="logo__text">{site.name.latin}</span>
          </a>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <ul className="footer__links">
          {socialOrder.map((key) => (
            <li key={key}>
              <ExternalLink className="footer__link" href={site.links[key]}>
                <SocialIcon name={key} size={18} />
                {t.social.cards[key].name}
              </ExternalLink>
            </li>
          ))}
        </ul>

        <div className="footer__lang">
          <span className="footer__label">{t.footer.language}</span>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.name.latin}. {t.footer.rights}
        </p>
        <a className="footer__top" href="#home">
          {t.footer.toTop}
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
