import { HeartHandshake } from 'lucide-react';
import type { LinkKey } from '../config/site';
import { InstagramIcon, TelegramIcon, TikTokIcon } from './BrandIcons';

export function SocialIcon({ name, size = 24 }: { name: LinkKey; size?: number }) {
  switch (name) {
    case 'telegram':
      return <TelegramIcon size={size} />;
    case 'instagram':
      return <InstagramIcon size={size} />;
    case 'tiktok':
      return <TikTokIcon size={size} />;
    case 'support':
      return <HeartHandshake size={size} strokeWidth={1.8} aria-hidden="true" />;
  }
}
