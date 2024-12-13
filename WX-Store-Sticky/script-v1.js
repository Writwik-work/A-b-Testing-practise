(() => {
    "use strict";
    const testInfo = {
      className: "wx-store-test",
      debug: 0,
      testName: "WX-Store-Sticky",
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
  
      const targetElement = document.querySelector("#main-collection-filters"); 

      if (targetElement) {
        targetElement.classList.add("sticky-header");
      } else {
        console.warn("Target element for sticky functionality not found.");
      }
    
      
  };
  
    waitForElement("#main-collection-filters").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  