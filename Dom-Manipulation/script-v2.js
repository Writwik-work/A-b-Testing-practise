(() => {
  "use strict";
  const testInfo = {
    className: "dom-manipulation-test",
    debug: 0,
    testName: "DOM-MANIPULATION",
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

    // Define source-target mappings for text update
    const textMappings = [
      { source: "e65a383", target: "2a619b7" }, // Update target from source
      { source: "1aa3a1d", target: "ff1109a" }, // Update target from source
      { source: "1aa3a1d", target: "65fce0f" }, // Additional mapping for another target
    ];

    // Iterate through mappings to update text
    textMappings.forEach(({ source, target }) => {
      // Select source and target elements
      const sourceElement = document.querySelector(`[data-id="${source}"]`);
      const targetElement = document.querySelector(`[data-id="${target}"]`);

      if (sourceElement && targetElement) {
        // Update target element text with source element text
        targetElement.textContent = sourceElement.textContent;

        console.log(
          `Updated text in [data-id="${target}"] from source [data-id="${source}"].`
        );
      } else {
        console.warn(
          `Source or target element not found for IDs: ${source}, ${target}`
        );
      }
    });

    console.log("Text update process completed.");
  };

  waitForElement(".page-content").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
