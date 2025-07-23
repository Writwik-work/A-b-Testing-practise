(() => {
  "use strict";

  const testInfo = {
    className: "bonker-002-test",
    debug: 0,
    testName: "BONKER-002-PDP",
    testVersion: "0.0.2",
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
      Colour: "",
      Waist: ""
    };

    const pdText = document.body.innerText;

    const regexMap = {
      Composition: /Composition:\s*(.+)/i,
      GSM: /GSM:\s*(\d+)/i,
      Colour: /Colou?r:\s*(.+)/i,
      Neckline: /Neckline:\s*(.+)/i,
      Neck: /Neck:\s*(.+)/i,
      "Sleeve Length": /Sleeve length:\s*(.+)/i,
      Sleeves: /Sleeves:\s*(.+)/i,
      Fit: /Fit:\s*(.+)/i,
      Waist: /Waist:\s*(.+)/i
    };

    // fallback logic
    details.Neckline =
      (pdText.match(regexMap.Neckline) || pdText.match(regexMap.Neck) || [])[1]?.trim() || "";

    details["Sleeve Length"] =
      (pdText.match(regexMap["Sleeve Length"]) || pdText.match(regexMap.Sleeves) || [])[1]?.trim() || "";

    details.Composition = (pdText.match(regexMap.Composition) || [])[1]?.trim() || "";
    details.GSM = (pdText.match(regexMap.GSM) || [])[1]?.trim() || "";
    details.Colour = (pdText.match(regexMap.Colour) || [])[1]?.trim() || "";
    details.Fit = (pdText.match(regexMap.Fit) || [])[1]?.trim() || "";
    details.Waist = (pdText.match(regexMap.Waist) || [])[1]?.trim() || "";

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
        ${details.Neckline ? `<div class="highlight-pair"><span>Neck</span><strong>${details.Neckline}</strong></div>` : ''}
        ${details.GSM ? `<div class="highlight-pair"><span>GSM</span><strong>${details.GSM}</strong></div>` : ''}
        ${details["Sleeve Length"] ? `<div class="highlight-pair"><span>Sleeve</span><strong>${details["Sleeve Length"]}</strong></div>` : ''}
        ${details.Colour ? `<div class="highlight-pair"><span>Colour</span><strong>${details.Colour}</strong></div>` : ''}
        ${details.Waist ? `<div class="highlight-pair"><span>Waist</span><strong>${details.Waist}</strong></div>` : ''}
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
