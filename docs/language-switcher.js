(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  var originals = new Map();
  var current = 'en';

  function remember(selector) {
    document.querySelectorAll(selector).forEach(function (node) {
      if (!originals.has(node)) originals.set(node, node.innerHTML);
    });
  }

  function set(selector, value) {
    document.querySelectorAll(selector).forEach(function (node) {
      if (!originals.has(node)) originals.set(node, node.innerHTML);
      node.innerHTML = value;
    });
  }

  function setList(selector, values) {
    document.querySelectorAll(selector).forEach(function (node, index) {
      if (!values[index]) return;
      if (!originals.has(node)) originals.set(node, node.innerHTML);
      node.innerHTML = values[index];
    });
  }

  function restoreChinese() {
    originals.forEach(function (html, node) { node.innerHTML = html; });
  }

  var pipeline = {
    lede: 'Small enough to start with one click, large enough to power an unmanned production line for 10,000+ SKUs and 400,000 commercial images.',
    stats: ['delivery window', 'commercial images', 'images / day'],
    backgroundTitle: '100 days — the “impossible” task of producing 400,000 images',
    background: [
      'To move the business from offline retail and wholesale into e-commerce, the group decided to put 10,000+ SKUs online before the Easter peak season, across 7–8 parallel storefronts. To avoid duplicate-listing algorithms on e-commerce platforms, every SKU needed eight distinct detail-page image styles. It was already January, leaving us three months to produce <strong>400,000</strong> commercial images. That meant a daily target of <strong>4,000 images</strong>. Even at full capacity, our excellent design team could produce only 50 images per day — nowhere near the requirement. Management made the stakes clear: without the required output, most products would miss the seasonal launch. The project needed AI to make a previously impossible goal achievable.',
      'To close this enormous capacity gap, several internal teams began developing independent solutions in parallel. My proposal won the support of management and was rolled out across departments. The company ultimately met its launch target, generated significant returns, and proved the e-commerce transition viable with remarkably low cost and lead time.'
    ],
    coreTitle: 'A consumer-grade experience for enterprise-grade AI productivity',
    core: [
      ['⚡', 'Frictionless operation: no prompt tinkering', 'The interface reduces the operational threshold to zero. No ComfyUI node graphs, no model mechanics, and no hand-written prompts. The system parses requirements automatically; a new operator only needs to click “Start” and wait for production-ready images.'],
      ['♾️', 'Lights-out operation: fully automated, 24/7', 'The system behaves like an autonomous production line. Once started, it takes over batch work and generates images continuously, compressing human intervention to the absolute minimum and freeing marketing and design teams from manual monitoring.'],
      ['🧠', 'Context-aware adaptation: a strategy for every SKU', 'The adaptive engine avoids rigid templates. It analyzes product scale, category, and campaign context — from Easter to Christmas — then automatically matches the most suitable scene, lighting, and generation instructions.'],
      ['🛡️', 'Industrial-grade resilience: graceful recovery by design', 'The workflow has built-in fallbacks for model API outages, incomplete product data, and individual node failures. Graceful degradation and retries allow the line to recover on its own and keep production moving.']
    ],
    flowTitle: 'From spreadsheet to storefront in four steps.',
    flowSteps: ['Product list', 'Source files', 'Generation complete', 'Upload complete'],
    flowDescriptions: [
      'The operator prepares a SKU information list. The format is flexible; in our organization, these product lists are fixed assets and require no additional preparation.',
      'The operator places matching product images with SKU numbers into the designated folder. Order and format are flexible; these source assets are also maintained as fixed assets in our organization.',
      'Once generation is complete, finished images are grouped and sorted by SKU, then saved to the specified location. The operator can upload them to Ozon and other platforms in one step, with no further edits.',
      'The finished images are uploaded in bulk to Ozon and other e-commerce platforms, where the business team reviews the live product pages.'
    ],
    outputTitle: 'Selected output',
    outputHeading: 'Selected output (base style)',
    outputText: 'Every image below was generated in one pass by the application, without secondary retouching, manual editing, or hand-written prompts.',
    featureTitle: 'Product features',
    featureTabs: ['Step 1 / Minimal setup', 'Step 2 / State-machine dashboard', 'Step 3 / Mobile reach', 'Step 4 / Graceful closure'],
    features: [
      ['Step 1', 'Minimal setup: start in one click', '“We removed the complex node graphs and parameter tuning of traditional AI image tools such as ComfyUI. The operator only selects the product spreadsheet, source-image directory, and output path; the system parses image requirements for hundreds or thousands of SKUs automatically. For non-technical staff, the operational threshold is almost zero — prepare the data and let the system handle the rest.”', 'Minimal setup interface'],
      ['Step 2', 'State-machine dashboard: see the whole operation', '“Click Start and the application becomes a fully automated production line. An asynchronous concurrency engine and state-machine architecture feed the dashboard in real time, showing each SKU’s stage and success rate. There is no need to watch the process manually; every concurrent task is visible, making industrial-scale production feel stable and tangible.”', 'Task dashboard in progress'],
      ['Step 3', 'Mobile reach: step away, then review', '“A true lights-out factory frees your attention completely. You can move on to other work without watching the process. When the batch finishes, a dedicated Telegram Bot sends the completion report to your phone immediately.”', 'Telegram Bot mobile notification'],
      ['Step 4', 'Graceful closure: dead-letter recovery and resume', '“If a source image is missing or a dimension check fails, there is no need to rerun the entire batch. The detailed report isolates the failed Dead Letter tasks. Once the source data is repaired, the operator clicks Retry and the system resumes precisely from the interruption point — a practical final piece of human-in-the-loop control.”', 'Detailed report with one-click retry']
    ],
    challengeHeading: '⚔️ Challenges and breakthroughs: how we won the campaign',
    challenges: [
      '<h3>❓ Challenge 1: How do you break the physical limit of 4,000 images per day?</h3><p class="quote">“Local GPU capacity was already stretched thin. Depending on people and local machines would have been a dead end.”</p><p class="solution">💡 Breakthrough: cloud concurrency + an aggressively automated workflow</p><ul><li>🎯 <strong>Strategic trade-off</strong>: replace single-image perfectionism with an “80-point commercial baseline,” using a standardized SOP pipeline instead of open-ended creation.</li><li>☁️ <strong>Move to the cloud</strong>: retire constrained local GPUs and connect to Google’s enterprise-grade service line to remove compute and concurrency bottlenecks.</li><li>🚀 <strong>Asynchronous scheduling</strong>: build a resilient task pool on <code>asyncio</code> and semaphores to push API throughput to its practical limit.</li><li>⚙️ <strong>Remove manual steps</strong>: every removed intervention point increased capacity by 30%+. The final closed loop let one click break through the 4,000-image daily target.</li></ul>',
      '<h3>❓ Challenge 2: How can one system adapt to 10,000+ SKUs across categories and dimensions?</h3><p class="quote">“No one can hand-write prompts for thousands of products. We needed an engine that understood multidimensional business rules.”</p><p class="solution">💡 Breakthrough: an agentic workflow + progressive disclosure</p><ul><li>🧠 <strong>Build an expert skills library</strong>: split complex visual and compliance requirements into independent enhancement Skills, with YAML frontmatter registration and Git-based version control.</li><li>🔍 <strong>Progressive disclosure</strong>: use a lightweight general-purpose LLM as the reasoning layer. It reads only the Skills needed for the current product and composes the most relevant generation instructions on demand.</li></ul>',
      '<h3>❓ Challenge 3: How do you prevent failures and runaway costs during 24/7 unattended operation?</h3><p class="quote">“Automation is most vulnerable to surprises. One stalled error or infinite retry loop can bring down the whole line.”</p><p class="solution">💡 Breakthrough: state-machine resume + graceful degradation + Dead Letter and HITL control</p><ul><li>🛡️ <strong>Business prioritization</strong>: when a non-core node such as LLM polishing is rate-limited, the main flow keeps moving with an automatic fallback.</li><li>💾 <strong>Idempotent state machine</strong>: SQLite provides global state. After an interruption, the system resumes precisely and avoids wasteful API calls.</li><li>🛑 <strong>Dead Letter handling</strong>: fatal errors are archived cleanly, terminating meaningless compute consumption.</li><li>🤝 <strong>HITL handoff</strong>: the operator repairs the failed input and clicks Retry; the system comes back to life from the exact checkpoint.</li></ul>',
      '<h3>❓ Challenge 4: How do you unlock AI capacity while keeping redraws below 2%?</h3><p class="quote">“Rework hurts more than starting over. Blindly generating at scale and drawing a lucky sample does not survive a commercial budget.”</p><p class="solution">💡 Breakthrough: boundary control with data-driven aesthetic iteration</p><ul><li>🎯 <strong>Strict boundaries</strong>: constrain model freedom with rigorous terms and make “no errors” the first priority.</li><li>🧩 <strong>Visual craft meets prompt engineering</strong>: encode professional design principles into the underlying logic and use visual strategies to avoid the common weaknesses of generative models.</li><li>🧪 <strong>Baseline iteration</strong>: turn every rejected sample into a regression test, version it, and convert subjective visual preferences into objective logic for reliable, ready-to-use output.</li></ul>'
    ],
    resultsHeading: '🏆 Final results and business impact: code as a growth engine',
    results: [
      ['⚡', 'Capacity explosion: an efficiency revolution beyond expectations', 'Cloud concurrency and a fully automated pipeline raised theoretical capacity to 1,800 images per hour. In production, even after source preparation and final quality checks, one operator consistently delivered <strong>1,100 SKUs per day — roughly 5,500 images</strong>.'],
      ['🛡️', 'Quality at scale: from AI roulette to industrial delivery', 'Competing internal proposals reached a 20% failure rate. Across my direct delivery of 1,400+ SKUs — more than 7,000 images — only 22 SKUs received rework requests. A <strong>98%+ acceptance rate</strong> led management to adopt the proposal as an enterprise standard and roll it out company-wide.'],
      ['📉', 'Engineering-led cost reduction: an ROI advantage', 'I introduced multi-panel generation followed by automated cropping, with model routing based on image difficulty. The combination reduced the cost of a five-image detail set from Google’s standard starting point of ¥5 to <strong>¥0.7</strong>. The 400,000-image program stayed at roughly <strong>¥56,000 in total compute cost</strong>, below the other teams’ starting hardware budgets and far below a full-time designer.'],
      ['💼', 'Commercial enablement: winning the e-commerce transition', 'The system helped the company put 90% of its inventory — 10,000+ SKUs — online before the Easter peak. We opened eight parallel stores across <strong>Ozon</strong> and <strong>Wildberries</strong>. By June 2026, sales at the new stores had <strong>grown 65%</strong> versus the previous three years, while actual profit — Real Money, before platform commission — <strong>doubled by 100%</strong>.']
    ]
  };

  function applyPipelineEnglish() {
    set('.lede', pipeline.lede); setList('.project-stats span', pipeline.stats); set('.background-copy h2', pipeline.backgroundTitle); setList('.background-copy .copy-grid > div:last-child p', pipeline.background); set('.pipeline-case > section:nth-of-type(4) > h2', pipeline.coreTitle);
    document.querySelectorAll('.bento-card').forEach(function (card, i) { if (!pipeline.core[i]) return; card.querySelector('h3').textContent = pipeline.core[i][1]; card.querySelector('p').textContent = pipeline.core[i][2]; card.querySelector('b').textContent = pipeline.core[i][0]; });
    set('.flow-section h2', pipeline.flowTitle); setList('.flow-step span', pipeline.flowSteps); set('#flow-description', pipeline.flowDescriptions[0]); set('.gallery-stage .section-label', pipeline.outputTitle); set('.gallery-stage h2', pipeline.outputHeading); set('.gallery-stage .flow-top p:last-child', pipeline.outputText); set('.features > h2', pipeline.featureTitle); setList('.feature-tab', pipeline.featureTabs); set('.challenges > h2', pipeline.challengeHeading); setList('.challenge', pipeline.challenges); set('.results > h2', pipeline.resultsHeading); document.querySelectorAll('.trophy').forEach(function (card, i) { var item = pipeline.results[i]; if (!item) return; card.querySelector('.trophy-icon').textContent = item[0]; card.querySelector('h3').textContent = item[1]; card.querySelector('p').innerHTML = item[2]; }); set('.collection-section h2', 'Complete campaign image generation'); set('.collection-section .flow-top p:last-child', 'From individual outputs to a complete set of marketing assets. Both campaign sets were generated by the pipeline and open as full PDFs when selected.'); setList('.collection-info p', ['Furniture & home decor - landscape campaign set', 'Porcelain dolls - portrait campaign set']); setList('.collection-open', ['Open PDF ↗', 'Open PDF ↗']);
    set('#feature-step', pipeline.features[0][0]); set('#feature-title', pipeline.features[0][1]); set('#feature-copy', pipeline.features[0][2]);
    var featureImage = document.querySelector('#feature-image'); if (featureImage) featureImage.alt = pipeline.features[0][3];
  }

  function bindPipelineDynamic() {
    if (!document.querySelector('.pipeline-case')) return;
    var flows = [pipeline.flowDescriptions[0], pipeline.flowDescriptions[1], pipeline.flowDescriptions[2], pipeline.flowDescriptions[3]];
    function syncFlowEnglish() { if (current !== 'en') return; var active = document.querySelector('.flow-step.active'); var i = active ? Number(active.getAttribute('data-flow')) : 0; var desc = document.querySelector('#flow-description'); if (desc) desc.textContent = flows[i]; }
    document.querySelectorAll('.flow-step,#flow-prev,#flow-next').forEach(function (node) { node.addEventListener('click', function () { setTimeout(syncFlowEnglish, 0); }); });
    var panel = document.querySelector('#flow-panel'); if (panel) panel.addEventListener('keydown', function () { setTimeout(syncFlowEnglish, 0); });
    document.querySelectorAll('.feature-tab').forEach(function (button, i) { button.addEventListener('click', function () { if (current !== 'en') return; set('#feature-step', pipeline.features[i][0]); set('#feature-title', pipeline.features[i][1]); set('#feature-copy', pipeline.features[i][2]); var image = document.querySelector('#feature-image'); if (image) image.alt = pipeline.features[i][3]; }); });
  }

  function applyIndexEnglish() {
    set('main .hero h1', 'Make complex products <em>easy to understand.</em>'); set('main .hero .intro', 'A record of two important projects: their context, decisions, and outcomes. More complete evidence than a résumé alone.'); set('.project-card:first-child p', 'A one-click application that powered automated production for 10,000+ SKUs and 400,000 commercial images.'); set('.project-card:nth-child(2) p', 'A mobile field-research tool that brings on-site signals back to the decision table faster.'); set('.topbar .eyebrow', 'SELECTED WORKS · 2026'); set('footer span:last-child', 'Scroll to explore ↓');
  }

  function applyProject2English() {
    set('.detail-head .lede', 'Turn small signals from the field into better product decisions.'); set('.detail-head h1', 'Field Notes'); set('.copy-grid h2', 'Research is not a report. It is an ongoing field practice.'); set('.gallery .eyebrow', 'UI & interaction'); set('.gallery .tile:nth-child(1)', 'Voice capture'); set('.gallery .tile:nth-child(2)', 'Smart highlights'); set('.gallery .tile:nth-child(3)', 'Insight trail');
  }

  function applyEnglish() {
    if (page === 'index.html' || page === '') applyIndexEnglish();
    if (page === 'project-1.html') applyPipelineEnglish();
    if (page === 'project-2.html') applyProject2English();
    document.documentElement.lang = 'en';
    document.querySelectorAll('.lang-toggle').forEach(function (button) { button.textContent = '中文'; });
    current = 'en';
  }

  function applyChinese() {
    restoreChinese();
    document.documentElement.lang = 'zh-CN';
    document.querySelectorAll('.lang-toggle').forEach(function (button) { button.textContent = 'EN'; });
    current = 'zh';
  }

  function addToggle() {
    var topbar = document.querySelector('.topbar'); if (!topbar) return;
    var button = document.createElement('button'); button.className = 'lang-toggle'; button.type = 'button'; button.textContent = '中文'; button.setAttribute('aria-label', 'Switch language');
    button.addEventListener('click', function () { if (current === 'en') applyChinese(); else applyEnglish(); }); topbar.appendChild(button);
  }

  function init() {
    addToggle();
    document.querySelectorAll('.project-stats span,.background-copy h2,.background-copy .copy-grid > div:last-child p,.bento-card h3,.bento-card p,.flow-section h2,.flow-step span,#flow-description,.gallery-stage .section-label,.gallery-stage h2,.gallery-stage .flow-top p:last-child,.features > h2,.feature-tab,.challenge,.results > h2,.trophy,#feature-step,#feature-title,#feature-copy,main .hero h1,main .hero .intro,.project-card p,.topbar .eyebrow,footer span:last-child,.detail-head .lede,.detail-head h1,.copy-grid h2,.gallery .eyebrow,.gallery .tile').forEach(function (node) { if (!originals.has(node)) originals.set(node, node.innerHTML); });
    bindPipelineDynamic();
    applyEnglish();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
