/* Shared navigation, footer and theme toggle */

// Theme init — runs synchronously to avoid flash
(function () {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">Sysdev<span>.</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="/teori/">Teori</a></li>
      <li><a href="/mmi/">MMI</a></li>
      <li><a href="/metodikk/">Metodikk</a></li>
      <li><a href="/arkitektur/">Arkitektur</a></li>
      <li><a href="/testing/">Testing</a></li>
      <li><a href="/etikk/">Etikk</a></li>
      <li><a href="/quiz/" class="nav-quiz-btn">Quiz →</a></li>
    </ul>
    <button class="theme-toggle" id="themeToggle" aria-label="Bytt tema">🌙</button>
    <button class="nav-toggle" id="navToggle" aria-label="Åpne meny">&#9776;</button>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <p>IDATx1005 Systemutvikling &mdash; NTNU &middot;
    <a href="/teori/">Teori</a> &middot;
    <a href="/quiz/">Quiz</a> &middot;
    <a href="/mmi/">MMI</a> &middot;
    <a href="/metodikk/">Metodikk</a> &middot;
    <a href="/arkitektur/">Arkitektur</a> &middot;
    <a href="/testing/">Testing</a> &middot;
    <a href="/etikk/">Etikk</a>
  </p>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = NAV_HTML;

  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === '/' && path === '/') {
      a.classList.add('active');
    } else if (href !== '/' && path.startsWith(href)) {
      a.classList.add('active');
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', (e) => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    if (toggle.contains(e.target)) {
      links.classList.toggle('open');
    } else if (!links.contains(e.target)) {
      links.classList.remove('open');
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const updateIcon = () => {
      themeToggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    updateIcon();

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon();
    });
  }
});
