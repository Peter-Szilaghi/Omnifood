///////////////////////////////////////////////////////////
// Mobile Navigation
const mainHeader = document.querySelector(".main-header");

const navBtn = document.querySelector(".btn-nav-mobile");
navBtn.addEventListener("click", () => {
  mainHeader.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Set current year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = `2020 - ${currentYear}`;

///////////////////////////////////////////////////////////
// Smoth animation on Safary
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.prventDefault;
    const href = link.getAttribute("href");

    // Scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Remove nav
    if (link.classList.contains("main-nav-link")) {
      mainHeader.classList.toggle("nav-open");
    }
  });
});
///////////////////////////////////////////////////////////
// Sticky navbar
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
