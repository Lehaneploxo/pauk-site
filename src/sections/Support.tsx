import { HeartHandshake, ShieldCheck } from 'lucide-react';
import { ExternalLink } from '../components/ExternalLink';
import { CornerWeb } from '../components/CornerWeb';
import { site } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';

export function Support() {
  const { t } = useI18n();

  return (
    <section id="support" className="section">
      <div className="container">
        <div className="support" data-reveal>
          <CornerWeb corner="tl" seed={61} />
          <CornerWeb corner="br" seed={77} />
          <div className="support__content">
            <p className="kicker">{t.support.kicker}</p>
            <h2 className="section-title">{t.support.title}</h2>
            <p className="support__text">{t.support.text}</p>
            <div className="support__actions">
              <ExternalLink className="btn btn--primary btn--lg" href={site.links.support}>
                <HeartHandshake size={20} aria-hidden="true" />
                {t.support.button}
              </ExternalLink>
              <span className="support__note">
                <ShieldCheck size={16} aria-hidden="true" />
                {t.support.note}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
