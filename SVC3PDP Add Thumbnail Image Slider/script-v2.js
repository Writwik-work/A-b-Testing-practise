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
    
      // Create the main image slider container
      const imageSlider = document.createElement("div");
      imageSlider.className = "image-slider";
    
      const leftArrow = document.createElement("button");
      leftArrow.className = "arrow left-arrow";
      leftArrow.innerHTML = "&#8592;";
    
      const rightArrow = document.createElement("button");
      rightArrow.className = "arrow right-arrow";
      rightArrow.innerHTML = "&#8594;";
    
      // Add the arrows to the slider container
      imageSlider.appendChild(leftArrow);
      imageSlider.appendChild(rightArrow);
    
      // Create the thumbnail slider
      const thumbnailSlider = document.createElement("div");
      thumbnailSlider.className = "thumbnail-slider";
    
      const thumbnailsContainer = document.createElement("div");
      thumbnailsContainer.className = "thumbnails";
    
      // Generate thumbnails dynamically
      images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.className = "thumbnail";
        if (index === 0) thumbnail.classList.add("active"); // Set the first thumbnail as active
        thumbnail.src = imgSrc;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnailsContainer.appendChild(thumbnail);
      });
    
      thumbnailSlider.appendChild(thumbnailsContainer);
    
      // Append everything to the main container
      const container = document.getElementById("pwzrswiper-container-wrapper");
      container.appendChild(imageSlider);
      container.appendChild(thumbnailSlider);
    
      // Add functionality
      const thumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");
      let currentIndex = 0;
    
      // Change Main Image on Thumbnail Click
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
          // Update Main Image
          mainImage.src = thumbnail.src;
    
          // Update Active Thumbnail
          thumbnails.forEach((thumb) => thumb.classList.remove("active"));
          thumbnail.classList.add("active");
    
          // Update Index
          currentIndex = index;
        });
      });
    
      // Scroll Thumbnails on Arrow Click
      leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          mainImage.src = images[currentIndex];
          updateActiveThumbnail(currentIndex);
        }
      });
    
      rightArrow.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
          currentIndex++;
          mainImage.src = images[currentIndex];
          updateActiveThumbnail(currentIndex);
        }
      });
    
      // Helper Function to Update Active Thumbnail
      function updateActiveThumbnail(index) {
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        thumbnails[index].classList.add("active");
      }
      
  };
  
    waitForElement("").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  