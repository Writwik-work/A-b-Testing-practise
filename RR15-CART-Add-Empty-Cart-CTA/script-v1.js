(() => {
  "use strict";

  const testInfo = {
    className: "rr-15-test",
    debug: 1,
    testName: "RR15: Cart Popup Empty CTA",
  };

  const log = (...args) => {
    if (testInfo.debug) console.log("🔍 RR15:", ...args);
  };

  const waitForEl = (selector, timeout = 100) =>
    new Promise(resolve => {
      const existing = document.querySelector(selector);
      if (existing) {
        log("Found existing element:", selector);
        return resolve(existing);
      }
      const obs = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          log("MutationObserver found:", selector);
          obs.disconnect();
          resolve(el);
        }
      });
      obs.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => {
        obs.disconnect();
        log("Timeout – element not found:", selector);
        resolve(null);
      }, timeout);
    });

  const selectorPath = "#UpcartPopup";

  waitForEl(selectorPath).then(container => {
    if (!container) {
      console.error("RR15: ❌ Container not found:", selectorPath);
      return;
    }
    log("✅ Target container ready:", container);
    runTest(container);
  });

  function runTest(container) {
    const body = document.body;
    if (body.classList.contains(testInfo.className)) {
      log("Already applied—skipping.");
      return;
    }
    body.classList.add(testInfo.className);

    container.querySelectorAll("h3").forEach(h3 => {
      log("Removing existing <h3>:", h3.innerText || h3);
      h3.remove();
    });

    const wrap = document.createElement("div");
    wrap.className = "rr-15-container";

    const btn = document.createElement("a");
    btn.className = "rr-15-link";
    btn.href = "/products/rapid-radios-nationwide-ptt-walkie-talkie";
    btn.innerText = "Shop Walkie‑Talkie";
    wrap.appendChild(btn);

    const review = document.createElement("div");
    review.className = "rr-15-review";
    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      span.className = "rr-15-star";
      span.innerText = "★";
      review.appendChild(span);
    }
    const txt = document.createElement("span");
    txt.className = "rr-15-review-text";
    txt.innerText = "1,600+ 5‑Star Reviews";
    review.appendChild(txt);

    wrap.appendChild(review);

    container.appendChild(wrap);
    log("✅ CTA + Reviews inserted.");
  }
})();
