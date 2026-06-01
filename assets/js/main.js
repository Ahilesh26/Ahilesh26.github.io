/* burger */
(function () {
  var btn = document.getElementById('navBurger');
  var mob = document.getElementById('navMobile');
  if (!btn || !mob) return;
  btn.addEventListener('click', function () {
    var o = btn.classList.toggle('open');
    mob.classList.toggle('open', o);
  });
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !mob.contains(e.target)) {
      btn.classList.remove('open');
      mob.classList.remove('open');
    }
  });
})();

/* dropdown — click toggle on mobile, hover handles desktop via CSS */
(function () {
  var drops = document.querySelectorAll('.nav__drop');
  drops.forEach(function (d) {
    var trigger = d.querySelector('a');
    if (!trigger) return;
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth < 960) { e.preventDefault(); d.classList.toggle('open'); }
    });
  });
  document.addEventListener('click', function (e) {
    drops.forEach(function (d) {
      if (!d.contains(e.target)) d.classList.remove('open');
    });
  });
})();

/* active link */
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__list a, .nav__mobile a').forEach(function (a) {
    var h = a.getAttribute('href').split('/').pop();
    if (h === page || (page === '' && h === 'index.html')) a.classList.add('active');
  });
})();

/* pillar accordion */
(function () {
  var toggles = document.querySelectorAll('.pillar-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var body = btn.nextElementSibling;
      var isOpen = btn.classList.contains('open');
      toggles.forEach(function (b) {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
})();

/* skills accordion */
(function () {
  var tabs = document.querySelectorAll('.skill-tab');
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var isActive = tab.classList.contains('active');
      tabs.forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.skill-panel').forEach(function (p) { p.classList.remove('active'); });
      if (!isActive) {
        tab.classList.add('active');
        var panel = document.getElementById('panel-' + tab.dataset.panel);
        if (panel) panel.classList.add('active');
      }
    });
  });
})();

/* contact form */
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    var msg = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !msg) return;
    e.preventDefault();
    var s = encodeURIComponent('Portfolio Inquiry — ' + name);
    var b = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
    window.location.href = 'mailto:ahileshram2610@gmail.com?subject=' + s + '&body=' + b;
  });
})();
