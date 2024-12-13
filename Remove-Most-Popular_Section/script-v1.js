(() => {
    "use strict";
    const testInfo = {
      className: "remove-section-test",
      debug: 0,
      testName: "Remove-Most-Popular_Section",
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
  
      const sectionId = "collection-template--16930570272968__featured_collection2";
      const section = document.getElementById(sectionId);
      if (section) {
        section.remove(); // Removes the section from the DOM
        console.log(`Section with ID '${sectionId}' has been removed.`);
      } else {
        console.warn(`Section with ID '${sectionId}' not found.`);
      }
    };
  
    waitForElement("#collection-template--16930570272968__featured_collection2").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  