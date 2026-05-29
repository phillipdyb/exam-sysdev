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
      <li class="nav-dropdown">
        <a href="/teori/" class="nav-dropdown-trigger">Teori <span class="nav-chevron">▾</span></a>
        <ul class="nav-dropdown-menu">
          <li><a href="/mmi/">MMI & IxD</a></li>
          <li><a href="/metodikk/">Metodikk</a></li>
          <li><a href="/scrum/">Scrum</a></li>
          <li><a href="/kanban/">Kanban</a></li>
          <li><a href="/arkitektur/">Arkitektur</a></li>
          <li><a href="/testing/">Testing</a></li>
          <li><a href="/etikk/">Etikk</a></li>
          <li><a href="/uml/">UML</a></li>
          <li><a href="/baerekraft/">Bærekraft</a></li>
        </ul>
      </li>
      <li class="nav-sep" aria-hidden="true"></li>
      <li><a href="/flashkort/" class="nav-practice-btn">Flashkort</a></li>
      <li><a href="/match/" class="nav-practice-btn">Match</a></li>
      <li class="nav-quiz-li"><a href="/quiz/" class="nav-quiz-btn">Quiz →</a></li>
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
    <a href="/flashkort/">Flashkort</a> &middot;
    <a href="/match/">Match</a> &middot;
    <a href="/mmi/">MMI</a> &middot;
    <a href="/metodikk/">Metodikk</a> &middot;
    <a href="/scrum/">Scrum</a> &middot;
    <a href="/kanban/">Kanban</a> &middot;
    <a href="/arkitektur/">Arkitektur</a> &middot;
    <a href="/testing/">Testing</a> &middot;
    <a href="/etikk/">Etikk</a> &middot;
    <a href="/uml/">UML</a> &middot;
    <a href="/baerekraft/">Bærekraft</a>
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

  // Highlight Teori dropdown trigger when on a sub-topic page
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown && dropdown.querySelector('.nav-dropdown-menu .active')) {
    dropdown.querySelector('.nav-dropdown-trigger').classList.add('active');
  }

  // Chapter navigation — injected on all theory pages
  const CHAPTERS = [
    { href: '/teori/',      title: 'Teori-oversikt',       icon: '📚' },
    { href: '/mmi/',        title: 'MMI & IxD',            icon: '👁️' },
    { href: '/metodikk/',   title: 'Metodikk',             icon: '⚡' },
    { href: '/scrum/',      title: 'Scrum',                icon: '🔄' },
    { href: '/kanban/',     title: 'Kanban',               icon: '📋' },
    { href: '/arkitektur/', title: 'Arkitektur',           icon: '🏗️' },
    { href: '/testing/',    title: 'Testing',              icon: '✅' },
    { href: '/etikk/',      title: 'Etikk & Personvern',   icon: '⚖️' },
    { href: '/uml/',        title: 'UML-diagrammer',       icon: '📊' },
    { href: '/baerekraft/', title: 'Bærekraft',            icon: '🌱' },
  ];

  const chIdx = CHAPTERS.findIndex(c => path === c.href || path.startsWith(c.href));
  if (chIdx !== -1) {
    const prev = chIdx > 0 ? CHAPTERS[chIdx - 1] : null;
    const next = chIdx < CHAPTERS.length - 1 ? CHAPTERS[chIdx + 1] : null;

    const prevHtml = prev
      ? `<a href="${prev.href}" class="chapter-btn chapter-btn-prev">
           <span class="chapter-btn-label">← Forrige</span>
           <span class="chapter-btn-title">${prev.icon} ${prev.title}</span>
         </a>`
      : `<span></span>`;

    const nextHtml = next
      ? `<a href="${next.href}" class="chapter-btn chapter-btn-next">
           <span class="chapter-btn-label">Neste →</span>
           <span class="chapter-btn-title">${next.icon} ${next.title}</span>
         </a>`
      : `<a href="/quiz/" class="chapter-btn chapter-btn-next chapter-btn-cta">
           <span class="chapter-btn-label">Ferdig med teorien? →</span>
           <span class="chapter-btn-title">🧠 Ta quizen</span>
         </a>`;

    const posLabel = chIdx === 0
      ? 'Oversikt'
      : `Kapittel ${chIdx} av ${CHAPTERS.length - 1}`;

    const chapterNav = document.createElement('nav');
    chapterNav.className = 'chapter-nav';
    chapterNav.setAttribute('aria-label', 'Kapitelnavigasjon');
    chapterNav.innerHTML = `
      <div class="chapter-nav-inner">
        ${prevHtml}
        <span class="chapter-pos">${posLabel}</span>
        ${nextHtml}
      </div>`;

    const insertBefore = document.querySelector('.quiz-cta') ?? document.getElementById('site-footer');
    insertBefore?.before(chapterNav);
  }

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
