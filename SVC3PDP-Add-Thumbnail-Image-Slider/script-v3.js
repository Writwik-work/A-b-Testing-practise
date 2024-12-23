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

    const container = document.getElementById("pwzrswiper-container-wrapper");

    // Reference to the existing main image
    const mainImage = document.getElementById("pwzrswiper-img-0");

    // Images for the slider
    const images = [
      "https://shorturl.at/ahyOJ",
      "https://t.ly/x8Eab",
      "https://t.ly/BzUET",
      "https://t.ly/Z7lS0",
      "https://t.ly/zN-Ao",
      "https://shorturl.at/Cl6rV",
    ];

    // Set the existing main image to the first image initially
    mainImage.src = images[0];

    // Create the thumbnail slider container
    const thumbnailSlider = document.createElement("div");
    thumbnailSlider.className = "thumbnail-slider";

    // Generate thumbnails dynamically
    images.forEach((imgSrc, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.className = "thumbnail";
      if (index === 0) thumbnail.classList.add("active");
      thumbnail.src = imgSrc;
      thumbnail.alt = `Thumbnail ${index + 1}`;
      thumbnail.dataset.index = index;

      // Click event to update the main image
      thumbnail.addEventListener("click", () => {
        mainImage.src = imgSrc;

        // Update active thumbnail
        document.querySelectorAll(".thumbnail").forEach((thumb) => {
          thumb.classList.remove("active");
        });
        thumbnail.classList.add("active");
      });

      thumbnailSlider.appendChild(thumbnail);
    });

    // Add the thumbnail slider and main image container to the DOM
    const wrapper = document.createElement("div");
    wrapper.className = "image-slider-wrapper";
    wrapper.appendChild(mainImage);
    wrapper.appendChild(thumbnailSlider);

    // Replace the existing container content
    container.innerHTML = "";
    container.appendChild(wrapper);
  };

  waitForElement(".pwzrjss1").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
