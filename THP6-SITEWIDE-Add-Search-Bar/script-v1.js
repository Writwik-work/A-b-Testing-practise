(() => {
  "use strict";
  const testInfo = {
    className: "thp6-sitewide-test",
    debug: 0,
    testName: "THP6-SITEWIDE-Add-Search-Bar",
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

    const headerIcons = document.querySelector(".header__icons");

    if (headerIcons) {
        const searchBar = document.createElement("div");
        searchBar.classList.add("search-bar");
        searchBar.innerHTML = `
            <input type="text" class="search-input" placeholder="Search ...">
            <button class="search-button">
                <i class="fas fa-search"></i>
                <a href="/search" class="search-icon">
         <svg class="search-icon-svg width="16" height="16" viewBox="0 0 30 38"">
          <use href="#icon-search"></use>
        </svg>
      </a>
            </button>
        `;
        
        headerIcons.prepend(searchBar);
    }
  };

  waitForElement(".header__icons").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
