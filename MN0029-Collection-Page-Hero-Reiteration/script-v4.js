(() => {
  'use strict';
  const testInfo = {
    className: 'mn-29-test-v4',
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

   const subContent = `<p class="hero-subhead">Explore our diverse collection and find the sound that truly resonates with you</p>
    <div class="hero-bullet">Expertly Tuned | Diverse Selection | Unbeatable Value </div>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        waitForElement('.cat-banner-content .classyunicodedone').then((heroTitle) => {
            heroTitle.innerHTML = 'Explore a World of Accordions, Expertly Curated for Every Player';
            heroTitle.insertAdjacentHTML('afterend', subContent);
        });
    };

  waitForElement('body').then(loadTest);
})();
