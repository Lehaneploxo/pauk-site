import { ArrowDown, HeartHandshake } from 'lucide-react';
import { TelegramIcon } from '../components/BrandIcons';
import { ExternalLink } from '../components/ExternalLink';
import { site } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img
          className="hero__photo"
          src={site.heroPhoto.src}
          width={site.heroPhoto.width}
          height={site.heroPhoto.height}
          alt={t.hero.photoAlt}
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title load-in">
          <span className="hero__name">{t.hero.name}</span>
        </h1>
        <p className="hero__brand load-in" style={{ animationDelay: '120ms' }}>
          {site.brandLine}
        </p>
        <p className="hero__tagline load-in" style={{ animationDelay: '240ms' }}>
          {t.hero.tagline}
        </p>
        <div className="hero__cta load-in" style={{ animationDelay: '360ms' }}>
          <ExternalLink className="btn btn--primary" href={site.links.telegram}>
            <TelegramIcon size={18} />
            {t.hero.ctaPrimary}
          </ExternalLink>
          <ExternalLink className="btn btn--ghost" href={site.links.support}>
            <HeartHandshake size={18} aria-hidden="true" />
            {t.hero.ctaSecondary}
          </ExternalLink>
        </div>
      </div>

      <a className="hero__scroll" href="#social">
        {t.hero.scroll}
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
