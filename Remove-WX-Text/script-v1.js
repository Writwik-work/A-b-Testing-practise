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
  
      const className = "caption-with-letter-spacing"; 
      const sections = document.getElementsByClassName(className); 
      
    
      if (sections.length > 0) {
       
        Array.from(sections).forEach(section => {
          section.remove(); 
          console.log(`Section with class '${className}' has been removed.`);
        });
      } else {
        console.warn(`Section with class '${className}' not found.`);
      }
      
    };
  
    waitForElement(".card-information").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  