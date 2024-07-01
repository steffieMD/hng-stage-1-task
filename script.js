"use strict";

// Elements
const slackname = document.querySelector("[data-testid='slackDisplayName']");
const imgEl = document.querySelector("[data-testid='slackProfilePicture']");
const timeEl = document.querySelector("[data-testid='currentTimeUTC']");
const dayEl = document.querySelector("[data-testid='currentDay']");
const dateEl = document.querySelector("[data-testid='rest__date']");

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

// let utcTime = Date.UTC(year, month, day);
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

//   Natural Image Dimensions
const realImgSize = function () {
  const realHeight = imgEl.naturalHeight;
  const realWidth = imgEl.naturalWidth;
  console.log(realHeight, realWidth);
};
realImgSize();

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

document
  .querySelector(".nav__links")
  .addEventListener("mouseover", handleHover.bind(0.5));

document
  .querySelector(".nav__links")
  .addEventListener("mouseout", handleHover.bind(1));
