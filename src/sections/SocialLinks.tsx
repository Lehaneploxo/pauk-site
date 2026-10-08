import { ArrowUpRight } from 'lucide-react';
import type { PointerEvent } from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { SocialIcon } from '../components/SocialIcon';
import { site, socialOrder } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';

/** Свечение карточки следует за курсором */
function trackGlow(e: PointerEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}

export function SocialLinks() {
  const { t } = useI18n();

  return (
    <section id="social" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">{t.social.kicker}</p>
          <h2 className="section-title">{t.social.title}</h2>
          <p className="section-sub">{t.social.subtitle}</p>
        </div>

        <ul className="socials__grid">
          {socialOrder.map((key, i) => (
            <li key={key} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
              <ExternalLink className={`scard scard--${key}`} href={site.links[key]} onPointerMove={trackGlow}>
                <span className="scard__icon">
                  <SocialIcon name={key} size={22} />
                </span>
                <span className="scard__body">
                  <span className="scard__name">{t.social.cards[key].name}</span>
                  <span className="scard__handle">{key === 'support' ? 'monobank' : site.handle}</span>
                </span>
                <span className="scard__arrow">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
