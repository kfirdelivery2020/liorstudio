function switchLang(lang, btn) {
  document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active'); });
  document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.remove('active'); });
  document.getElementById('section-' + lang).classList.add('active');
  btn.classList.add('active');
}
