(() => {
    "use strict";
    const testInfo = {
      className: "home-hero-test",
      debug: 0,
      testName: "Home Hero Layout",
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
      
        const themeWhiteElement = document.querySelector(".theme-white");
      
        if (themeWhiteElement) {
          themeWhiteElement.innerHTML = `
            <div class="main-container">
              <!-- Left Text Section -->
              <div class="text-section">
                <h1>Great Sound For All</h1>
                <p>Award-winning American HiFi since 1972</p>
              </div>
              <!-- Product Cards Section -->
              <div class="cards-container">
                <!-- Card 1 -->
                <div class="card">
                  <div class="card-content">
                    <p class="description">Sound Bar</p>
                    <h2>Magnifi Mini AX</h2>
                    <p class="price">ONLY $499</p>
                  </div>
                  <img src="https://shorturl.at/wXcbO" alt="Magnifi Mini AX">
                </div>
                <!-- Card 2 -->
                <div class="card">
                  <div class="card-content">
                    <p class="description">Mid-Range Speaker</p>
                    <h2>Monitor XT</h2>
                    <p class="price">FROM $649</p>
                  </div>
                  <img src="https://shorturl.at/kSxmF" alt="Monitor XT">
                </div>
                <!-- Card 3 -->
                <div class="card">
                  <div class="card-content">
                    <p class="description">High-Fidelity Top Pick</p>
                    <h2>Signature Elite</h2>
                    <p class="price">FROM $899</p>
                  </div>
                  <img src="https://shorturl.at/3RsNl" alt="Signature Elite">
                </div>
              </div>
            </div>
          `;
        
     
      
  }
      
  
    };
    waitForElement(".mainbanner-full").then(() => {
      console.log("<-- Test Name:", testInfo.testName, "Load -->");
      loadTest();
    });
  })();
  