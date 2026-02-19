'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
      className="fixed top-4 right-20 md:right-24 z-[70] px-3 py-1.5 rounded-full bg-purple/40 backdrop-blur-sm border border-purple/60 text-light-gray font-terminal text-xs uppercase tracking-wider hover:bg-purple/60 transition-colors touch-manipulation"
      aria-label={`Switch to ${lang === 'de' ? 'English' : 'Deutsch'}`}
      data-interactive
    >
      {lang === 'de' ? 'EN' : 'DE'}
    </button>
  );
}
