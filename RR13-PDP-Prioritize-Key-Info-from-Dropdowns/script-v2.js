(() => {
  "use strict";
  const testInfo = {
    className: "rr-13-test",
    debug: 0,
    testName: "RR13: [PDP] Prioritize Key Info from Dropdowns",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
  };

  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      const el = document.querySelector(selector);
      if (el) {
        return resolve(el);
      }
      const observer = new MutationObserver(() => {
        const now = document.querySelector(selector);
        if (now) {
          resolve(now);
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

    // ── 1) FIND the container with class "product-form" ──
    const productForm = document.querySelector(".product-form");
    if (!productForm) {
      if (testInfo.debug) console.warn("RR13: Could not find .product-form");
      return;
    }

    // ── 2) CREATE a wrapper for all six info sections ──
    const wrapper = document.createElement("div");
    wrapper.className = "rr-13-info-sections";

    // ── 3) Define an array of objects for each of the six sections ──
    const sections = [
      {
        emoji: "📦",
        title: "FREE UPS SHIPPING FROM MICHIGAN!",
        body: "Orders ship from our Michigan facility with free UPS delivery in 3–4 business days. Every order includes tracking.",
      },
      {
        emoji: "🌐",
        title: "NATIONWIDE COVERAGE",
        body: "Stay connected coast to coast with our push-to-talk network. Works anywhere with a signal—no cell service needed.",
      },
      {
        emoji: "📋",
        title: "WHAT’S INCLUDED:",
        body: "Your device, charging cable, built-in SIM, pre-installed PTT software, and quick-start instructions. Ready to use right out of the box.",
      },
      {
        emoji: "🛠️",
        title: "12-MONTH WARRANTY",
        body: "Includes a 12-month parts warranty and 7-day-a-week customer support from our local team in West Michigan.",
      },

      {
        emoji: "🛡️",
        title: "30-DAY GUARANTEE",
        body: "Try it risk-free. If you’re not satisfied within 30 days, return it for a full refund—no hassle, no questions asked.",
      },
      {
        emoji: "🔒",
        title: "PRIVATE & ENCRYPTED",
        body: "256-bit AES encrypted push-to-talk communication. No tracking, no stored data, and no recordings. Total privacy, always.",
      },
    ];

    // ── 4) LOOP over each object and build its HTML ──
    sections.forEach((sec) => {
      const item = document.createElement("div");
      item.className = "rr-13-info-item";

      // Emoji + Title
      const titleDiv = document.createElement("div");
      titleDiv.className = "rr-13-info-title";
      titleDiv.innerText = `${sec.emoji} ${sec.title}`;
      item.appendChild(titleDiv);

      // Body text
      const bodyDiv = document.createElement("div");
      bodyDiv.className = "rr-13-info-body";
      bodyDiv.innerText = sec.body;
      item.appendChild(bodyDiv);

      wrapper.appendChild(item);
    });

    // ── 5) INSERT the wrapper right after the ".product-form" element ──
    productForm.parentNode.insertBefore(wrapper, productForm.nextSibling);
  };
  waitForElement("#ProductInfo-template--15031143366746__main").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
