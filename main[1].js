(function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.getElementById('nav-links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, ok = true;
    ['name', 'email', 'message'].forEach(function (n) {
      var bad = !f[n].value.trim() || (n === 'email' && !/^\S+@\S+\.\S+$/.test(f[n].value));
      f[n].classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { note.textContent = 'Please complete the highlighted fields.'; return; }
    var subject = 'Inquiry: ' + f.topic.value;
    var body = 'Name: ' + f.name.value + '\nEmail: ' + f.email.value + '\nTopic: ' + f.topic.value + '\n\n' + f.message.value;
    window.location.href = 'mailto:inquiry@techkanvas.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Opening your email app. If nothing opens, email inquiry@techkanvas.com directly.';
  });
})();
