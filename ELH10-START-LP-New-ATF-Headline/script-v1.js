(() => {
  "use strict";
  const testInfo = {
    className: "elh-10-test",
    debug: 0,
    testName: "ELH10: [START-LP] New ATF Headline",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
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
        subtree: true,
      });
    });
  };

  const loadTest = () => {
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.className)) return;
    bodyEle.classList.add(testInfo.className);

    const headlineEl = document.querySelector('.r-vasi3u.alchemy-rte span > p');
    if (!headlineEl) return;

    // Save original text (optional, for revert logic)
    headlineEl.dataset.originalText = headlineEl.textContent;

    // Replace with new text
    headlineEl.innerHTML = `YOU’VE TRIED WILLPOWER.<br> NOW TRY WHAT ACTUALLY WORKS.`;
  };

  waitForElement('.r-vasi3u.alchemy-rte span > p').then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
