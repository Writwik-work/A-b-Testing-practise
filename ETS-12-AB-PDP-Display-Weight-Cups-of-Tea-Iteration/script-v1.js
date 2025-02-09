(() => {
  "use strict";
  const testInfo = {
    className: "ets-12-test",
    debug: 0,
    testName: "ETS - 12 - A/B - PDP - Display Weight = Cups of Tea Iteration",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
  };

  const waitForElement = (selector) => {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      } else {
        window.DOMContentLoaded = () => {
          return reject(
            document.querySelector(selector),
            "Target element not found."
          );
        };
      }
      const observer = new MutationObserver((mutations) => {
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

    // Define your package options.
  // The first option is used as the baseline for the per-oz rate.
  const packageOptions = [
    { size: "4 oz", servings: "50+ Servings", description: "Enjoy a cup a day for two months and more!", price: 34.49, value: "4oz" },
    { size: "16 oz", servings: "200+ Servings", description: "Brew your way to bliss for a lifetime!", price: 109.49, value: "16oz" }
  ];
  
  // Reference the container where the options will be placed.
  const container = document.querySelector(".custom-form-option-wrapper");
  
  // Generate the HTML for each package option.
  container.innerHTML = packageOptions.map((option, index) => {
    return `
      <div class="package-info flex" data-index="${index}">
        <label class="package-option" for="attribute_rectangle_${option.value}" data-product-attribute-value="${option.value}">
          <span class="package-option-weight">${option.size}</span>
          <span class="package-option-servings">${option.servings}</span>
          <span class="package-option-desc">${option.description}</span>
        </label>
      </div>
    `;
  }).join("");
  
  // Create (or find) a discount info element where pricing details will be shown.
  let discountInfo = document.querySelector(".discount-info");
  if (!discountInfo) {
    discountInfo = document.createElement("div");
    discountInfo.className = "discount-info";
    container.appendChild(discountInfo);
  }
  
  // Use the first package as the baseline for cost per ounce.
  const baselinePerOz = packageOptions[0].price / parseFloat(packageOptions[0].size);
  
  // Add click event listeners to all package options.
  const packageElements = document.querySelectorAll(".package-info");
  packageElements.forEach(element => {
    element.addEventListener("click", function () {
      // Remove the 'selected' class from all options and add it to the clicked one.
      packageElements.forEach(el => el.classList.remove("selected"));
      this.classList.add("selected");
      
      // Get the selected package data.
      const index = parseInt(this.getAttribute("data-index"), 10);
      const selectedPackage = packageOptions[index];
      const selectedOz = parseFloat(selectedPackage.size);
      
      // Calculate the expected price at the baseline per-oz rate.
      const expectedPrice = baselinePerOz * selectedOz;
      // Calculate the discount (how much you're saving).
      const discount = (expectedPrice - selectedPackage.price).toFixed(2);
      
      // For the baseline package (first option) there's no discount.
      if (index === 0 || discount <= 0) {
        discountInfo.innerHTML = `<span class="regular-price"></span>`;
      } else {
        discountInfo.innerHTML = `
          <span class="save-price">Save $${discount}</span>
        `;
      }
    });
  });
  };

  waitForElement(".custom-form-option-wrapper").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
