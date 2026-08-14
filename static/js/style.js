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
  window.addEventListener('load', function () { document.body.classList.add('loaded'); });
  setTimeout(function () { document.body.classList.add('loaded'); }, 900);

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

  /* ── product detail modal ───────────────────────────── */
  var PRODUCTS = {
    sheets: {
      title: 'PTFE Sheets & Slabs', tag: 'Sheet / Slab', img: 'static/images/products/sheets.svg',
      desc: 'Moulded and skived PTFE sheets in virgin and filled grades, supplied as standard stock sizes or cut to your dimensions for sealing, lining and gasket fabrication.',
      applications: ['Flange gaskets', 'Tank & chute lining', 'Slide and wear pads', 'Electrical insulation', 'Anti-stick surfaces'],
      grades: ['Virgin PTFE', 'Glass-filled', 'Carbon-filled', 'Bronze-filled', 'Graphite-filled'],
      custom: ['Cut to size', 'Thickness 0.5–100 mm', 'Skiving to spec', 'Etched one/both sides']
    },
    rods: {
      title: 'PTFE Rods & Bars', tag: 'Machining Stock', img: 'static/images/products/rods.svg',
      desc: 'Extruded and moulded PTFE rod stock with consistent density throughout the section — the base material for turned bushes, spacers, valve seats and precision machined parts.',
      applications: ['Turned components', 'Valve seats & stems', 'Spacers and insulators', 'Bearing blanks', 'Pump internals'],
      grades: ['Virgin PTFE', 'Glass-filled 15/25%', 'Carbon-filled', 'Bronze-filled'],
      custom: ['Diameter 4–300 mm', 'Cut lengths', 'Centreless ground', 'Machined to drawing']
    },
    pipes: {
      title: 'PTFE Pipes & Tubes', tag: 'Fluid Handling', img: 'static/images/products/pipes.svg',
      desc: 'Chemically inert PTFE tubing and pipe for aggressive media transfer, with excellent thermal stability and a non-wetting bore that resists fouling.',
      applications: ['Corrosive fluid transfer', 'Heat exchanger tubing', 'Instrument lines', 'Cable sleeving', 'Steam and vent lines'],
      grades: ['Virgin PTFE', 'Glass-filled', 'Conductive (carbon)'],
      custom: ['Custom ID / OD', 'Wall thickness to spec', 'Cut lengths', 'Flared or belled ends']
    },
    rings: {
      title: 'PTFE Rings & Gaskets', tag: 'Sealing', img: 'static/images/products/rings.svg',
      desc: 'Precision-cut PTFE rings, envelope gaskets and flange gaskets produced to standard pipe tables or to your bolt pattern and dimensions.',
      applications: ['Flange sealing', 'Pump and valve bodies', 'Heat exchanger covers', 'Manhole and vessel covers'],
      grades: ['Virgin PTFE', 'Expanded PTFE', 'Glass-filled', 'Filled composites'],
      custom: ['Custom OD / ID', 'Bolt-hole patterns', 'Thickness to spec', 'Full face or inside bolt circle']
    },
    turling: {
      title: 'PTFE Turling / Granules', tag: 'Raw Material', img: 'static/images/products/turling.svg',
      desc: 'Clean PTFE turning scrap and granules recovered from machining, supplied in bulk for reprocessing, resin blending and powder sintering.',
      applications: ['Recycling & reprocessing', 'Resin blending', 'Powder sintering', 'Filler compounding'],
      grades: ['Virgin turning scrap', 'Mixed filled turning', 'Granulated PTFE'],
      custom: ['Bulk packing', 'Sorted by grade', 'Granule size on request']
    },
    bushes: {
      title: 'PTFE Bushes & Bearings', tag: 'Bearings', img: 'static/images/products/bushes.svg',
      desc: 'Self-lubricating PTFE bushes, sleeves and flanged bearings that run dry with a very low coefficient of friction — no grease, no maintenance schedule.',
      applications: ['Dry-running bearings', 'Bridge and structural bearings', 'Pump wear rings', 'Guide bushes', 'Linear slides'],
      grades: ['Virgin PTFE', 'Bronze-filled', 'Carbon-filled', 'Glass-filled'],
      custom: ['Plain, flanged or split', 'Machined to drawing', 'Interference fit sizing']
    },
    seals: {
      title: 'PTFE Seals & O-Rings', tag: 'Sealing', img: 'static/images/products/seals.svg',
      desc: 'PTFE O-rings, lip seals, back-up rings and V-packing for service conditions where elastomers degrade — extreme temperature, pressure or chemical attack.',
      applications: ['Rotary and reciprocating shafts', 'Chemical pumps', 'Cryogenic service', 'High-temperature valves', 'Hydraulic back-up rings'],
      grades: ['Virgin PTFE', 'Glass-filled', 'Carbon/graphite-filled', 'Bronze-filled'],
      custom: ['Machined to any size', 'Spring-energised on request', 'Profile to drawing']
    },
    custom: {
      title: 'Custom PTFE Components', tag: 'Custom', img: 'static/images/products/custom.svg',
      desc: 'Complete parts machined from PTFE stock to your drawing — send dimensions, a CAD file or a sample and our team will advise on grade, tolerance and finish.',
      applications: ['Semiconductor & lab fixtures', 'Food and pharma contact parts', 'Aerospace insulators', 'Instrument housings', 'Prototype components'],
      grades: ['Virgin PTFE', 'All filled grades', 'PTFE composites'],
      custom: ['CNC turning & milling', 'Tight tolerance work', 'Prototype to production volumes', 'Material certificates supplied']
    }
  };

  var pModal = $('#productModal');
  var pImg   = $('#pmImage');
  var pTag   = $('#pmTag');
  var pTitle = $('#pmTitle');
  var pDesc  = $('#pmDesc');
  var pQuote = $('#pmQuote');
  var activeProduct = null;
  var modalReturnFocus = null;

  function fillList(el, items) {
    if (!el) return;
    el.textContent = '';
    items.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      el.appendChild(li);
    });
  }

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

  function openProduct(key) {
    var data = PRODUCTS[key];
    if (!data || !pModal) return;
    activeProduct = data.title;
    modalReturnFocus = document.activeElement;
    pImg.src = data.img;
    pImg.alt = data.title;
    pTag.textContent = data.tag;
    pTitle.textContent = data.title;
    pDesc.textContent = data.desc;
    fillList($('#pmApplications'), data.applications);
    fillList($('#pmGrades'), data.grades);
    fillList($('#pmCustom'), data.custom);
    openDialog(pModal);
  }

  function closeProduct() {
    closeDialog(pModal, function () {
      if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
    });
  }

  $$('[data-product-open]').forEach(function (btn) {
    btn.addEventListener('click', function () { openProduct(btn.getAttribute('data-product-open')); });
  });
  if (pModal) {
    $$('[data-close-modal]', pModal).forEach(function (el) { el.addEventListener('click', closeProduct); });
    pModal.addEventListener('keydown', function (e) { trapFocus(e, pModal); });
  }
  if (pQuote) {
    pQuote.addEventListener('click', function () {
      var product = activeProduct;
      closeProduct();
      window.setTimeout(function () { prefillEnquiry(product); }, 260);
    });
  }

  /* ── enquiry prefill ────────────────────────────────── */
  var productSelect = $('#f-product');

  function prefillEnquiry(productName) {
    var contact = $('#contact');
    if (contact) contact.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });

    if (productName && productSelect) {
      var matched = false;
      $$('option', productSelect).forEach(function (opt) {
        if (opt.textContent.trim() === productName.trim()) { productSelect.value = opt.value || opt.textContent; matched = true; }
      });
      if (!matched) productSelect.selectedIndex = 0;
    }
    window.setTimeout(function () {
      var target = $('#f-name');
      if (target) target.focus({ preventScroll: true });
    }, reduceMotion.matches ? 0 : 700);
  }

  $$('[data-enquire]').forEach(function (btn) {
    btn.addEventListener('click', function () { prefillEnquiry(btn.getAttribute('data-enquire')); });
  });
  $$('[data-quote-trigger]').forEach(function (el) {
    el.addEventListener('click', function () {
      window.setTimeout(function () {
        var target = $('#f-name');
        if (target) target.focus({ preventScroll: true });
      }, reduceMotion.matches ? 0 : 800);
    });
  });

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

  /* ── legal modal ────────────────────────────────────── */
  var LEGAL = {
    privacy: {
      title: 'Privacy Policy',
      html: '<p>SK Polymers collects only the information you choose to send us through the enquiry form, by email, phone or WhatsApp — typically your name, contact details and the details of your requirement.</p>' +
            '<h3>How we use it</h3><p>We use your information solely to respond to your enquiry, prepare quotations and fulfil orders. We do not sell or rent your details to third parties.</p>' +
            '<h3>Third-party content</h3><p>This site embeds a Google Maps frame to show our location. Google may set its own cookies when that frame loads; please refer to Google’s privacy policy for details.</p>' +
            '<h3>Retention and access</h3><p>Enquiry correspondence is retained only as long as needed for business and statutory record-keeping. To request a copy of your data or its deletion, email <a href="mailto:sonipandey82385@gmail.com">sonipandey82385@gmail.com</a>.</p>'
    },
    terms: {
      title: 'Terms of Use',
      html: '<p>The content of this website is provided for general information about SK Polymers’ products and manufacturing services.</p>' +
            '<h3>Product information</h3><p>Specifications, grades, dimensions and lead times shown here are indicative. Confirmed specifications and pricing are provided in a written quotation for your specific requirement.</p>' +
            '<h3>Material suitability</h3><p>Guidance on grade selection is offered in good faith. Final responsibility for verifying that a material suits your application, operating conditions and regulatory requirements rests with the buyer.</p>' +
            '<h3>Intellectual property</h3><p>All text, imagery and technical illustrations on this site remain the property of SK Polymers unless stated otherwise.</p>' +
            '<h3>Contact</h3><p>Questions about these terms: <a href="mailto:sonipandey82385@gmail.com">sonipandey82385@gmail.com</a>.</p>'
    }
  };

  var legalModal   = $('#legalModal');
  var legalTitle   = $('#legalTitle');
  var legalContent = $('#legalContent');
  var legalReturnFocus = null;

  $$('[data-legal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var data = LEGAL[btn.getAttribute('data-legal')];
      if (!data || !legalModal) return;
      legalReturnFocus = document.activeElement;
      legalTitle.textContent = data.title;
      legalContent.innerHTML = data.html;
      openDialog(legalModal);
    });
  });
  if (legalModal) {
    $$('[data-close-legal]', legalModal).forEach(function (el) {
      el.addEventListener('click', function () {
        closeDialog(legalModal, function () {
          if (legalReturnFocus && document.contains(legalReturnFocus)) legalReturnFocus.focus();
        });
      });
    });
    legalModal.addEventListener('keydown', function (e) { trapFocus(e, legalModal); });
  }

  /* ── global escape handling ─────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lightbox && !lightbox.hidden) closeLightbox();
    else if (pModal && !pModal.hidden) closeProduct();
    else if (legalModal && !legalModal.hidden) {
      closeDialog(legalModal, function () {
        if (legalReturnFocus && document.contains(legalReturnFocus)) legalReturnFocus.focus();
      });
    } else if (mobileNav && !mobileNav.hidden) closeNav();
  });

  /* ── testimonials carousel ──────────────────────────── */
  var track = $('#testimonialTrack');
  if (track) {
    var slides   = $$('.testimonial', track);
    var dotsWrap = $('#testiDots');
    var index    = 0;
    var timer    = null;
    var DELAY    = 6000;

    slides.forEach(function (slide, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      if (i === 0) dot.setAttribute('aria-current', 'true');
      dot.addEventListener('click', function () { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-index * 100) + '%)';
      $$('button', dotsWrap).forEach(function (dot, di) {
        if (di === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      slides.forEach(function (slide, si) { slide.setAttribute('aria-hidden', si === index ? 'false' : 'true'); });
    }

    function start() {
      if (reduceMotion.matches || slides.length < 2) return;
      stop();
      timer = window.setInterval(function () { goTo(index + 1); }, DELAY);
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    $('#testiPrev').addEventListener('click', function () { goTo(index - 1); restart(); });
    $('#testiNext').addEventListener('click', function () { goTo(index + 1); restart(); });

    var carousel = $('#testimonialCarousel');
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);

    var startX = null;
    carousel.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; stop(); }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      if (startX !== null) {
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 46) goTo(index + (dx < 0 ? 1 : -1));
        startX = null;
      }
      start();
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) start(); else stop(); });
      }, { threshold: 0.25 }).observe(carousel);
    } else {
      start();
    }
    goTo(0);
  }

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
        submitEnquiry();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        statusEl.textContent = 'Enquiry ready — your email app should open now. If it does not, call +91 91529 95667 or message us on WhatsApp.';
        statusEl.className = 'form-status ok';
        form.reset();
        Object.keys(rules).forEach(function (id) {
          var input = document.getElementById(id);
          var field = input ? input.closest('.field') : null;
          if (field) field.classList.remove('invalid');
        });
      }, 700);
    });

    /* No backend on GitHub Pages: hand the enquiry to the visitor's mail client.
       Replace this function (and set form.action) to post to Formspree or your own endpoint. */
    function submitEnquiry() {
      var value = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var subject = 'PTFE Enquiry — ' + (value('f-product') || 'General') + ' — ' + value('f-name');
      var body = [
        'Name: ' + value('f-name'),
        'Phone: ' + value('f-phone'),
        'Email: ' + value('f-email'),
        'Product / Service: ' + (value('f-product') || '—'),
        'Quantity: ' + (value('f-qty') || '—'),
        '',
        'Requirement:',
        value('f-message')
      ].join('\n');

      window.location.href = 'mailto:sonipandey82385@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
  }

  /* initial paint */
  onScroll();
})();
