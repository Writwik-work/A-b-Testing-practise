(() => {
  'use strict';
  const testInfo = {
    className: 'mn-29-test-v1',
    debug: 0,
    testName: 'MN0029 | Collection Page - Hero Reiteration',
    testVersion: '0.0.1',
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

    waitForElement('.cat-main-banner .cat-banner-content h2.classyunicodedone')
  .then((heroTitle) => {
    const subheadHTML = `<p class="hero-subhead">Echoes of Irish Fields in Every Bellows</p>`;
    const bulletsHTML = `<p class="hero-bullet">Family-Owned Since 1979 <span>|</span> Expert Curation <span>|</span> Built to Last</p>`;

    // Main headline
    heroTitle.textContent = 'Embrace the Legacy of the Irish Accordion';

    // Put subhead under the title and bullets under the subhead
    heroTitle.insertAdjacentHTML('afterend', subheadHTML + bulletsHTML);
  });
  };

  waitForElement('body').then(loadTest);
})();
