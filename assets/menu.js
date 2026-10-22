// תפריט המבורגר: נסגר בלחיצה מחוץ לתפריט, על קישור, או ב-Escape. עובד גם בלי JS (details/summary).
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('details.menu');
    if (!menu) return;
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
      else if (e.target.closest && e.target.closest('details.menu nav a')) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; var s = menu.querySelector('summary'); if (s) s.focus(); }
    });
  });
})();

// צל לסרגל העליון כשגוללים
(function () {
  var root = document.documentElement;
  function onScroll() { root.classList.toggle('scrolled', (window.pageYOffset || root.scrollTop) > 4); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// כניסה עדינה של כרטיסים בגלילה. רכיבים שכבר נראים לא מונפשים, ובלי JS הכל גלוי.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll('.card, .feat, .phone, .faq details, .summary');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var t = e.target;
        t.classList.add('in');
        io.unobserve(t);
        // מסירים את המחלקות אחרי הכניסה, כדי שאפקט ההרחפה של הכרטיסים ימשיך לעבוד
        setTimeout(function () { t.classList.remove('reveal', 'in'); }, 700);
      });
    }, { threshold: 0.08 });
    for (var i = 0; i < els.length; i++) {
      var r = els[i].getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) continue;
      els[i].classList.add('reveal');
      io.observe(els[i]);
    }
  });
})();
