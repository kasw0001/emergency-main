
// const openBtn = document.querySelector(".news_card:first-child .cta_btn");
// const closeBtn = document.querySelector(".news_card:first-child dialog button");
// const dialog = document.querySelector(".news_card:first-child dialog");

// openBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     dialog.showModal();
//   });
  
//   closeBtn.addEventListener("click", function () {
//     dialog.close();
//   });

const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");
const dialog1 = document.querySelector("#dialog1");

open1.addEventListener("click", function (e) {
  e.preventDefault();
  dialog1.showModal();
});

close1.addEventListener("click", function () {
  dialog1.close();
});

// Artikel 2
const open2 = document.querySelector("#open2");
const close2 = document.querySelector("#close2");
const dialog2 = document.querySelector("#dialog2");

open2.addEventListener("click", function (e) {
  e.preventDefault();
  dialog2.showModal();
});

close2.addEventListener("click", function () {
  dialog2.close();
});

// Artikel 3
const open3 = document.querySelector("#open3");
const close3 = document.querySelector("#close3");
const dialog3 = document.querySelector("#dialog3");

open3.addEventListener("click", function (e) {
  e.preventDefault();
  dialog3.showModal();
});

close3.addEventListener("click", function () {
  dialog3.close();
});


// For alle
// const articles = document.querySelectorAll(".news_card");

// articles.forEach(article => {
//   const openBtn = article.querySelector(".cta_btn");
//   const dialog = article.querySelector("dialog");
//   const closeBtn = article.querySelector(".close-dialog");

//   // Åbn dialog ved klik på knappen
//   openBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     dialog.showModal();
//   });

//   // Luk dialog ved klik på Luk-knappen
//   closeBtn.addEventListener("click", function () {
//     dialog.close();
//   });
// });