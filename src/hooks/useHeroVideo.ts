import { useEffect, useRef, useState } from 'react';

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

/** Не тянет: экономия трафика, медленная сеть, мало памяти или «меньше движения». */
function canPlayVideo() {
  const nav = navigator as Navigator & { connection?: NetworkInformation; deviceMemory?: number };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /(^|-)(2g|3g)$/.test(nav.connection.effectiveType)) return false;
  if (nav.deviceMemory && nav.deviceMemory <= 2) return false;
  return true;
}

/** Сколько ждём, пока видео начнёт играть, прежде чем оставить фото */
const START_TIMEOUT_MS = 8000;

/**
 * Фоновое видео поверх фото (как на lehaneploxo): грузится только если устройство и сеть тянут,
 * проявляется, когда реально пошло воспроизведение, иначе остаётся фото.
 * Вне экрана и в фоновой вкладке — пауза.
 */
export function useHeroVideo(src: string) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || !canPlayVideo()) return;

    let started = false;
    let visible = true;
    const giveUp = () => {
      video.pause();
      video.removeAttribute('src');
      video.load(); // прерываем скачивание
    };
    const timer = window.setTimeout(() => !started && giveUp(), START_TIMEOUT_MS);

    const tryPlay = () => {
      if (!visible || document.hidden) return;
      video.play().catch(() => {
        /* автоплей запрещён (например, режим энергосбережения iOS) — остаётся фото */
      });
    };
    const onPlaying = () => {
      started = true;
      window.clearTimeout(timer);
      setPlaying(true);
    };

    video.addEventListener('playing', onPlaying);
    video.src = src;
    video.load();
    tryPlay();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) tryPlay();
      else video.pause();
    });
    observer.observe(video);
    const onVisibility = () => (document.hidden ? video.pause() : tryPlay());
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      video.removeEventListener('playing', onPlaying);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [src]);

  return { ref, playing };
}
