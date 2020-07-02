function renderApp() {
  var content;
  if (window.location.pathname === '/about') {
    content = '<div>Welcome to the About page</div>'
  } else if (window.location.pathname === '/') {
    content = '<div>Welcome Serverless Developer :)</div>'
  }

  var main = document.getElementsByTagName('main')[0];
  main.innerHTML = content;
}

function navigate(evt) {
  evt.preventDefault();
  var href = evt.target.getAttribute('href');
  window.history.pushState({}, undefined, href);
  renderApp();
}

document.addEventListener('DOMContentLoaded', function(event) {
  var nav = document.getElementsByTagName('nav')[0];
  nav.addEventListener("click", navigate, false);

  renderApp();
});
