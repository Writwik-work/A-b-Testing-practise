(() => {
    "use strict";
    const testInfo = {
      className: "shop-category-test",
      debug: 0,
      testName: "Shop-By-Category",
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

  // Select elements
  const shopifyButton = document.querySelector(".shopify-payment-button");
  const productFormButtons = document.querySelector(".product-form__buttons");
  const footerPayment = document.querySelector(".footer__column--info");

  if (shopifyButton && productFormButtons && footerPayment) {
    // Hide the Shopify payment button
    shopifyButton.style.display = "none";

    // Clone the content of footer__column--info
    const paymentIconsClone = footerPayment.cloneNode(true);
    paymentIconsClone.classList.add("footer__payment"); 

    // Append cloned content inside product-form__buttons
    productFormButtons.appendChild(paymentIconsClone);

    console.log(
      "Shopify payment button hidden, and footer__column--info content added below Add to Cart."
    );
  } else {
    console.warn(
      "Required elements not found: shopify-payment-button, product-form__buttons, or footer__column--info."
    );
  }
  };
  
    waitForElement(".product-form__buttons").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  