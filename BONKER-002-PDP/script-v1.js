(() => {
  "use strict";

  const testInfo = {
    className: "bonker-002-test",
    debug: 0,
    testName: "BONKER-002-PDP",
    testVersion: "0.0.1",
    pagePath: window.location.pathname,
    pageURL: window.location.href,
    imgBaseURL: "",
  };

  function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        callback(el);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function extractProductDetails() {
    const details = {
      Fit: "",
      Neckline: "",
      "Sleeve Length": "",
      Composition: "",
      GSM: "",
      Colour: ""
    };

    // Entire page text content
    const pdText = document.body.innerText;

    // Pull values from paragraph-like layout
    const regexMap = {
      Composition: /Composition:\s*(.+)/i,
      GSM: /GSM:\s*(\d+)/i,
      Colour: /Colou?r:\s*(.+)/i,
      Neckline: /Neckline:\s*(.+)/i,
      "Sleeve Length": /Sleeve length:\s*(.+)/i,
      Fit: /Fit:\s*(.+)/i,
    };

    for (const key in regexMap) {
      const match = pdText.match(regexMap[key]);
      if (match) details[key] = match[1].trim();
    }

    return details;
  }

  function createOverlay(details) {
    if (document.querySelector(".style-highlights-box")) return;

    const box = document.createElement("div");
    box.className = "style-highlights-box";
    box.innerHTML = `
      <h3>Style Highlights</h3>
      <div class="style-highlights-divider"></div>
      <div class="highlights-grid">
        ${details.Fit ? `<div class="highlight-pair"><span>Fit</span><strong>${details.Fit}</strong></div>` : ''}
        ${details.Composition ? `<div class="highlight-pair"><span>Composition</span><strong>${details.Composition}</strong></div>` : ''}
        ${details.Neckline ? `<div class="highlight-pair"><span>Neckline</span><strong>${details.Neckline}</strong></div>` : ''}
        ${details.GSM ? `<div class="highlight-pair"><span>GSM</span><strong>${details.GSM}</strong></div>` : ''}
        ${details["Sleeve Length"] ? `<div class="highlight-pair"><span>Sleeve Length</span><strong>${details["Sleeve Length"]}</strong></div>` : ''}
        ${details.Colour ? `<div class="highlight-pair"><span>Colour</span><strong>${details.Colour}</strong></div>` : ''}
      </div>
    `;

    const targetDiv = document.querySelector("#Media-Thumbnails-template--17299731841124__main-product-45493207040364");
    if (targetDiv) {
      targetDiv.style.position = "relative";
      targetDiv.appendChild(box);
    }
  }

  waitForElement("#Media-Thumbnails-template--17299731841124__main-product-45493207040364", () => {
    const details = extractProductDetails();
    createOverlay(details);
  });
})();
