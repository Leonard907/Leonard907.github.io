(function () {
  var list = document.getElementById('publication-list');
  var button = document.querySelector('.publication-toggle');
  if (!list || !button || list.children.length <= 5) return;

  var extraPublications = Array.prototype.slice.call(list.children, 5);

  function setExpanded(expanded) {
    extraPublications.forEach(function (publication) {
      publication.hidden = !expanded;
    });
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Show less' : 'Show all (' + list.children.length + ')';
  }

  setExpanded(false);
  button.hidden = false;
  button.addEventListener('click', function () {
    setExpanded(button.getAttribute('aria-expanded') !== 'true');
  });
})();
