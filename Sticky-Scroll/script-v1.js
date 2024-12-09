(() => {
    "use strict";
    const testInfo = {
      className: "sticky-scroll-test",
      debug: 0,
      testName: "Sticky-Scroll",
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
  
      // Add the sticky-scroll class to the target element
    const targetElement = document.querySelector(".pagination-filt "); 
    if (targetElement) {
      targetElement.classList.add("sticky-scroll");
    }
       
    };
  
    waitForElement(".pagination-filt").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  