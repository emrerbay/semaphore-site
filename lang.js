// one page, two languages: the switch remembers the choice, the first visit follows the browser
(function () {
  var pick = function (l) {
    document.querySelectorAll('section[lang]').forEach(function (s) { s.classList.toggle('on', s.getAttribute('lang') === l); });
    document.querySelectorAll('.lang a').forEach(function (a) { a.classList.toggle('on', a.dataset.lang === l); });
    document.documentElement.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
  };
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var l = saved || ((navigator.language || '').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  pick(l);
  document.querySelectorAll('.lang a').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); pick(a.dataset.lang); }); });
})();
