export type Locale = 'hu' | 'en';

export function saveLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem('locale', locale);
  } catch {}
}

export function loadLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem('locale');
    return v === 'hu' || v === 'en' ? v : null;
  } catch {
    return null;
  }
}
