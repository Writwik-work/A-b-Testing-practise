(() => {
  'use strict';
  const testInfo = {
    className: 'mn-29-test-v1',
    debug: 0,
    testName: 'MN0029 | Cart Value Props',
    testVersion: '0.0.1',
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: '', // we will use direct paths
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

    waitForElement('.col-xs-24.col-md-24.col-lg-8.to_pay').then((target) => {
      if (!target) return;

      const valuePropsHTML = `
        <div class="cart-value-props">
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

      target.insertAdjacentHTML('beforeend', valuePropsHTML);
    });
  };

  waitForElement('body').then(loadTest);
})();
