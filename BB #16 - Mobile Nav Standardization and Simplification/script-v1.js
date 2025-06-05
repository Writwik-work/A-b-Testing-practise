(() => {
  "use strict";
  const testInfo = {
    className: "bb-16-test",
    debug: 0,
    testName: "BB #16 - Mobile Nav Standardization and Simplification",
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

    const navToggle = document.querySelector(".nav__toggle");
  
  // Example: toggling a mobile menu
  navToggle.addEventListener("click", function() {
    console.log("Hamburger toggled");
    // If you have a mobile menu element, toggle a class:
    // document.querySelector(".mobile-menu").classList.toggle("active");
  });
  };

  waitForElement(" .header-container").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
