/* ============================================================
   SK Polymers — interaction layer (vanilla, no dependencies)
   ============================================================ */
(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';

  /* ── page load choreography ─────────────────────────── */
  // Start the hero entrance on the first frame after parsing (the script is deferred), rather than
  // waiting for window.load — waiting for every image and font delayed the hero by seconds on mobile.
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () { document.body.classList.add('loaded'); });
  });

  /* ── analytics events ───────────────────────────────── */
  // Sends GA4 events only when gtag is present (it is injected by build.mjs when a
  // Measurement ID is configured); otherwise this is a no-op.
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    var where = { link_location: link.closest('header,footer,.whatsapp-float,.mobile-nav') ? link.closest('header,footer,.whatsapp-float,.mobile-nav').className.split(' ')[0] : 'content', page_path: location.pathname };
    if (href.indexOf('tel:') === 0) track('phone_click', where);
    else if (href.indexOf('https://wa.me/') === 0) track('whatsapp_click', where);
    else if (href.indexOf('mailto:') === 0) track('email_click', where);
  });

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ── header, scroll progress, back to top ───────────── */
  var header   = $('#siteHeader');
  var progress = $('#scrollProgress span');
  var toTop    = $('#toTop');
  var ticking  = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', y > 24);
    if (toTop) toTop.classList.toggle('in', y > 600);

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(1, y / max) * 100 : 0) + '%';
    }
    updateSpy(y);
    updateParallax(y);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    });
  }

  /* ── scroll spy + animated nav indicator ────────────── */
  var navLinks  = $$('#primaryNav a');
  var indicator = $('#navIndicator');
  var sections  = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);
  var currentId = '';

  function moveIndicator(link) {
    if (!indicator || !link) return;
    var navBox  = link.parentElement.parentElement.getBoundingClientRect();
    var linkBox = link.getBoundingClientRect();
    indicator.style.width = linkBox.width + 'px';
    indicator.style.transform = 'translateX(' + (linkBox.left - navBox.left) + 'px)';
    indicator.classList.add('on');
  }

  function updateSpy(y) {
    if (!sections.length) return;
    var line = y + (header ? header.offsetHeight : 70) + 140;
    var active = '';
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= line) active = sections[i].id;
    }
    if (y + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      active = sections[sections.length - 1].id;
    }
    if (active === currentId) return;
    currentId = active;

    var activeLink = null;
    navLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + active;
      a.classList.toggle('is-active', on);
      if (on) { a.setAttribute('aria-current', 'true'); activeLink = a; }
      else { a.removeAttribute('aria-current'); }
    });
    if (activeLink) moveIndicator(activeLink);
    else if (indicator) indicator.classList.remove('on');
  }
  window.addEventListener('resize', function () {
    var link = $('#primaryNav a.is-active');
    if (link) moveIndicator(link);
  });
  // Multi-page navigation: the build marks the current section's link; show the indicator under it.
  if (!sections.length) {
    var current = $('#primaryNav a.is-active');
    if (current) window.requestAnimationFrame(function () { moveIndicator(current); });
  }

  /* ── mobile navigation ──────────────────────────────── */
  var navToggle   = $('#navToggle');
  var mobileNav   = $('#mobileNav');
  var navBackdrop = $('#mobileNavBackdrop');
  var navClose    = $('#navClose');
  var lastFocus   = null;

  function openNav() {
    lastFocus = document.activeElement;
    mobileNav.hidden = false;
    navBackdrop.hidden = false;
    document.body.classList.add('no-scroll');
    window.requestAnimationFrame(function () {
      mobileNav.classList.add('in');
      navBackdrop.classList.add('in');
    });
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
    if (navClose) navClose.focus();
  }

  function closeNav() {
    if (mobileNav.hidden) return;
    mobileNav.classList.remove('in');
    navBackdrop.classList.remove('in');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('no-scroll');
    window.setTimeout(function () {
      mobileNav.hidden = true;
      navBackdrop.hidden = true;
    }, reduceMotion.matches ? 0 : 450);
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navToggle.getAttribute('aria-expanded') === 'true') closeNav(); else openNav();
    });
  }
  if (navClose) navClose.addEventListener('click', closeNav);
  if (navBackdrop) navBackdrop.addEventListener('click', closeNav);
  $$('#mobileNav a').forEach(function (a) { a.addEventListener('click', closeNav); });

  /* ── scroll reveal with stagger ─────────────────────── */
  var revealItems = $$('.reveal');
  revealItems.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (n) {
      return n.classList.contains('reveal');
    });
    var i = siblings.indexOf(el);
    if (i > 0) {
      var delay = Math.min(i, 8) * 70;
      el.style.transitionDelay = delay + 'ms, ' + delay + 'ms';
    }
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── stat counters ──────────────────────────────────── */
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    if (reduceMotion.matches) { el.textContent = target + suffix; return; }

    el.textContent = '0' + suffix;
    var duration = 1600, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  var counters = $$('.stat-num[data-count]');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ── parallax (scroll + pointer) ────────────────────── */
  var parallaxItems = $$('.about-visual [data-parallax]');

  function updateParallax(y) {
    if (reduceMotion.matches || !parallaxItems.length) return;
    parallaxItems.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var factor = parseFloat(el.getAttribute('data-parallax')) || 0.05;
      var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor;
      el.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
    });
  }

  var heroVisual = $('.hero-visual');
  if (heroVisual && window.matchMedia('(pointer:fine)').matches) {
    var hx = 0, hy = 0, pending = false;
    window.addEventListener('mousemove', function (e) {
      // wait for the page-load choreography to finish before taking over the transform
      if (reduceMotion.matches || !document.body.classList.contains('loaded')) return;
      hx = (e.clientX / window.innerWidth - 0.5) * 16;
      hy = (e.clientY / window.innerHeight - 0.5) * 12;
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(function () {
          heroVisual.style.transform = 'translate3d(' + hx.toFixed(2) + 'px,' + hy.toFixed(2) + 'px,0)';
          pending = false;
        });
      }
    }, { passive: true });
    heroVisual.style.transition = 'transform .6s cubic-bezier(.22,.75,.28,1)';
  }

  /* ── dialogs (shared by the lightbox) ───────────────── */
  function openDialog(el) {
    el.hidden = false;
    document.body.classList.add('no-scroll');
    window.requestAnimationFrame(function () { el.classList.add('in'); });
    var closer = $('.icon-btn', el);
    if (closer) closer.focus();
  }

  function closeDialog(el, onDone) {
    if (el.hidden) return;
    el.classList.remove('in');
    document.body.classList.remove('no-scroll');
    window.setTimeout(function () {
      el.hidden = true;
      if (onDone) onDone();
    }, reduceMotion.matches ? 0 : 380);
  }

  function trapFocus(e, container) {
    if (e.key !== 'Tab') return;
    var items = $$(FOCUSABLE, container).filter(function (el) { return el.offsetParent !== null; });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ── enquiry prefill ────────────────────────────────── */
  // Product detail now lives on real pages; "Enquire Now" buttons carry the product slug, which
  // matches an <option value> in the enquiry form.
  var productSelect = $('#f-product');

  function selectProduct(slug) {
    if (!productSelect || !slug) return;
    var match = $$('option', productSelect).some(function (opt) { return opt.value === slug; });
    productSelect.value = match ? slug : '';
  }

  function focusName(delay) {
    window.setTimeout(function () {
      var target = $('#f-name');
      if (target) target.focus({ preventScroll: true });
    }, reduceMotion.matches ? 0 : delay);
  }

  function prefillEnquiry(slug) {
    var section = $('#enquiry');
    if (section) section.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    selectProduct(slug);
    focusName(700);
  }

  $$('[data-enquire]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (!$('#enquiry')) return;          // no form on this page: let the link navigate
      e.preventDefault();
      prefillEnquiry(btn.getAttribute('data-enquire'));
    });
  });
  $$('[data-quote-trigger]').forEach(function (el) {
    el.addEventListener('click', function () {
      if ((el.getAttribute('href') || '').charAt(0) === '#') focusName(800);
    });
  });

  // Links such as contact/?product=ptfe-sheets#enquiry preselect the product.
  try {
    var preset = new URLSearchParams(window.location.search).get('product');
    if (preset) selectProduct(preset);
  } catch (err) { /* URLSearchParams unsupported: ignore */ }

  /* ── gallery lightbox ───────────────────────────────── */
  var lightbox   = $('#lightbox');
  var lbImg      = $('#lightboxImg');
  var lbCaption  = $('#lightboxCaption');
  var lbCount    = $('#lightboxCount');
  var galleryBtns = $$('.gallery-btn');
  var lbIndex = 0;
  var lbReturnFocus = null;

  var galleryData = galleryBtns.map(function (btn) {
    var img = $('img', btn);
    var caption = $('.gallery-caption', btn);
    return { src: img ? img.getAttribute('src') : '', alt: img ? img.getAttribute('alt') : '', caption: caption ? caption.textContent : '' };
  });

  function showSlide(index) {
    if (!galleryData.length) return;
    lbIndex = (index + galleryData.length) % galleryData.length;
    var item = galleryData[lbIndex];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.caption;
    lbCount.textContent = (lbIndex + 1) + ' / ' + galleryData.length;
  }

  function openLightbox(index) {
    lbReturnFocus = document.activeElement;
    showSlide(index);
    openDialog(lightbox);
  }

  function closeLightbox() {
    closeDialog(lightbox, function () {
      if (lbReturnFocus && document.contains(lbReturnFocus)) lbReturnFocus.focus();
    });
  }

  galleryBtns.forEach(function (btn, i) {
    btn.addEventListener('click', function () { openLightbox(i); });
  });
  if (lightbox) {
    $$('[data-close-lightbox]', lightbox).forEach(function (el) { el.addEventListener('click', closeLightbox); });
    $('#lbPrev').addEventListener('click', function () { showSlide(lbIndex - 1); });
    $('#lbNext').addEventListener('click', function () { showSlide(lbIndex + 1); });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') showSlide(lbIndex - 1);
      else if (e.key === 'ArrowRight') showSlide(lbIndex + 1);
      trapFocus(e, lightbox);
    });

    var touchX = null;
    lightbox.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 46) showSlide(lbIndex + (dx < 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }

  /* ── global escape handling ─────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lightbox && !lightbox.hidden) closeLightbox();
    else if (mobileNav && !mobileNav.hidden) closeNav();
  });

  /* ── FAQ accordion ──────────────────────────────────── */
  var faqButtons = $$('.faq-q');

  function collapse(panel, item, button) {
    panel.style.height = panel.scrollHeight + 'px';
    void panel.offsetHeight;
    panel.style.height = '0px';
    item.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    window.setTimeout(function () {
      if (button.getAttribute('aria-expanded') === 'false') { panel.hidden = true; panel.style.height = ''; }
    }, reduceMotion.matches ? 0 : 400);
  }

  function expand(panel, item, button) {
    panel.hidden = false;
    panel.style.height = '0px';
    void panel.offsetHeight;
    panel.style.height = panel.scrollHeight + 'px';
    item.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    window.setTimeout(function () {
      if (button.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto';
    }, reduceMotion.matches ? 0 : 400);
  }

  faqButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var item  = button.closest('.faq-item');
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      var isOpen = button.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach(function (other) {
        if (other === button || other.getAttribute('aria-expanded') !== 'true') return;
        collapse(document.getElementById(other.getAttribute('aria-controls')), other.closest('.faq-item'), other);
      });

      if (isOpen) collapse(panel, item, button); else expand(panel, item, button);
    });
  });

  /* ── enquiry form ───────────────────────────────────── */
  var form = $('#enquiryForm');
  if (form) {
    var statusEl = $('#formStatus');
    var submitBtn = $('#formSubmit');

    var rules = {
      'f-name':    function (v) { return v.trim().length >= 2; },
      'f-phone':   function (v) { return (v.replace(/\D/g, '').length >= 7); },
      'f-email':   function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()); },
      'f-message': function (v) { return v.trim().length >= 10; }
    };

    function validateField(id) {
      var input = document.getElementById(id);
      if (!input) return true;
      var field = input.closest('.field');
      var error = field ? $('.field-error', field) : null;
      var valid = rules[id](input.value);
      if (field) field.classList.toggle('invalid', !valid);
      if (error) error.hidden = valid;
      input.setAttribute('aria-invalid', valid ? 'false' : 'true');
      return valid;
    }

    Object.keys(rules).forEach(function (id) {
      var input = document.getElementById(id);
      if (!input) return;
      input.addEventListener('blur', function () { if (input.value) validateField(id); });
      input.addEventListener('input', function () {
        var field = input.closest('.field');
        if (field && field.classList.contains('invalid')) validateField(id);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(rules).forEach(function (id) {
        var ok = validateField(id);
        if (!ok && !firstInvalid) firstInvalid = document.getElementById(id);
      });

      if (firstInvalid) {
        statusEl.textContent = 'Please correct the highlighted fields.';
        statusEl.className = 'form-status err';
        firstInvalid.focus();
        return;
      }

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      statusEl.textContent = 'Preparing your enquiry…';
      statusEl.className = 'form-status';

      window.setTimeout(function () {
        var draft = buildEnquiry();
        track('enquiry_email_opened', { product: draft.product || 'none', page_path: location.pathname });
        window.location.href = 'mailto:' + form.getAttribute('data-mailto') + '?subject=' +
          encodeURIComponent(draft.subject) + '&body=' + encodeURIComponent(draft.body);
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        // Nothing has been sent yet — the visitor still has to press Send in their email app — so the
        // message says exactly that, keeps the form filled in, and offers WhatsApp with the same text.
        statusEl.className = 'form-status ok';
        statusEl.textContent = 'Your email app should now open with the enquiry filled in — please press Send there to deliver it. If no email app opened, ';
        var wa = document.createElement('a');
        wa.href = 'https://wa.me/' + form.getAttribute('data-whatsapp') + '?text=' + encodeURIComponent(draft.subject + '\n\n' + draft.body);
        wa.target = '_blank';
        wa.rel = 'noopener';
        wa.textContent = 'send the same enquiry on WhatsApp';
        statusEl.appendChild(wa);
        statusEl.appendChild(document.createTextNode(' or call ' + form.getAttribute('data-phone') + '.'));
      }, 500);
    });

    /* No backend: the enquiry is handed to the visitor's mail client (see submit handler).
       To receive submissions server-side later, POST the same fields to a form service instead. */
    function buildEnquiry() {
      var value = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var productLabel = productSelect && productSelect.value ? productSelect.options[productSelect.selectedIndex].text : '';
      var subject = 'PTFE Enquiry — ' + (productLabel || 'General') + ' — ' + value('f-name') + (value('f-company') ? ' (' + value('f-company') + ')' : '');
      var body = [
        'Name: ' + value('f-name'),
        'Company: ' + (value('f-company') || '—'),
        'Phone: ' + value('f-phone'),
        'Email: ' + value('f-email'),
        'Product / Service: ' + (productLabel || '—'),
        'Quantity: ' + (value('f-qty') || '—'),
        '',
        'Requirement:',
        value('f-message'),
        '',
        'Sent from: ' + location.href.split('?')[0]
      ].join('\n');
      return { subject: subject, body: body, product: productSelect ? productSelect.value : '' };
    }
  }

  /* initial state — read layout on the next frame instead of forcing a synchronous reflow during start-up */
  window.requestAnimationFrame(onScroll);
})();
