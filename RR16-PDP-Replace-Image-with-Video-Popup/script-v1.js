(() => {
  "use strict";
  const testInfo = {
    className: "rr-16-test",
    debug: 0,
    testName: "RR16: [PDP] Image → Video Swap",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
  };

  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);
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
    const body = document.body;
    if (body.classList.contains(testInfo.className)) return;
    body.classList.add(testInfo.className);
  // Poll for the mini‑cart container
  const waitForCart = () => new Promise((resolve, reject) => {
    const TIMEOUT = 10_000, POLL = 200;
    let elapsed = 0;
    const iv = setInterval(() => {
      const cart = document.querySelector("#mini-cart.cart-block");
      if (cart) {
        clearInterval(iv);
        resolve(cart);
      } else if ((elapsed += POLL) >= TIMEOUT) {
        clearInterval(iv);
        reject("Timed out waiting for #mini-cart.cart-block");
      }
    }, POLL);
  });

  waitForCart()
    .then(cart => {
      // Toggles our class when the cart opens/closes
      const syncBodyClass = () => {
        const isOpen = (
          getComputedStyle(cart).display !== "none" &&
          cart.getBoundingClientRect().height > 0
        );
        document.body.classList.toggle(CLASS, isOpen);
        if (DEBUG) console.log(" RR16 fullscreen:", isOpen);
      };

      // Observe style/class changes on the cart
      new MutationObserver(syncBodyClass)
        .observe(cart, { attributes: true, attributeFilter: ["style","class"] });

      // Also re-check on resize (to keep 100vh accurate)
      window.addEventListener("resize", syncBodyClass);

      // Initial check
      syncBodyClass();
    })
    .catch(err => console.error("RR16 failed:", err));
  };

  waitForElement('#mini-cart').then(() => {
    if (testInfo.debug) console.log(`${testInfo.testName} — loading`);
    loadTest();
  });
})();
