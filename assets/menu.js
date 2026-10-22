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
