import '../css/styles.css';
import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import {
  barChartOutline,
  businessOutline,
  calculatorOutline,
  callOutline,
  chatbubblesOutline,
  chevronBackOutline,
  chevronForwardOutline,
  checkmarkCircleOutline,
  homeOutline,
  constructOutline,
  documentTextOutline,
  logoInstagram,
  logoLinkedin,
  logoWhatsapp,
  mailOutline,
  mapOutline,
  locationOutline,
  paperPlaneOutline,
  printOutline,
  peopleOutline,
  receiptOutline,
} from 'ionicons/icons';
import { defineCustomElement as defineIonIconElement } from 'ionicons/components/ion-icon.js';
import navHtml from '../partials/nav.html?raw';
import footerHtml from '../partials/footer.html?raw';
import { WHATSAPP_HREF } from './site-config.js';
import { buildJsonLd } from './json-ld.js';

const ION_ICON_SVG = {
  'bar-chart-outline': barChartOutline,
  'business-outline': businessOutline,
  'calculator-outline': calculatorOutline,
  'call-outline': callOutline,
  'chatbubbles-outline': chatbubblesOutline,
  'chevron-back-outline': chevronBackOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'home-outline': homeOutline,
  'construct-outline': constructOutline,
  'document-text-outline': documentTextOutline,
  'logo-instagram': logoInstagram,
  'logo-linkedin': logoLinkedin,
  'logo-whatsapp': logoWhatsapp,
  'mail-outline': mailOutline,
  'map-outline': mapOutline,
  'location-outline': locationOutline,
  'paper-plane-outline': paperPlaneOutline,
  'print-outline': printOutline,
  'people-outline': peopleOutline,
  'receipt-outline': receiptOutline,
};

function normalizeIonIcons(root = document) {
  const iconNodes = root.querySelectorAll('ion-icon[name]');
  iconNodes.forEach((node) => {
    const name = node.getAttribute('name');
    if (!name) return;
    const svgData = ION_ICON_SVG[name];
    if (!svgData) return;
    node.setAttribute('src', svgData);
    node.removeAttribute('name');
  });
}

function setActiveNav(pageId) {
  const header = document.getElementById('site-header');
  if (!header) return;

  const links = header.querySelectorAll('[data-nav-link]');
  links.forEach((link) => {
    const target = link.getAttribute('data-nav-link');
    const isActive = target === pageId;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function initMobileNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const toggle = header.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-nav-panel]');
  if (!toggle || !panel) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    document.body.classList.remove('nav-open');
  };

  const open = () => {
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    document.body.classList.add('nav-open');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) close();
    else open();
  });

  panel.addEventListener('click', (e) => {
    const t = e.target;
    if (t instanceof HTMLAnchorElement && t.getAttribute('data-nav-link')) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function initHeaderScrollBehavior(pageId) {
  const header = document.getElementById('site-header');
  if (!header) return;

  if (pageId !== 'home') return;

  const REVEAL_OFFSET = 80;

  const applyState = () => {
    const isAtTop = window.scrollY <= REVEAL_OFFSET;
    const hasOpenMenu = document.body.classList.contains('nav-open');
    header.classList.toggle('is-overlay', isAtTop && !hasOpenMenu);
  };

  // Garante navbar transparente imediatamente na home.
  header.classList.add('is-overlay');
  applyState();
  window.requestAnimationFrame(applyState);
  window.addEventListener('load', applyState, { once: true });
  window.addEventListener('scroll', applyState, { passive: true });
  window.addEventListener('resize', applyState);
}

function mountJsonLd() {
  const existing = document.getElementById('site-jsonld');
  if (existing) return;

  const script = document.createElement('script');
  script.id = 'site-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(buildJsonLd());
  document.head.appendChild(script);
}

function mountPartials() {
  const headerHost = document.getElementById('site-header');
  const footerHost = document.getElementById('site-footer');
  if (headerHost) headerHost.innerHTML = navHtml;
  if (footerHost) footerHost.innerHTML = footerHtml;

  if (headerHost) {
    const placeNavPanel = () => {
      const main = document.getElementById('main-content');
      const panel = document.querySelector('[data-nav-panel]');
      const navToggle = document.querySelector('[data-nav-toggle]');
      if (!(headerHost && main?.parentNode && panel)) return;
      if (window.matchMedia('(min-width: 768px)').matches) {
        headerHost.appendChild(panel);
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
        document.body.classList.remove('nav-open');
      } else {
        main.parentNode.insertBefore(panel, main);
      }
    };
    placeNavPanel();
    const mq = window.matchMedia('(min-width: 768px)');
    if (typeof mq.addEventListener === 'function') mq.addEventListener('change', placeNavPanel);
    else if (typeof mq.addListener === 'function') mq.addListener(placeNavPanel);
  }

  const waNodes = document.querySelectorAll('[data-whatsapp-cta]');
  waNodes.forEach((node) => {
    if (node instanceof HTMLAnchorElement) node.href = WHATSAPP_HREF;
  });

  const yearEl = document.querySelector('[data-footer-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function clearFieldErrors(form) {
  form.querySelectorAll('[data-field-error]').forEach((el) => {
    el.textContent = '';
    el.hidden = true;
  });
  form.querySelectorAll('[aria-invalid="true"]').forEach((el) => {
    el.removeAttribute('aria-invalid');
  });
}

function setFieldError(form, fieldName, message) {
  const control = form.querySelector(`[name="${fieldName}"]`);
  const err = form.querySelector(`[data-field-error="${fieldName}"]`);
  if (control) control.setAttribute('aria-invalid', 'true');
  if (err) {
    err.textContent = message;
    err.hidden = false;
  }
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!(form instanceof HTMLFormElement)) return;

  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFieldErrors(form);

    const data = new FormData(form);
    const nome = String(data.get('nome') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const assunto = String(data.get('assunto') ?? '').trim();
    const mensagem = String(data.get('mensagem') ?? '').trim();
    const lgpd = data.get('lgpd') === 'on';

    let ok = true;
    if (!nome) {
      setFieldError(form, 'nome', 'Informe o nome.');
      ok = false;
    }
    if (!email) {
      setFieldError(form, 'email', 'Informe o e-mail.');
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError(form, 'email', 'E-mail inválido.');
      ok = false;
    }
    if (!assunto) {
      setFieldError(form, 'assunto', 'Informe o assunto.');
      ok = false;
    }
    if (!mensagem) {
      setFieldError(form, 'mensagem', 'Escreva a mensagem.');
      ok = false;
    }
    if (!lgpd) {
      setFieldError(form, 'lgpd', 'É necessário aceitar a Política de privacidade para continuar.');
      ok = false;
    }

    if (!ok) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    if (submitBtn instanceof HTMLButtonElement) submitBtn.disabled = true;

    window.setTimeout(() => {
      form.reset();
      clearFieldErrors(form);
      if (submitBtn instanceof HTMLButtonElement) submitBtn.disabled = false;
    }, 400);
  });
}

function initHomeAreasCarousel() {
  const container = document.querySelector('[data-home-areas-swiper]');
  if (!(container instanceof HTMLElement)) return;

  const root = container.closest('.home-areas__carousel');
  if (!(root instanceof HTMLElement)) return;

  const prev = root.querySelector('[data-home-areas-prev]');
  const next = root.querySelector('[data-home-areas-next]');
  const pagination = root.querySelector('[data-home-areas-pagination]');
  if (
    !(prev instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    !(pagination instanceof HTMLElement)
  ) {
    return;
  }

  new Swiper(container, {
    modules: [Navigation, A11y],
    speed: 450,
    spaceBetween: 16,
    slidesPerView: 1.08,
    watchOverflow: true,
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    a11y: {
      enabled: true,
    },
    breakpoints: {
      560: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      860: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
}

function initAreasPageCarousel() {
  const container = document.querySelector('[data-areas-swiper]');
  if (!(container instanceof HTMLElement)) return;

  const root = container.closest('.areas-carousel');
  if (!(root instanceof HTMLElement)) return;

  const prev = root.querySelector('[data-areas-prev]');
  const next = root.querySelector('[data-areas-next]');
  const pagination = root.querySelector('[data-areas-pagination]');
  if (
    !(prev instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    !(pagination instanceof HTMLElement)
  ) {
    return;
  }

  new Swiper(container, {
    modules: [Navigation, A11y],
    speed: 430,
    spaceBetween: 14,
    slidesPerView: 1.05,
    watchOverflow: true,
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    a11y: {
      enabled: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.45,
        spaceBetween: 16,
      },
      920: {
        slidesPerView: 2.15,
        spaceBetween: 18,
      },
      1280: {
        slidesPerView: 2.65,
        spaceBetween: 20,
      },
    },
  });
}

function labelFromClientAlt(alt) {
  return String(alt ?? '')
    .replace(/^logotipo\s+/i, '')
    .trim() || 'Marca';
}

function initialsFromClientLabel(label) {
  const parts = label.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0] ?? '';
    const b = parts[parts.length - 1][0] ?? '';
    return `${a}${b}`.toUpperCase();
  }
  if (label.length <= 3) {
    return label.toUpperCase();
  }
  return label.slice(0, 2).toUpperCase();
}

function showClientLogoPlaceholder(img) {
  const item = img.closest('.clients__item');
  if (!item || item.querySelector('.clients__logo-placeholder')) return;

  const alt = img.alt || 'Marca';
  const label = labelFromClientAlt(alt);
  const initials = initialsFromClientLabel(label);

  img.remove();

  const ph = document.createElement('div');
  ph.className = 'clients__logo-placeholder';
  ph.setAttribute('role', 'img');
  ph.setAttribute('aria-label', alt);

  const initialsEl = document.createElement('span');
  initialsEl.className = 'clients__logo-placeholder__initials';
  initialsEl.setAttribute('aria-hidden', 'true');
  initialsEl.textContent = initials;

  const nameEl = document.createElement('span');
  nameEl.className = 'clients__logo-placeholder__name';
  nameEl.setAttribute('aria-hidden', 'true');
  const short = label.length > 22 ? `${label.slice(0, 20).trim()}…` : label;
  nameEl.textContent = short;

  ph.append(initialsEl, nameEl);
  const host = item.querySelector('[data-client-logo]');
  (host ?? item).appendChild(ph);
}

function initClientLogoFallbacks() {
  const imgs = document.querySelectorAll('.clients__item img');
  imgs.forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;

    const onFail = () => {
      showClientLogoPlaceholder(img);
    };

    if (!img.getAttribute('src')?.trim()) {
      onFail();
      return;
    }

    img.addEventListener('error', onFail, { once: true });

    if (img.complete && img.naturalWidth === 0) {
      onFail();
    }
  });
}

const pageId = document.documentElement.dataset.page ?? '';

normalizeIonIcons(document);
mountPartials();
normalizeIonIcons(document);
defineIonIconElement();
setActiveNav(pageId);
initMobileNav();
initHeaderScrollBehavior(pageId);
mountJsonLd();
initContactForm();
initHomeAreasCarousel();
initAreasPageCarousel();
initClientLogoFallbacks();
