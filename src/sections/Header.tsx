import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { SpiderMark } from '../components/SpiderMark';
import { site } from '../config/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useI18n } from '../i18n/LanguageContext';
import { sectionIds } from './sectionIds';

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Закрываем меню по Esc и при переходе на десктопную ширину
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 860px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    document.body.classList.add('menu-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled || open ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header__bar">
        <a className="logo" href="#home" aria-label={t.a11y.home} onClick={close}>
          <SpiderMark size={30} />
          <span className="logo__text">{site.name.latin}</span>
        </a>

        <nav className="nav nav--desktop" aria-label={t.a11y.mainNav}>
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} className={`nav__link${active === id ? ' is-active' : ''}`}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label={t.a11y.mainNav} hidden={!open}>
        <div className="container">
          {sectionIds.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-menu__link${active === id ? ' is-active' : ''}`}
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={close}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {t.nav[id]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
