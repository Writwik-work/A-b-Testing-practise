(() => {
  'use strict';
  const testInfo = {
    className: 'mn-16-test-v2',
    debug: 0,
    testName: 'MN0016 | Checkout Value Props Variant 2',
    testVersion: '0.0.2',
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: ''
  };

  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) return resolve(document.querySelector(selector));
      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          resolve(el);
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    });
  };

  const loadTest = () => {
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.className)) return;
    bodyEle.classList.add(testInfo.className);

    waitForElement('form#f_step1').then((form) => {
      if (!form || document.querySelector('.cart-value-props')) return;

      const propsHTML = `
        <div class="cart-value-props">
          <div class="prop">
             <div class="prop">
            <img src="https://i.postimg.cc/JDJ61HF2/shipping-icon.png" alt="Shipping" />
            <span>Wysyłka w 24h</span>
          </div>
          <div class="prop">
            <img src="https://i.postimg.cc/Lgpyh6K6/check-mark-icon.png" alt="Certificate" />
            <span>Certyfikat bezpieczeństwa</span>
          </div>
          <div class="prop">
            <img src="https://i.postimg.cc/2qg9R70W/certicate-mark-icon.png" alt="Guarantee" />
            <span>2 lata gwarancji</span>
          </div>
        </div>
      `;

      form.insertAdjacentHTML('beforebegin', propsHTML);
    });
  };

  waitForElement('body').then(loadTest);
})();
