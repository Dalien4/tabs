"use strict";

const historyTab = document.querySelector("#history-tab");
const historyContent = document.querySelector("#history-tab-content");
const visionTab = document.querySelector("#vision-tab");
const visionContent = document.querySelector("#vision-tab-content");
const goalsTab = document.querySelector("#goals-tab");
const goalsContent = document.querySelector("#goals-tab-content");

historyTab.addEventListener("click", function () {
  let tabs = document.querySelectorAll(".tab__link");
  let links = [...tabs];
  tabs = document.querySelectorAll(".tab__content");
  let contents = [...tabs];
  const link = links.find((element) =>
    element.classList.contains("tab__link--active")
  );
  const content = contents.find((element) =>
    element.classList.contains("tab__content--active")
  );
  link.classList.remove("tab__link--active");
  content.classList.remove("tab__content--active");
  this.classList.add("tab__link--active");
  historyContent.classList.add("tab__content--active");
});

visionTab.addEventListener("click", function () {
  let tabs = document.querySelectorAll(".tab__link");
  let links = [...tabs];
  tabs = document.querySelectorAll(".tab__content");
  let contents = [...tabs];
  const link = links.find((element) =>
    element.classList.contains("tab__link--active")
  );
  const content = contents.find((element) =>
    element.classList.contains("tab__content--active")
  );
  link.classList.remove("tab__link--active");
  content.classList.remove("tab__content--active");
  this.classList.add("tab__link--active");
  visionContent.classList.add("tab__content--active");
});

goalsTab.addEventListener("click", function () {
  let tabs = document.querySelectorAll(".tab__link");
  let links = [...tabs];
  tabs = document.querySelectorAll(".tab__content");
  let contents = [...tabs];
  const link = links.find((element) =>
    element.classList.contains("tab__link--active")
  );
  const content = contents.find((element) =>
    element.classList.contains("tab__content--active")
  );
  link.classList.remove("tab__link--active");
  content.classList.remove("tab__content--active");
  this.classList.add("tab__link--active");
  goalsContent.classList.add("tab__content--active");
});
