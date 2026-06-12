(function () {
  var header = document.querySelector('[data-site-header]');
  var drawer = document.querySelector('[data-mobile-drawer]');
  var drawerTrigger = document.querySelector('[data-mobile-menu-trigger]');
  var drawerClose = document.querySelector('[data-mobile-drawer-close]');
  var drawerOverlay = document.querySelector('[data-mobile-drawer-overlay]');
  var lastDrawerTrigger = null;
  var lockedScrollY = 0;

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  function closeDropdown(dropdown, restoreFocus) {
    dropdown.removeAttribute('open');
    var trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) trigger.focus();
    }
  }

  function closeAllDropdowns(restoreFocus) {
    document.querySelectorAll('[data-dropdown][open]').forEach(function (item) {
      closeDropdown(item, restoreFocus);
    });
  }

  function focusableDrawerItems() {
    if (!drawer) return [];
    return Array.prototype.slice.call(
      drawer.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  function lockScroll() {
    lockedScrollY = window.scrollY;
    document.body.classList.add('drawer-open');
    document.body.style.position = 'fixed';
    document.body.style.insetBlockStart = '-' + lockedScrollY + 'px';
    document.body.style.inlineSize = '100%';
  }

  function unlockScroll() {
    document.body.classList.remove('drawer-open');
    document.body.style.position = '';
    document.body.style.insetBlockStart = '';
    document.body.style.inlineSize = '';
    window.scrollTo(0, lockedScrollY);
  }

  function openDrawer() {
    if (!drawer || !drawerTrigger || !drawerOverlay) return;

    closeAllDropdowns(false);
    lastDrawerTrigger = drawerTrigger;
    drawer.classList.add('is-open');
    drawer.removeAttribute('aria-hidden');
    drawer.inert = false;
    drawerOverlay.hidden = false;
    window.requestAnimationFrame(function () {
      drawerOverlay.classList.add('is-open');
    });
    drawerTrigger.setAttribute('aria-expanded', 'true');
    drawerTrigger.setAttribute(
      'aria-label',
      drawerTrigger.dataset.closeLabel || 'Close navigation',
    );
    lockScroll();

    var focusTarget = drawerClose || focusableDrawerItems()[0];
    if (focusTarget) focusTarget.focus();
  }

  function closeDrawer(restoreFocus) {
    if (!drawer || !drawerTrigger || !drawerOverlay) return;
    if (!drawer.classList.contains('is-open')) return;

    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.inert = true;
    drawerOverlay.classList.remove('is-open');
    window.setTimeout(function () {
      if (!drawer.classList.contains('is-open')) drawerOverlay.hidden = true;
    }, 200);
    drawerTrigger.setAttribute('aria-expanded', 'false');
    drawerTrigger.setAttribute(
      'aria-label',
      drawerTrigger.dataset.openLabel || 'Open navigation',
    );
    unlockScroll();
    if (restoreFocus && lastDrawerTrigger) lastDrawerTrigger.focus();
  }

  document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('[data-dropdown-trigger]');
    if (trigger) {
      trigger.setAttribute('aria-expanded', dropdown.open ? 'true' : 'false');
      trigger.addEventListener('click', function () {
        closeDrawer(false);
        window.setTimeout(function () {
          trigger.setAttribute(
            'aria-expanded',
            dropdown.open ? 'true' : 'false',
          );
        });
      });
    }

    dropdown.addEventListener('toggle', function () {
      if (!trigger) return;
      trigger.setAttribute('aria-expanded', dropdown.open ? 'true' : 'false');
      if (!dropdown.open) return;

      closeDrawer(false);
      document
        .querySelectorAll('[data-dropdown][open]')
        .forEach(function (other) {
          if (other !== dropdown) closeDropdown(other, false);
        });
    });
  });

  document.addEventListener('click', function (event) {
    document
      .querySelectorAll('[data-dropdown][open]')
      .forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) closeDropdown(dropdown, false);
      });
  });

  if (drawerTrigger) {
    drawerTrigger.addEventListener('click', function () {
      if (drawer && drawer.classList.contains('is-open')) {
        closeDrawer(true);
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', function () {
      closeDrawer(true);
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function () {
      closeDrawer(true);
    });
  }

  document
    .querySelectorAll('[data-mobile-drawer-link]')
    .forEach(function (link) {
      link.addEventListener('click', function () {
        closeDrawer(false);
      });
    });

  document.addEventListener('keydown', function (event) {
    var drawerIsOpen = drawer && drawer.classList.contains('is-open');

    if (event.key === 'Escape') {
      if (drawerIsOpen) {
        closeDrawer(true);
        return;
      }
      document
        .querySelectorAll('[data-dropdown][open]')
        .forEach(function (dropdown) {
          closeDropdown(dropdown, true);
        });
    }

    if (event.key !== 'Tab' || !drawerIsOpen) return;

    var focusable = focusableDrawerItems();
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll('[data-language-link]').forEach(function (link) {
    link.addEventListener('click', function () {
      var locale = link.getAttribute('hreflang');
      if (locale) window.localStorage.setItem('heavens-locale', locale);
    });
  });

  if (drawer) drawer.inert = true;
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
})();
