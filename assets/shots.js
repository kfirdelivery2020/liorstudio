// צילומי מסך: מחפש assets/screens/<אפליקציה>/1.png|jpg|webp, 2.png... ומציג רק מה שקיים.
// בלי קבצים לא מופיע כלום (גם לא כותרת הגלריה).
(function () {
  var script = document.currentScript;
  var base = script ? script.src.replace(/assets\/shots\.js.*$/, '') : '';
  var EXT = ['png', 'jpg', 'webp'];
  var he = (document.documentElement.lang || '').indexOf('he') === 0;

  function probe(app, i, cb) {
    var k = 0;
    (function next() {
      if (k >= EXT.length) return cb(null);
      var src = base + 'assets/screens/' + app + '/' + i + '.' + EXT[k++];
      var im = new Image();
      im.onload = function () { cb(src); };
      im.onerror = next;
      im.src = src;
    })();
  }

  function fill(box) {
    var app = box.getAttribute('data-shots');
    var name = box.getAttribute('data-alt') || app;
    var max = parseInt(box.getAttribute('data-max') || '8', 10);
    var phones = box.classList.contains('phones');
    (function load(i) {
      if (i > max) return;
      probe(app, i, function (src) {
        if (!src) return;
        var img = document.createElement('img');
        img.src = src; img.loading = 'lazy';
        img.alt = (he ? 'צילום מסך של ' : 'Screenshot of ') + name + ' ' + i;
        if (phones) {
          var f = document.createElement('div'); f.className = 'phone'; f.appendChild(img); box.appendChild(f);
        } else { box.appendChild(img); }
        var sec = box.closest('.gallery'); if (sec) sec.hidden = false;
        load(i + 1);
      });
    })(1);
  }

  // תצוגת בדיקה: הוספת ?shots=demo לכתובת מציגה מסגרות ריקות כדי לראות איך זה ייראה
  function demo(box) {
    var phones = box.classList.contains('phones');
    var n = phones ? 4 : 3;
    for (var i = 1; i <= n; i++) {
      var ph = document.createElement('div'); ph.className = 'ph'; ph.textContent = i;
      if (phones) { var f = document.createElement('div'); f.className = 'phone'; f.appendChild(ph); box.appendChild(f); }
      else box.appendChild(ph);
    }
    var sec = box.closest('.gallery'); if (sec) sec.hidden = false;
  }

  // תמונת בעל העסק בדף אודות: assets/about/<שם>.png|jpg|webp, מופיעה רק אם הקובץ קיים
  function photo(box) {
    var name = box.getAttribute('data-photo');
    var k = 0;
    (function next() {
      if (k >= EXT.length) return;
      var src = base + 'assets/about/' + name + '.' + EXT[k++];
      var im = new Image();
      im.onload = function () {
        im.alt = box.getAttribute('data-alt') || '';
        box.appendChild(im); box.hidden = false;
      };
      im.onerror = next;
      im.src = src;
    })();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var isDemo = /[?&]shots=demo/.test(location.search);
    var boxes = document.querySelectorAll('[data-shots]');
    for (var i = 0; i < boxes.length; i++) { if (isDemo) demo(boxes[i]); else fill(boxes[i]); }
    var photos = document.querySelectorAll('[data-photo]');
    for (var j = 0; j < photos.length; j++) photo(photos[j]);
    if (isDemo) {
      var ph = document.querySelectorAll('[data-photo]');
      for (var m = 0; m < ph.length; m++) { ph[m].hidden = false; ph[m].classList.add('demo'); ph[m].textContent = ':)'; }
    }
  });
})();
