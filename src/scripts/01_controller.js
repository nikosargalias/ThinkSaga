import { generateId, createArticle, saveImgData } from "./02_logic.js";
import { loadFromLocalStorage } from "./localStorage.js";
import { renderArticlesHomePage } from "./03_view_homePage.js";
import { renderArticle } from "./04_view_articlePage.js";

const articles = loadFromLocalStorage("articles") || {};
const articleImages = loadFromLocalStorage("images") || {};
const articlesContainer = document.getElementById("articles-container");

const pages = {
  homePage: "/src/index-copy.html",
  uploadArticlePage: "/src/upload-article.html",
  singleArticlePage: "/src/article.html",
};

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname == pages.homePage) {
    renderArticlesHomePage({
      articles,
      articleImages,
      articlesContainer,
    });
  }

  if (window.location.pathname == pages.uploadArticlePage) {
    const form = document
      .querySelector("#submit-article")
      .addEventListener("submit", submitArticleForm);

    function submitArticleForm(e) {
      e.preventDefault();
      const id = generateId();
      createArticle(e.target.elements, id);
      saveImgData(id);
      window.location.assign(`./article.html#${id}`);
    }
  }

  console.log(window.location.pathname == pages.singleArticlePage);
  if (window.location.pathname == pages.singleArticlePage) {
    const id = window.location.hash.substring(1);
    const article = articles[id];
    const image = articleImages[id];
    renderArticle(article, image);
  }
});
