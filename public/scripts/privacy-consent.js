(function () {
  var CONSENT_STORAGE_KEY = 'heavens:privacy-consent:v1';
  var CONSENT_VERSION = 1;

  function defaultConsent() {
    return {
      version: CONSENT_VERSION,
      essential: true,
      analytics: false,
      updatedAt: new Date().toISOString(),
    };
  }

  function parseConsent(raw) {
    if (!raw) return null;

    try {
      var parsed = JSON.parse(raw);
      if (
        !parsed ||
        parsed.version !== CONSENT_VERSION ||
        parsed.essential !== true ||
        typeof parsed.analytics !== 'boolean' ||
        typeof parsed.updatedAt !== 'string'
      ) {
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  }

  function getStoredConsent() {
    return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  }

  function saveConsent(analytics) {
    var state = defaultConsent();
    state.analytics = Boolean(analytics);
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(
      new CustomEvent('heavens:privacy-consent', { detail: state }),
    );
    return state;
  }

  function hasAnalyticsConsent() {
    var state = getStoredConsent();
    return Boolean(state && state.analytics);
  }

  function loadAnalyticsIfAllowed() {
    return false;
  }

  window.HeavensPrivacy = {
    CONSENT_STORAGE_KEY: CONSENT_STORAGE_KEY,
    getStoredConsent: getStoredConsent,
    hasAnalyticsConsent: hasAnalyticsConsent,
    loadAnalyticsIfAllowed: loadAnalyticsIfAllowed,
    parseConsent: parseConsent,
    saveConsent: saveConsent,
  };

  function ready() {
    var banner = document.querySelector('[data-consent-banner]');
    var panel = document.querySelector('[data-consent-panel]');
    var backdrop = document.querySelector('[data-consent-backdrop]');
    var openButtons = document.querySelectorAll('[data-consent-open]');
    var closeButtons = document.querySelectorAll('[data-consent-close]');
    var analyticsToggle = document.querySelector('[data-consent-analytics]');
    var status = document.querySelector('[data-consent-status]');
    var lastTrigger = null;

    function setStatus(message) {
      if (status) status.textContent = message || '';
    }

    function syncToggle() {
      if (!(analyticsToggle instanceof HTMLInputElement)) return;
      analyticsToggle.checked = hasAnalyticsConsent();
    }

    function hideBanner() {
      if (banner) banner.hidden = true;
    }

    function openPanel(trigger) {
      if (!panel || !backdrop) return;
      lastTrigger = trigger || document.activeElement;
      syncToggle();
      panel.hidden = false;
      backdrop.hidden = false;
      window.requestAnimationFrame(function () {
        panel.classList.add('is-open');
        backdrop.classList.add('is-open');
      });
      var heading = panel.querySelector('[tabindex="-1"]');
      if (heading) heading.focus();
    }

    function closePanel(restoreFocus) {
      if (!panel || !backdrop || panel.hidden) return;
      panel.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      window.setTimeout(function () {
        if (!panel.classList.contains('is-open')) {
          panel.hidden = true;
          backdrop.hidden = true;
        }
      }, 160);
      if (restoreFocus && lastTrigger && 'focus' in lastTrigger) {
        lastTrigger.focus();
      }
    }

    function applyChoice(analytics, message) {
      saveConsent(analytics);
      hideBanner();
      closePanel(false);
      setStatus(message);
      loadAnalyticsIfAllowed();
    }

    document.querySelectorAll('[data-consent-choice]').forEach(function (item) {
      item.addEventListener('click', function () {
        applyChoice(
          item.getAttribute('data-consent-choice') === 'analytics',
          item.getAttribute('data-consent-message') || '',
        );
      });
    });

    document.querySelectorAll('[data-consent-save]').forEach(function (item) {
      item.addEventListener('click', function () {
        var analytics =
          analyticsToggle instanceof HTMLInputElement
            ? analyticsToggle.checked
            : false;
        applyChoice(analytics, item.getAttribute('data-consent-message') || '');
      });
    });

    openButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        openPanel(button);
      });
    });

    closeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closePanel(true);
      });
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        closePanel(true);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closePanel(true);
    });

    if (getStoredConsent()) {
      hideBanner();
      syncToggle();
      loadAnalyticsIfAllowed();
    } else if (banner) {
      banner.hidden = false;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
