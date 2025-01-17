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
 // Add adjacent HTML for the navigation bar
 const navbarHTML = `
 <div class="issue-head">
   <a href="#dosing" class="nav-link">How It Works?</a>
   <a href="#dw-benefits" class="nav-link">Benefits</a>
   <a href="#ingredients-new" class="nav-link">Ingredients</a>
   <a href="#bc-free-free-reviews" class="nav-link">Reviews</a>
   <a href="#faqs" class="nav-link">FAQs</a>
 </div>
`;
bodyEle.insertAdjacentHTML("afterbegin", navbarHTML);

// Get references to the navbar, links, and the corresponding sections
const navbar = document.querySelector(".issue-head");
const navLinks = document.querySelectorAll(".nav-link");

// Add smooth scroll functionality to navigation links
navLinks.forEach((link) => {
 link.addEventListener("click", (e) => {
   e.preventDefault();
   const targetId = link.getAttribute("href").substring(1); // Get the ID without the "#"
   const targetSection = document.getElementById(targetId);
   if (targetSection) {
     targetSection.scrollIntoView({ behavior: "smooth" });
   }
 });
});

// Highlight active section in the navbar on scroll
const sectionIds = ["dosing", "dw-benefits", "ingredients-new", "reviews", "faqs"];
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

  waitForElement("#issues-header").then(() => {
    console.log("<-- Test Name:", testInfo.testName, "Load -->");
    loadTest();
  });
})();
