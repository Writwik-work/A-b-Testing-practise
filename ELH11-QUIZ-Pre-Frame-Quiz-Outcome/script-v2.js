(() => {
  "use strict";
  const testInfo = {
    className: "elh-11-test",
    debug: 0,
    testName: "ELH11: [QUIZ] Pre-Frame Quiz Outcome",
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

    const headlineEl = document.querySelector('h2.heading-style-h4');
    if (!headlineEl) return;

    // Save original text
    headlineEl.dataset.originalText = headlineEl.textContent;

    // Replace headline text (EDIT HERE)
    headlineEl.innerHTML = `Find Your Ideal Weight Loss Plan`;

    // Add test-specific class for external styling
    headlineEl.classList.add('elh-11-headline');
  };

  waitForElement('h2.heading-style-h4').then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
