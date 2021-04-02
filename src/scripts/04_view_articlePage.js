// import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage.js";
// const articles = loadFromLocalStorage("articles") || {};
// const articleImages = loadFromLocalStorage("images") || {};

// window.addEventListener("DOMContentLoaded", () => {
//   const articleId = location.hash.substring(1);
//   const image = articleImages[articleId];
//   renderArticle(articleId);

function renderArticle(article, image) {
  const articleImgElem = document.getElementById("article-img");
  const titleElem = document.querySelector("#title");
  const authorElem = document.querySelector("#author");
  const bodyElem = document.querySelector("#body");
  const categoryElem = document.querySelector("#category");
  titleElem.innerHTML = article.title;
  authorElem.innerHTML = article.author;
  bodyElem.innerHTML = article.body;
  categoryElem.innerHTML = article.category;
  articleImgElem.src = image.imgData;
}
// });

export { renderArticle };
