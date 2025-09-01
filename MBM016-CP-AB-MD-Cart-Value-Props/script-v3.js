(() => {
  'use strict';

  const testInfo = {
    className: 'mn-16-test-v3',
    debug: 0,
    testName: 'MN0016 | Cart Value Props - Variant 3',
    testVersion: '0.0.4',
  };

  const waitForElement = (selector) =>
    new Promise((resolve) => {
      const found = document.querySelector(selector);
      if (found) return resolve(found);
      const obs = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          resolve(el);
          obs.disconnect();
        }
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });
    });

  const buildHTML = () => `
    <div class="cart-value-props" data-test="mn16-v3">
      <div class="prop">
              <div class="prop">
                <img src="https://cdn.shopify.com/s/files/1/0834/8191/9784/files/shipping-icon-v3.png?v=1756545489" alt="Wysyłka w 24h">
                <p class="prop-text">Wysyłka w 24h</p>
            </div>
            <div class="prop">
                <img src="https://cdn.shopify.com/s/files/1/0834/8191/9784/files/safety-icon-v3.png?v=1756545506" alt="Certyfikat bezpieczeństwa" class="icon-wide">
                <p class="prop-text">Certyfikat bezpieczeństwa</p>
            </div>
            <div class="prop">
                <img src="https://cdn.shopify.com/s/files/1/0834/8191/9784/files/grade-icon-v3.png?v=1756545518" alt="2 lata gwarancji" class="icon-wide">
                <p class="prop-text">2 lata gwarancji</p>
            </div>
    </div>
  `;

  function placeBlock() {
    const row = document.querySelector('.header-bottom .container > .row.vertical-block');
    if (!row) return;

    const container = row.parentElement;
    // Only check direct children of the container (prevents false positives elsewhere)
    const alreadyThere = container.querySelector(':scope > .cart-value-props[data-test="mn16-v3"]');
    if (alreadyThere) return;

    // Insert immediately after the row (as a sibling)
    row.insertAdjacentHTML('afterend', buildHTML());
  }

  function load() {
    const body = document.body;
    if (body.classList.contains(testInfo.className)) return;
    body.classList.add(testInfo.className);
    placeBlock();

    // If the header re-renders (affix/sticky), keep it in place
    const header = document.querySelector('.header-bottom .container');
    if (header) {
      const mo = new MutationObserver(() => placeBlock());
      mo.observe(header, { childList: true });
    }
  }

  waitForElement('.header-bottom .container > .row.vertical-block').then(load);
})();
