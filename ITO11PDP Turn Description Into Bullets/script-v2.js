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
        <li>
          <strong>A meaningful addition to your daily routine:</strong> 
          With a prompt for every day of the year, this journal helps you pause and check in with yourself — no matter how busy life gets.
        </li>
        <li>
          <strong>Questions you’ll actually look forward to:</strong> 
          From the fun questions that make you smile to the ones that leave you rethinking life, this journal asks you the questions you wouldn’t think to ask yourself.
        </li>
        <li>
          <strong>A very thoughtful gift:</strong> 
          Whether for yourself or a loved one, it’s a special way of saying “I’m thinking of you” and “I care about your wellbeing.” You can even journal together and deepen your connection.
        </li>
      </ul>
    `;
    
    };
    waitForElement(".toggle-ellipsis__content").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  