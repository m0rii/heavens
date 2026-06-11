(function () {
  function closeDropdown(dropdown) {
    dropdown.removeAttribute('open');
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (trigger) {
      trigger.setAttribute('aria-expanded', dropdown.open ? 'true' : 'false');
      trigger.addEventListener('click', function () {
        window.setTimeout(function () {
          trigger.setAttribute(
            'aria-expanded',
            dropdown.open ? 'true' : 'false',
          );
        });
      });
    }

    dropdown.addEventListener('toggle', function () {
      if (!dropdown.open || !trigger) return;

      trigger.setAttribute('aria-expanded', 'true');
      document
        .querySelectorAll('[data-dropdown][open]')
        .forEach(function (other) {
          if (other !== dropdown) closeDropdown(other);
        });
    });
  });

  document.addEventListener('click', function (event) {
    document
      .querySelectorAll('[data-dropdown][open]')
      .forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) closeDropdown(dropdown);
      });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;

    document
      .querySelectorAll('[data-dropdown][open]')
      .forEach(function (dropdown) {
        const trigger = dropdown.querySelector('[data-dropdown-trigger]');
        closeDropdown(dropdown);
        if (trigger) trigger.focus();
      });
  });

  document.querySelectorAll('[data-language-link]').forEach(function (link) {
    link.addEventListener('click', function () {
      const locale = link.getAttribute('hreflang');
      if (locale) window.localStorage.setItem('heavens-locale', locale);
    });
  });
})();
