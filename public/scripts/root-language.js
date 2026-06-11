(function () {
  const locales = window.__HEAVENS_LOCALES__ || ['hy', 'en', 'ru', 'de', 'fa'];
  const fallback = window.__HEAVENS_DEFAULT_LOCALE__ || 'hy';
  const saved = window.localStorage.getItem('heavens-locale');

  function nearest(language) {
    if (!language) return fallback;
    const primary = language.toLowerCase().split('-')[0];
    if (primary === 'am') return 'hy';
    return locales.includes(primary) ? primary : fallback;
  }

  const target = locales.includes(saved)
    ? saved
    : nearest(
        (navigator.languages && navigator.languages[0]) || navigator.language,
      );
  const path = `/${target}/`;

  if (window.location.pathname !== path) {
    window.location.replace(path);
  }
})();
