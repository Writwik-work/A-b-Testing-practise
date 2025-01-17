 // Add adjacent HTML for the navigation bar
 const navbarHTML = `
 <div class="issue-head">
   <a href="#how-it-works" class="nav-link">How It Works?</a>
   <a href="#why-ruff-greens" class="nav-link">Why Ruff Greens</a>
   <a href="#benefits" class="nav-link">Benefits</a>
 </div>
`;
bodyEle.insertAdjacentHTML("afterbegin", navbarHTML);

// Add adjacent HTML for the sections
const sectionsHTML = `
 <section id="hero">
   <h1>Welcome to Ruff Greens</h1>
 </section>

 <section id="how-it-works">
   <h2>How It Works</h2>
   <p>Details about how the product works...</p>
 </section>

 <section id="why-ruff-greens">
   <h2>Why Ruff Greens</h2>
   <p>Reasons to choose Ruff Greens...</p>
 </section>

 <section id="benefits">
   <h2>Benefits</h2>
   <p>Benefits of using Ruff Greens...</p>
 </section>
`;
bodyEle.insertAdjacentHTML("beforeend", sectionsHTML);

// Get references to the navbar, sections, and links
const navbar = document.querySelector(".issue-head");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Show navbar when scrolling past the hero section
window.addEventListener("scroll", () => {
 const heroBottom = document
   .getElementById("hero")
   .getBoundingClientRect().bottom;
 if (heroBottom < 0) {
   navbar.classList.add("show");
 } else {
   navbar.classList.remove("show");
 }

 // Highlight active section in the navbar
 sections.forEach((section, index) => {
   const rect = section.getBoundingClientRect();
   if (
     rect.top <= window.innerHeight / 2 &&
     rect.bottom >= window.innerHeight / 2
   ) {
     navLinks.forEach((link) => link.classList.remove("active"));
     navLinks[index].classList.add("active");
   }
 });
});

// Smooth scroll to sections
navLinks.forEach((link, index) => {
 link.addEventListener("click", (e) => {
   e.preventDefault();
   sections[index].scrollIntoView({ behavior: "smooth" });
 });
});