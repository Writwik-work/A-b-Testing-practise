(() => {
    "use strict";
    const testInfo = {
      className: "svc-3-test",
      debug: 0,
      testName: "SVC3: [PDP] Add Thumbnail Image Slider",
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
  
      // Create the "Shop By Category" section
const shopByCategorySection = document.createElement("section");
shopByCategorySection.className = "shop-by-category-section";

// Add the content dynamically
shopByCategorySection.innerHTML = `
  <div class="category-header">
    <h2>SHOP BY CATEGORY</h2>
    <p>From game-enhancing accessories for tennis & pickleball to smart carry solutions, get fully prepared for every match.</p>
  </div>
  <div class="category-grid">
    <div class="category-item">
      <img src="https://cdn.shopify.com/s/files/1/2275/8439/files/category-01.webp?v=1732702187" alt="Bags & Carry">
      <div class="category-info">
        <h3>BAGS & CARRY</h3>
        <button class="shop-now">SHOP NOW</button>
      </div>
    </div>
    <div class="category-item">
      <img src="https://cdn.shopify.com/s/files/1/2275/8439/files/category-03.webp?v=1732703982&width=1800" alt="Wristbands">
      <div class="category-info">
        <h3>WRISTBANDS</h3>
        <button class="shop-now">SHOP NOW</button>
      </div>
    </div>
    <div class="category-item">
      <img src="https://cdn.shopify.com/s/files/1/2275/8439/files/category-04.webp?v=1732704711&width=1800" alt="Dampeners">
      <div class="category-info">
        <h3>DAMPENERS</h3>
        <button class="shop-now">SHOP NOW</button>
      </div>
    </div>
    <div class="category-item">
      <img src="https://cdn.shopify.com/s/files/1/2275/8439/files/Grips2.webp?v=1733203020&width=1800" alt="Grips">
      <div class="category-info">
        <h3>GRIPS</h3>
        <button class="shop-now">SHOP NOW</button>
      </div>
    </div>
  </div>
`;

// Insert the section after the hero section and before the collection list section
const heroSection = document.querySelector(".shopify-section.section");
const collectionListSection = document.getElementById("shopify-section-template--16930570272968__collection_list");

if (heroSection && collectionListSection) {
  heroSection.insertAdjacentElement("afterend", shopByCategorySection);
}

      
    };
  
    waitForElement("#MainContent").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  