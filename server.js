const http = require("http");
const { URL } = require("url");
const fs = require("fs");
const path = require("path");
const { ecosocContent } = require("./site-data");

const PORT = process.env.PORT || 3000;

const baseStyles = `
  :root {
    --bg: #f8fbfd;
    --bg-soft: #eef5fa;
    --panel: #ffffff;
    --text: #1a3550;
    --muted: #5c738a;
    --accent: #1f7ea8;
    --line: #d5e4ef;
    --soft-shadow: 0 10px 30px rgba(25, 73, 108, 0.08);
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 15% -20%, rgba(31, 126, 168, 0.12), transparent 35%),
      radial-gradient(circle at 90% 0%, rgba(51, 161, 203, 0.1), transparent 26%),
      var(--bg);
    color: var(--text);
  }
  .container { width: min(1120px, 92vw); margin: 0 auto; }
  .header {
    position: sticky; top: 0; z-index: 20;
    background: rgba(248, 251, 253, 0.92);
    border-bottom: 1px solid var(--line);
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0;
    gap: 1rem;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--text);
    text-decoration: none;
  }
  .brand-logo {
    width: 72px;
    height: 40px;
    object-fit: contain;
    border-radius: 0;
  }
  .brand span { color: var(--accent); }
  .links {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  .links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .links a:hover { color: var(--accent); }
  .hero {
    padding: 5.2rem 0 2.5rem;
    border-bottom: 1px solid var(--line);
  }
  .hero-inner {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 1.2rem;
    align-items: center;
  }
  .kicker {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.75rem;
    color: var(--accent);
    margin: 0 0 0.8rem;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    font-size: clamp(2.1rem, 5.8vw, 3.5rem);
    line-height: 1.08;
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 600;
  }
  .lead {
    max-width: 68ch;
    color: var(--muted);
    margin-top: 1rem;
    line-height: 1.7;
  }
  .meta { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.3rem; }
  .pill {
    border: 1px solid var(--line);
    background: #f0f7fc;
    color: #275470;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    font-size: 0.85rem;
  }
  .hero-logo-panel {
    justify-self: end;
    background: #ffffff;
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: var(--soft-shadow);
    padding: 0.8rem;
    max-width: 320px;
  }
  .hero-logo-panel img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
  section {
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--line);
  }
  h2 {
    margin: 0 0 0.8rem;
    font-size: 1.5rem;
    color: #1a3550;
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 600;
  }
  .muted { color: var(--muted); line-height: 1.7; }
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 1rem;
  }
  .card {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 1.15rem;
    box-shadow: var(--soft-shadow);
  }
  .card h3 { margin: 0 0 0.4rem; font-size: 1.05rem; color: #17344c; }
  .card p { margin: 0.4rem 0 0.8rem; color: var(--muted); line-height: 1.6; }
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    font-weight: 600;
  }
  .term-links {
    margin: 0.4rem 0 0;
    padding-left: 1.1rem;
  }
  .term-links a {
    color: var(--accent);
    text-decoration: none;
  }
  .term-links a:hover {
    text-decoration: underline;
  }
  ul { margin: 0.4rem 0 0; padding-left: 1.1rem; color: #2e506a; }
  li { margin-bottom: 0.4rem; line-height: 1.55; }
  .split {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 1rem;
    align-items: start;
  }
  .resource-controls {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  input[type="search"], select {
    background: #ffffff;
    border: 1px solid var(--line);
    color: #1a3550;
    border-radius: 8px;
    padding: 0.5rem 0.65rem;
  }
  .btn {
    display: inline-block;
    margin-top: 0.7rem;
    color: #ffffff;
    background: var(--accent);
    border: 1px solid #1b7196;
    border-radius: 8px;
    padding: 0.55rem 0.85rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.92rem;
  }
  .btn:hover { filter: brightness(0.95); }
  .footer {
    padding: 1.5rem 0 2.5rem;
    color: #5c738a;
    font-size: 0.9rem;
  }
  @media (max-width: 820px) {
    .split { grid-template-columns: 1fr; }
    .hero-inner { grid-template-columns: 1fr; }
    .hero-logo-panel { justify-self: start; max-width: 260px; }
  }
`;

function pageTemplate() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SEAMUN | ECOSOC Committee</title>
    <meta name="description" content="SEAMUN ECOSOC portal with topics, resources, and chair applications." />
    <style>${baseStyles}</style>
  </head>
  <body>
    <header class="header">
      <div class="container header-inner">
        <a class="brand" href="#top">
          <img class="brand-logo" src="/ECOSOC.png" alt="ECOSOC logo" />
          SEAMUN <span>ECOSOC</span>
        </a>
        <ul class="links">
          <li><a href="#about">About</a></li>
          <li><a href="#conference">Conference</a></li>
          <li><a href="#topics">Topics</a></li>
          <li><a href="#terms">Key Terms</a></li>
          <li><a href="#chairs">Chair Apps</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero-inner">
          <div>
            <p class="kicker" id="conference-kicker">SEAMUN Committee Portal</p>
            <h1 id="committee-title">Economic and Social Council (ECOSOC)</h1>
            <p class="lead" id="committee-subtitle"></p>
            <div class="meta">
              <span class="pill" id="conference-location"></span>
              <span class="pill" id="conference-dates"></span>
            </div>
          </div>
          <div class="hero-logo-panel">
            <img src="/ECOSOC.png" alt="ECOSOC committee logo card" />
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container split">
          <div class="card">
            <h2>About This Committee</h2>
            <p class="muted" id="about-mission"></p>
            <p class="muted" id="about-focus"></p>
          </div>
          <div class="card">
            <h2>Delegate Readiness Checklist</h2>
            <ul id="delegate-help-list"></ul>
          </div>
        </div>
      </section>

      <section id="conference">
        <div class="container split">
          <div class="card">
            <h2>SEAMUN I 2027 Conference Details</h2>
            <p class="muted" id="conference-slogan"></p>
            <ul id="conference-meta-list"></ul>
          </div>
          <div class="card">
            <h2>Fees and Session Structure</h2>
            <h3>Registration Fees</h3>
            <ul id="conference-fees-list"></ul>
            <h3>Committee Session Plan</h3>
            <ul id="conference-sessions-list"></ul>
          </div>
        </div>
      </section>

      <section id="topics">
        <div class="container">
          <h2>Agenda Topics</h2>
          <p class="muted">Topic content is loaded dynamically so your secretariat can update one data file without touching layout code.</p>
          <div id="topics-grid" class="grid"></div>
          <div class="grid">
            <article class="card">
              <h3>Allocation Examples</h3>
              <p id="allocation-notes" class="muted"></p>
              <h3>ECOSOC Matrix Snapshot</h3>
              <ul id="allocation-matrix-list"></ul>
              <h3>Sample Country Allocation Sets</h3>
              <ul id="allocation-examples-list"></ul>
            </article>
          </div>
        </div>
      </section>

      <section id="terms">
        <div class="container">
          <h2>Key Terms</h2>
          <p class="muted">Use this glossary to understand core ECOSOC policy language before drafting speeches and clauses.</p>
          <div id="terms-grid" class="grid"></div>
        </div>
      </section>

      <section id="chairs">
        <div class="container split">
          <div class="card">
            <h2>Chair Applications</h2>
            <p class="muted" id="chairs-overview"></p>
            <h3>Eligibility</h3>
            <ul id="chairs-eligibility"></ul>
            <h3>Application Process</h3>
            <ul id="chairs-process"></ul>
            <a id="chairs-apply-link" class="btn" href="#">Apply for ECOSOC Chair</a>
          </div>
          <div class="card">
            <h2>Timeline</h2>
            <ul id="chairs-timeline"></ul>
          </div>
        </div>
      </section>

      <section id="resources">
        <div class="container">
          <h2>Research Resources</h2>
          <p class="muted">Filter references by source type and quickly search by keyword.</p>
          <div class="resource-controls">
            <input id="resource-search" type="search" placeholder="Search resources..." />
            <select id="resource-filter">
              <option value="all">All Types</option>
              <option value="UN">UN</option>
              <option value="Data">Data</option>
              <option value="Policy">Policy</option>
            </select>
          </div>
          <div id="resources-grid" class="grid"></div>
        </div>
      </section>

      <section id="faq">
        <div class="container">
          <h2>FAQ</h2>
          <div id="faq-grid" class="grid"></div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        ECOSOC portal maintained by SEAMUN Secretariat. For updates, refresh this page to load the latest committee data.
      </div>
    </footer>

    <script>
      const byId = (id) => document.getElementById(id);

      function renderList(el, items) {
        el.innerHTML = items.map((item) => '<li>' + item + '</li>').join('');
      }

      function renderTopics(topics) {
        byId('topics-grid').innerHTML = topics.map((topic) => {
          const questions = topic.guidingQuestions.map((q) => '<li>' + q + '</li>').join('');
          const prep = topic.prepIdeas.map((p) => '<li>' + p + '</li>').join('');
          return '<article class="card">' +
            '<h3>' + topic.title + '</h3>' +
            '<p>' + topic.summary + '</p>' +
            '<strong>Guiding Questions</strong>' +
            '<ul>' + questions + '</ul>' +
            '<strong>Preparation Ideas</strong>' +
            '<ul>' + prep + '</ul>' +
          '</article>';
        }).join('');
      }

      function renderFaq(faq) {
        byId('faq-grid').innerHTML = faq.map((item) =>
          '<article class="card"><h3>' + item.q + '</h3><p>' + item.a + '</p></article>'
        ).join('');
      }

      function renderResources(resources) {
        byId('resources-grid').innerHTML = resources.map((r) =>
          '<article class="card">' +
          '<span class="tag">' + r.type + '</span>' +
          '<h3>' + r.title + '</h3>' +
          '<p>' + r.description + '</p>' +
          '<a class="btn" href="' + r.url + '" target="_blank" rel="noreferrer">Open Resource</a>' +
          '</article>'
        ).join('');
      }

      function renderKeyTerms(termsByTopic, topics) {
        const sections = topics.map((topic) => {
          const topicTerms = termsByTopic[topic.id] || [];
          const items = topicTerms.map((item) => {
            const links = item.links.map((link) =>
              '<li><a href="' + link.url + '" target="_blank" rel="noreferrer">' + link.label + '</a></li>'
            ).join('');
            return '<article class="card">' +
              '<h3>' + item.term + '</h3>' +
              '<p>' + item.meaning + '</p>' +
              '<strong>Learn More</strong>' +
              '<ul class="term-links">' + links + '</ul>' +
            '</article>';
          }).join('');

          return '<div>' +
            '<h3>' + topic.title + '</h3>' +
            '<p class="muted">Key terms for this topic: ' + topicTerms.length + '</p>' +
            '<div class="grid">' + items + '</div>' +
          '</div>';
        }).join('');

        byId('terms-grid').innerHTML = sections;
      }

      async function loadContent() {
        const response = await fetch('/api/ecosoc');
        if (!response.ok) throw new Error('Unable to fetch committee data');
        const data = await response.json();

        byId('conference-kicker').textContent = data.conference.name + ' Committee Portal';
        byId('committee-title').textContent = data.conference.committee;
        byId('committee-subtitle').textContent = data.conference.subtitle;
        byId('conference-location').textContent = data.conference.location;
        byId('conference-dates').textContent = data.conference.dates;

        byId('about-mission').textContent = data.about.mission;
        byId('about-focus').textContent = data.about.focus;
        renderList(byId('delegate-help-list'), data.delegateHelp);
        byId('conference-slogan').textContent = 'Theme: ' + data.conferenceInfo.slogan;
        renderList(byId('conference-meta-list'), [
          data.conferenceInfo.format,
          data.conferenceInfo.committeeCount,
          data.conferenceInfo.delegateCapacity
        ]);
        renderList(byId('conference-fees-list'), data.conferenceInfo.fees);
        renderList(byId('conference-sessions-list'), data.conferenceInfo.sessionPlan);

        renderTopics(data.topics);
        byId('allocation-notes').textContent = data.allocationExamples.notes;
        renderList(byId('allocation-matrix-list'), data.allocationExamples.matrixSummary);
        renderList(byId('allocation-examples-list'), data.allocationExamples.sampleCountryAllocations);
        renderKeyTerms(data.keyTermsByTopic, data.topics);
        renderFaq(data.faq);

        byId('chairs-overview').textContent = data.chairApplications.overview;
        renderList(byId('chairs-eligibility'), data.chairApplications.eligibility);
        renderList(byId('chairs-process'), data.chairApplications.process);
        renderList(byId('chairs-timeline'), data.chairApplications.timeline);
        byId('chairs-apply-link').href = data.chairApplications.applyLink;

        let currentResources = data.resources.slice();
        const searchInput = byId('resource-search');
        const filterSelect = byId('resource-filter');

        function applyResourceFilters() {
          const keyword = searchInput.value.trim().toLowerCase();
          const type = filterSelect.value;
          currentResources = data.resources.filter((resource) => {
            const matchesType = type === 'all' || resource.type === type;
            const haystack = (resource.title + ' ' + resource.description).toLowerCase();
            const matchesKeyword = keyword.length === 0 || haystack.includes(keyword);
            return matchesType && matchesKeyword;
          });
          renderResources(currentResources);
        }

        searchInput.addEventListener('input', applyResourceFilters);
        filterSelect.addEventListener('change', applyResourceFilters);
        renderResources(currentResources);
      }

      loadContent().catch((err) => {
        byId('committee-subtitle').textContent = 'An error occurred while loading committee data.';
        console.error(err);
      });
    </script>
  </body>
</html>`;
}

function sendJson(res, payload, statusCode = 200) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function sendHtml(res, html, statusCode = 200) {
  res.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}

const server = http.createServer((req, res) => {
  const incomingUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = incomingUrl;

  if (pathname === "/ECOSOC.png") {
    const logoPath = path.join(__dirname, "ECOSOC.png");
    if (!fs.existsSync(logoPath)) {
      sendJson(res, { error: "Logo not found" }, 404);
      return;
    }
    res.writeHead(200, { "Content-Type": "image/png" });
    fs.createReadStream(logoPath).pipe(res);
    return;
  }

  if (pathname === "/") {
    sendHtml(res, pageTemplate());
    return;
  }

  if (pathname === "/api/ecosoc") {
    sendJson(res, ecosocContent);
    return;
  }

  if (pathname === "/api/resources") {
    const query = (searchParams.get("q") || "").toLowerCase();
    const type = searchParams.get("type");
    const filtered = ecosocContent.resources.filter((resource) => {
      const matchesType = !type || type === "all" || resource.type.toLowerCase() === type.toLowerCase();
      if (!matchesType) return false;
      if (!query) return true;
      const searchable = `${resource.title} ${resource.description}`.toLowerCase();
      return searchable.includes(query);
    });
    sendJson(res, filtered);
    return;
  }

  sendJson(res, { error: "Not Found" }, 404);
});

server.listen(PORT, () => {
  console.log(`ECOSOC site running on http://localhost:${PORT}`);
});
