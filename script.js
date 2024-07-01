"use strict";

// Elements
const slackname = document.querySelector("[data-testid='slackDisplayName']");
const imgEl = document.querySelector("[data-testid='slackProfilePicture']");
const timeEl = document.querySelector("[data-testid='currentTimeUTC']");
const dayEl = document.querySelector("[data-testid='currentDay']");
const dateEl = document.querySelector("[data-testid='rest__date']");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const nav = document.querySelector(".nav");
const headerEl = document.querySelector("header");
const allSections = document.querySelectorAll(".section");
const goalsList = document.querySelector(".goals__list");

const now = new Date();
const day = now.getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const date = now.getDate();
const month = now.getMonth();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const year = now.getFullYear();

let UTCtime = now.getTime();

// Functions
const handleHover = function (e, opacity) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest("nav").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
    slackname.style.opacity = this;
  }
};

// Set Time
const setTime = function () {
  setInterval(function () {
    UTCtime++;
    timeEl.textContent = UTCtime;
    dayEl.textContent = days[day];
    dateEl.textContent = `${date} ${months[month + 1]}, ${year}`;
  }, 1);
};
setTime();

// Event Handlers
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView();
  }
});

goalsList.addEventListener("click", function (e) {
  if (e.target.classList.contains("goal__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView();
  }
});
document
  .querySelector(".nav__links")
  .addEventListener("mouseover", handleHover.bind(0.5));

document
  .querySelector(".nav__links")
  .addEventListener("mouseout", handleHover.bind(1));

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#section--1").scrollIntoView();
});

// Sticky Navbar
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerOberserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerOberserver.observe(headerEl);

// GOALS OUTLINED
goalsList.querySelectorAll(".section__header").forEach((a, i) => {
  if (i % 2 === 0) {
    a.style.transform = `translateX(10%)`;
  } else a.style.transform = `translateX(-15%)`;
});

// Section Reveal
/* const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: "40px",
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
}); */
