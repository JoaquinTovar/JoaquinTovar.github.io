// Small enhancements only; the page works without JavaScript.
(function () {
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Screenshot lightbox
  var box = document.querySelector('.lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  var boxImg = box.querySelector('img');

  document.querySelectorAll('.shot-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      boxImg.src = btn.getAttribute('data-full');
      boxImg.alt = img.alt;
      box.showModal();
    });
  });

  box.addEventListener('click', function (e) {
    if (e.target !== boxImg) box.close();
  });
  box.addEventListener('close', function () { boxImg.removeAttribute('src'); });
})();
