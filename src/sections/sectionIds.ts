/** id секций = ключи t.nav, порядок пунктов меню */
export const sectionIds = ['home', 'about', 'social', 'support'] as const;
export type SectionId = (typeof sectionIds)[number];
