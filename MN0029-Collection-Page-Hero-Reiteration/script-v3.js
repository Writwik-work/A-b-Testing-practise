(() => {
  'use strict';
  const testInfo = {
    className: 'mn-29-test-v3',
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

   const subContent = `<p class="hero-subhead">From your first note to a lifetime of playing, we’re here for you</p>
    <div class="hero-bullet">30-Day Money-Back Guarantee</div>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        waitForElement('.cat-banner-content .classyunicodedone').then((heroTitle) => {
            heroTitle.innerHTML = 'Get the Best Accordion with Our World-Class Support';
            heroTitle.insertAdjacentHTML('afterend', subContent);
        });
    };

  waitForElement('body').then(loadTest);
})();
