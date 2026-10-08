import { Avatar } from '../components/Avatar';
import { site } from '../config/site';
import { useI18n } from '../i18n/LanguageContext';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__media" data-reveal>
          <Avatar />
        </div>
        <div className="about__text">
          <div className="section-head" data-reveal>
            <p className="kicker">{t.about.kicker}</p>
            <h2 className="section-title">{t.about.title}</h2>
          </div>
          <p className="about__lead" data-reveal>
            {t.about.lead}
          </p>
          <p className="about__handle" data-reveal>
            {site.handle}
          </p>
        </div>
      </div>
    </section>
  );
}
