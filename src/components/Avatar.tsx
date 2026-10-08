import { useI18n } from '../i18n/LanguageContext';
import { SpiderMark } from './SpiderMark';
import { WebGraphic } from './WebGraphic';

/**
 * Фото подхватывается на этапе сборки из src/assets/avatar.{jpg,jpeg,png,webp}.
 * Нет файла — показываем placeholder, без лишних 404-запросов.
 */
const avatarFiles = import.meta.glob<string>('../assets/avatar.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const avatarSrc = Object.values(avatarFiles)[0];

export function Avatar() {
  const { t } = useI18n();

  return (
    <div className="avatar">
      <div className="avatar__ring" aria-hidden="true" />
      <div className="avatar__frame">
        {avatarSrc ? (
          <img className="avatar__img" src={avatarSrc} alt={t.hero.avatarAlt} width={480} height={480} />
        ) : (
          <div className="avatar__placeholder" role="img" aria-label={t.hero.avatarAlt}>
            <WebGraphic className="avatar__web" spokes={12} rings={7} />
            <SpiderMark className="avatar__spider" size={96} />
          </div>
        )}
      </div>
    </div>
  );
}
