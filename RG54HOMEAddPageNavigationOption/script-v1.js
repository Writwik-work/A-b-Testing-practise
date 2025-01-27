(() => {
  "use strict";
  const testInfo = {
    className: "rg-54-test",
    debug: 0,
    testName: "RG54: [HOME] Add Page Navigation Option",
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

 // Get reference to the #issues-header section
const issuesHeader = document.querySelector("#issues-header");

// Add the adjacent HTML for the navigation bar
const navbarHTML = `
  <nav class="dynamic-navbar">
    <ul class="nav-links">
      <li><a href="#dosing" class="nav-link">How It Works?</a></li>
      <li><a href="#index-top" class="nav-link">Why Ruff Greens</a></li>
      <li><a href="#dw-benefits" class="nav-link">Benefits</a></li>
      <li><a href="#ingredients-new" class="nav-link">Ingredients</a></li>
      <li><a href="#bc-free-free-reviews" class="nav-link">Reviews</a></li>
      <li><a href="#faqs" class="nav-link">Frequently Asked Questions</a></li>
    </ul>
  </nav>
`;

// Insert the navigation bar into the #issues-header
issuesHeader.insertAdjacentHTML("beforeend", navbarHTML);

// Add smooth scroll functionality to navigation links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // Remove the "#" symbol
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight the active section in the navbar on scroll
const sectionIds = ["dosing","index-top", "dw-benefits", "ingredients-new", "bc-free-free-reviews", "faqs"];
const sections = sectionIds.map((id) => document.getElementById(id));

window.addEventListener("scroll", () => {
  sections.forEach((section, index) => {
    if (section) {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    }
  });
});


   
  };

  waitForElement("#shopify-section-new-header").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
