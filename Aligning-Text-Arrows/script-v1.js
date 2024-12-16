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

    
    const mediaElements = document.querySelectorAll(".card__media");
    const cardContentElements = document.querySelectorAll(".card__content");
    const cardWrappers = document.querySelectorAll(".card-wrapper");
    
    // Fix images to ensure uniform size
    mediaElements.forEach((media) => {
      const img = media.querySelector("img");
      if (img) {
        img.style.objectFit = "cover";
        img.style.width = "100%";
        img.style.height = "200px"; // Fixed uniform height
      }
      media.style.width = "100%";
      media.style.overflow = "hidden";
    });
  
    // Ensure card content (text + arrow) alignment
    cardContentElements.forEach((content) => {
      content.style.display = "flex";
      content.style.justifyContent = "space-between"; // Align text and arrow
      content.style.alignItems = "center";
      content.style.padding = "10px";
      content.style.boxSizing = "border-box";
      content.style.textAlign = "left";
      content.style.wordWrap = "break-word"; // Handle long text
    });
  
    // Ensure card-wrapper consistency
    cardWrappers.forEach((card) => {
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.justifyContent = "space-between";
      card.style.alignItems = "stretch";
      card.style.height = "100%";
      card.style.overflow = "hidden";
      card.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    });
  };

  waitForElement(".card__content").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();