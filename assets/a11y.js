// תפריט נגישות עצמאי (בלי שירות חיצוני ובלי עוגיות). ההגדרות נשמרות רק במכשיר (localStorage).
(function () {
  var KEY = 'a11y';
  var root = document.documentElement;
  var he = (root.lang || '').indexOf('he') === 0;
  var T = he ? {
    open: 'תפריט נגישות', title: 'נגישות', close: 'סגירה', skip: 'דלג לתוכן',
    bigger: 'הגדלת טקסט', smaller: 'הקטנת טקסט', contrast: 'ניגודיות גבוהה', links: 'הדגשת קישורים',
    font: 'גופן קריא', motion: 'עצירת תנועה', reset: 'איפוס', statement: 'הצהרת נגישות'
  } : {
    open: 'Accessibility menu', title: 'Accessibility', close: 'Close', skip: 'Skip to content',
    bigger: 'Larger text', smaller: 'Smaller text', contrast: 'High contrast', links: 'Highlight links',
    font: 'Readable font', motion: 'Stop motion', reset: 'Reset', statement: 'Accessibility statement'
  };
  var state = { size: 0, contrast: false, links: false, font: false, motion: false };

  try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s) for (var k in state) if (k in s) state[k] = s[k]; } catch (e) {}

  function apply() {
    root.classList.toggle('a11y-contrast', !!state.contrast);
    root.classList.toggle('a11y-links', !!state.links);
    root.classList.toggle('a11y-font', !!state.font);
    root.classList.toggle('a11y-motion', !!state.motion);
    for (var i = 1; i <= 3; i++) root.classList.toggle('a11y-size-' + i, state.size === i);
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  apply();

  document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main');
    if (main) {
      if (!main.id) main.id = 'main-content';
      var skip = document.createElement('a');
      skip.className = 'skip-link'; skip.href = '#' + main.id; skip.textContent = T.skip;
      document.body.insertBefore(skip, document.body.firstChild);
    }

    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'a11y-btn'; btn.setAttribute('aria-label', T.open);
    btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'a11y-panel'); btn.title = T.open;
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.5" r="1.8"/><path d="M5 8.5l7 1.5 7-1.5M12 10v4.5M8.5 21l3.5-6.5 3.5 6.5"/></svg>';

    var panel = document.createElement('div');
    panel.id = 'a11y-panel'; panel.className = 'a11y-panel'; panel.hidden = true;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', T.title);
    var base = (document.currentScript && document.currentScript.src) ? '' : '';
    var stmt = (location.pathname.indexOf('/en/') !== -1 ? '' : '') + 'accessibility.html';
    panel.innerHTML =
      '<div class="a11y-head"><strong>' + T.title + '</strong><button type="button" class="a11y-x" aria-label="' + T.close + '">&times;</button></div>' +
      '<div class="a11y-row">' +
        '<button type="button" data-a="bigger">' + T.bigger + '</button>' +
        '<button type="button" data-a="smaller">' + T.smaller + '</button>' +
      '</div>' +
      '<button type="button" data-a="contrast" aria-pressed="false">' + T.contrast + '</button>' +
      '<button type="button" data-a="links" aria-pressed="false">' + T.links + '</button>' +
      '<button type="button" data-a="font" aria-pressed="false">' + T.font + '</button>' +
      '<button type="button" data-a="motion" aria-pressed="false">' + T.motion + '</button>' +
      '<button type="button" data-a="reset" class="a11y-reset">' + T.reset + '</button>' +
      '<a href="' + stmt + '">' + T.statement + '</a>';

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    function sync() {
      var map = { contrast: state.contrast, links: state.links, font: state.font, motion: state.motion };
      for (var k in map) { var b = panel.querySelector('[data-a="' + k + '"]'); if (b) b.setAttribute('aria-pressed', map[k] ? 'true' : 'false'); }
    }
    function setOpen(o) { panel.hidden = !o; btn.setAttribute('aria-expanded', o ? 'true' : 'false'); if (o) panel.querySelector('button').focus(); }

    btn.addEventListener('click', function () { setOpen(panel.hidden); });
    panel.querySelector('.a11y-x').addEventListener('click', function () { setOpen(false); btn.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); } });

    panel.addEventListener('click', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a');
      if (!a) return;
      if (a === 'bigger') state.size = Math.min(3, state.size + 1);
      else if (a === 'smaller') state.size = Math.max(0, state.size - 1);
      else if (a === 'reset') state = { size: 0, contrast: false, links: false, font: false, motion: false };
      else state[a] = !state[a];
      apply(); save(); sync();
    });
    sync();
  });
})();
