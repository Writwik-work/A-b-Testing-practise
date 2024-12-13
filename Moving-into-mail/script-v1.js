(() => {
  "use strict";
  const testInfo = {
    className: "Moving-gmail-test",
    debug: 0,
    testName: "Moving-into-mail",
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

    
function makeEmailsClickable() {
    const emailAddresses = ["info@thewxstore.com", "sales@thewxstore.com"];
    
    emailAddresses.forEach((email) => {
      document.querySelectorAll("p").forEach((paragraph) => {
        if (paragraph.textContent.includes(email)) {
          paragraph.innerHTML = paragraph.innerHTML.replace(
            email,
            `<span class="email-link" onclick="window.location.href='mailto:${email}'">${email}</span>`
          );
        }
      });
    });
  }
  
 
  makeEmailsClickable();
  
    // "Email" text and arrow
    const emailElements = document.querySelectorAll(
      ".link, .multicolumn-card .icon-wrap"
    );
    emailElements.forEach((el) => {
      el.style.fontWeight = "bold";
      el.style.color = "black";
    });
  };

  waitForElement(".multicolumn-card").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
