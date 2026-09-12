document.addEventListener('DOMContentLoaded', function () {
  /* === FAQ Accordion === */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      document.querySelectorAll('.faq-item').forEach(function (i) {
        if (i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  /* === Smooth Scroll === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#' || href.length <= 1) return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });

  /* === Nav Scroll Effect === */
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }

  /* === Mobile Nav Toggle === */
  var toggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  /* === Scroll Reveal Animation === */
  var reveals = document.querySelectorAll('.mech-card, .ing-card, .review-card, .price-card, .how-summary, .guarantee-box');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    reveals.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* === Back to Top Button === */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* === Current Year in Footer === */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* === Purchase Popup (social proof) === */
var names = [
  'Robert', 'Sarah', 'Marcus', 'Elena', 'Kevin', 'Julia', 'David', 'Michelle'
];

var cities = [
  'Austin, TX', 'Miami, FL', 'Seattle, WA', 'Denver, CO', 'Phoenix, AZ',
  'Chicago, IL', 'New York, NY', 'Los Angeles, CA', 'Atlanta, GA',
  'Nashville, TN', 'Portland, OR', 'Dallas, TX', 'Boston, MA', 'San Diego, CA'
];

function showPurchasePopup() {
  var popup = document.getElementById('purchasePopup');
  var nameEl = document.getElementById('popupName');
  var loc = document.getElementById('popupLocation');
  if (!popup || !nameEl || !loc) return;
  
  nameEl.textContent = names[Math.floor(Math.random() * names.length)];
  loc.textContent = cities[Math.floor(Math.random() * cities.length)];
  popup.classList.add('show');
  
  setTimeout(function () {
    popup.classList.remove('show');
  }, 5000);
}

setTimeout(showPurchasePopup, 4000 + Math.random() * 1000);
setInterval(showPurchasePopup, 30000 + Math.random() * 15000);
});