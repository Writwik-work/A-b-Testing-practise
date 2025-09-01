(() => {
  "use strict";
  const testInfo = {
    className: "mb-v1-test",
    debug: 0,
    testName: "MBM015- PDP-AB-MD-Highlight Free shipping and returns",
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
        const el = document.querySelector(selector);
        if (el) {
          resolve(el);
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
    if (bodyEle.classList.contains(testInfo.className)) return;
    bodyEle.classList.add(testInfo.className);

    const valuePropsHTML = `
      <div class="mb-v1-value-props">
        <div class="mb-vp">
          <img src="https://ibb.co/6fNZwFH" alt="Darmowa Wysyłka" />
          <span>Darmowa Wysyłka</span>
        </div>
        <div class="mb-vp">
          <img src="https://ibb.co/mV1n51cT" alt="30-dniowy zwrot" />
          <span>30-dniowy zwrot</span>
        </div>
      </div>
    `;

    waitForElement(".pinfo-buy.panel").then((target) => {
      console.log("======");
      if (target && !target.querySelector(".mb-v1-value-props")) {
        console.log("======+++++");
        target.insertAdjacentHTML("beforeend", valuePropsHTML);
      }
    });
  };

  // ✅ Wait for the .pinfo-description.col-md-9.col-md-offset-1 container
  waitForElement(".pinfo-main").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
