(() => {
  "use strict";
  const testInfo = {
    className: "align-text-test",
    debug: 0,
    testName: "Aligning-Text-Arrows",
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

    // Align elements dynamically
    const cardInformation = document.querySelectorAll(".card__heading");
    cardInformation.forEach((card) => {
      // Set container styles
      card.style.display = "flex";
      card.style.alignItems = "center";
      card.style.justifyContent = "space-between";
      card.style.padding = "10px";

      // Apply text formatting
      const textElements = card.querySelectorAll(".full-unstyled-link");
      textElements.forEach((text) => {
        text.style.fontSize = "14px";
        text.style.lineHeight = "1.5";
        text.style.color = "#000";
        text.style.margin = "0";
        text.style.wordWrap = "break-word";
        text.style.maxWidth = "80%";
        text.style.whiteSpace = "normal";
      });

      // Style the arrow
      const arrows = card.querySelectorAll(".icon-wrap");
      arrows.forEach((arrow) => {
        arrow.style.marginLeft = "8px";
        arrow.style.fontSize = "16px";
        arrow.style.color = "#000";
      });
    });

    const mediaElements = document.querySelectorAll('.card__media');
  
    mediaElements.forEach(media => {
      const img = media.querySelector('img');
      if (img) {
        img.style.objectFit = 'cover';
      }
    });
  };

  waitForElement(".card__information").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
