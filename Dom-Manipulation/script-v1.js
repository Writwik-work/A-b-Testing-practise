(() => {
  "use strict";
  const testInfo = {
    className: "dom-manipulation-test",
    debug: 0,
    testName: "DOM-MANIPULATION",
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

    
      // Step 1: Rearrange the sections
      const section1 = document.querySelector('[data-id="e65a383"]');
      const section2 = document.querySelector('[data-id="2a619b7"]');
      const section3 = document.querySelector('[data-id="1aa3a1d"]');
      const section4 = document.querySelector('[data-id="ff1109a"]');
      const section5 = document.querySelector('[data-id="65fce0f"]');

      if (section1 && section2 && section3 && section4 && section5) {
        const parent = section1.parentNode; // Assuming all sections have the same parent
        if (parent) {
          // Rearrange the sections (example: section3 -> section1 -> section2 -> section4 -> section5)
          parent.insertBefore(section3, section1);
          parent.insertBefore(section2, section1);
          parent.appendChild(section4);
          parent.appendChild(section5);
        }

        console.log("Sections rearranged successfully.");
      } else {
        console.error("One or more sections could not be found.");
      }

      // Step 2: Dynamically update image
      // Array of data-id values for images to be updated
  const imageIds = [
    "fb464d1",
    "cdb0ae4",
    "5b5d790",
    "6d1cc43",
    "6275132",
    "8fa4c4a",
  ];

  // Dynamically update images
  imageIds.forEach((id, index) => {
    // Select the source image from the current element
    const sourceElement = document.querySelector(`[data-id="${id}"] img`);

    // Determine the target element dynamically (shifting by 3 in the array)
    const targetDataId = imageIds[(index + 3) % imageIds.length];
    const targetElement = document.querySelector(`[data-id="${targetDataId}"] img`);

    if (sourceElement && targetElement) {
      // Update target image src and alt from the source image
      targetElement.src = sourceElement.src;
      targetElement.alt = sourceElement.alt;

      console.log(
        `Updated target image in [data-id="${targetDataId}"] from source [data-id="${id}"].`
      );
    } else {
      console.warn(`Image element missing for source [data-id="${id}"] or target [data-id="${targetDataId}"].`);
    }
  });

  console.log("Dynamic image updates completed.");
  };

  waitForElement(".page-content").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
