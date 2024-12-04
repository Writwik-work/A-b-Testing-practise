(() => {
  "use strict";
  const testInfo = {
    className: "ito-11-test",
    debug: 0,
    testName: "ITO11: [PDP] Turn Description Into Bullets",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
  };
  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      } else {
        window.DOMContentLoaded = () => {
          return reject(
            document.querySelector(selector),
            "Target element not found."
          );
        };
      }
      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
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
    if (bodyEle.classList.contains(testInfo.className)) {
      return;
    }
    bodyEle.classList.add(testInfo.className);

    // Select the container and dynamically insert content with checkmarks
    document.querySelector('.toggle-ellipsis__content').innerHTML = `
  <ul class="checkmark-list">
    <li>Daily guided journal to help you become the best version of yourself.</li>
    <li>365 prompts designed for self-love, reflection, and growth.</li>
    <li>Perfect addition to your morning or nighttime self-care routine.</li>
  </ul>
`;

  

  };
  waitForElement(".toggle-ellipsis__content").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
