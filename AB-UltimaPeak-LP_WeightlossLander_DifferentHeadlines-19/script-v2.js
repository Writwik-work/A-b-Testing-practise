(() => {
  "use strict";
  const testInfo = {
    className: "ab-19-test",
    debug: 0,
    testName:
      "[A/B] - UltimaPeak - LP_WeightlossLander_DifferentHeadlines - 19",
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

    waitForElement(
      'div[data-rid="7bd45a1a-1eda-4c25-aba4-f1c4693878ee"] > span h1'
    ).then((el) => {
      el.innerHTML = `"The Testosterone-Boosting Gummy That’s Turning Men’s Bodies Around in Just Weeks"`;
    });
    waitForElement(
      'div[data-rid="e99f558e-1ba1-45b3-9ec1-b34237328356"] > span p'
    ).then((el) => {
      el.innerHTML = `Clinically shown to help torch belly fat, flatten love handles, and rebuild stamina, without caffeine, pills, or crash diets. Over 50,000 men over 30 have already made the switch. Are you next?`;
    });
  };

  waitForElement("body").then(() => {
    loadTest();
  });
})();
