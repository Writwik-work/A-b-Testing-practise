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

   // Define dynamic package options with texts, prices, and other values.
const packageOptions = [
  // {
  //   size: "2 oz",
  //   servings: "25+ Servings",
  //   description: "Sip your way to serenity for a month!",
  //   price: 18.99, 
  //   value: "2oz",
  // },
  {
    size: "4 oz",
    servings: "50+ Servings",
    description: "Enjoy a cup a day for two months and more!",
    price: 34.49,
    value: "4oz"
  },
  // {
  //   size: "8 oz",
  //   servings: "100+ Servings",
  //   description: "Sip, savor, and savor some more for three months!",
  //   price: 59.99,
  //   value: "8oz"
  // },
  {
    size: "16 oz",
    servings: "200+ Servings",
    description: "Brew your way to bliss for six months!",
    price: 109.49,
    value: "16oz",
  },
];

// Reference the container where the options will be placed.
const container = document.querySelector(".custom-form-option-wrapper");

// Generate the HTML for each package option dynamically.
container.innerHTML = packageOptions
  .map((option, index) => {
    return `
      <div class="package-info flex" data-index="${index}">
        <label class="package-option" for="attribute_rectangle_${option.value}" data-product-attribute-value="${option.value}">
          <span class="package-option-weight">${option.size}</span>
          <span class="package-option-servings">${option.servings}</span>
          <span class="package-option-desc">${option.description}</span>
        </label>
      </div>
    `;
  })
  .join("");

// Create (or find) a discount/pricing info element where pricing details and dynamic text will be shown.
let discountInfo = document.querySelector(".discount-info");
if (!discountInfo) {
  discountInfo = document.createElement("div");
  discountInfo.className = "discount-info";
  container.appendChild(discountInfo);
}

// Use the first package as the baseline for cost per ounce.
// Extract the numeric part of the size string (e.g., "2 oz" -> 2)
const baselineOz = parseFloat(packageOptions[0].size.split(" ")[0]);
const baselinePerOz = packageOptions[0].price / baselineOz;

// Add click event listeners to all package options.
const packageElements = document.querySelectorAll(".package-info");
packageElements.forEach((element) => {
  element.addEventListener("click", function () {
    // Remove the 'selected' class from all options and add it to the clicked one.
    packageElements.forEach((el) => el.classList.remove("selected"));
    this.classList.add("selected");

    // Get the selected package data.
    const index = parseInt(this.getAttribute("data-index"), 10);
    const selectedPackage = packageOptions[index];
    // Convert the size string to a number (e.g., "4 oz" becomes 4)
    const selectedOz = parseFloat(selectedPackage.size.split(" ")[0]);

    // Calculate the expected price at the baseline per-oz rate.
    const expectedPrice = baselinePerOz * selectedOz;
    // Calculate the discount (how much you're saving).
    const discount = (expectedPrice - selectedPackage.price).toFixed(2);

    // Update the discountInfo element with dynamic pricing and text details.
    discountInfo.innerHTML = `
      <div class="pricing-details">
        <span class="current-price">Price: $${selectedPackage.price.toFixed(2)}</span>
        ${
          discount > 0
            ? `<span class="save-price"> | Save $${discount}</span>`
            : ""
        }
      </div>
      <div class="package-details">
        <span class="servings-info">${selectedPackage.servings}</span>
        <span class="description-info"> | ${selectedPackage.description}</span>
      </div>
    `;
  });
});

// Add an event listener to an input field for dynamic update when the user types (e.g., "2oz").
// Ensure you have an input element with id="ozInput" in your HTML.
const ozInput = document.getElementById("ozInput");
if (ozInput) {
  ozInput.addEventListener("input", function () {
    // Normalize the input by removing spaces and converting to lowercase.
    const inputVal = ozInput.value.trim().toLowerCase().replace(/\s/g, "");
    // Find the matching package option based on its value property.
    const foundOption = packageOptions.find(option => option.value.toLowerCase() === inputVal);
    if (foundOption) {
      // Calculate discount using the baseline per oz
      const selectedOz = parseFloat(foundOption.size.split(" ")[0]);
      const expectedPrice = baselinePerOz * selectedOz;
      const discount = (expectedPrice - foundOption.price).toFixed(2);
      
      discountInfo.innerHTML = `
        <div class="pricing-details">
          <span class="current-price">Price: $${foundOption.price.toFixed(2)}</span>
          ${
            discount > 0
              ? `<span class="save-price"> | Save $${discount}</span>`
              : ""
          }
        </div>
        <div class="package-details">
          <span class="servings-info">${foundOption.servings}</span>
          <span class="description-info"> | ${foundOption.description}</span>
        </div>
      `;
    } else {
      discountInfo.innerHTML = `<div>Please enter a valid package size (e.g., "2oz", "4oz", "8oz", "16oz").</div>`;
    }
  });
}

  };

  waitForElement(".custom-form-option-wrapper").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
