const allowedEnquiryTypes = new Set([
  'general',
  'import-export',
  'product-sourcing',
  'distribution',
  'software',
  'digital-platform',
  'ai-solution',
  'media-production',
  'brand-partnership',
  'other',
]);

document.querySelectorAll('[data-enhanced-contact-form]').forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector('#form-status');
  const summary = form.querySelector('#form-error-summary');
  const successUrl = form.dataset.successUrl || form.getAttribute('action');
  let isSubmitting = false;

  form.setAttribute('novalidate', '');

  const copy = {
    idle: form.dataset.statusIdle || 'Send enquiry',
    pending: form.dataset.statusPending || 'Sending...',
    success:
      form.dataset.statusSuccess ||
      'Thank you. Your enquiry has been received.',
    failure:
      form.dataset.statusFailure ||
      'Your enquiry could not be sent. Please check your connection and try again.',
    summary:
      form.dataset.errorSummary || 'Please check the highlighted fields.',
    requiredText:
      form.dataset.errorRequiredText ||
      'Please enter the required information.',
    email: form.dataset.errorEmail || 'Please enter a valid email address.',
    enquiryType:
      form.dataset.errorEnquiryType || 'Please select an enquiry type.',
    message: form.dataset.errorMessage || 'Please enter a message.',
    privacy:
      form.dataset.errorPrivacy || 'Please acknowledge the privacy statement.',
    maxLength: form.dataset.errorMaxLength || 'This field is too long.',
  };

  const getControl = (name) => form.elements.namedItem(name);
  const getError = (name) =>
    form.querySelector(`[data-field-error="${CSS.escape(name)}"]`);

  const setStatus = (message) => {
    if (status) {
      status.textContent = message;
    }
  };

  const setFieldError = (name, message) => {
    const control = getControl(name);
    const error = getError(name);

    if (error) {
      error.textContent = message;
    }

    if (control instanceof HTMLElement) {
      control.setAttribute('aria-invalid', 'true');
      if (error?.id) {
        control.setAttribute('aria-errormessage', error.id);
      }
    }
  };

  const clearFieldError = (name) => {
    const control = getControl(name);
    const error = getError(name);

    if (error) {
      error.textContent = '';
    }

    if (control instanceof HTMLElement) {
      control.removeAttribute('aria-invalid');
      control.removeAttribute('aria-errormessage');
    }
  };

  const clearErrors = () => {
    [
      'full-name',
      'company',
      'email',
      'phone',
      'country',
      'enquiry-type',
      'message',
      'privacy-acknowledgement',
    ].forEach(clearFieldError);

    if (summary) {
      summary.textContent = '';
      summary.hidden = true;
    }
  };

  const validateMaxLength = (name, errors) => {
    const control = getControl(name);
    if (
      control instanceof HTMLInputElement &&
      control.maxLength > -1 &&
      control.value.length > control.maxLength
    ) {
      errors.set(name, copy.maxLength);
    }
  };

  const validateForm = () => {
    clearErrors();

    const errors = new Map();
    const fullName = getControl('full-name');
    const company = getControl('company');
    const email = getControl('email');
    const phone = getControl('phone');
    const country = getControl('country');
    const enquiryType = getControl('enquiry-type');
    const message = getControl('message');
    const privacy = getControl('privacy-acknowledgement');

    if (
      !(fullName instanceof HTMLInputElement) ||
      fullName.value.trim().length < 2 ||
      fullName.value.length > 100
    ) {
      errors.set('full-name', copy.requiredText);
    }

    if (
      company instanceof HTMLInputElement &&
      company.value.length > company.maxLength
    ) {
      errors.set('company', copy.maxLength);
    }

    if (
      !(email instanceof HTMLInputElement) ||
      !email.value ||
      email.value.length > 254 ||
      !email.validity.valid
    ) {
      errors.set('email', copy.email);
    }

    if (
      phone instanceof HTMLInputElement &&
      phone.value.length > phone.maxLength
    ) {
      errors.set('phone', copy.maxLength);
    }

    if (
      country instanceof HTMLInputElement &&
      country.value.length > country.maxLength
    ) {
      errors.set('country', copy.maxLength);
    }

    if (
      !(enquiryType instanceof HTMLSelectElement) ||
      !allowedEnquiryTypes.has(enquiryType.value)
    ) {
      errors.set('enquiry-type', copy.enquiryType);
    }

    if (
      !(message instanceof HTMLTextAreaElement) ||
      message.value.trim().length < 10 ||
      message.value.length > 5000
    ) {
      errors.set('message', copy.message);
    }

    if (
      !(privacy instanceof HTMLInputElement) ||
      privacy.value !== 'acknowledged' ||
      !privacy.checked
    ) {
      errors.set('privacy-acknowledgement', copy.privacy);
    }

    ['full-name', 'company', 'email', 'phone', 'country'].forEach((name) =>
      validateMaxLength(name, errors),
    );

    errors.forEach((messageText, name) => {
      setFieldError(name, messageText);
    });

    return errors;
  };

  const updateCharacterCount = () => {
    const message = getControl('message');
    const counter = form.querySelector('#message-count');
    if (message instanceof HTMLTextAreaElement && counter) {
      counter.textContent = `${message.value.length} / 5000`;
    }
  };

  form.addEventListener('input', (event) => {
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
    ) {
      clearFieldError(target.name);
    }
    updateCharacterCount();
  });

  form.addEventListener('change', (event) => {
    const target = event.target;
    if (
      target instanceof HTMLSelectElement ||
      target instanceof HTMLInputElement
    ) {
      clearFieldError(target.name);
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const errors = validateForm();

    if (errors.size > 0) {
      if (summary) {
        summary.hidden = false;
        summary.textContent = copy.summary;
        summary.focus();
      }
      return;
    }

    isSubmitting = true;
    setStatus(copy.pending);

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = copy.pending;
    }

    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => {
        if (typeof value === 'string') {
          body.append(key, value);
        }
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setStatus(copy.success);
      window.location.assign(successUrl);
    } catch {
      isSubmitting = false;
      setStatus(copy.failure);

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = copy.idle;
      }

      if (status instanceof HTMLElement) {
        status.focus();
      }
    }
  });

  updateCharacterCount();
});
