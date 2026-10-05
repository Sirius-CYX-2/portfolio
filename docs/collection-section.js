(function(){
  function mount(){
    var features=document.querySelector('.features');
    if(!features||document.querySelector('.collection-section')) return;
    features.insertAdjacentHTML('beforebegin', '<section class="collection-section"><div class="flow-top"><div><p class="section-label">Campaign sets</p><h2>全套广告图生成</h2><p>从单张成品到完整的营销物料套件。两套广告图均由流水线批量生成，可点击封面查看完整 PDF。</p></div></div><div class="collection-grid"><a class="collection-card collection-wide" href="assets/collections/Collection1.pdf" target="_blank" rel="noopener"><div class="collection-cover"><img loading="lazy" decoding="async" src="assets/collections/collection1.webp" alt="Collection 1 家具与家居广告图套件"><span class="collection-open">Open PDF ↗</span></div><div class="collection-info"><div><span class="collection-number">01</span><h3>Collection 1</h3><p>家具与家居装饰 · 横向广告套件</p></div><span class="collection-pages">8 pages</span></div></a><a class="collection-card collection-tall" href="assets/collections/Collection2.pdf" target="_blank" rel="noopener"><div class="collection-cover"><img loading="lazy" decoding="async" src="assets/collections/collection2.webp" alt="Collection 2 娃娃广告图套件"><span class="collection-open">Open PDF ↗</span></div><div class="collection-info"><div><span class="collection-number">02</span><h3>Collection 2</h3><p>陶瓷娃娃 · 竖向广告套件</p></div><span class="collection-pages">9 pages</span></div></a></div></section>');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount); else mount();
})();
