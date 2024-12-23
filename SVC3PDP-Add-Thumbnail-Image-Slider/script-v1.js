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

    // Reference to the wrapper container
    // const container = document.getElementById("pwzrswiper-container-wrapper");

    // // Reference to the existing main image
    // const mainImage = document.getElementById("pwzrswiper-img-0");
    
    // // Images for the slider
    // const images = [
    //   "https://shorturl.at/ahyOJ",
    //   "https://t.ly/x8Eab",
    //   "https://t.ly/BzUET",
    //   "https://t.ly/Z7lS0",
    //   "https://t.ly/zN-Ao",
    //   "https://shorturl.at/Cl6rV"
    // ];
    
    // // Set the existing main image to the first image initially
    // mainImage.src = images[0];
    
    // // Create the image slider container
    // const imageSlider = document.createElement("div");
    // imageSlider.className = "image-slider";
    
    // // Pagination dots container
    // const paginationDots = document.createElement("div");
    // paginationDots.className = "pagination-dots";
    
    // // Generate pagination dots dynamically
    // images.forEach((_, index) => {
    //   const dot = document.createElement("span");
    //   dot.className = "dot";
    //   if (index === 0) dot.classList.add("active");
    //   dot.dataset.index = index; // Set index for reference
    //   paginationDots.appendChild(dot);
    // });
    
    // // Create the thumbnail slider container
    // const thumbnailSlider = document.createElement("div");
    // thumbnailSlider.className = "thumbnail-slider";
    
    // const thumbnailsContainer = document.createElement("div");
    // thumbnailsContainer.className = "thumbnails";
    
    // // Generate thumbnails dynamically
    // images.forEach((imgSrc, index) => {
    //   const thumbnail = document.createElement("img");
    //   thumbnail.className = "thumbnail";
    //   if (index === 0) thumbnail.classList.add("active"); // Set first thumbnail as active
    //   thumbnail.src = imgSrc;
    //   thumbnail.alt = `Thumbnail ${index + 1}`;
    //   thumbnail.dataset.index = index;
    //   thumbnailsContainer.appendChild(thumbnail);
    // });
    
    // thumbnailSlider.appendChild(thumbnailsContainer);
    
    // // Append sliders and pagination to the main container
    // container.appendChild(imageSlider);
    // container.appendChild(thumbnailSlider);
    // container.appendChild(paginationDots);
    
    // // Add functionality
    // let currentIndex = 0;
    
    // // Update Main Image
    // function updateMainImage(index) {
    //   currentIndex = index;
    //   mainImage.src = images[index];
    
    //   // Update Active Thumbnail
    //   document.querySelectorAll(".thumbnail").forEach((thumb) => {
    //     thumb.classList.remove("active");
    //   });
    //   thumbnailsContainer.querySelector(`.thumbnail[data-index='${index}']`).classList.add("active");
    
    //   // Update Active Pagination Dot
    //   document.querySelectorAll(".dot").forEach((dot) => {
    //     dot.classList.remove("active");
    //   });
    //   paginationDots.querySelector(`.dot[data-index='${index}']`).classList.add("active");
    // }
    
    // // Thumbnail Click Event
    // thumbnailsContainer.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    //   thumbnail.addEventListener("click", () => {
    //     const index = parseInt(thumbnail.dataset.index);
    //     updateMainImage(index);
    //   });
    // });
    
    // // Pagination Dot Click Event
    // paginationDots.querySelectorAll(".dot").forEach((dot) => {
    //   dot.addEventListener("click", () => {
    //     const index = parseInt(dot.dataset.index);
    //     updateMainImage(index);
    //   });
    // });
    
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
      "https://shorturl.at/Cl6rV"
    ];
    
    // Set the existing main image to the first image initially
    mainImage.src = images[0];
    
    // Create the image slider container
    const imageSlider = document.createElement("div");
    imageSlider.className = "image-slider";
    
    // Create navigation arrows
    const leftArrow = document.createElement("button");
    leftArrow.className = "arrow left-arrow";
    leftArrow.innerHTML = "&#8592;"; // Left arrow
    
    const rightArrow = document.createElement("button");
    rightArrow.className = "arrow right-arrow";
    rightArrow.innerHTML = "&#8594;"; // Right arrow
    
    // Append arrows to the slider container
    imageSlider.appendChild(leftArrow);
    imageSlider.appendChild(rightArrow);
    
    // Pagination dots container
    const paginationDots = document.createElement("div");
    paginationDots.className = "pagination-dots";
    
    // Generate pagination dots dynamically
    images.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index; // Set index for reference
      paginationDots.appendChild(dot);
    });
    
    // Create the thumbnail slider container
    const thumbnailSlider = document.createElement("div");
    thumbnailSlider.className = "thumbnail-slider";
    
    const thumbnailsContainer = document.createElement("div");
    thumbnailsContainer.className = "thumbnails";
    
    // Generate thumbnails dynamically
    images.forEach((imgSrc, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.className = "thumbnail";
      if (index === 0) thumbnail.classList.add("active"); // Set first thumbnail as active
      thumbnail.src = imgSrc;
      thumbnail.alt = `Thumbnail ${index + 1}`;
      thumbnail.dataset.index = index;
      thumbnailsContainer.appendChild(thumbnail);
    });
    
    thumbnailSlider.appendChild(thumbnailsContainer);
    
    // Append sliders and pagination to the main container
    container.appendChild(imageSlider);
    container.appendChild(thumbnailSlider);
    container.appendChild(paginationDots);
    
    // Add functionality
    let currentIndex = 0;
    
    // Update Main Image
    function updateMainImage(index) {
      currentIndex = index;
      mainImage.src = images[index];
    
      // Update Active Thumbnail
      document.querySelectorAll(".thumbnail").forEach((thumb) => {
        thumb.classList.remove("active");
      });
      thumbnailsContainer.querySelector(`.thumbnail[data-index='${index}']`).classList.add("active");
    
      // Update Active Pagination Dot
      document.querySelectorAll(".dot").forEach((dot) => {
        dot.classList.remove("active");
      });
      paginationDots.querySelector(`.dot[data-index='${index}']`).classList.add("active");
    }
    
    // Thumbnail Click Event
    thumbnailsContainer.querySelectorAll(".thumbnail").forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const index = parseInt(thumbnail.dataset.index);
        updateMainImage(index);
      });
    });
    
    // Pagination Dot Click Event
    paginationDots.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        updateMainImage(index);
      });
    });
    
    // Arrow Navigation
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop backward
      updateMainImage(currentIndex);
    });
    
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Loop forward
      updateMainImage(currentIndex);
    });
    

  };

  waitForElement(".pwzrjss1").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
