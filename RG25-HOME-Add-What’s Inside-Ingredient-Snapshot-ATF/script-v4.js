(() => {
  'use strict';
  const testInfo = {
    className: 'rg-25-test-v4',
    debug: 0,
    testName: 'RG25: [HOME] “What’s Inside” – V4 (no subheads + CTA)',
    testVersion: '0.0.1',
    pagePath: window.location.pathname,
    pageURL: window.location.href
  };

  const waitForElement = (selector) => new Promise((resolve) => {
    if (document.querySelector(selector)) return resolve(document.querySelector(selector));
    const mo = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) { resolve(el); mo.disconnect(); }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  });

  const loadTest = () => {
    const body = document.body;
    if (body.classList.contains(testInfo.className)) return;
    body.classList.add(testInfo.className);

    // --- Items (no subheads now) ---
    const items = [
      { title: 'All-Natural & Vegan',     img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-1.png?v=1755846237', alt: 'All-Natural & Vegan' },
      { title: '20+ Vitamins & Minerals', img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-2.png?v=1755846237', alt: 'Vitamins & Minerals' },
      { title: 'Probiotics & Enzymes',    img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-3.png?v=1755846237', alt: 'Probiotics & Enzymes' },
      { title: 'Omega 3, 6, 9',           img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-4.png?v=1755846237', alt: 'Omega 3 6 9' },
      { title: 'Superfood Blend',         img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-5.png?v=1755846237', alt: 'Superfood Blend' },
      { title: 'Made in USA',             img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-6.png?v=1755846237', alt: 'Made in USA' }
    ];

    const ctaHref = '#ingredients-new';  
    const ctaText = 'View All Ingredients';

    const cardHTML = `
      <div class="rg25-card">
        <h3 class="rg25-title">What’s Inside Every Scoop</h3>
        <div class="rg25-grid">
          ${items.map((it, i) => `
            <div class="rg25-cell">
              <div class="rg25-icon" data-slot="${i+1}">
                <img src="${it.img}" alt="${it.alt}" loading="lazy" decoding="async">
              </div>
              <strong class="rg25-head">${it.title}</strong>
            </div>
          `).join('')}
        </div>
        <div class="rg25-cta-wrap">
          <a class="rg25-cta" href="${ctaHref}">${ctaText}</a>
        </div>
      </div>
    `;

    const row = document.querySelector('#trial-home .row');
    if (row && !row.querySelector('.rg25-card')) {
      row.insertAdjacentHTML('afterbegin', cardHTML);
      if (testInfo.debug) console.log(`[${testInfo.testName}] V4 inserted`);
    }
  };

  waitForElement('#trial-home .row').then(() => {
    if (window.matchMedia('(max-width: 767px)').matches) loadTest();
  });
})();