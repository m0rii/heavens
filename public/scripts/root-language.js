(function () {
  const locales = window.__HEAVENS_LOCALES__ || [
    'hy',
    'en',
    'ru',
    'de',
    'fa',
    'ar',
  ];
  const fallback = window.__HEAVENS_DEFAULT_LOCALE__ || 'hy';
  const saved = window.localStorage.getItem('heavens-locale');

  function nearest(language) {
    if (!language) return fallback;
    const primary = language.toLowerCase().split('-')[0];
    if (primary === 'am') return 'hy';
    return locales.includes(primary) ? primary : fallback;
  }

  function browserTarget() {
    const languages =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];

    for (const language of languages) {
      const match = nearest(language);
      if (match !== fallback || language.toLowerCase().split('-')[0] === 'hy') {
        return match;
      }
    }

    return fallback;
  }

  const target = locales.includes(saved) ? saved : browserTarget();
  const path = `/${target}/`;

  if (window.location.pathname !== path) {
    window.location.replace(path);
  }
})();
