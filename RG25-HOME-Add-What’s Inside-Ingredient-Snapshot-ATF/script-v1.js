(() => {
  'use strict';
  const testInfo = {
    className: 'rg-25-test-v1',
    debug: 0,
    testName: 'RG25: [HOME] Add “What’s Inside” Ingredient Snapshot ATF',
    testVersion: '0.0.2',
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: ''
  };

  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          resolve(el);
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    });
  };

  const loadTest = () => {
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.className)) return;
    bodyEle.classList.add(testInfo.className);

    // ------------------- block HTML -------------------
    const items = [
      { title: 'All-Natural & Vegan',     sub: 'Clean ingredients',                  img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-1.png?v=1755846237', alt: 'All-Natural & Vegan' },
      { title: '20+ Vitamins & Minerals', sub: 'For overall vitality',               img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-2.png?v=1755846237', alt: 'Vitamins & Minerals' },
      { title: 'Probiotics & Enzymes',    sub: 'for gut & immune health',            img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-3.png?v=1755846237', alt: 'Probiotics & Enzymes' },
      { title: 'Omega 3, 6, 9',           sub: 'Healthy skin, coat & joints',        img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-4.png?v=1755846237', alt: 'Omega 3 6 9' },
      { title: 'Superfood Blend',         sub: 'spinach, kale, berries & more',      img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-5.png?v=1755846237', alt: 'Superfood Blend' },
      { title: 'Made in USA',             sub: 'In FDA-registered facilities',       img: 'https://cdn.shopify.com/s/files/1/0834/8191/9784/files/Icon-6.png?v=1755846237', alt: 'Made in USA' }
    ];

    const cardHTML = `
      <div class="rg25-card">
        <h3 class="rg25-title">What’s Inside Every Scoop</h3>
        <div class="rg25-grid">
          ${items.map((it, i) => `
            <div class="rg25-cell">
              <div class="rg25-icon" data-slot="${i+1}" aria-hidden="true">
               ${it.img ? `<img src="${it.img}" alt="${it.alt || ''}" loading="lazy" decoding="async" />` : ``}
              </div>
              <div class="rg25-text">
                <strong class="rg25-head">${it.title}</strong>
                <span class="rg25-sub">${it.sub}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // ------------------- insert inside .row -------------------
    const row = document.querySelector('#trial-home .row');
    if (row && !row.querySelector('.rg25-card')) {
      row.insertAdjacentHTML('afterbegin', cardHTML);
      if (testInfo.debug) console.log(`[${testInfo.testName}] card inserted`);
    }
  };

  waitForElement('#trial-home .row').then(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      loadTest();
    }
  });
})();
