(function () {
  function initViewer(v) {
    var tabs = v.querySelectorAll('.sv-tab');
    var frame = v.querySelector('.sv-frame');
    var titleEl = v.querySelector('.sv-title');
    var dlHtml = v.querySelector('.sv-dl-html');
    var dlXlsx = v.querySelector('.sv-dl-xlsx');
    function slug(src) { return src.split('/').pop(); }
    function activate(tab) {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var src = tab.getAttribute('data-src');
      if (frame.getAttribute('src') !== src) { frame.setAttribute('src', src); }
      titleEl.textContent = tab.getAttribute('data-title') || '';
      if (dlHtml) { dlHtml.setAttribute('href', src); dlHtml.setAttribute('download', slug(src)); }
      if (dlXlsx) {
        var xlsx = tab.getAttribute('data-xlsx');
        if (xlsx) { dlXlsx.setAttribute('href', xlsx); dlXlsx.setAttribute('download', slug(xlsx)); dlXlsx.style.display = ''; }
        else { dlXlsx.style.display = 'none'; }
      }
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { activate(t); }); });
    var first = v.querySelector('.sv-tab.is-active') || tabs[0];
    if (first) { activate(first); }
  }
  function boot() { document.querySelectorAll('[data-viewer]').forEach(initViewer); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); }
  else { boot(); }
})();
