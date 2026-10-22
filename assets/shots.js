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

  document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('[data-shots]');
    for (var i = 0; i < boxes.length; i++) fill(boxes[i]);
  });
})();
