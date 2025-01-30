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
                  <img src="https://s3-alpha-sig.figma.com/img/c6c1/aae1/bcf0bff89791233e83fb201b7ab9d137?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqqTzHjvvV-hNO7y~MM7Y6HgsY-3JhuadP5eFzPneU2-ofB2pIhgUnoMpUiLBDQp39n7uHdnhc2fQxbck02NsJ3RoowWIQ1RDloZy3uHK6UFWixp4w2m27-VfY-5frHak8EcLyvIhvFE~WhapjaGxh5VgzIEMZ2w7MRjWXLAKT98uUlOHO9R~t8WrJ7VCNypNX2aM7eCYcc9dxAcD~cgMT5ntwqOxfpZxzymBxLiW-KIGHt1AxRPRebxfvd5X0IrrcHdcjwieLoyPtC-rFTFktBLJgmlKnb5Mnrv2-n-aZNKZzwacJp9fFZgIea9ePxpDCFR7GxpETjtYcCByLRQvw__" alt="Magnifi Mini AX">
                </div>
                <!-- Card 2 -->
                <div class="card">
                  <div class="card-content">
                    <p class="description">Mid-Range Speaker</p>
                    <h2>Monitor XT</h2>
                    <p class="price">FROM $649</p>
                  </div>
                  <img src="https://s3-alpha-sig.figma.com/img/d854/b5bb/af4362927e68cd81a70a74d0cdfc4701?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daorxFfhg0sp3LbVtRfPBNc1eadW5YBr6w6XgFNnMirGoPRU187q4ay7PiS9M3Ezo~HOHOq6OvDnhCdk4HkQ5AVxzGIG0IsnHSRWjym3ga4TG6xspRgOCLH343YR4GZWMA9WS459ShiN~Fy3lv~s-StWNyDbHOzRPY4Ot4C8hMO0kdTkEkBDjZGVJtW4AyAllqWE19ZZAHMiatZqnqhXtYNvTEzj4lSSMII3hqMuLl2IL01jatMBjBwElIo98Rq-f9lKECiqqQTMbImvwtQsJJbonMmO0tX7SgWKRuAMyNv4U3U6Gx0QdGx~5TB7u1R0FrrUeUthCItfB-q40x0~Eg__" alt="Monitor XT">
                </div>
                <!-- Card 3 -->
                <div class="card">
                  <div class="card-content">
                    <p class="description">High-Fidelity Top Pick</p>
                    <h2>Signature Elite</h2>
                    <p class="price">FROM $899</p>
                  </div>
                  <img src="https://s3-alpha-sig.figma.com/img/2e21/2276/689ccd3b0917c632505c7a0b512fafa6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZ5ZLRj62Zqs6fTAObONVRP8Rujdf~p0pArzxDHuRS1Euk8WrkpB1aN3mpe~nSsQAPGSC7OvFmby9Mf6sSQZ0ZXmdFfrkv~oBiI6SH0WPpVeMBjrKkvofdIVQSzwjLcSJlvJo9BrUo8emye9ItGGYgIyhqoXSIojf-MpGLM8cSlIchDnK~dGN9avneB8I4YiwkEHwqNruvHE1U1woSCPFogoYz1BcNPLpOJ2HzP0dGfLFUHXWSFa1nOhABEq9BvtsB0Vd4E3w1hOAVKHZcmg0pMUMtcNSlmeotz7YeTRebndCipkD~A65qMQGH72UuIHMABj7EVPslsNS0fixm8w9Q__" alt="Signature Elite">
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
